# 函数说明

## Arithmetic (算术函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| abs(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的绝对值 | abs(2) = 2<br/>abs(-4.25) = 4.25 |
| acos(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反余弦值 | acos(1) = 0.0<br/>acos(0) = 1.5707963267948966<br/>acos(-1) = 3.141592653589793 |
| acosd(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反余弦值（以度为单位） | acosd(1) = 0.0<br/>acosd(0) = 90.0<br/>acosd(-1) = 180.0 |
| asin(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反正弦值 | asin(0.5) = 0.5235987755982989<br/>asin(0) = 0.0<br/>asin(-0.5) = -0.5235987755982989 |
| asind(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反正弦值（以度为单位） | asind(0.5) = 30.000000000000004<br/>asind(0) = 0.0<br/>asind(-0.5) = -30.000000000000004 |
| atan(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反正切值 | atan(1) = 0.7853981633974483<br/>atan(0) = 0.0<br/>atan(-1) = -0.7853981633974483 |
| atan2(Numeric numericx, Numeric numericy) | - 如果 'numericx' 或 'numericy' 为 NULL，返回 ""<br/>- 返回坐标 ('numericx', 'numericy') 的反正切值 | atan2(1, 1) = 0.7853981633974483<br/>atan2(1, 0) = 1.5707963267948966<br/>atan2(0, -1) = 3.141592653589793 |
| atan2d(Numeric numericx, Numeric numericy) | - 如果 'numericx' 或 'numericy' 为 NULL，返回 ""<br/>- 返回 'numericy'/'numericx' 的反正切值（以度为单位） | atan2d(1, 1) = 45.0<br/>atan2d(1, 0) = 90.0<br/>atan2d(0, -1) = 180.0 |
| atand(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的反正切值（以度为单位） | atand(1) = 45.0<br/>atand(0) = 0.0<br/>atand(-1) = -45.0 |
| bin(Integer integer) | - 如果 'integer' 为 NULL，返回 ""<br/>- 返回 'integer' 的二进制字符串表示 | bin(4) = 100 |
| cbrt(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 NULL<br/>- 返回立方根 | cbrt(5) = 1.7099759466766968<br/>cbrt(27) = 3.0 |
| ceil(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 NULL<br/>- 返回大于或等于 'numeric' 的最小整数 | ceil(-5.67) = -5.0<br/>ceil(1.23) = 2.0 |
| chr(Integer integer) | - 如果 'integer' 为 NULL，返回 NULL<br/>- 返回与 'integer' 二进制等价的 ASCII 字符 | chr(97) = "a"<br/>chr(353) = "a" |
| cos(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的余弦值 | cos(0) = 1.0 |
| cosd(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的余弦值（以度为单位） | cosd(15) = 0.9659258262890683 |
| cosh(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的双曲余弦值 | cosh(1) = 1.543080634815244<br/>cosh(0) = 1.0<br/>cosh(-1) = 1.543080634815244 |
| cot(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的余切值（以弧度为单位） | cot(1) = 0.6420926159343306<br/>cot(0.5) = 1.830487721712452<br/>cot(-1) = -0.6420926159343306 |
| cotd(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的余切值（以度为单位） | cotd(0) = ""<br/>cotd(45) = 1.0000000000000002<br/>cotd(-1) = -57.28996163075943 |
| e() | - 返回数学常数 e | e() = 2.718281828459045 |
| erf(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回输入值的误差函数值 | erf(3) = 0.9999779095030014 |
| erfc(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回互补误差函数值 (1 - erf('numeric'))，对于大输入值不会损失精度 | erfc(1) = 0.15729920705028488 |
| exp(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 e 的 'numeric' 次幂 | exp(2) = 7.38905609893065 |
| factorial(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回非负数的阶乘 | factorial(5) = 120<br/>factorial(0) = 1 |
| fibonacci(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 NULL<br/>- 返回第 n 个斐波那契数 | fibonacci(0) = 0<br/>fibonacci(1) = 1<br/>fibonacci(2) = 1<br/>fibonacci(3) = 2<br/>fibonacci(4) = 3 |
| floor(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回小于或等于 'numeric' 的最大整数 | floor(1.23) = 1.0<br/>floor(-5.67) = -6.0 |
| gcd(Numeric numeric1, Numeric numeric2) | - 如果任一参数为 NULL，返回 ""<br/>- 如果两个输入都为 0，返回 0<br/>- 返回最大公约数（能整除两个输入的最大正整数） | gcd(3.141,3.846) = 0.003 |
| greatest(Numeric value1 [,Numeric value2,...]) | - 如果任一参数为 NULL，返回 ""<br/>- 返回参数列表中的最大值 | greatest(3.141592653589793, 3, greatest(4, 1)) = 4 |
| hex(String dataStr) | - 如果 dataStr 为 NULL，返回 ""<br/>- 如果 'dataStr' 可以解析为数字，则将其转换为十六进制字符串<br/>- 否则将每个字符对应的 ASCII 码转换为十六进制字符串 | hex(1007) = "3EF"<br/>hex('abc') = "616263" |
| lcm(Numeric numeric1, Numeric numeric2) | - 如果任一参数为 NULL，返回 ""<br/>- 如果任一输入为 0，返回 0<br/>- 返回最小公倍数（两个输入的整数倍的最小正整数） | lcm(6,3) = 6<br/>lcm(3.141,3.846) = 4026.762 |
| least(Numeric value1 [, Numeric value2, ...]) | - 如果任一参数为 NULL，返回 ""<br/>- 返回参数列表中的最小值 | least(3.14, least(7, 2, 1)) = 1 |
| ln(Numeric numeric) | - 如果 numeric 为 NULL，返回 ""<br/>- 返回 numeric 的自然对数（以 e 为底） | ln(10) = 2.302585092994046 |
| log(Numeric numeric1 [, Numeric numeric2]) | - 一个参数时：返回 'numeric1' 的自然对数<br/>- 两个参数时：返回以 'numeric1' 为底 'numeric2' 的对数 | log(1) = 0.0<br/>log(2,8) = 3.0 |
| log10(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的以 10 为底的对数 | log10(1000) = 3.0 |
| log2(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的以 2 为底的对数 | log2(32) = 5 |
| min_scale(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回精确表示该值所需的最小小数位数 | min_scale(3.1415000000000) = 4 |
| mod(Numeric numeric1, Numeric numeric2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回 'numeric1' 除以 'numeric2' 的余数 | mod(3,2) = 1<br/>mod(-3.1415926,100) = -3.1415926 |
| num_nonnulls([Expr expr1, Expr expr2, ...]) | - 返回非空参数的数量 | num_nonnulls(5, 3, null, null) = 2 |
| num_nulls([Expr expr1, Expr expr2, ...]) | - 返回空参数的数量 | num_nulls(5, null, null, null) = 3 |
| pi() | - 返回数学常数 PI | pi() = 3.141592653589793 |
| power(Numeric numeric1, Numeric numeric2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回 'numeric1' 的 'numeric2' 次幂 | power(4,0.5) = 2.0 |
| radians(Numeric x) | - 如果 'x' 为 NULL，返回 ""<br/>- 返回 'x' 的弧度值，将度转换为弧度 | radians(18.97) = 0.33108895910332425 |
| radix_convert(Numeric numeric, Integer from_base, Integer to_base) | - 如果任一参数为 NULL，返回 ""<br/>- 将 'numeric' 从 'from_base' 进制转换为 'to_base' 进制<br/>注意：abs(base) 在 [2,36] 之间。'from_base' 为负数时，'numeric' 被视为有符号数，否则视为无符号数。此函数使用 64 位精度 | radix_convert('6E',18,8) = 172 |
| rand([Integer seed]) | - 如果 seed 为 NULL 或无参数：返回 [0.0, 1.0) 范围内的伪随机双精度值<br/>- 有 seed 参数：使用初始种子返回伪随机双精度值 | rand(1)<br/>rand() |
| rand_integer(Integer INT1, [Integer INT2]) | - 如果 'INT2' 为 NULL：返回 [0, 'INT1') 范围内的伪随机整数值<br/>- 有 'INT2' 参数：使用初始种子返回伪随机整数值<br/>注意：如果两个 RAND_INTEGER 函数具有相同的初始种子和边界，将返回相同的数字序列 | rand_integer(10)<br/>rand_integer(88, 89) |
| round(Numeric x [, Integer y]) | - 如果 'x' 为 NULL，返回 ""<br/>- 返回最接近 'x' 的整数，可选参数 'y' 指定要保留的小数位数 | round(3.5) = 4<br/>round(3.14159265358979323846,10) = 3.1415926536 |
| scale(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回参数的小数位数 | scale(3.1415000000000) = 13 |
| sign(Numeric x) | - 如果 'x' 为 NULL，返回 ""<br/>- 如果 'x' 为负数，返回 -1<br/>- 如果 'x' 等于 0，返回 0<br/>- 如果 'x' 为正数，返回 1 | sign(-3.5) = -1 |
| sin(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的正弦值 | sin(0) = 0.0 |
| sind(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的正弦值（以度为单位） | sind(15) = 0.25881904510252074 |
| sinh(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的双曲正弦值 | sinh(1) = 1.1752011936438014 |
| sqrt(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的平方根 | sqrt(9) = 3.0 |
| tan(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的正切值 | tan(1) = 1.5574077246549023 |
| tand(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的正切值（以度为单位） | tand(15) = 0.2679491924311227 |
| tanh(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 返回 'numeric' 的双曲正切值 | tanh(1) = 0.7615941559557649 |
| trim_scale(Numeric numeric) | - 如果 'numeric' 为 NULL，返回 ""<br/>- 通过去除尾随零来减少值的小数位数 | trim_scale(3.1415000000000) = 3.1415 |
| truncate(Numeric numeric, Integer cnt)<br/>trunc(Numeric numeric, Integer cnt) | - 如果任一参数为 NULL，返回 ""<br/>- 将 'numeric' 值截断为 'cnt' 位小数 | truncate(42.324, 2) = 42.32<br/>trunc(42.324, -1) = 40 |

## Collection (集合函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| array(String value1 [,String value2, ....]) | - 从值列表创建数组 | array('he',7,'xxd') = [he, 7, xxd]<br/>array(array('he',5),'xxd') = [[he, 5], xxd]<br/>array(array('he',5),array('','')) = [[he, 5], [, ]] |
| array_append(Array array, Object element) | - 如果任一参数为 NULL，返回 ""<br/>- 将元素追加到数组末尾 | array_append(array('he',7,'xxd'), 'cloud') = [he, 7, xxd, cloud] |
| array_concat([Array array1, Array array2, ...]) | - 如果任一输入数组为 NULL，返回 ""<br/>- 返回连接至少一个数组的结果 | array_concat(array('he',7),array('xxd', 'cloud')) = [he, 7, xxd, cloud] |
| array_contains(Array array, Object needle) | - 如果 'array' 为 NULL，返回 ""<br/>- 返回给定元素是否存在于 'array' 中<br/>注意：支持检查数组中的 null 元素 | array_contains(array('he',7,'xxd'), 'cloud') = false<br/>array_contains(array('he',-1,''),'') = true |
| array_distinct(Array array) | - 如果 'array' 为 NULL，返回 ""<br/>- 返回具有唯一元素的数组 | array_distinct(array('he',-1,'he')) = [he, -1] |
| array_except(Array array1, Array array2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回包含 'array1' 中不在 'array2' 中的元素的数组（去重）<br/>- 如果排除后没有剩余元素，返回空数组 | array_except(array('he',7,'xxd'),array('he')) = [7, xxd]<br/>array_except(array('he',7,'xxd'),array('cloud')) = [he, 7, xxd] |
| array_intersect(Array array1, Array array2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回包含 'array1' 和 'array2' 中共有元素的数组（去重）<br/>- 如果没有共同元素，返回空数组 | array_intersect(array('he',7,'xxd'),array('he')) = [he]<br/>array_intersect(array('he',7,'xxd'),array('cloud')) = [] |
| array_join(Array array, String delimiter[, String nullReplacement]) | - 如果任一参数为 NULL，返回 ""<br/>- 使用 'delimiter' 连接数组元素，空数组元素用 'nullReplacement' 填充<br/>注意：如果未指定 nullReplacement，数组中的 null 元素将从结果字符串中省略 | array_join(array('he',7,'xxd'),'~') = he~7~xxd<br/>array_join(array('he',3,''),'~','oo') = he~3~oo |
| array_max(Array array) | - 如果任一参数为 NULL，返回 ""<br/>- 返回数组中的最大值 | array_max(array(4,3,56)) = 56 |
| array_min(Array array) | - 如果任一参数为 NULL，返回 ""<br/>- 返回数组中的最小值 | array_min(array(4,3,56)) = 3 |
| array_position(Array array, Object element) | - 如果任一参数为 NULL，返回 ""<br/>- 返回 'element' 在数组中第一次出现的位置（从 1 开始）<br/>- 如果未找到，返回 0 | array_position(array('he',7,'xxd'),'he') = 1<br/>array_position(array('he',7,''),'_') = 0 |
| array_prepend(Array array, Object element) | - 如果 'array' 为 NULL，返回 ""<br/>- 将元素添加到数组开头 | array_prepend(array(4,3),3) = [3, 4, 3] |
| array_remove(Array array, Object element) | - 如果 'array' 为 NULL，返回 ""<br/>- 从数组中移除所有等于 'element' 的元素 | array_remove(array('he',7,'xxd'),'he') = [7, xxd] |
| array_reverse(Array array) | - 如果 'array' 为 NULL，返回 ""<br/>- 返回反转顺序的数组 | array_reverse(array('he',7,'xxd')) = [xxd, 7, he] |
| array_slice(Array array, Integer start_offset[, Integer end_offset]) | - 如果 'array' 或 'start_offset' 为 NULL，返回 ""<br/>- 返回从 'start_offset' 到 'end_offset'（包含）的子数组<br/>- 如果 'start_offset' 在 'end_offset' 之后或两者都超出数组边界，返回空数组<br/>注意：如果省略 'end_offset'，则视为数组长度。正值从数组开头计数，负值从末尾计数 | array_slice(array('he',7,'xxd'),1,2) = ['he', 7]<br/>array_slice(array('he','xxd','b'),-2,-1) = [3, 'xxd'] |
| array_sort(Array array[,Boolean ascending_order[,Boolean null_first]]) | - 如果 'array' 为 NULL，返回 ""<br/>- 返回排序后的数组<br/>注意：默认升序排序，NULL 在开头。'ascending_order' 为 true 时升序（NULL 在前），false 时降序（NULL 在后）。'null_first' 独立控制 NULL 位置 | array_sort(array('he',7,'xxd')) = [7, he, xxd]<br/>array_sort(array(3,7,5)) = [3, 5, 7]<br/>array_sort(array(,3,7),false,false) = [7, 3, ]<br/>array_sort(array(3,7,),true,false) = [3, 7, ] |
| array_union(Array array1[, Array array2, ...]) | - 如果任一输入数组为 NULL，返回 ""<br/>- 返回连接至少一个数组的结果 | array_concat(array('he',7),array('xxd', 'cloud')) = [he, 7, xxd, cloud] |
| cardinality(Object input) | - 如果输入为 NULL，返回 ""<br/>- 输入为数组时返回元素数量<br/>- 输入为映射时返回条目数量 | cardinality(array('he',7,'xxd')) = 3<br/>cardinality(map('he',7,'xxd',3)) = 2 |
| element(Array array) | - 如果 'array' 为空或 NULL，返回 ""<br/>- 返回数组的唯一元素（基数应为 1）<br/>注意：如果数组有多个元素会抛出异常 | element(array('he')) = he |
| find_in_set(String str, String strList) | - 如果任一参数为 NULL，返回 ""<br/>- 如果 'str' 不在 'strList' 中或 'strList' 为空字符串，返回 0<br/>- 如果字符串 'str' 在由 N 个子字符串组成的字符串列表 'strList' 中，返回 1 到 N 范围内的值<br/>注意：strList 是由 ',' 字符分隔的子字符串组成的字符串。如果第一个参数包含逗号字符，此函数可能无法正常工作 | FIND_IN_SET('b','a,b,b,c,d') = 2<br/>FIND_IN_SET('','a,,b,c,d') = 2 |
| map([String value1, String value2, ...]) | - 如果参数数量不是偶数，返回 ""<br/>- 从键值对列表创建映射 | Map('he',7,'xxd') = null<br/>Map('he',1,'xxd','cloud') = {he=1, xxd=cloud}<br/>Map('xxd','cloud',map(1,2),map(3,'apple')) = {xxd=cloud, {1=2}={3=apple}} |
| map_entries(Map map) | - 如果 'map' 为 NULL，返回 ""<br/>- 返回给定映射中的所有条目数组 | map_entries(Map('he',1,'xxd','cloud')) = [he=1, xxd=cloud]<br/>map_entries(Map(1,2,'cloud','xxd')) = [xxd=cloud, 1=2] |
| map_from_arrays(Array array_of_keys, Array array_of_values) | - 如果任一参数为 NULL，返回 ""<br/>- 从键数组和值数组创建映射 | map_from_arrays(array('he', 'xxd'),array(1, 3)) = {he=1, xxd=3}<br/>map_from_arrays(array('xxd', array('cloud')),array(1, array(2))) = {1=xxd, [2]=[cloud]} |
| map_keys(Map map) | - 如果 'map' 为 NULL，返回 ""<br/>- 以数组形式返回映射的键（不保证顺序） | map_keys(Map('he',1,'xxd','cloud')) = [he, xxd]<br/>map_keys(Map('xxd','cloud',map(1,2),map(3,'apple'))) = [xxd, {1=2}] |
| map_union([Map map1, Map map2, ...]) | - 如果任一映射为 NULL，返回 ""<br/>- 通过合并至少一个映射创建新映射。这些映射应具有相同的映射类型，后面的映射会覆盖前面的映射 | map_union(map('he', 1),map('xxd', 3)) = {he=1, xxd=3}<br/>map_union(map('he', 1),map('he', 3)) = {he=3} |
| map_values(Map map) | - 如果 'map' 为 NULL，返回 ""<br/>- 以数组形式返回映射的值（不保证顺序） | map_values(Map('he',1,'xxd','cloud')) = [1, cloud]<br/>map_values(Map('xxd','cloud',map(1,2),map(3,'apple'))) = [cloud, {3=apple}] |

## Compression (压缩函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| compress(String string_to_compress [, String compress_type]) | - 如果 'string_to_compress' 为 NULL，返回 ""<br/>- 如果 'string_to_compress' 为 ""，返回 ""<br/>- 返回二进制字符串结果<br/>注意：支持三种压缩算法：deflater、gzip 和 zip。'compress_type' 默认为 deflater。为了以字符串形式输出压缩结果，此方法使用 ISO_8859_1 字符集 | length(compress(replicate(string1,100)),'ISO_8859_1') = 33<br/>length(compress(''),'ISO_8859_1') = 0 |
| uncompress(String string_to_uncompress, String compress_type) | - 如果 'string_to_uncompress' 为 NULL，返回 ""<br/>- 如果 'string_to_uncompress' 为 ""，返回 ""<br/>- 返回字符串结果<br/>注意：支持三种压缩算法：deflater、gzip 和 zip。'compress_type' 默认为 deflater | uncompress(compress('inlong')) = "inlong" |

## Condition (条件函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| coalesce(String value1 [, String value2, ...]) | - 如果所有参数都为 NULL 或 ""，返回 ""<br/>- 返回第一个不为 NULL 或 "" 的参数<br/>注意：返回类型是其所有参数的限制最少的公共类型。如果所有参数都可为空，返回类型也可为空 | coalesce('', 'SQL', 'hh') = "SQL" |
| if(Expr expr1, Expr expr2, Expr expr3) | - 如果 'expr1' 返回 true，返回 'expr2'<br/>- 否则返回 'expr3' | if(1 = 1,true,false) = true |
| ifnull(Expr expr1, Expr expr2)<br/>if_null(Expr expr1, Expr expr2) | - 如果 'expr1' 不为 NULL，返回 'expr1'<br/>- 否则返回 'expr2' | ifnull(null, 3) = 3<br/>ifnull(6,'YES') = 6 |
| isnull(Expr expr) | - 如果 'expr' 为 NULL，返回 true<br/>- 否则返回 false | isnull(5 + 3) = false<br/>isnull(5 / 0) = true |
| nullif(Expr expr1, Expr expr2)<br/>null_if(Expr expr1, Expr expr2) | - 如果 'expr1' = 'expr2' 为 true，返回 ""<br/>- 否则返回 'expr1' | nullif(5, 3) = 5 |

## Encryption (加密函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| dayu_decrypt | （描述待补充） |  |
| decode(Binary binary, String charsetStr) | - 如果任一参数为 NULL，返回 ""<br/>- 使用 'charsetStr' 指定的字符集对 'binary' 进行解码<br/>注意：'charsetStr' 是以下之一 ('US-ASCII', 'ISO-8859-1', 'UTF-8', 'UTF-16BE', 'UTF-16LE', 'UTF-16') | decode(encode('Hello','UTF-8'),'UTF-8') = "Hello" |
| encode(String strInfo, String charsetStr) | - 如果任一参数为 NULL，返回 ""<br/>- 使用 'charsetStr' 指定的字符集对 'strInfo' 进行编码<br/>注意：'charsetStr' 是以下之一 ('US-ASCII', 'ISO-8859-1', 'UTF-8', 'UTF-16BE', 'UTF-16LE', 'UTF-16') | decode(encode('Hello','UTF-8'),'UTF-8') = "Hello" |
| from_base64(String base64Str) | - 如果 'base64Str' 为 NULL，返回 ""<br/>- 从 'base64Str' 返回 base64 解码结果 | from_base64('QXBhY2hlIEluTG9uZw==') = "Apache InLong" |
| md5(String string) | - 如果 'string' 为 NULL，返回 ""<br/>- 返回 'string' 的 MD5 哈希值（32 位十六进制数字字符串形式） | md5("") = "d41d8cd98f00b204e9800998ecf8427e"<br/>md5("1") = "c4ca4238a0b923820dcc509a6f75849b" |
| sha(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 40 位十六进制数字字符串（SHA-1 160 位） | sha("5") = "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4" |
| sha2(String str, Integer hash_length) | - 如果任一参数为 NULL 或 'hash_length' 不是 (224,256,384,512) 之一，返回 ""<br/>- 返回参数的尺度（小数部分中的十进制位数） | sha2("5",224) = "b51d18b551043c1f145f22dbde6f8531faeaf68c54ed9dd79ce24d17" |
| to_base64(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 从 'str' 返回 base64 编码结果 | to_base64('app-fun') = "YXBwLWZ1bg==" |

## Json (JSON 函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| json_array_append(String json_doc, String path1, String val1[,String path2, String val2, ...]) | - 如果任一参数为 NULL，返回 ""<br/>- 在 JSON 文档中的指定数组末尾追加值 | json_array_append(["a", ["b", "c"], "d"],$[0],2,$[1],3) = [["a","2"],["b","c","3"],"d"] |
| json_array_insert(String json_doc, String path1, String val1[, String path2, String val2, ...]) | - 如果任一参数为 NULL，返回 ""<br/>- 在数组中插入值<br/>注意：如果传入多组参数，后一组参数的下标需要基于前一组参数更新后的文档下标 | json_array_append(["a", {"b": [1, 2]}, [3, 4]], $[1], x) = ["a","x",{"b":[1,2]},[3,4]] |
| json_arrays([String value1, String value2, ...]) | - 从值列表构造 JSON 数组字符串 | JSON_ARRAYS() = []<br/>JSON_ARRAYS(1, '2') = [1,"2"]<br/>JSON_ARRAYS(JSON_ARRAY(1)) = [[1]] |
| json_exists(String json_doc, String path) | - 如果 'json_doc' 满足给定的 'path' 搜索条件，返回 true<br/>- 否则返回 false | JSON_EXISTS('{"a": true}', '$.a') = true<br/>JSON_EXISTS('{"a": true}', '$.b') = false<br/>JSON_EXISTS('{"a": [{ "b": 1 }]}', '$.a[0].b') = true |
| json_insert(String json_doc, String path1, String val1[, String path2, String val2, ...]) | - 如果任一参数为 NULL 或 'json_doc' 不是有效的 JSON 文档或任何 path 参数不是有效的路径表达式或包含 * 或 ** 通配符，返回 ""<br/>- 返回向 'json_doc' 插入数据的结果 | json_insert({"a": {"b": [1, 2]}, "c": [3, 4]}, $.c[1][1], "2", "$.c[1][1][5]", "1") = {"a":{"b":[1,2]},"c":[3,[4,["2","1"]]]} |
| json_query(String json_doc, String path) | - 如果任一参数为 NULL，返回 ""<br/>- 返回从 'json_doc' 中的 'path' 解析的字符串 | json_query({"people": [{"name": "Alice"}, {"name": "Bob"}]}, $.people) = [{"name":"Alice"},{"name":"Bob"}]<br/>json_query({"list": [null, {"name": "John"}]}, $.list[1].name) = John |
| json_quote(String data)<br/>json_string(String data) | - 如果 data 为 NULL，返回 ""<br/>- 从字符串 (JSON_QUOTE) 或任何类型的数据 (JSON_STRING) 转换的有效 JSON 字符串<br/>注意：JSON_QUOTE 会转义内部引号和特殊字符 (’"’, ‘', ‘/’, ‘b’, ‘f’, ’n’, ‘r’, ’t’) | json_quote('Column1\tColumn2) = \"Column1\\tColumn2\"<br/>json_string(true) = "true" |
| json_remove(String json_doc, String path1[, String path2, ...]) | - 如果任一参数为 NULL 或 'json_doc' 不是有效的 JSON 文档或任何 path 参数不是有效的路径表达式或是 $ 或包含 * 或 ** 通配符，返回 ""<br/>- 返回从 'json_doc' 移除数据的结果 | json_remove("{\"name\":\"Charlie\",\"hobbies\":[[\"swimming1\",\"swimming2\"], \"reading\",\"coding\"]}","$.age") = {"hobbies":[["swimming2"],"coding"],"name":"Charlie"} |
| json_replace(String json_doc, String path1, String val1[, String path2, String val2, ...]) | - 如果任一参数为 NULL 或 'json_doc' 不是有效的 JSON 文档或任何 path 参数不是有效的路径表达式或包含 * 或 ** 通配符，返回 ""<br/>- 返回替换 'json_doc' 中现有值的结果 | json_replace("{ \"a\": 1, \"b\": [2, 3]}", "$.a", 10, "$.c", "[true, false]") = {"a": 10, "b": [2, 3]} |
| json_set(String json_doc, String path1, String val1[, String path2, String val2, ...]) | - 如果任一参数为 NULL 或 'json_doc' 不是有效的 JSON 文档或任何 path 参数不是有效的路径表达式或包含 * 或 ** 通配符，返回 ""<br/>- 返回在 'json_doc' 中插入或更新数据的结果 | json_set({"name":"Alice"},"$.name","inlong") = {"name":"inlong"} |
| json_unquote(String data) | - 如果 data 为 NULL，返回 ""<br/>- 如果值不以双引号开头和结尾，或者以双引号开头和结尾但不是有效的 JSON 字符串字面量，则返回未修改的 'data'<br/>注意：JSON_UNQUOTE 会取消转义特殊字符 ('"', '', '/', 'b', 'f', 'n', 'r', 't') | json_unquote('Hello, World!') = "Hello, World!"<br/>json_unquote('Complex string with / and \\') = "Complex string with / and \\" |
| json_value(String json_doc, String path) | - 如果任一参数为 NULL，返回 ""<br/>- 基于 'path' 从 JSON 字符串 ('json_doc') 中提取标量值 | json_value({"a": 1}, $.a) = 1<br/>json_value({"person": {"name": "Alice" ,"age": 30}}, $.person.name) = Alice |

## String (字符串函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| ascii(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 第一个字符的数值 | ascii('abc') = 97<br/>ascii('A') = 65<br/>ascii(null) = "" |
| bit_length(String str[, String charset]) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 的位数<br/>注意：字符集默认与 JVM 对齐 | bit_length("hello world") = 88<br/>bit_length("hello 你好","utf-8") = 96 |
| char_length(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 的字符长度 | char_length('hello world') = 11<br/>char_length('应龙') = 2 |
| concat(String string1 [, String string2, ...]) | - 如果任一参数为 NULL，返回 NULL<br/>- 返回连接 ('string1', 'string2',...) 的字符串 | CONCAT("AA", "BB", "CC") = "AABBCC" |
| concat_ws(String string1 [, String string2, ...]) | - 如果 'STRING1' 为 NULL，返回 NULL<br/>- 使用分隔符 STRING1 连接 ('STRING2', 'STRING3', ...) | concat_ws('-', 'apple', 'banana', 'cloud') = "apple-banana-cloud"<br/>concat_ws('-', 'apple', '', 'cloud') = "apple--cloud"<br/>concat_ws('-', 'apple', null, 'cloud') = "apple-cloud" |
| contains(String leftStr, String rightStr) | - 如果 'leftStr' 或 rightStr 为 NULL，返回 ""<br/>- 如果 'rightStr' 在 'leftStr' 中找到，返回 True<br/>- 否则返回 False | contains('Transform SQL', 'SQL') = true |
| elt(Integer index, Expr expr1[, Expr expr2, ...]) | - 如果 'index' 为 NULL 或超出范围，返回 ""<br/>- 返回第 index 个表达式（从 1 开始） | elt(2, 'a', 'b', 'c') = "b" |
| endswith(String s1, String s2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回 's1' 是否以 's2' 结尾 | endswith('Apache InLong', 'Long') = true |
| format(Numeric X, Integer D) | - 如果 'X' 或 'D' 为 NULL，返回 ""<br/>- 将数字 'X' 格式化为 "#,###,###.##" 格式，四舍五入到 'D' 位小数 | FORMAT(12332.123456, 4) = "12,332.1235"<br/>FORMAT(12332.2,0) = "12,332" |
| initcap(String str)<br/>init_cap(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 的新形式，每个单词的首字母转换为大写，其余字符转换为小写 | initcap('hello world') = "Hello world" |
| insert(String str, Integer pos, Integer len, String newStr) | - 如果任一参数为 NULL，返回 ""<br/>- 返回将 'str' 中从位置 'pos' 开始长度为 len 的子字符串替换为 'newStr' 的结果<br/>注意：如果位置超出字符串边界，返回原字符串。如果长度超过从给定位置开始的剩余长度，替换持续到字符串末尾 | INSERT('12345678', 3, 4, 'word') = '12word78'<br/>INSERT('12345678', -1, 4, 'word') = '12345678'<br/>INSERT('12345678', 3, 100, 'word') = '12word' |
| is_alpha(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 如果 'str' 中的所有字符都是字母，返回 true<br/>- 否则返回 false（包括字符串为 null 和 '' 的情况） | is_alpha('inlong') = true<br/>is_alpha('inlong~') = false |
| is_decimal(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 如果 'str' 可以解析为有效的数字，返回 true<br/>- 否则返回 false（包括字符串为 null 和 '' 的情况） | is_decimal('3he') = false<br/>is_decimal('3.5') = true |
| is_digit(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 如果 'str' 中的所有字符都是数字，返回 true<br/>- 否则返回 false（包括 'str' 为 null 和 '' 的情况） | is_digit('3.5') = false |
| left(String str, Integer len) | - 如果任一参数为 NULL，返回 ""<br/>- 如果 'len' 小于或等于零，返回 ""<br/>- 返回 'str' 右侧开始的 len 长度的子字符串 | left('hello world',100) = "hello world"<br/>left('hello world',-15) = "" |
| length(String str[, String charset]) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 的字节长度<br/>注意：字符集默认与 JVM 匹配 | length('应龙', 'utf-8') = 6<br/>length('hello world') = 11 |
| locate(String str1, String str2[, Integer pos])<br/>instr(String str1, String str2[, Integer pos]) | - 如果任一参数为 NULL，返回 ""<br/>- 如果未找到，返回 0<br/>- 返回在位置 'pos' 之后 'str1' 在 'str2' 中第一次出现的位置 | locate('app', 'apple') = 1<br/>locate('app', 'appapp', 2) = 4 |
| lower(String str)<br/>lcase(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回将 'str' 的所有字母转换为小写的结果 | lower("ApPlE") = "apple" |
| lpad(String str1, Integer len, String str2) | - 如果三个参数中任一为 NULL 或 'len' 小于 0，返回 null<br/>- 如果 'len' 小于或等于 'str1' 的长度，返回下标在 [0, 'len') 范围内的 'str1' 子字符串<br/>- 如果 'len' 长于 'str1' 的长度且 'str2' 为 ""，返回 ""<br/>- 如果 'str2' 不为 ""，返回在字符串 'str1' 末尾填充字符串 'str2' 使字符串长度为 'len' 的结果字符串 | lpad('he',7,'xxd') = "xxdxxhe"<br/>lpad('he',1,'') = "h" |
| ltrim(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回去除前导空格的 'str' 字符串 | ltrim(' in long ') = "in long " |
| parse_url(String urlStr, String keyword[, String parameter]) | - 如果任何必需参数为 NULL，返回 NULL<br/>- 从 'urlStr' 返回指定部分。'keyword' 的有效值<br/>注意：'keyword' 是以下之一 ('HOST', 'PATH', 'QUERY', 'REF', 'PROTOCOL', 'AUTHORITY', 'FILE', 'USERINFO')。还可以通过将键作为第三个参数来提取 QUERY 中特定键的值 | parse_url('http://inlong.apache.org/p.php?k1=v1&k2=v2#Ref1', 'QUERY', 'k1') = v1<br/>parse_url('http://inlong.apache.org/p.php?k1=v1&k2=v2#Ref1', 'PROTOCOL') = http<br/>parse_url('k1=v1&k2=v2', 'QUERY','k2') = v2 |
| printf(String strfmt [, Object obj, ...]) | - 从 printf 样式的格式字符串返回格式化字符串 | printf("User %s has %d points and a balance of %.2f.", "Bob", 1500, 99.99) = " User Bob has 1500 points and a balance of 99.99." |
| regexp(String str, String regexp)<br/>similar(String str, String regexp)<br/>regexp_like(String str, String regexp) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 如果 'str' 的任何（可能为空）子字符串匹配 Java 正则表达式 'regexp'，返回 TRUE | regexp("The quick brown fox", "quick") = true<br/>regexp("The quick brown fox", "cold") = false |
| regexp_substr(String source_string, String regexp) | - 如果任一参数为 NULL 或 regexp 无效或模式未找到，返回 ""<br/>- 返回 'str' 中匹配 'regexp' 的第一个子字符串 | regex_substr("abc123def", "(\\d+)") = 123 |
| regexp_count(String str, String regexp) | - 如果任一参数为 NULL 或 'regexp' 无效，返回 ""<br/>- 返回 'str' 匹配 'regexp' 模式的次数<br/>注意：'regexp' 必须是 Java 正则表达式 | regexp_count("The quick brown fox quick", "quick") = 2 |
| regexp_extract(String str, String regexp[, Integer extractIndex]) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 使用指定的正则表达式 'regexp' 和正则表达式匹配组索引 'extractIndex' 从 'str' 中提取字符串<br/>注意：'regexp' 必须是 Java 正则表达式。'extractIndex' 指示要提取的正则表达式组，从 1 开始，如果未指定则为默认值。0 表示匹配整个 'regexp' 表达式。此外，正则表达式匹配组索引不应超过定义的组数 | REGEXP_EXTRACT("abc123def", "(\\d+)", 1) = 123<br/>REGEXP_EXTRACT("Name: John, Age: 25, Location: NY", "Name: (\\w+), Age: (\\d+), Location: (\\w+)", 2) = 25<br/>REGEXP_EXTRACT("abc123def", "(\\d+)", 2) = null<br/>REGEXP_EXTRACT("abc123def", "abcdef", 1) = null |
| regexp_extract_all(String str, String regexp[, Integer extractIndex]) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 返回由 'str' 中匹配 'regexp' 表达式并对应于 'extractIndex' 正则表达式组的所有子字符串组成的数组<br/>注意：'regexp' 必须是 Java 正则表达式。'extractIndex' 指示要提取的正则表达式组，从 1 开始，如果未指定则为默认值。0 表示匹配整个 'regexp' 表达式 | REGEXP_EXTRACT_ALL("abc123def456ghi789", "(\\d+)", 0) = [123, 456, 789]<br/>REGEXP_EXTRACT_ALL("Name: John, Age: 25, Location: NY", "Name: (\\w+), Age: (\\d+), Location: (\\w+)", 1) = [John]<br/>REGEXP_EXTRACT_ALL("Name: John, Age: 25, Location: NY", "Name: (\\w+), Age: (\\d+), Location: (\\w+)", 0) = [Name: John, Age: 25, Location: NY] |
| regexp_instr(String str, String regexp) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 返回 'str' 中匹配 'regexp' 的第一个子字符串的位置 | regexp_instr("abc123def", "(\\d+)") = 4 |
| regexp_matches(String source_string, String regexp[, String flags]) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 返回指定正则表达式 'regexp' 从 'source_string' 的第一次匹配结果<br/>注意：'flags' 是以下之一 ('g' -> 当我们想要匹配所有出现的子字符串时可以使用，'i' -> 忽略大小写匹配，'x' -> 扩展语法（忽略正则表达式中的空格和注释），'m' 和 'n' -> 允许正则表达式跨多行匹配） | regexp_matches("The quick brown fox", "quick") = [{"quick"}]<br/>regexp_matches("foo 123 bar 456", "\\d+", "g") = [{"123"},{"456"}] |
| regexp_replace(String source_string, String regexp, String replacement) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 返回将 'source_string' 中匹配正则表达式 'regexp' 的所有连续子字符串替换为 'replacement' 的字符串 | regexp_replace('foobarbaz', 'b..', 'X') = "fooXbaz" |
| regexp_split_to_array(String source_string, String regexp[, String flags]) | - 如果任一参数为 NULL 或无效，返回 ""<br/>- 返回将 'source_string' 中匹配正则表达式 'regexp' 的所有连续子字符串替换为 'replacement' 的字符串<br/>注意：'flags' 是以下之一 ('g' -> 当我们想要匹配所有出现的子字符串时可以使用，'i' -> 忽略大小写匹配，'x' -> 扩展语法（忽略正则表达式中的空格和注释），'m' 和 'n' -> 允许正则表达式跨多行匹配） | regexp_split_to_array("hello world","\s+") = {hello, world} |
| repeat(String str, Integer times)<br/>replicate(String str, Integer times) | - 如果任一参数为 NULL，返回 ""<br/>- 返回将 'str' 重复一定 'times' 次数的新字符串 | repeat('apple', 2) = "appleapple" |
| replace(String s, String s1, String s2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回将字符串 's' 中的字符串 's1' 替换为字符串 's2' 的结果 | replace('Hello World', '', 'J') = "JHJeJlJlJoJ JWJoJrJlJdJ" |
| reverse(String str) | - 如果 'str' 为空字符串或 NULL，返回 ""<br/>- 返回字符顺序反转的 'str' | reverse('apple') = "elppa" |
| right(String str, Integer len) | - 如果 'str' 或 'len' 为 NULL，返回 ""<br/>- 如果 'len' 小于或等于零，返回 ""<br/>- 返回 'str' 右侧开始的 len 长度的子字符串 | right('hello world',100) = "hello world" |
| rpad(String str1, Integer len, String str2) | - 如果三个参数中任一为 NULL 或 'len' 小于 0，返回 ""<br/>- 如果 'len' 小于或等于 's1' 的长度，返回下标在 [0, 'len') 范围内的 's1' 子字符串<br/>- 如果 's2' 为 "" 且 'len' 长于 's1' 的长度，返回 ""<br/>- 如果 's2' 不为 ""，返回在字符串 's1' 末尾填充字符串 's2' 使字符串长度为 'len' 的结果字符串 | rpad('he',1,'xxd') = "h"<br/>rpad('he',7,'') = "" |
| rtrim(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回去除尾随空格的 'str' 字符串 | rtrim(' in long ') = " in long" |
| soundex(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回表示 'str' 发音的四字符代码 | soundex('hello world') = "H464" |
| space(Integer N) | - 如果 'N' 为 NULL 或小于或等于 0，返回 ""<br/>- 返回由 'N' 个空格字符组成的字符串 | space(5) = "     " |
| split_index(String str, String delimiter, Integer index)<br/>splitindex(String str, String delimiter, Integer index) | - 如果索引为负数或任一参数为 NULL，返回 ""<br/>- 如果索引超出拆分后字符串的范围，返回 NULL<br/>- 将 'str' 按 'delimiter' 分割后，返回给定整数索引（从0开始）处的字符串 | split_index('a,b,c', ',', 1) = "b" |
| startswith(String s1, String s2) | - 如果任一参数为 NULL，返回 ""<br/>- 返回 's1' 是否以 's2' 开头 | startswith('Apache InLong', 'A') = true |
| str_to_map(String str[, String pairDelimiter, String keyValueDelimiter]) | - 如果 'str' 为 NULL，返回 ""<br/>- 使用 'pairDelimiter'（默认是 ','）和 'keyValueDelimiter'（默认是 '='）将 'str' 分割成键/值对后返回一个映射<br/>注意：'pairDelimiter' 和 'keyValueDelimiter' 都被视为正则表达式。因此，特殊字符（如 <([{^-=$!\|]})?*+.>）在用作字面分隔符前需要正确转义 | str_to_map('key1=value1,key2=value2,key3=value3') = {key1=value1, key2=value2, key3=value3}<br/>str_to_map("name->John!age->30!city->China" , "!" , "->") = {name=John, age=30, city=China} |
| strcmp(String s1, String s2) | - 如果任一参数为 NULL，返回 ""<br/>- 如果字符串相同，返回 0<br/>- 如果根据当前排序顺序 's1' 小于 's2'，返回 -1<br/>- 否则返回 1 | strcmp('hello world','banana') = 1 |
| substring(String s1, Integer pos[, Integer len])<br/>substr(String s1, Integer pos[, Integer len])<br/>mid(String s1, Integer pos[, Integer len]) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回 'str' 从位置 'pos' 开始、长度为 'len' 的子字符串（默认到末尾）<br/>注意：此函数也支持 "substring(str FROM pos [ FOR len ])" 语法 | substring('apple', 1, 3) = "app" |
| substring_index(String str, String delim, Integer count) | - 如果任一参数为 NULL，返回 ""<br/>- 如果 'count' 为正数，返回从左边开始计数，最后一个 'delim' 出现次数之前的全部内容<br/>- 如果 'count' 为负数，返回从右边开始计数，最后一个 'delim' 出现次数之后的全部内容 | SUBSTRING_INDEX('AA. ', ' ', 1) = "AA." |
| translate(String origin_string, String find_chars, String replace_chars) | - 如果任一参数为 NULL，返回 ""<br/>- 返回将 'origin_string' 中所有出现的 'find_chars' 中的字符替换为 'replace_chars' 中对应字符的结果 | translate('apache@inlong.com', '@', '.') = "apache.inlong.com"<br/>translate('hello WorD', 'WD', 'wd') = "hello word" |
| trim(String str)<br/>btrim(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回删除 'str' 前后空格的结果 | trim(' in long ') = "in long" |
| unhex(String str) | - 如果 'str' 为 NULL，返回 ""<br/>- 返回将参数中的每对字符解释为其十六进制数对应的字符的结果 | unhex("696E6C6F6E67") = "inlong" |
| upper(String s)<br/>ucase(String s) | - 如果 's' 为 NULL，返回 ""<br/>- 返回将 's' 转换为大写的结果 | upper("ApPlE") = "APPLE" |
| url_decode(String str[, String charset]) | - 如果 'str' 为 NULL，或解码过程有问题（例如遇到非法转义模式），或编码方案不受支持，返回 ""<br/>- 使用字符集（默认：UTF-8）编码方案解码给定的 'application/x-www-form-urlencoded' 格式的 'str' | url_decode('https%3A%2F%2Fapache.inlong.com%2Fsearch%3Fq%3Djava+url+encode') = "https://apache.inlong.com/search?q=java url encode"<br/>url_decode('https%3A%2F%2Fapache.inlong.com%2Fsearch%3Fq%3Djava+url+encode','UTF-8') = "https://apache.inlong.com/search?q=java url encode" |
| url_encode(String str[, String charset]) | - 如果 'str' 为 NULL，或编码过程有问题，或编码方案不受支持，返回 ""<br/>- 使用字符集（默认：UTF-8）编码方案将 'str' 转换为 'application/x-www-form-urlencoded' 格式 | url_encode('https://apache.inlong.com/search?q=java url encode') = "https%3A%2F%2Fapache.inlong.com%2Fsearch%3Fq%3Djava+url+encode"<br/>url_encode('https://apache.inlong.com/search?q=java url encode','UTF-8') = "https%3A%2F%2Fapache.inlong.com%2Fsearch%3Fq%3Djava+url+encode" |
| uuid() | - 返回基于 RFC 4122 类型 4（伪随机生成）的 UUID（通用唯一标识符）字符串 | uuid() |

## Temporal (时间日期函数)

| 函数 | 描述 | 示例 |
|------|------|------|
| convert_tz(String datetime_str, String from_tz, String to_tz) | - 如果任一参数为 NULL，返回 NULL<br/>- 将日期时间字符串 'datetime_str'（默认 ISO 时间戳格式 yyyy-MM-dd HH:mm:ss）从时区 'from_tz' 转换为时区 'to_tz'<br/>注意：时区格式应为缩写（如 "PST"）、全名（如 "America/Los_Angeles"）或自定义 ID（如 "GMT-08:00"） | CONVERT_TZ('1970-01-01 00:00:00', 'UTC', 'America/Los_Angeles') = "1969-12-31 16:00:00" |
| date_add(String dateStr, String intervalExprStr) | - 如果 'dateStr' 为 NULL，返回 ""<br/>- 如果 'dateStr' 是 DATE 值且计算仅涉及 YEAR, MONTH, DAY 部分（即不涉及时间部分），返回 DATE 类型<br/>- 如果 'dateStr' 是 TIME 值且计算仅涉及 HOURS, MINUTES, SECONDS 部分（即不涉及日期部分），返回 TIME 类型<br/>- 如果第一个参数是 DATETIME（或 TIMESTAMP）值，或者第一个参数是 DATE 但单位值使用了 HOURS, MINUTES, SECONDS，或者第一个参数是 TIME 类型但单位值使用了 YEAR, MONTH, DAY，返回 DATETIME 类型<br/>- 否则返回 String 类型（VARCHAR）<br/>注意：关于 intervalExpr，请参考 MySQL 官网 | date_add('2020-12-31 23:59:59',INTERVAL 999 DAY) = "2023-09-26 23:59:59"<br/>DATE_ADD('1992-12-31 23:59:59', INTERVAL '-1.999999' SECOND_MICROSECOND) = "1992-12-31 23:59:57.000001" |
| date_format(String timestampStr, String formatStr) | - 如果任一参数为 NULL，返回 ""<br/>- 将时间戳（以秒为单位）转换为指定格式的日期格式字符串<br/>注意：格式字符串与 Java 的 SimpleDateFormat 兼容 | date_format('2024-08-01 22:56:56', 'yyyy/MM/dd HH:mm:ss') = "2024/08/01 22:56:56" |
| date_sub(String dateStr, String intervalExprStr)<br/>datesub(String dateStr, String intervalExprStr) | - 如果 'dateStr' 为 NULL，返回 ""<br/>- 如果日期参数是 DATE 值且计算仅涉及 YEAR, MONTH, DAY 部分（即不涉及时间部分），返回 DATE 类型<br/>- 如果日期参数是 TIME 值且计算仅涉及 HOURS, MINUTES, SECONDS 部分（即不涉及日期部分），返回 TIME 类型<br/>- 如果第一个参数是 DATETIME（或 TIMESTAMP）值，或者第一个参数是 DATE 但单位值使用了 HOURS, MINUTES, SECONDS，或者第一个参数是 TIME 类型但单位值使用了 YEAR, MONTH, DAY，返回 DATETIME 类型<br/>- 否则返回 String 类型（VARCHAR）<br/>注意：关于 'intervalExpr'，请参考 MySQL 官网 | DATE_SUB('1992-12-31 23:59:59', INTERVAL '-1.999999' SECOND_MICROSECOND) = "1993-01-01 00:00:00.999999" |
| datediff(String dateStr1, String dateStr2) | - 如果两个参数中有一个为 null 或 ""，返回 ""<br/>- 如果两个参数中有一个的日期格式不正确，返回 ""<br/>- 返回日期 'dateStr1' 和 'dateStr2' 之间的天数差（dateStr1 - dateStr2） | datediff('2018-12-10 12:30:00', '2018-12-09 13:30:00') = 1<br/>datediff('2018-12', '2018-12-12') = "" |
| day_name(String dateStr)<br/>dayname(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回星期几的名称 | dayname('2024-02-29') = THURSDAY |
| day_of_month(String dateStr)<br/>dayofmonth(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一个月中的第几天（1 到 31 之间的整数） | dayofmonth('2024-02-29') = 29 |
| day_of_week(String dateStr)<br/>dayofweek(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一周中的第几天（1（星期日）到 7（星期六）之间的整数） | dayofweek('2024-02-29') = 5 |
| day_of_year(String dateStr)<br/>dayofyear(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一年中的第几天（1 到 366 之间的整数） | dayofyear('2024-02-29') = 60 |
| from_unix_time(Numeric unixtime[, String formatStr])<br/>from_unixtime(Numeric unixtime[, String formatStr]) | - 如果 'unixtime' 为 NULL，返回 ""<br/>- 将数字参数表示为字符串值返回<br/>注意：'formatStr' 默认为 'yyyy-MM-dd HH:mm:ss'。unixtime 是表示自 UTC '1970-01-01 00:00:00' 以来的秒数的内部时间戳值，例如由 UNIX_TIMESTAMP() 函数生成的值 | from_unix_time(44) = "1970-01-01 08:00:44" |
| hour(String timestamp) | - 如果 'timestamp' 为 null，返回 ""<br/>- 从 SQL 'timestamp' 返回一天中的小时（0 到 23 之间的整数） | hour('2024-08-12 12:23:34') = 12 |
| localdate([String timeZoneStr])<br/>currentdate([String timeZoneStr])<br/>current_date([String timeZoneStr])<br/>curdate([String timeZoneStr]) | - 返回指定时区 'timeZoneStr' 的当前日期 | localDate("UTC") = currentDate<br/>localDate() = currentDate |
| localtime([String timeZoneStr])<br/>current_time([String timeZoneStr]) | - 返回指定时区的当前时间 | localTime() = currentTime<br/>currentTime("UTC") = currentTime |
| minute(String timestamp) | - 如果 'timestamp' 为 null，返回 ""<br/>- 从 SQL 'timestamp' 返回一小时中的分钟（0 到 59 之间的整数） | minute('2024-08-12 12:23:34') = 23 |
| month(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一年中的月份（1 到 12 之间的整数） | month('2024-08-08') = 8 |
| now() | - 返回本地时区的当前 SQL 时间戳 | now() |
| quarter(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一年中的季度（1 到 4 之间的整数） | quarter('2024-08-08') = 3 |
| second(String timestamp) | - 如果 'timestamp' 为 null，返回 ""<br/>- 从 SQL 'timestamp' 返回一分钟中的秒数（0 到 59 之间的整数） | second('2024-08-12 12:23:34') = 34 |
| timediff(String dateStr1, String dateStr2)<br/>time_diff(String dateStr1, String dateStr2) | - 如果 'dateStr1' 或 'dateStr2' 为 NULL，并且 'dateStr1' 和 'dateStr2' 的转换类型不同，返回 ""<br/>- 返回 'dateStr1' - 'dateStr2' 表示的时间值<br/>注意：'dateStr1' 和 'dateStr2' 是转换为 TIME 或 DATETIME 表达式的字符串 | timediff('23:59:59.000001','01:01:01.000002') = "22:58:57.999998" |
| timestamp(String datetime_expr1[, String datetime_expr2]) | - 如果 'datetime_expr1' 或 'datetime_expr2' 为 NULL，返回 ""<br/>- 如果只有一个参数：将日期或日期时间表达式 expr 作为日期时间值返回<br/>- 如果有两个参数：返回日期或日期时间表达式 'datetime_expr1' 加上时间表达式 'datetime_expr2' 的结果 | timestamp('2003-12-31 12:00:00.600000','12:00:00') = "2004-01-01 00:00:00.600000" |
| timestamp_add(String unit, Integer interval, String baseDateStr)<br/>timestampadd(String unit, Integer interval, String baseDateStr) | - 如果任一参数为 null，返回 ""<br/>- 返回将整数表达式间隔 interval 添加到日期或日期时间表达式 'baseDateStr' 的结果<br/>注意：'unit' 是以下之一 (MICROSECOND, SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, YEAR) | timestamp_add('MICROSECOND',3,'1970-01-01 00:00:44') = "1970-01-01 00:00:44.000003" |
| timestamp_diff(String unit, String datetime_expr1, String datetime_expr2)<br/>timestampdiff(String unit, String datetime_expr1, String datetime_expr2) | - 如果任一参数为 null，返回 ""<br/>- 返回 'datetime_expr2' − 'datetime_expr1'，其中 'datetime_expr1' 和 'datetime_expr2' 是日期或日期时间表达式<br/>注意：'unit' 是以下之一 (MICROSECOND, SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, QUARTER, YEAR) | timestampdiff('MONTH','2003-02-01','2003-05-01') = 3 |
| to_date(String str [,String format]) | - 如果 'str' 为 NULL，返回 ""<br/>- 将日期字符串 'str' 转换为指定 'format' 格式的日期（默认 'yyyy-MM-dd'） | to_date('20240815', 'yyyyMMdd') = "2024-08-15" |
| to_timestamp(String str [,String format]) | - 如果 'str' 为 NULL，返回 ""<br/>- 在 'UTC+0' 时区下，将日期时间字符串 'str' 转换为指定 'format' 格式（默认未指定则为 yyyy-MM-dd HH:mm:ss）的时间戳 | to_timestamp('1970/01/01 00:00:44', 'yyyy/MM/dd HH:mm:ss') = "1970-01-01 00:00:44.0" |
| unix_timestamp([String dateStr [, String format]]) | - 如果未指定参数，返回当前的 Unix 时间戳（秒）<br/>- 如果指定了参数，将日期时间字符串 'dateStr' 转换为指定 'format' 格式（默认未指定则为 yyyy-MM-dd HH:mm:ss）的 Unix 时间戳（秒） | unix_timestamp('1970/01/01 08:00:44', 'yyyy/MM/dd HH:mm:ss') = 44 |
| week(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 'dateStr' 返回一年中的第几周（1 到 53 之间的整数） | week('2024-02-29') = 9 |
| year(String dateStr) | - 如果 'dateStr' 为 null，返回 ""<br/>- 从 SQL 日期返回年份 | year('2024-08-08') = 2024 |
