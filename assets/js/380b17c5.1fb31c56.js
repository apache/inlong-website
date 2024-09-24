"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7840],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={title:"Agent Plugin",sidebar_position:3},o=void 0,s={unversionedId:"design_and_concept/how_to_write_plugin_agent",id:"version-1.13.0/design_and_concept/how_to_write_plugin_agent",title:"Agent Plugin",description:"Summary",source:"@site/versioned_docs/version-1.13.0/design_and_concept/how_to_write_plugin_agent.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_agent",permalink:"/docs/design_and_concept/how_to_write_plugin_agent",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/design_and_concept/how_to_write_plugin_agent.md",tags:[],version:"1.13.0",sidebarPosition:3,frontMatter:{title:"Agent Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Format",permalink:"/docs/design_and_concept/the_format_in_inlong"},next:{title:"Sort Plugin",permalink:"/docs/design_and_concept/how_to_extend_data_node_for_sort"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Task and Instance",id:"task-and-instance",level:3},{value:"Source and Sink",id:"source-and-sink",level:3},{value:"Development process (taking Pulsar as an example)",id:"development-process-taking-pulsar-as-an-example",level:2},{value:"Process",id:"process",level:3},{value:"Add Task",id:"add-task",level:3},{value:"Add Instance",id:"add-instance",level:3},{value:"Add Source",id:"add-source",level:3},{value:"Add TaskPojo",id:"add-taskpojo",level:3},{value:"Task configuration",id:"task-configuration",level:2},{value:"Offset control",id:"offset-control",level:2},{value:"Test",id:"test",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...i}=e;return(0,r.yg)(u,(0,a.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"In Standard Architecture, we can collect various types of data sources through the InLong Agent. The InLong Agent supports the extension of new collection types through plugins. This article will guide developers on how to customize the new Agent collection data source plugin."),(0,r.yg)("h2",{id:"concepts"},"Concepts"),(0,r.yg)("h3",{id:"task-and-instance"},"Task and Instance"),(0,r.yg)("p",null,"Task and Instance are the two core concepts of Agent. Simple understanding: Task corresponds to a collection task configured on the management platform, while Instance is a specific collection instance generated by Task. For example, there is a collection task configuration on the management platform: ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1 -> /data/log/YYMMDDhh.log._[0-9]+"),", which means that the user needs to access the machine ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," collect data that conforms to the path rule ",(0,r.yg)("inlineCode",{parentName:"p"},"/data/log/YYMMDDhh.log._[0-9]+"),". ",(0,r.yg)("strong",{parentName:"p"},"This is a Task"),". This Task will search for files that meet the conditions based on this path rule, and generate a corresponding Instance for each file that meets the conditions, for example, ",(0,r.yg)("inlineCode",{parentName:"p"},"/data/log/2024040221.log.0, /data/log /2024040221.log.1, /data/log/2024040221.log.3")," 3 files, then the Task will generate 3 Instances to collect data from these three files respectively.\n",(0,r.yg)("img",{src:t(47121).A,width:"1036",height:"590"})),(0,r.yg)("h3",{id:"source-and-sink"},"Source and Sink"),(0,r.yg)("p",null,"Source and Sink are lower-level concepts of Instance. They can be simply understood as each Instance has a Source and a Sink. As the name suggests, Source is used to read data from the data source; Sink is used to write data to the target storage."),(0,r.yg)("h2",{id:"development-process-taking-pulsar-as-an-example"},"Development process (taking Pulsar as an example)"),(0,r.yg)("h3",{id:"process"},"Process"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Task: implement logic such as initialization, destruction, configuration verification, etc."),(0,r.yg)("li",{parentName:"ul"},"Add Instance: implements logic such as node information setting."),(0,r.yg)("li",{parentName:"ul"},"Add Source: implements logic such as initialization, destruction, data collection, and data provision."),(0,r.yg)("li",{parentName:"ul"},"Add Sink: implement logic such as initialization, destruction, data input, data output (this article only focuses on new data sources, Sink will not be introduced, the default Sink is ProxySink)."),(0,r.yg)("li",{parentName:"ul"},"Add TaskPojo: handles the differences between Agent and Manager fields and binds Task, Source, etc.")),(0,r.yg)("h3",{id:"add-task"},"Add Task"),(0,r.yg)("p",null,"Here we need to add a PulsarTask class to org.apache.inlong.agent.plugin.task."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class PulsarTask extends AbstractTask {\n\n    @Override\n    public boolean isProfileValid(TaskProfile profile) {\n        return false;\n    }\n\n    @Override\n    protected void initTask() {\n\n    }\n\n    @Override\n    protected List<InstanceProfile> getNewInstanceList() {\n        return null;\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"initTask: initialization. For example, file collection can start folder monitoring during initialization."),(0,r.yg)("li",{parentName:"ul"},"isProfilevalid: determine whether the task configuration is legal. The configuration of each type of task will have different restrictions, which can be implemented here."),(0,r.yg)("li",{parentName:"ul"},"releaseTask: release task resources. For example, file collection can cancel folder monitoring here."),(0,r.yg)("li",{parentName:"ul"},"getNewInstanceList: get a new instance. For example, when collecting files, it is found that there are new files that can be collected.")),(0,r.yg)("h3",{id:"add-instance"},"Add Instance"),(0,r.yg)("p",null,"Add the PulsarInstance class in ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.plugin.instance"),". This class will be relatively idle because the main logic is in the CommonInstance base class. Its function is to create Source and Sink, read data from Source, and then write it to Sink. We only need to implement the setInodeInfo interface here. Except for FileInstance, which needs to set the Inode Info of the file, the other Instance classes only need to be set to empty strings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'public class PulsarInstance extends CommonInstance {\n\n    @Override\n    public void setInodeInfo(InstanceProfile profile) {\n        profile.set(TaskConstants.INODE_INFO, "");\n    }\n}\n')),(0,r.yg)("h3",{id:"add-source"},"Add Source"),(0,r.yg)("p",null,"Add the PulsarSource class to `org.apache.inlong.agent.plugin.sources:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class PulsarSource extends AbstractSource {\n\n    @Override\n    public boolean sourceExist() {\n        return false;\n    }\n\n    @Override\n    protected void initSource(InstanceProfile profile) {\n\n    }\n\n    @Override\n    protected void printCurrentState() {\n\n    }\n\n    @Override\n    protected boolean doPrepareToRead() {\n        return false;\n    }\n\n    @Override\n    protected List<SourceData> readFromSource() {\n        return null;\n    }\n\n    @Override\n    protected String getThreadName() {\n        return null;\n    }\n\n    @Override\n    protected boolean isRunnable() {\n        return false;\n    }\n\n    @Override\n    protected void releaseSource() {\n\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"initSource: initialize the basic resource of this data source."),(0,r.yg)("li",{parentName:"ul"},"sourceExist: returns whether the current data source exists, for example, whether the file was deleted during file collection."),(0,r.yg)("li",{parentName:"ul"},"printCurrentState: prints the current collection status and is called regularly."),(0,r.yg)("li",{parentName:"ul"},"doPrepareToRead: you can do some checks before reading data, such as whether the file is overwritten during file collection."),(0,r.yg)("li",{parentName:"ul"},"readFromSource: actually reads data from the data source, such as consuming data from Kafka SDK and Pulsar SDK."),(0,r.yg)("li",{parentName:"ul"},"getThreadName: get the worker thread name of the data source."),(0,r.yg)("li",{parentName:"ul"},"isRunnable: returns whether this data source should continue."),(0,r.yg)("li",{parentName:"ul"},"releaseSource: release the resources of the data source.")),(0,r.yg)("h3",{id:"add-taskpojo"},"Add TaskPojo"),(0,r.yg)("p",null,"Add the PulsarTask class in ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.pojo"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class PulsarTask {\n\n    private String topic;\n    private String subscription;\n\n    public static class PulsarTaskConfig {\n\n        private String topic;\n        private String subscription;\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The field names in PulsarTaskConfig are the names passed by the Manager and must be consistent with the field names defined by the Manager."),(0,r.yg)("li",{parentName:"ul"},"The field names and types in PulsarTask are the ones required by the Agent.")),(0,r.yg)("h2",{id:"task-configuration"},"Task configuration"),(0,r.yg)("p",null,"From the above, we can see that we have created new classes such as Task, Instance, Source, etc., and task configuration is to connect these classes together."),(0,r.yg)("p",null,"Bind Task, Source, etc. to Pulsar in ",(0,r.yg)("inlineCode",{parentName:"p"},"convertToTaskProfile")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.pojo.TaskProfileDto")," class:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"case PULSAR:\n    task.setTaskClass(DEFAULT_PULSAR_TASK);\n    PulsarTask pulsarTask = getPulsarTask(dataConfig);\n    task.setPulsarTask(pulsarTask);\n    task.setSource(PULSAR_SOURCE);\n    profileDto.setTask(task);\n    break;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"task.source: Source class specified."),(0,r.yg)("li",{parentName:"ul"},"task.sink: Sink class specified."),(0,r.yg)("li",{parentName:"ul"},"task.taskClass: specifies the Task class.")),(0,r.yg)("h2",{id:"offset-control"},"Offset control"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    protected class SourceData {\n\n        private byte[] data;\n        private Long offset;\n    }\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    protected List<SourceData> readFromSource() {\n        return null;\n    }\n")),(0,r.yg)("p",null,"We can see that when the Source reads data, each piece of data will record its corresponding Offset. This Offset will be automatically recorded by the Agent after the Sink is successfully written.\nWhen Source is initialized, its corresponding Offset will be automatically read and stored in the member variable offsetProfile of AbstractSource. You can use offsetProfile.getOffset() to\nget its Offset for initializing the data source."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    protected void initOffset() {\n        offsetProfile = OffsetManager.getInstance().getOffset(taskId, instanceId);\n    }\n")),(0,r.yg)("h2",{id:"test"},"Test"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Audit Metrics Alignment"),"\nIt is required that the three indicators of Agent collection, Agent sending, and DataProxy receiving are completely aligned.\n",(0,r.yg)("img",{src:t(16386).A,width:"2152",height:"794"}))))}p.isMDXComponent=!0},16386:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_audit-c55dcb0d181de944a0e396280b9b6097.png"},47121:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/agent_basic_concepts-c2cd3ff06ca353ab79e5c9bf20964d11.png"}}]);