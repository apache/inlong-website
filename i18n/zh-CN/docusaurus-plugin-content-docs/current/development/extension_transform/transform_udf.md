---
title: Transform 扩展 UDF
sidebar_position: 1
---

# 基本概念
下面是开发过程中需要了解的一些基本概念：
- Transform SQL 函数，包括算术函数(如 abs , power )，时间函数(如 localtime 、 date_format )，字符串函数(如 locate 、 translate )等，函数一般都有一至多个参数，作用是对输入的数据进行某种转换操作，然后输出转换后的结果。
- Transform SQL 解析器，主要有两类解析器，一种是针对类型的解析器类，作用是将原始数据转换为对应的类型对象，如 DateParser 可以将输入数据转换为 Java 中的 Date 对象，便于实现进一步的转换操作；另一种是针对计算表达式的解析器类，作用是对原始数据转换后再进行一定的计算操作，输出计算结果(类似一种函数)，如 AdditionParser 可以解析 SQL 语句中类似 a + b 的部分，输出相应的输出结果。
- Transform SQL 操作符，主要是一些逻辑操作符，如( and 、 or 、 not )等，实现一些逻辑判断操作，输出结果是一个布尔值。

# 函数开发
该部分介绍了如何拓展一个新的函数。

##  创建函数类文件
函数实现类存放在该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function)下。确定好您想要拓展的函数后，在该目录下新建一个类，类名由 `函数名 + Function` 组成，如 `AbsFunction`。

## 基础代码框架搭建

创建好类后，构建代码的基础框架，以 `AbsFunction` 为例：
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
为函数添加对应的类注释和 `@TransformFunction` 注解，函数需要实现 `ValueParser` 接口，重写该接口中的 `parse` 方法。

## 添加构造函数和 ValueParser 对象

在函数中添加有参构造函数及相关的 `ValueParser` 成员变量，在构造函数中解析函数表达式，初始化参数解析器对象，以 `AbsFunction` 为例：

```java
private ValueParser numberParser;

public AbsFunction(Function expr) {
	numberParser = OperatorTools.buildParser(expr.getParameters().getExpressions().get(0));
}
```

`ValueParser` 对象数量与函数参数个数相同。

## 实现函数逻辑

重写 `parse` 方法，解析参数并实现函数逻辑，计算函数返回值，以 `AbsFunction` 为例：

```java
@Override
public Object parse(SourceData sourceData, int rowIndex, Context context) {
	Object numberObj = numberParser.parse(sourceData, rowIndex, context);
	BigDecimal numberValue = OperatorTools.parseBigDecimal(numberObj);
	return numberValue.abs();
}
```

## 添加单元测试代码

每个函数都需要通过单元测试来验证函数逻辑是否正确，单元测试类位于该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/function)下。每个函数的所有单元测试函数均放在同一个单元测试类中，单元测试类以 `Test + 函数名 + Function` 的格式进行命名，以 `testAbsFunction()` 为例：

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

经过以上步骤，恭喜您完成了一个新函数的实现，可以向社区提交您的代码。`AbsFunction` 完整代码可见 [代码链接](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function/AbsFunction.java)

下面是一些注意事项：

- 部分函数的参数可以为 NULL，在 `parse` 函数中注意对 NULL 对象的解析逻辑，防止出现 `NullPointerException`
- `@TransformFunction` 注解中的函数名可以有多个，只要遵循各类数据库的命名规范即可
- 部分函数的参数个数不固定，在构建 `ValueParser` 的过程中要防止出现 `IndexOutOfBoundsException`
- 单元测试请尽可能覆盖多种情况，如使用不同的参数个数、参数设置为 NULL 等，以确保函数能够在不同情况下都能输出正确结果

# 解析器开发

该部分介绍了如何拓展一个新的解析器类。

## 创建解析器类文件
解析器存放在该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser)下。确定好您想要拓展的解析器后，在该目录下新建一个类，类名由 `类型 + Parser` 组成，如 `AdditionParser`。

