---
title: Transform UDF extension
sidebar_position: 3
---

# Basic Concepts
The following are some basic concepts that need to be understood during the development process:
- Transform SQL functions, including arithmetic functions (such as abs, power), time functions (such as localtime, date_format), string functions (such as locate, translate), etc. Functions generally have one or more parameters, and their function is to perform some transformation operation on the input data, and then output the transformed result.
- Transform SQL parser, there are mainly two types of parsers, one is the parser class for type, which is used to convert the original data into the corresponding type object, such as DateParser can convert the input data into a Date object in Java, which is convenient for further conversion operations; The other is the parser class for calculation expressions, which is used to perform certain calculation operations on the converted original data and output the calculation result (similar to a function), such as AdditionParser can parse the part like a + b in SQL statements and output the corresponding result.
- Transform SQL operators, mainly some logical operators, such as (and, or, not), etc., to implement some logical judgment operations, and the output result is a Boolean value.

# Function Development
This section introduces how to expand a new function.

##  Create Function Class File
The function implementation class is stored in this [directory](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function). After determining the function you want to expand, create a new class in this directory, and the class name consists of function name + Function, such as AbsFunction.

## Basic Code Framework Construction

After creating the class, build the basic framework of the code, taking AbsFunction as an example:
```java
/**
 * AbsFunction
 * description: abs(numeric)--returns the absolute value of numeric
 */
@TransformFunction(names = {"abs"})
public class AbsFunction implements ValueParser {

    @Override
    public Object parse(SourceData sourceData, int rowIndex, Context context) {
        
    }
}
```

Add corresponding class comments and @TransformFunction annotation for the function. The function needs to implement the ValueParser interface and override the parse method in the interface.

## Add Constructor and ValueParser Object

Add a parameterized constructor and related ValueParser member variables to the function. In the constructor, parse the function expression and initialize the parameter parser object. Taking AbsFunction as an example:

```java
private ValueParser numberParser;

public AbsFunction(Function expr) {
	numberParser = OperatorTools.buildParser(expr.getParameters().getExpressions().get(0));
}
```

The number of ValueParser objects is the same as the number of function parameters.

## Function Implement

Override the parse method, parse the parameters and implement the function logic, and calculate the function return value. Taking AbsFunction as an example:

```java
@Override
public Object parse(SourceData sourceData, int rowIndex, Context context) {
	Object numberObj = numberParser.parse(sourceData, rowIndex, context);
	BigDecimal numberValue = OperatorTools.parseBigDecimal(numberObj);
	return numberValue.abs();
}
```

## Add Unit Test Code

Each function needs to pass unit tests to verify whether the function logic is correct. The unit test class is located in this directory. All unit test functions for each function are placed in the same unit test class, and the unit test class is named in the format of Test + function name + Function, taking testAbsFunction() as an example:

```java
@Test
public void testAbsFunction() throws Exception {
	String transformSql = "select abs(numeric1) from source";
	TransformConfig config = new TransformConfig(transformSql);
	// case1: |2|
	TransformProcessor<String, String> processor = TransformProcessor
			.create(config, SourceDecoderFactory.createCsvDecoder(csvSource),
					SinkEncoderFactory.createKvEncoder(kvSink));
	List<String> output1 = processor.transform("2|4|6|8", new HashMap<>());
	Assert.assertEquals(1, output1.size());
	Assert.assertEquals(output1.get(0), "result=2");
	// case2: |-4.25|
	List<String> output2 = processor.transform("-4.25|4|6|8", new HashMap<>());
	Assert.assertEquals(1, output2.size());
	Assert.assertEquals(output2.get(0), "result=4.25");
}
```

After the above steps, congratulations on completing the implementation of a new function, and you can submit your code to the community. The complete code of AbsFunction can be seen at [code link](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function/AbsFunction.java)

Here are some precautions:

