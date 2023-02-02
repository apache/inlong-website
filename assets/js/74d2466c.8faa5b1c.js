"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Hive Example",sidebar_position:2},i=void 0,l={unversionedId:"quick_start/hive_example",id:"version-0.12.0/quick_start/hive_example",title:"Hive Example",description:"Here we use a simple example to help you experience InLong by Docker.",source:"@site/versioned_docs/version-0.12.0/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/docs/0.12.0/quick_start/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/quick_start/hive_example.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"Hive Example",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/0.12.0/quick_start/how_to_build"},next:{title:"Pulsar Example",permalink:"/docs/0.12.0/quick_start/pulsar_example"}},c={},s=[{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data access",id:"create-a-data-access",level:2},{value:"Approve the data access",id:"approve-the-data-access",level:2},{value:"Configure the agent",id:"configure-the-agent",level:2}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here we use a simple example to help you experience InLong by Docker."),(0,r.kt)("h2",{id:"install-hive"},"Install Hive"),(0,r.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,r.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,r.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,r.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.0/deployment/docker"},"instructions here"),".(Recommanded)"),(0,r.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.0/deployment/bare_metal"},"instructions here"),".")),(0,r.kt)("h2",{id:"create-a-data-access"},"Create a data access"),(0,r.kt)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the data streams group information as shown in the figure below.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Group",src:n(26984).Z,width:"828",height:"758"})),(0,r.kt)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Stream",src:n(45273).Z,width:"960",height:"582"})),(0,r.kt)("p",null,'Note that the message source is "File", and we don\'t need to create a message source manually.'),(0,r.kt)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Information",src:n(72642).Z,width:"1501",height:"469"})),(0,r.kt)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive Config",src:n(43385).Z,width:"1194",height:"824"})),(0,r.kt)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,r.kt)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,r.kt)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,r.kt)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,r.kt)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,r.kt)("h2",{id:"configure-the-agent"},"Configure the agent"),(0,r.kt)("p",null,"Here we use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec")," to enter the container of the agent and configure it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker exec -it agent sh\n")),(0,r.kt)("p",null,"Then we create a directory of ",(0,r.kt)("inlineCode",{parentName:"p"},".inlong"),", and new a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"groupid.local")," (Here groupId is group id showed on data access in inlong-manager) and fill in the configuration of Dataproxy as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ mkdir .inlong\n$ cd .inlong\n$ touch b_test.local\n$ echo \'{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":46801,"host":"dataproxy"}], "switch":0}\' >> b_test.local\n')),(0,r.kt)("p",null,"Then we exit the container, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to make a request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "b_test",\n"inlongStreamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,r.kt)("p",null,"At this point, the agent is configured successfully.\nThen we need to create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ touch collect-data/test.log\n$ echo 'test,24' >> collect-data/test.log\n")),(0,r.kt)("p",null,"Then we can observe the logs of agent and dataproxy, and we can see that the relevant data has been sent successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker logs agent\n$ docker logs dataproxy\n")))}d.isMDXComponent=!0},26984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-group-3e0d534bf7696918f427703865a53d69.png"},45273:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-stream-217302a472d9c730b422f1de7a1d554a.png"},72642:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-information-840b6e3b3554bcaed25ba134776577b7.png"},43385:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hive-config-74dec6dfd1d35c6bd9ba81d262abec95.png"}}]);