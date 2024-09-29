"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[66337],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=i,f=p["".concat(g,".").concat(y)]||p[y]||m[y]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60752:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"1.14.0-SNAPSHOT"}},5882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var a=n(58168),i=(n(96540),n(15680)),r=n(60752);const l={title:"InLongMsg format definition and usage",sidebar_position:1},o=void 0,g={unversionedId:"development/binary_protocol/inlong_msg",id:"development/binary_protocol/inlong_msg",title:"InLongMsg format definition and usage",description:"Overview",source:"@site/docs/development/binary_protocol/inlong_msg.md",sourceDirName:"development/binary_protocol",slug:"/development/binary_protocol/inlong_msg",permalink:"/docs/next/development/binary_protocol/inlong_msg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/binary_protocol/inlong_msg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"InLongMsg format definition and usage",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command-line Tools",permalink:"/docs/next/user_guide/command_line_tools"},next:{title:"Agent binary protocol",permalink:"/docs/next/development/binary_protocol/agent"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"InLongMsg data format",id:"inlongmsg-data-format",level:2},{value:"Format framework",id:"format-framework",level:3},{value:"InLongMsg V1",id:"inlongmsg-v1",level:3},{value:"InLongMsg V2",id:"inlongmsg-v2",level:3},{value:"InLongMsg V3",id:"inlongmsg-v3",level:3},{value:"InLongMsg V4",id:"inlongmsg-v4",level:3},{value:"Parsing messages of type InLongMsg",id:"parsing-messages-of-type-inlongmsg",level:2},{value:"Add Maven dependency",id:"add-maven-dependency",level:3},{value:"Add Parse Method",id:"add-parse-method",level:3}],p={toc:d},m="wrapper";function y(e){let{components:t,...l}=e;return(0,i.yg)(m,(0,a.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"Users report data to the InLong system through SDK, HTTP, Agent and other data reporting methods. InLong's DataProxy component packages the received data into the ",(0,i.yg)("inlineCode",{parentName:"p"},"InLongMsg")," format and stores it in the message body of the MQ message. After consuming data from MQ, users need to decode it according to the ",(0,i.yg)("inlineCode",{parentName:"p"},"InLongMsg")," format to obtain the original reported data. This article mainly introduces the data structure of the ",(0,i.yg)("inlineCode",{parentName:"p"},"InLongMsg")," format and how users parse this type of data after receiving it."),(0,i.yg)("h2",{id:"inlongmsg-data-format"},"InLongMsg data format"),(0,i.yg)("h3",{id:"format-framework"},"Format framework"),(0,i.yg)("p",null,"InLongMsg is a binary data packet in a custom format, which consists of a formatted payload information encapsulated by the same magic number (Magic) of 2 bytes at the front and back, as shown in the following figure:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg frame",src:n(57123).A,width:"737",height:"493"})),(0,i.yg)("p",null,"The Magic field has 4 valid values in the current implementation of InLongMsg, which respectively identify 4 different data versions that can be carried in the Payload part (MAGIC0 is an invalid value):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"    private static final byte[] MAGIC0 = {(byte) 0xf, (byte) 0x0};\n    private static final byte[] MAGIC1 = {(byte) 0xf, (byte) 0x1};\n    private static final byte[] MAGIC2 = {(byte) 0xf, (byte) 0x2};\n    private static final byte[] MAGIC3 = {(byte) 0xf, (byte) 0x3};\n    private static final byte[] MAGIC4 = {(byte) 0xf, (byte) 0x4};\n")),(0,i.yg)("p",null,"The Payload part carries data content in the corresponding format according to the definition of the above Magic field. Regardless of the format used, these contents are ultimately mapped to the original data information reported by the user according to {attribute set, single data} or {attribute set, multiple data}.\nNext, we begin to introduce the corresponding Payload definitions according to different Magic version values."),(0,i.yg)("h3",{id:"inlongmsg-v1"},"InLongMsg V1"),(0,i.yg)("p",null,"For the InLongMsg V1 format, the Magic field value is 0x0f01. In this value, the Payload format is as shown below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg V1",src:n(73093).A,width:"1691",height:"249"})),(0,i.yg)("p",null,"Among them:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"CreatTime: field identifies the construction time of the InLogMsg message;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"AttrDataCnt: field identifies how many {attribute, data} pairs are carried in the message;"))),(0,i.yg)("p",null,"AttrDataCnt The following information is stored in pairs of {attribute, data}"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"AttrLen, AttrData: The fields define the length and value of the attribute information;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemsLen: The field identifies the entire data length information contained in the attribute, and this field contains the length information of the following Compress field;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Compress: The field identifies whether the following data part is compressed. If it is compressed, it is organized in the following format after decompression. InLongMsg currently only supports Snappy data compression;"))),(0,i.yg)("p",null,"Since the attribute may carry multiple data, the data part needs to support multiple data:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemLen: field identifies the length of the data item;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemData: field identifies the data value."))),(0,i.yg)("h3",{id:"inlongmsg-v2"},"InLongMsg V2"),(0,i.yg)("p",null,"For the InLongMsg V2 format, the Magic field value is 0x0f02. When this value is used, the Payload format is as shown in the following figure:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg V2",src:n(45262).A,width:"1856",height:"247"})),(0,i.yg)("p",null,"Compared with the InLongMsg V1 format, the meanings of the other fields of the InLongMsg V2 format are the same as those of the V1 format except for the newly added MsgCnt and ItemCnt fields:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"MsgCnt: used to identify the total number of data items carried by the message;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemCnt: used to identify the total number of data items in the {attribute, data} pair information."))),(0,i.yg)("h3",{id:"inlongmsg-v3"},"InLongMsg V3"),(0,i.yg)("p",null,"For the InLongMsg V3 format, the Magic field value is 0x0f03. When this value is used, the Payload format is as shown in the following figure:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg V3",src:n(44759).A,width:"1918",height:"228"})),(0,i.yg)("p",null,"Compared with InLongMsg V1 and V2 formats, InLongMsg V3 format mainly solves the data reporting situation of {attribute set, multiple data} in the information, and each data carries private attributes. In the V3 format definition, it is completed by adding data private attribute fields to each data part, as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"RecordLen: used to identify the total length of a single data record;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"IAttrLen: used to identify the length of the private attribute carried by a single data;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"IitemAttr: used to identify the private attribute data value carried by a single data."))),(0,i.yg)("h3",{id:"inlongmsg-v4"},"InLongMsg V4"),(0,i.yg)("p",null,"For the InLongMsg V4 format, the Magic field value is 0x0f04. When this value is used, the Payload format is as shown in the following figure:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg V4",src:n(22616).A,width:"1918",height:"172"})),(0,i.yg)("p",null,"Compared with the previous InLongMsg V1, V2, and V3 format definitions, InLongMsg V4 has two improvements:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The fixed fields in the common attributes are extracted from the attribute key-value pairs and saved as fixed fields, thereby reducing the total message length;")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Different bits of some fixed fields carry different values to indicate different function activations or type definitions."))),(0,i.yg)("p",null,"The relevant fields are defined as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"TotalLen: identifies the total length of the entire message;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"MsgType: This field is a composite field that indicates the type and compression type of the message. The lower 5 bits indicate the message type, and the upper 3 bits indicate the compression method. Different bits indicate different meanings;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"GroupId: identifies the ID value corresponding to the group, used when transmitting digital group information;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"StreamId: identifies the ID value corresponding to the stream, used when transmitting digital stream information;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ExtField: identifies the extended function enabling field, used to transmit the extended function enabled by the message, and different bits indicate different meanings. For details, see the ExtField bit definition table;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"DataTime: identifies the data time, with precision in seconds;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"MsgCnt: identifies the total number of messages carried;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"UniqueId: identifies the unique tag of the 8-byte long type of the message;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"BodyLen: identifies the total length of the message body, and identifies the length of the following binary message body data;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"BodyData: identifies the binary message content carried by the message;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"AttrLen: identifies the attribute length;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"AttrData: identifies the attribute value content."))),(0,i.yg)("p",null,"For ExtField field, each bit is defined as follows:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Bit"),(0,i.yg)("th",{parentName:"tr",align:null},"Meaning"),(0,i.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"0"),(0,i.yg)("td",{parentName:"tr",align:null},"reserved"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether each data contains private attributes"),(0,i.yg)("td",{parentName:"tr",align:null},"1 indicates inclusion, 0 indicates exclusion")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"2"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to enable digital group, stream"),(0,i.yg)("td",{parentName:"tr",align:null},"0 indicates enabled, 1 indicates not enabled")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"3"),(0,i.yg)("td",{parentName:"tr",align:null},"reserved"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"4"),(0,i.yg)("td",{parentName:"tr",align:null},"reserved"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"5"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether multiple data are separated by newline characters"),(0,i.yg)("td",{parentName:"tr",align:null},"1 indicates enabled, 0 indicates not enabled")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"6"),(0,i.yg)("td",{parentName:"tr",align:null},"reserved"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"7"),(0,i.yg)("td",{parentName:"tr",align:null},"reserved"),(0,i.yg)("td",{parentName:"tr",align:null})))),(0,i.yg)("p",null,"For BodyData field value, the format is as follows:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"InLongMsg V4 BodyData",src:n(7553).A,width:"489",height:"112"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemLen: identifies the data length;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ItemData: identifies the data value;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"IAttrLen: identifies the private attribute length;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"IitemAttr: identifies the private attribute value."))),(0,i.yg)("h2",{id:"parsing-messages-of-type-inlongmsg"},"Parsing messages of type InLongMsg"),(0,i.yg)("p",null,"The data consumed directly from InLong's message queue (InLong TubeMQ or Pulsar), you need to parse InLongMsg first. You can parse the source data in the following ways."),(0,i.yg)("h3",{id:"add-maven-dependency"},"Add Maven dependency"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>inlong-common</artifactId>\n    <version>${r.l.inLongVersion}</version>\n</dependency>\n`)),(0,i.yg)("h3",{id:"add-parse-method"},"Add Parse Method"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public static List<byte[]> parserInLongMsg(byte[] bytes) {\n    List<byte[]> originalContentByteList = new ArrayList<>();\n    InLongMsg inLongMsg = InLongMsg.parseFrom(bytes);\n    Set<String> attrs = inLongMsg.getAttrs();\n    if (CollectionUtils.isEmpty(attrs)) {\n        return originalContentByteList;\n    }\n    for (String attr : attrs) {\n        if (attr == null) {\n            continue;\n        }\n        Iterator<byte[]> iterator = inLongMsg.getIterator(attr);\n        if (iterator == null) {\n            continue;\n        }\n        while (iterator.hasNext()) {\n            byte[] bodyBytes = iterator.next();\n            if (bodyBytes == null || bodyBytes.length == 0) {\n                continue;\n            }\n            // Origin data sent by InLong reporter\n            originalContentByteList.add(bodyBytes);\n        }\n    }\n    return originalContentByteList;\n}\n")))}y.isMDXComponent=!0},57123:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inlongmsg_frame-760dbc653756379d83917e3680ced411.png"},73093:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inlongmsg_v1-3dab90fa6121bae1ad009a224adcb8e4.png"},45262:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inlongmsg_v2-325419a884ef19665f823e03fb96d3e1.png"},44759:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inlongmsg_v3-15280569a0abbb2882ad6aea293620b2.png"},22616:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inlongmsg_v4-5bdba40b8b80f5e5aa35678d7343f448.png"},7553:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"}}]);