- Some function parameters can be NULL. Pay attention to the parsing logic for NULL objects in the parse function to prevent NullPointerException.
- The function name in the @TransformFunction annotation can have multiple names, as long as it follows the naming conventions of various databases.
- Some functions have a variable number of parameters. Be careful to prevent IndexOutOfBoundsException when constructing ValueParser.
- Please cover as many situations as possible in unit tests, such as using different numbers of parameters, setting parameters to NULL, etc., to ensure that the function can output correct results under different circumstances.

# Parser Development

This section introduces how to expand a new parser class.

## Create Parser Class File
Parsers are stored in this [directory](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser). After determining the parser you want to expand, create a new class in this directory, and the class name consists of type + Parser, such as AdditionParser.

## Basic Code Framework Construction

After creating the class, build the basic framework of the code, taking AdditionParser as an example:
```java
/**
 * description: calcute a + b
 */
@TransformParser(values = Addition.class)
public class AdditionParser implements ValueParser {

    @Override
    public Object parse(SourceData sourceData, int rowIndex, Context context) {
    }
}
```

Add the corresponding @TransformParser annotation to the parser class. Type parser classes need to implement the ValueParser interface and override the parse method in the interface.

## Add Constructor and Member Variables

Add a parameterized constructor and related member variables to the parser class. In the constructor, parse the input expression and convert it into the corresponding type object. Taking AdditionParser as an example:

```java
private final ValueParser left;

private final ValueParser right;

public AdditionParser(Addition expr) {
    this.left = OperatorTools.buildParser(expr.getLeftExpression());
    this.right = OperatorTools.buildParser(expr.getRightExpression());
}
```

## Parsing Implement 

Override the parse method. If the parser needs to perform further processing on the type object parsed in the previous step, you can implement the corresponding processing logic in this method. Otherwise, just return the type object parsed in the previous step directly. Taking AdditionParser as an example:

```java
@Override
public Object parse(SourceData sourceData, int rowIndex, Context context) {
    if (this.left instanceof IntervalParser && this.right instanceof IntervalParser) {
        return null;
    } else if (this.left instanceof IntervalParser || this.right instanceof IntervalParser) {
        IntervalParser intervalParser = null;
        ValueParser dateParser = null;
        if (this.left instanceof IntervalParser) {
            intervalParser = (IntervalParser) this.left;
            dateParser = this.right;
        } else {
            intervalParser = (IntervalParser) this.right;
             dateParser = this.left;
        }
        Object intervalPairObj = intervalParser.parse(sourceData, rowIndex, context);
        Object dateObj = dateParser.parse(sourceData, rowIndex, context);
        if (intervalPairObj == null || dateObj == null) {
            return null;
        }
        return DateUtil.dateAdd(OperatorTools.parseString(dateObj),
            (Pair<Integer, Map<ChronoField, Long>>) intervalPairObj, 1);
    } else {
        return numericalOperation(sourceData, rowIndex, context);
    }
}
```

## Add Unit Test Code
Each parser class needs to pass unit tests to verify whether the logic is correct. The unit test class is located in this directory. All unit test functions for each parser are placed in the same unit test class, and the unit test class is named in the format of Test + Parser Name + Parser, taking TestAdditionParser as an example:

```java
@Test
public void testAdditionParser() throws Exception {
    String transformSql = null;
    TransformConfig config = null;
    TransformProcessor<String, String> processor = null;
    List<String> output = null;

    transformSql = "select numeric1 + numeric2 from source";
    config = new TransformConfig(transformSql);
    processor = TransformProcessor
        .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),
            SinkEncoderFactory.createKvEncoder(kvSink));
    // case1: 1 + 10
    output = processor.transform("1|10||||", new HashMap<>());
    Assert.assertEquals(1, output.size());
    Assert.assertEquals("result=11", output.get(0));
}
```

After the above steps, congratulations on completing the implementation of a new parser class, and you can submit your code to the community. The complete code of AdditionParser can be seen at [code link](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser/AdditionParser.java)

