"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6102],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),s=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return l.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=s(n),p=a,h=k["".concat(d,".").concat(p)]||k[p]||c[p]||r;return n?l.createElement(h,o(o({ref:e},u),{},{components:n})):l.createElement(h,o({ref:e},u))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71929:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],i={title:"Elasticsearch",sidebar_position:8},d=void 0,s={unversionedId:"data_node/load_node/elasticsearch",id:"data_node/load_node/elasticsearch",title:"Elasticsearch",description:"Elasticsearch Load Node",source:"@site/docs/data_node/load_node/elasticsearch.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/elasticsearch",permalink:"/docs/next/data_node/load_node/elasticsearch",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/data_node/load_node/elasticsearch.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Elasticsearch",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"ClickHouse",permalink:"/docs/next/data_node/load_node/clickhouse"},next:{title:"Greenplum",permalink:"/docs/next/data_node/load_node/greenplum"}},u={},c=[{value:"Elasticsearch Load Node",id:"elasticsearch-load-node",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"How to create an Elasticsearch Load Node",id:"how-to-create-an-elasticsearch-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Elasticsearch Load Node Options",id:"elasticsearch-load-node-options",level:2},{value:"Features",id:"features",level:2},{value:"Key Handling",id:"key-handling",level:3},{value:"Dynamic Index",id:"dynamic-index",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],k={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"elasticsearch-load-node"},"Elasticsearch Load Node"),(0,r.kt)("p",null,"The Elasticsearch Load Node allows for writing into an index of the Elasticsearch engine. This document describes how to setup the Elasticsearch Load Node to run SQL queries against Elasticsearch."),(0,r.kt)("p",null,"The Load Node can operate in upsert mode for exchanging UPDATE/DELETE messages with the external system using the primary key defined on the DDL."),(0,r.kt)("p",null,"If no primary key is defined on the DDL, the Load Node can only operate in append mode for exchanging INSERT only messages with external system."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/elasticsearch"},"elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x")))),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to use the Elasticsearch Load Node the following dependencies are required for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elasticsearch 6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch6</artifactId>\n    <version>inlong_version</version>\n</dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elasticsearch 7")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-elasticsearch7</artifactId>\n    <version>inlong_version</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"how-to-create-an-elasticsearch-load-node"},"How to create an Elasticsearch Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"The example below shows how to create an Elasticsearch Load Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE myUserTable (\n  user_id STRING,\n  user_name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  PRIMARY KEY (user_id) NOT ENFORCED\n) WITH (\n  'connector' = 'elasticsearch-7',\n  'hosts' = 'http://localhost:9200',\n  'index' = 'users'\n);\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"elasticsearch-load-node-options"},"Elasticsearch Load Node Options"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,r.kt)("th",{class:"text-center",style:{width:"8%"}},"Required"),(0,r.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,r.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,r.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connector")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Specify what connector to use, valid values are:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"elasticsearch-6"),": connect to Elasticsearch 6.x cluster."),(0,r.kt)("li",null,(0,r.kt)("code",null,"elasticsearch-7"),": connect to Elasticsearch 7.x and later versions cluster.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"hosts")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"One or more Elasticsearch hosts to connect to, e.g. ",(0,r.kt)("code",null,"'http://host_name:9092;http://host_name:9093'"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"index")),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch index for every record. Can be a static index (e.g. ",(0,r.kt)("code",null,"'myIndex'"),") or a dynamic index (e.g. ",(0,r.kt)("code",null,"'index-\\","{log_ts|yyyy-MM-dd}","'"),"). See the following ",(0,r.kt)("a",{href:"#dynamic-index"},"Dynamic Index")," section for more details.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"document-type")),(0,r.kt)("td",null,"required in 6.x"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch document type. Not necessary anymore in ",(0,r.kt)("code",null,"elasticsearch-7"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"document-id.key-delimiter")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"_"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'Delimiter for composite keys ("_" by default), e.g., "$" would result in IDs "KEY1$KEY2$KEY3".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"username")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Username used to connect to Elasticsearch instance. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the ",(0,r.kt)("a",{href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/configuring-security.html"},"guideline")," to secure an Elasticsearch cluster.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"password")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Password used to connect to Elasticsearch instance. If ",(0,r.kt)("code",null,"username")," is configured, this option must be configured with non-empty string as well.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"failure-handler")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"fail"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Failure handling strategy in case a request to Elasticsearch fails. Valid strategies are:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"fail"),": throws an exception if a request fails and thus causes a job failure."),(0,r.kt)("li",null,(0,r.kt)("code",null,"ignore"),": ignores failures and drops the request."),(0,r.kt)("li",null,(0,r.kt)("code",null,"retry-rejected"),": re-adds requests that have failed due to queue capacity saturation."),(0,r.kt)("li",null,"custom class name: for failure handling with a ActionRequestFailureHandler subclass.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.flush-on-checkpoint")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"true"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"Flush on checkpoint or not. When disabled, a sink will not wait for all pending action requests to be acknowledged by Elasticsearch on checkpoints. Thus, a sink does NOT provide any strong guarantees for at-least-once delivery of action requests.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.max-actions")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1000"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"Maximum number of buffered actions per bulk request. Can be set to ",(0,r.kt)("code",null,"'0'")," to disable it.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.max-size")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"2mb"),(0,r.kt)("td",null,"MemorySize"),(0,r.kt)("td",null,"Maximum size in memory of buffered actions per bulk request. Must be in MB granularity. Can be set to ",(0,r.kt)("code",null,"'0'")," to disable it.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.interval")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1s"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"The interval to flush buffered actions. Can be set to ",(0,r.kt)("code",null,"'0'")," to disable it. Note, both ",(0,r.kt)("code",null,"'sink.bulk-flush.max-size'")," and ",(0,r.kt)("code",null,"'sink.bulk-flush.max-actions'"),"can be set to ",(0,r.kt)("code",null,"'0'")," with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.strategy")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"DISABLED"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Specify how to perform retries if any flush actions failed due to a temporary request error. Valid strategies are:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"DISABLED"),": no retry performed, i.e. fail after the first request error."),(0,r.kt)("li",null,(0,r.kt)("code",null,"CONSTANT"),": wait for backoff delay between retries."),(0,r.kt)("li",null,(0,r.kt)("code",null,"EXPONENTIAL"),": initially wait for backoff delay and increase exponentially between retries.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.max-retries")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"8"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"Maximum number of backoff retries.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.bulk-flush.backoff.delay")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"50ms"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"Delay between each backoff attempt. For ",(0,r.kt)("code",null,"CONSTANT")," backoff, this is simply the delay between each retry. For ",(0,r.kt)("code",null,"EXPONENTIAL")," backoff, this is the initial base delay.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connection.max-retry-timeout")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"Maximum timeout between retries.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connection.path-prefix")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Prefix string to be added to every REST communication, e.g., ",(0,r.kt)("code",null,"'/v1'"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"format")),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"json"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Elasticsearch connector supports to specify a format. The format must produce a valid json document. By default uses built-in ",(0,r.kt)("code",null,"'json'")," format. Please refer to ",(0,r.kt)("a",{href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"JSON Format")," page for more details.")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"key-handling"},"Key Handling"),(0,r.kt)("p",null,"Elasticsearch sink can work in either upsert mode or append mode, it depends on whether primary key is defined.\nIf primary key is defined, Elasticsearch sink works in upsert mode which can consume queries containing UPDATE/DELETE messages.\nIf primary key is not defined, Elasticsearch sink works in append mode which can only consume queries containing INSERT only messages."),(0,r.kt)("p",null,"In Elasticsearch connector, the primary key is used to calculate the Elasticsearch document id, which is a string of up to 512 bytes. It cannot have whitespaces.\nThe Elasticsearch connector generates a document ID string for every row by concatenating all primary key fields in the order defined in the DDL using a key delimiter specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"document-id.key-delimiter"),".\nCertain types are not allowed as primary key field as they do not have a good string representation, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"BYTES"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ROW"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ARRAY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MAP"),", etc.\nIf no primary key is specified, Elasticsearch will generate a document id automatically."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/table/sql/create/#create-table"},"CREATE TABLE DDL")," for more details about PRIMARY KEY syntax."),(0,r.kt)("h3",{id:"dynamic-index"},"Dynamic Index"),(0,r.kt)("a",{name:"dynamic-index"}),(0,r.kt)("p",null,"Elasticsearch Load Node supports both static index and dynamic index."),(0,r.kt)("p",null,"If you want to have a static index, the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," option value should be a plain string, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"'myusers'"),', all the records will be consistently written into "myusers" index.'),(0,r.kt)("p",null,"If you want to have a dynamic index, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"{field_name}")," to reference a field value in the record to dynamically generate a target index.\nYou can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"'{field_name|date_format_string}'")," to convert a field value of ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMESTAMP/DATE/TIME")," type into the format specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"date_format_string"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"date_format_string")," is compatible with Java's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/index.html"},"DateTimeFormatter"),".\nFor example, if the option value is ",(0,r.kt)("inlineCode",{parentName:"p"},"'myusers-{'{log_ts|yyyy-MM-dd}'}'"),", then a record with ",(0,r.kt)("inlineCode",{parentName:"p"},"log_ts")," field value ",(0,r.kt)("inlineCode",{parentName:"p"},"2020-03-27 12:25:55"),' will be written into "myusers-2020-03-27" index.'),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"JSON type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,(0,r.kt)("code",null,"CHAR / VARCHAR / STRING"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BOOLEAN"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with encoding: base64")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BINARY / VARBINARY"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DECIMAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TINYINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"SMALLINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"INT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"BIGINT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"FLOAT"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DOUBLE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date")),(0,r.kt)("td",null,(0,r.kt)("code",null,"DATE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: time")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIME"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date-time")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIMESTAMP"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"string with format: date-time (with UTC time zone)")),(0,r.kt)("td",null,(0,r.kt)("code",null,"TIMESTAMP_WITH_LOCAL_TIME_ZONE"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"INTERVAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"array")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ARRAY"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("code",null,"MAP / MULTISET"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"object")),(0,r.kt)("td",null,(0,r.kt)("code",null,"ROW"))))))}p.isMDXComponent=!0}}]);