"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[98786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Hive Example",sidebar_position:2},i=void 0,l={unversionedId:"quick_start/hive_example",id:"version-1.4.0/quick_start/hive_example",title:"Hive Example",description:"Here we use a simple example to help you experience InLong.",source:"@site/versioned_docs/version-1.4.0/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/docs/1.4.0/quick_start/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/quick_start/hive_example.md",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{title:"Hive Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/1.4.0/quick_start/how_to_build"},next:{title:"Pulsar Example",permalink:"/docs/1.4.0/quick_start/pulsar_example"}},c={},s=[{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data access",id:"create-a-data-access",level:2},{value:"Approve the data access",id:"approve-the-data-access",level:2},{value:"Configure the agent file",id:"configure-the-agent-file",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here we use a simple example to help you experience InLong."),(0,r.kt)("h2",{id:"install-hive"},"Install Hive"),(0,r.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,r.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,r.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,r.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.4.0/deployment/docker"},"instructions here"),".(Recommanded)"),(0,r.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.4.0/deployment/bare_metal"},"instructions here"),".")),(0,r.kt)("h2",{id:"create-a-data-access"},"Create a data access"),(0,r.kt)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the data streams group information as shown in the figure below.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Group",src:a(77529).Z,width:"828",height:"758"})),(0,r.kt)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Stream",src:a(15989).Z,width:"960",height:"582"})),(0,r.kt)("p",null,'Note that the message source is "File", you can create a data source manually and configure ',(0,r.kt)("inlineCode",{parentName:"p"},"Agent Address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"File Path"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"File Source",src:a(56814).Z,width:"827",height:"388"})),(0,r.kt)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Information",src:a(48490).Z,width:"1501",height:"469"})),(0,r.kt)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive Config",src:a(77307).Z,width:"1194",height:"824"})),(0,r.kt)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,r.kt)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,r.kt)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,r.kt)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,r.kt)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,r.kt)("h2",{id:"configure-the-agent-file"},"Configure the agent file"),(0,r.kt)("p",null,"Then we need to create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> /data/collect-data/test.log\ndone\n')),(0,r.kt)("p",null,"Then you can observe the Audit Data Pages, and see that the data has been collected and sent successfully."))}u.isMDXComponent=!0},77529:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-group-3e0d534bf7696918f427703865a53d69.png"},15989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-stream-217302a472d9c730b422f1de7a1d554a.png"},48490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-information-840b6e3b3554bcaed25ba134776577b7.png"},56814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-source-46b2dcbc5e869ade504ca5e40c69ce0a.png"},77307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hive-config-74dec6dfd1d35c6bd9ba81d262abec95.png"}}]);