# Logic Operator Development Specification

This section introduces how to expand a new logical operator class.

## Create Logical Operator Class File
Logical operator classes are stored in this [directory](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator). After determining the logical operator you want to expand, create a new class in this directory, and the class name consists of logical operator name + Parser, such as AndOperator.

## Basic Code Framework Construction

After creating the class, build the basic framework of the code, taking AndOperator as an example:
```java
@TransformOperator(values = AndExpression.class)
public class AndOperator implements ExpressionOperator {

    @Override
    public boolean check(SourceData sourceData, int rowIndex, Context context) {}
}
```
Add the corresponding @TransformOperator annotation to the logical operator class. The operator class needs to implement the ExpressionOperator interface and override the check method in the interface.

## Add Constructor and Member Variables

Add a parameterized constructor and related member variables to the class. In the constructor, parse the input expression and construct the objects needed for the judgment logic in the check method. Taking AndOperator as an example:

```java
private final ExpressionOperator left;
private final ExpressionOperator right;

public AndOperator(AndExpression expr) {
	this.left = OperatorTools.buildOperator(expr.getLeftExpression());
	this.right = OperatorTools.buildOperator(expr.getRightExpression());
}
```

## Operator Implement 

Override the check method, implement the judgment logic according to the definition of the logical operator and the data parsed in the previous step, and output the judgment result (true or false). Taking AndOperator as an example:

```java
@Override
public boolean check(SourceData sourceData, int rowIndex, Context context) {
	return OperatorTools.compareValue((Comparable) this.left.parse(sourceData, rowIndex, context),
			(Comparable) this.right.parse(sourceData, rowIndex, context)) > 0;
}
```

## Add Unit Test Code
Each logical operator class needs to pass unit tests to verify whether the logic is correct. The unit test class is located in this [directory](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/operator). All unit test functions for each logical operator are placed in the same unit test class, and the unit test class is named in the format of Test + Logical Operator Name + Operator, taking TestAndOperator as an example:
```java
public void testAndOperator() throws Exception {
    String transformSql = "select if((string2 < 4) and (numeric4 > 5),1,0) from source";
    TransformConfig config = new TransformConfig(transformSql);
    
    // case1: "3.14159265358979323846|3a|4|4"
    TransformProcessor<String, String> processor = TransformProcessor
            .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),
                    SinkEncoderFactory.createKvEncoder(kvSink));
    List<String> output1 = processor.transform("3.14159265358979323846|3a|4|4");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output1.get(0), "result=0");
    
    // case2: "3.14159265358979323846|5|4|8"
    List<String> output2 = processor.transform("3.14159265358979323846|5|4|8");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output2.get(0), "result=0");
    
    // case3: "3.14159265358979323846|3|4|8"
    List<String> output3 = processor.transform("3.14159265358979323846|3|4|8");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output3.get(0), "result=1");

    transformSql = "select if((numeric3 < 4) and (numeric4 > 5),1,0) from source";
    config = new TransformConfig(transformSql);
    
    // case4: "3.14159265358979323846|4|4|8"
    processor = TransformProcessor
            .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),
                    SinkEncoderFactory.createKvEncoder(kvSink));
    List<String> output4 = processor.transform("3.14159265358979323846|4|4|8");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output4.get(0), "result=0");
    
    // case5: "3.14159265358979323846|4|3.2|4"
    List<String> output5 = processor.transform("3.14159265358979323846|4|3.2|4");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output5.get(0), "result=0");
    
    // case6: "3.14159265358979323846|4|3.2|8"
    List<String> output6 = processor.transform("3.14159265358979323846|4|3.2|8");
    Assert.assertEquals(1, output1.size());
    Assert.assertEquals(output6.get(0), "result=1");
}
```

After the above steps, congratulations on completing the implementation of a new logical operator class, and you can submit your code to the community. The complete code of AndOperator can be seen at [code link](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator/AndOperator.java)
