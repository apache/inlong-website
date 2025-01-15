"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[46943],{15680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>N});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},y=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,y=i(t,["components","mdxType","originalType","parentName"]),o=p(a),u=r,N=o["".concat(d,".").concat(u)]||o[u]||m[u]||l;return a?n.createElement(N,g(g({ref:e},y),{},{components:a})):n.createElement(N,g({ref:e},y))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[o]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89336:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"Golang SDK",sidebar_position:4},g=void 0,i={unversionedId:"sdk/dataproxy-sdk/go",id:"version-2.0.0/sdk/dataproxy-sdk/go",title:"Golang SDK",description:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/sdk/dataproxy-sdk/go.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/go",permalink:"/zh-CN/docs/2.0.0/sdk/dataproxy-sdk/go",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/sdk/dataproxy-sdk/go.md",tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{title:"Golang SDK",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HTTP \u4e0a\u62a5",permalink:"/zh-CN/docs/2.0.0/sdk/dataproxy-sdk/http"},next:{title:"Python SDK",permalink:"/zh-CN/docs/2.0.0/sdk/dataproxy-sdk/python"}},d={},p=[{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u5f15\u5165 Golang SDK",id:"\u5f15\u5165-golang-sdk",level:2},{value:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b",level:2},{value:"\u521d\u59cb\u5316 SDK",id:"\u521d\u59cb\u5316-sdk",level:3},{value:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5",level:3},{value:"\u5173\u95ed SDK",id:"\u5173\u95ed-sdk",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9519\u8bef",id:"\u9519\u8bef",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u6307\u6807",id:"\u6307\u6807",level:2}],y={toc:p},o="wrapper";function m(t){let{components:e,...a}=t;return(0,r.yg)(o,(0,n.A)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,r.yg)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,r.yg)("h2",{id:"\u5f15\u5165-golang-sdk"},"\u5f15\u5165 Golang SDK"),(0,r.yg)("p",null,"\u9700\u8981\u5728\u9879\u76ee\u4e2d\u5bfc\u5165 SDK \u7684\u5305\uff0c\u8fdb\u884c SDK \u7684\u4f7f\u7528\u3002\u5bfc\u5165\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/inlong/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy"\n')),(0,r.yg)("h2",{id:"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"},"\u6570\u636e\u4e0a\u62a5\u6d41\u7a0b"),(0,r.yg)("p",null,"\u5bfc\u5165 SDK \u540e\uff0c\u901a\u8fc7\u5b9e\u4f8b\u5316\u4e00\u4e2a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/client.go"},"Client")," \u63a5\u53e3\u5bf9\u8c61\u540e\uff0c\u8c03\u7528\u76f8\u5173\u7684\u540c\u6b65\uff08 ",(0,r.yg)("inlineCode",{parentName:"p"},"Send()")," \uff09\u6216 \u5f02\u6b65\uff08 ",(0,r.yg)("inlineCode",{parentName:"p"},"SendAsync()")," \uff09\u63a5\u53e3\u6765\u5b8c\u6210\u5355\u6761\u6570\u636e\u7684\u4e0a\u62a5\u4efb\u52a1\uff0cSDK \u5185\u90e8\u4f1a\u6839\u636e StreamID \u5c06\u76f8\u540c StreamID \u7684\u6570\u636e\u6279\u91cf\u4e0a\u62a5\u3002\u53d1\u9001 Demo \u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/example_test.go"},"example_test.go"),"\u3002\n\u6574\u4f53\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,r.yg)("h3",{id:"\u521d\u59cb\u5316-sdk"},"\u521d\u59cb\u5316 SDK"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'client, err := dataproxy.NewClient(\n    dataproxy.WithGroupID("test"),              \ndataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList"),\n    dataproxy.WithMetricsName("test"),\n)\n\nif err != nil {\n    fmt.Println(err)\n    return\n}\n')),(0,r.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithGroupID("test")')," \u8bbe\u7f6e\u4e86 GroupID \uff1b"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithURL("http://127.0.0.1:8083/inlong/manager/openapi/dataproxy/getIpList")')," \u8bbe\u7f6e\u4e86 Manager \u7684 URL \uff1b"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'dataproxy.WithMetricsName("test")')," \u8bbe\u7f6e\u4e86\u8fd9\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"Client"),' \u7684\u6307\u6807\u4e2d\u6807\u7b7e "name" \u7684\u503c\uff1b')),(0,r.yg)("h3",{id:"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"},"\u8c03\u7528\u53d1\u9001\u63a5\u53e3\u8fdb\u884c\u6570\u636e\u4e0a\u62a5"),(0,r.yg)("p",null,"SDK \u7684\u6570\u636e\u53d1\u9001\u63a5\u53e3\u662f\u534f\u7a0b\u5b89\u5168\u7684\uff0c\u652f\u6301\u4ee5\u540c\u6b65\u6216\u8005\u5f02\u6b65\u6a21\u5f0f\u53d1\u9001\u5355\u6761\u6570\u636e\u3002Demo \u91cc\u6709\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u4e5f\u6709\u5f02\u6b65\u7684\u65b9\u5f0f\u3002"),(0,r.yg)("p",null,"\u540c\u6b65\u65b9\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'for i := 0; i < 1000; i++ {\n    err := client.Send(context.Background(), dataproxy.Message{\n        GroupID:  "test",\n        StreamID: "test",\n        Payload:  []byte("test|a|b|c"),\n    })\n    if err !=nil {\n        fmt.Println(err)\n    }\n}\n')),(0,r.yg)("p",null,"\u5f02\u6b65\u65b9\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'var success atomic.Uint64\nvar failed atomic.Uint64\nfor i := 0; i < 1000; i++ {\n    client.SendAsync(context.Background(),\n        dataproxy.Message{\n            GroupID:  "test",\n            StreamID: "test",\n            Payload:  []byte("test|a|b|c"),\n        },\n        func(msg dataproxy.Message, err error) {\n            if err != nil {\n                success.Add(1)\n            } else {\n                failed.Add(1)\n            }\n        })\n}\n\n// wait async send finish\ntime.Sleep(3 * time.Second)\nfmt.Println("success:", success.Load())\nfmt.Println("failed:", failed.Load())\n')),(0,r.yg)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5f02\u6b65\u7684\u65b9\u5f0f\u53d1\u9001\uff0c\u56e0\u4e3a\u540c\u6b65\u65b9\u5f0f\u662f\u65e0\u5e76\u53d1\u7684\uff0c\u8c03\u7528\u53d1\u9001\u8bf7\u6c42\u540e\u9700\u8981\u7b49\u5230\u54cd\u5e94\u6216\u8005\u8d85\u65f6\uff0c\u624d\u80fd\u53d1\u4e0b\u4e00\u6761\uff0c\u5728\u9700\u8981\u9ad8\u541e\u5410\u91cf\u7684\u573a\u666f\u662f\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u7684\u3002"),(0,r.yg)("h3",{id:"\u5173\u95ed-sdk"},"\u5173\u95ed SDK"),(0,r.yg)("p",null,"\u5173\u95ed SDK \u53ea\u9700\u8981\u7b80\u5355\u7684\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Close()")," \u65b9\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"client.Close()\n")),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GroupID")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"URL")," \u662f SDK \u521d\u59cb\u5316\u5fc5\u9009\u7684\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithGroupID()")," \u548c\n",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithURL()")," \u6765\u8bbe\u7f6e\u8fd9\u4e9b\u914d\u7f6e\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u5f53\u4f60\u5728\u4e00\u4e2a\u8fdb\u7a0b\u91cc\u521d\u59cb\u5316\u591a\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"Client")," \u5b9e\u4f8b\u65f6\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"MetricsName")," \u5fc5\u987b\u914d\u7f6e\u4e0d\u540c\u7684\u540d\u79f0\uff0c\u5426\u5219\u6307\u6807\u67e5\u8be2\u5c06\u4f1a\u5931\u8d25\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"dataproxy.WithMetricsName()")," \u6765\u8bbe\u7f6e\u5b83\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u7684\u9ed8\u8ba4\u914d\u7f6e\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u8fd0\u8425\u9700\u6c42\uff0c\u9664\u975e\u4f60\u9700\u8981\u8c03\u5927\u6216\u8005\u8c03\u5c0f\u914d\u7f6e\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u66f4\u6539\u5176\u4ed6\u914d\u7f6e\uff0c\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c\u8bf7\u53c2\u8003\u540e\u9762\u7684\u7ae0\u8282\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u7684\u540c\u6b65\u53d1\u9001\u65b9\u6cd5 ",(0,r.yg)("inlineCode",{parentName:"li"},"Send()")," \u662f\u65e0\u5e76\u53d1\u7684\uff0c\u5728\u53d1\u9001\u4e00\u4e2a\u6d88\u606f\u540e\uff0c\u9700\u8981\u7b49\u5f85\u54cd\u5e94\u6216\u8005\u7b49\u5f85\u5230\u8d85\u65f6\u624d\u4f1a\u8fd4\u56de\uff0c\u975e\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u4e0d\u5efa\u8bae\u4f7f\u7528\u540c\u6b65\u65b9\u6cd5\uff1b"),(0,r.yg)("li",{parentName:"ul"},"SDK \u9ed8\u8ba4\u4f1a\u5bf9\u6d88\u606f\u8fdb\u884c2\u6b21\u91cd\u4f20\uff0c\u5982\u679c\u4f9d\u7136\u5931\u8d25\uff0c\u9700\u8981\u8c03\u7528\u8005\u6765\u51b3\u5b9a\u5982\u4f55\u505a\u4e0b\u4e00\u6b65\u5904\u7406\u3002")),(0,r.yg)("h2",{id:"\u9519\u8bef"},"\u9519\u8bef"),(0,r.yg)("p",null,"\u5e38\u89c1\u9519\u8bef\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u9519\u8bef"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("URL is not given")'),(0,r.yg)("td",{parentName:"tr",align:null},"Manager URL  \u672a\u8bbe\u7f6e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("group ID is not given")'),(0,r.yg)("td",{parentName:"tr",align:null},"GroupID\u672a\u8bbe\u7f6e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("invalid URL")'),(0,r.yg)("td",{parentName:"tr",align:null},"Manager URL \u975e\u6cd5\uff0c\u53ef\u80fd\u4e3a\u7a7a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("invalid group ID")'),(0,r.yg)("td",{parentName:"tr",align:null},"GroupID \u975e\u6cd5\uff0c\u53ef\u80fd\u4e3a\u7a7a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("service has no endpoints")'),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u65e0\u7aef\u70b9\uff0c\u670d\u52a1\u53d1\u73b0\u5931\u8d25")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errors.New("no available worker")'),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u53ef\u7528\u5de5\u4f5c\u8005\uff0c\u5de5\u4f5c\u8005\u5fd9\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10001, strCode: "10001", message: "message send timeout"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8d85\u65f6\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10002, strCode: "10002", message: "message send failed"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10003, strCode: "10003", message: "producer already been closed"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u8005\u5df2\u5173\u95ed\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10004, strCode: "10004", message: "producer send queue is full"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u961f\u5217\u6ee1\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10005, strCode: "10005", message: "message context expired"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u961f\u5217\u6ee1\uff0c\u8d85\u65f6\u90fd\u672a\u7b49\u5230\u7a7a\u95f2\u4f4d\u7f6e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'errNo{code: 10010, strCode: "10010", message: "input log is invalid"}'),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u7684\u6570\u636e\u975e\u6cd5\uff0c\u53ef\u80fd\u4e3a\u7a7a\u3002")))),(0,r.yg)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53ef\u9009"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithGroupID()"),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eGroupID"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithURL()"),(0,r.yg)("td",{parentName:"tr",align:null},'""'),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e Manager \u7684URL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithUpdateInterval()"),(0,r.yg)("td",{parentName:"tr",align:null},"5m"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u670d\u52a1\u53d1\u73b0\u7684\u66f4\u65b0\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithConnTimeout()"),(0,r.yg)("td",{parentName:"tr",align:null},"3000ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fde\u63a5\u8d85\u65f6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"8M"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5199\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithReadBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"1M"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bfb\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSocketSendBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"8M"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7f51\u7edc\u53d1\u9001\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSocketRecvBufferSize"),(0,r.yg)("td",{parentName:"tr",align:null},"1M"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7f51\u7edc\u63a5\u6536\u7f13\u51b2\u533a\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBufferPool"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7f13\u51b2\u6c60"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\uff0c\u5982\u679c\u5e94\u7528\u6709\uff0c\u5efa\u8bae\u5171\u7528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePool"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5185\u5b58\u6c60"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\uff0c\u5982\u679c\u5e94\u7528\u6709\uff0c\u5efa\u8bae\u5171\u7528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBufferPoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"409600"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7f13\u51b2\u6c60\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"409600"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5185\u5b58\u6c60\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBytePoolWidth"),(0,r.yg)("td",{parentName:"tr",align:null},"\u540cBatchingMaxSize"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5185\u5b58\u6c60\u5bbd\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithLogger"),(0,r.yg)("td",{parentName:"tr",align:null},"std.out"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8c03\u8bd5\u65e5\u5fd7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\uff0c\u4e0d\u5efa\u8bae\uff0c\u9ed8\u8ba4\u7684\u65e5\u5fd7\u6ca1\u6709\u65e5\u5fd7\u7ea7\u522b\u63a7\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMetricsName"),(0,r.yg)("td",{parentName:"tr",align:null},'"dataproxy-go"'),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6307\u6807\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\u5316\u4e86\u591a\u4e2a client \uff0c\u5fc5\u987b\u914d\u7f6e\u4e0d\u4e00\u6837\u7684\u6307\u6807\u540d\uff0c\u5426\u5219\u6307\u6807\u83b7\u53d6\u4f1a\u5931\u8d25")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMetricsRegistry"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus.DefaultRegisterer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6307\u6807\u5b58\u50a8\u5668"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithWorkerNum"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5de5\u4f5c\u8005\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithSendTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"30000ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u53d1\u9001\u8d85\u65f6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMaxRetries"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u91cf\u5927\u91cd\u8bd5\u6b21\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxPublishDelay"),(0,r.yg)("td",{parentName:"tr",align:null},"20ms"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6d88\u606f\u53d1\u9001\u5ef6\u8fdf\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\uff0c\u4e0d\u80fd\u6784\u6210\u4e00\u4e2a\u6279\u6b21\u4e5f\u4f1a\u53d1\u9001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6279\u6b21\u6d88\u606f\u6761\u6570\uff0c\u8fbe\u5230\u6761\u6570\u5373\u6279\u91cf\u53d1\u9001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBatchingMaxSize"),(0,r.yg)("td",{parentName:"tr",align:null},"40K"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6279\u6b21\u5927\u5c0f\uff0c\u8fbe\u5230\u8be5\u5927\u5c0f\u5373\u6279\u91cf\u53d1\u9001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithMaxPendingMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"204800"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6bcf\u4e2a\u5de5\u4f5c\u8005\u961f\u5217\u5927\u5c0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithBlockIfQueueIsFull"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u961f\u5217\u6ee1\u662f\u5426\u963b\u585e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WithAddColumns"),(0,r.yg)("td",{parentName:"tr",align:null},"nil"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9644\u52a0\u5b57\u6bb5\uff0cDataProxy \u652f\u6301\u5728\u6d88\u606f\u6307\u5b9a\u7684\u4f4d\u7f6e\u589e\u52a0\u5b57\u6bb5\uff0c\u5982 ","_","_","addcol1","_","_","worldid=xxx \u8868\u793a\u6240\u6709\u7684\u6d88\u606f\u7684\u7b2c\u4e00\u5217\u90fd\u662f worldid\uff0c\u503c\u4e3a xxx \u7684"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.yg)("p",null,"\u914d\u7f6e\u9879\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/options.go"},"options.go")),(0,r.yg)("h2",{id:"\u6307\u6807"},"\u6307\u6807"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6807\u7b7e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_error_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"code\uff1a\u9519\u8bef\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u53d1\u751f\u7684\u9519\u8bef\u6b21\u6570\u53ca\u9519\u8bef\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_retry_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"worker\uff1a\u5de5\u4f5c\u8005 ID"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u53d1\u751f\u7684\u91cd\u8bd5\u6b21\u6570\u53ca\u5de5\u4f5c\u8005 ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_timeout_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"worker\uff1a\u5de5\u4f5c\u8005 ID"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u53d1\u751f\u7684\u8d85\u65f6\u6b21\u6570\u53ca\u5de5\u4f5c\u8005ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_msg_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"code\uff1a\u9519\u8bef\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u5904\u7406\u7684\u6d88\u606f\u6570\u91cf\u548c\u5904\u7406\u7ed3\u679c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_update_conn_count"),(0,r.yg)("td",{parentName:"tr",align:null},"counter"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"code\uff1a\u9519\u8bef\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u53d1\u751f\u7684\u8fde\u63a5\u66f4\u65b0\u6b21\u6570\u548c\u9519\u8bef\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_pending_msg_gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"worker\uff1a\u5de5\u4f5c\u8005 ID"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u6392\u961f\u4e2d\u7684\u6d88\u606f\u6570\u91cf\u53ca\u5de5\u4f5c\u8005  ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"code\uff1a\u9519\u8bef\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u6bcf\u4e2a\u6279\u6b21\u7684\u5927\u5c0f\u548c\u9519\u8bef\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_proxy_batch_time"),(0,r.yg)("td",{parentName:"tr",align:null},"histogram"),(0,r.yg)("td",{parentName:"tr",align:null},"name\uff1a\u540d\u79f0",(0,r.yg)("br",null),"code\uff1a\u9519\u8bef\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u6bcf\u4e2a\u6279\u6b21\u7684\u5ef6\u8fdf\u548c\u9519\u8bef\u7801")))),(0,r.yg)("p",null,"\u6307\u6807\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/metrics.go"},"metrics.go")),(0,r.yg)("p",null,"\u9519\u8bef\u7801\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-golang/dataproxy/worker.go"},"worker.go")))}m.isMDXComponent=!0}}]);