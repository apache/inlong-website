# 1、intro

    Inlong-bus belongs to the inlong proxy layer and is used for data collection, reception and forwarding. Through format conversion, the data is converted into TDMsg1 format that can be cached and processed by the cache layer
    The overall architecture of inlong-bus is based on Apache Flume. On the basis of this project, inlong-bus expands the source layer and sink layer, and optimizes disaster tolerance forwarding, which improves the stability of the system.


# 2、architecture

 	1. The source layer opens port monitoring, which is realized through netty server. The decoded data is sent to the channel layer
 	2. The channel layer has a selector, which is used to choose which type of channel to go. If the memory is eventually full, the data will be processed.
 	3. The data of the channel layer will be forwarded through the sink layer. The main purpose here is to convert the data to the TDMsg1 format and push it to the cache layer (tube is more commonly used here)
