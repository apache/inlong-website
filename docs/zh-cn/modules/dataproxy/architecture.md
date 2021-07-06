# 一、说明

	inlong-bus属于inlong proxy层，用于数据的汇集接收以及转发。通过格式转换，将数据转为cache层可以缓存处理的TDMsg1格式
	inlong-bus整体架构基于Apache Flume。inlong-bus在该项目的基础上，扩展了source层和sink层，并对容灾转发做了优化处理，提升了系统的稳定性。


# 二、架构

 	1.Source层开启端口监听，通过netty server实现。解码之后的数据发到channel层
 	2.channel层有一个selector，用于选择走哪种类型的channel，如果memory最终满了，会对数据做落地处理
 	3.channel层的数据会通过sink层做转发，这里主要是将数据转为TDMsg1的格式，并推送到cache层（这里用的比较多的是tube）