## 基础代码框架搭建

创建好类后，构建代码的基础框架，以 `AdditionParser` 为例：
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
为解析器类添加对应的 `@TransformParser` 注解，类型解析器类需要实现 `ValueParser` 接口，重写该接口中的 `parse` 方法。

## 添加构造函数和相关成员变量

在解析器类中添加有参构造函数及相关的成员变量，在构造函数中解析输入的表达式，将其转换为对应的类型对象，以 `AdditionParser` 为例：

```java
private final ValueParser left;

private final ValueParser right;

public AdditionParser(Addition expr) {
    this.left = OperatorTools.buildParser(expr.getLeftExpression());
    this.right = OperatorTools.buildParser(expr.getRightExpression());
}
```

## 实现解析逻辑

重写 `parse` 方法，如果解析器需要对上一步中解析得到的类型对象进行进一步处理，可以在此方法中实现对应的处理逻辑，否则直接返回上一步中解析得到的类型对象即可，以 `AdditionParser` 为例：

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

## 添加单元测试代码
每个解析器类都需要通过单元测试来验证逻辑是否正确，单元测试类位于该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/parser)下。每个解析器的所有单元测试函数均放在同一个单元测试类中，单元测试类以 `Test + 解析器名 + Parser` 的格式进行命名，以 `TestAdditionParser` 为例：

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

经过以上步骤，恭喜您完成了一个新解析器类的实现，可以向社区提交您的代码。`AdditionParser` 完整代码可见 [代码链接](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser/AdditionParser.java)

# 逻辑操作符开发规范

该部分介绍了如何拓展一个新的逻辑操作符类。

## 创建逻辑操作符类文件
逻辑操作符类存放在该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator)下。确定好您想要拓展的逻辑操作符后，在该目录下新建一个类，类名由 `逻辑操作符名 + Parser` 组成，如 `AndOperator` 。

## 基础代码框架搭建

创建好类后，构建代码的基础框架，以 `AndOperator` 为例：
```java
@TransformOperator(values = AndExpression.class)
public class AndOperator implements ExpressionOperator {

    @Override
    public boolean check(SourceData sourceData, int rowIndex, Context context) {}
}
```
为逻辑操作符类添加对应的 `@TransformOperator` 注解，操作符类需要实现 `ExpressionOperator` 接口，重写该接口中的 `check` 方法。

## 添加构造函数和相关成员变量

在类中添加带参数的构造函数及相关的成员变量，在构造函数中解析输入的表达式，将其构建 `check` 方法中判断逻辑所需的对象，以 `AndOperator` 为例：

```java
private final ExpressionOperator left;
private final ExpressionOperator right;

public AndOperator(AndExpression expr) {
	this.left = OperatorTools.buildOperator(expr.getLeftExpression());
	this.right = OperatorTools.buildOperator(expr.getRightExpression());
}
```

## 实现判断逻辑

重写 `check` 方法，根据逻辑操作符的定义与上一步中解析得到的数据实现判断逻辑，输出判断结果(true或者false)，以 `AndOperator` 为例：

```java
@Override
public boolean check(SourceData sourceData, int rowIndex, Context context) {
	return OperatorTools.compareValue((Comparable) this.left.parse(sourceData, rowIndex, context),
			(Comparable) this.right.parse(sourceData, rowIndex, context)) > 0;
}
```

## 添加单元测试代码
每个逻辑操作符类都需要通过单元测试来验证逻辑是否正确，单元测试类位于该[目录](https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/operator)下。每个逻辑操作符的所有单元测试函数均放在同一个单元测试类中，单元测试类以 `Test + 逻辑操作符名 + Operator` 的格式进行命名，以 `TestAndOperator` 为例：
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

经过以上步骤，恭喜您完成了一个新逻辑操作符类的实现，可以向社区提交您的代码。`AndOperator` 完整代码可见 [代码链接](https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator/AndOperator.java)
