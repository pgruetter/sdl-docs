(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),r=(a(0),a(122)),i={title:"Get Departures"},c={unversionedId:"getting-started/part-1/get-departures",id:"getting-started/part-1/get-departures",isDocsHomePage:!1,title:"Get Departures",description:"Goal",source:"@site/docs/getting-started/part-1/get-departures.md",slug:"/getting-started/part-1/get-departures",permalink:"/sdl-docs/docs/getting-started/part-1/get-departures",version:"current",sidebar:"docs",previous:{title:"Inputs",permalink:"/sdl-docs/docs/getting-started/get-input-data"},next:{title:"Get Airports",permalink:"/sdl-docs/docs/getting-started/part-1/get-airports"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Config File",id:"config-file",children:[]},{value:"Define departures objects",id:"define-departures-objects",children:[]},{value:"Define download-ext-departures",id:"define-download-ext-departures",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"goal"},"Goal"),Object(r.b)("p",null,"In this step, we will download plane departure data from the REST-Interface described in the previous step using Smart Data Lake Builder."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Smart Data Lake = SDL")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Throughout this documentation, we will mostly refer to ",Object(r.b)("em",{parentName:"p"},"SDL")," which is just short for ",Object(r.b)("em",{parentName:"p"},"Smart Data Lake")))),Object(r.b)("h2",{id:"config-file"},"Config File"),Object(r.b)("p",null,"With Smart Data Lake Builder, you describe your data pipelines in a config file using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lightbend/config/blob/master/HOCON.md"}),"HOCON")," format.\nAll HOCON features are supported so you could also split your configuration into several files. But for this first part, let's just use one file."),Object(r.b)("p",null,"A data pipeline is composed of at least two entities: ",Object(r.b)("em",{parentName:"p"},"DataObjects")," and ",Object(r.b)("em",{parentName:"p"},"Actions"),"."),Object(r.b)("p",null,"An action defines how one (or multiple) DataObject are copied or transformed into another (or multiple) DataObject.\nIn every data pipeline, you will have at least one ",Object(r.b)("em",{parentName:"p"},"DataObject")," for your input and one for your output.\nIf you have more than one action, you will also have at least one ",Object(r.b)("em",{parentName:"p"},"DataObject")," for each intermediary step between two actions."),Object(r.b)("p",null,"In our case, in order to get our departure data, we are going to build one action. Hence, we need one DataObject for our input, and one for our output.\nCreate a directory called config in your current working directory and an empty file called application.conf. This is where we will define our data pipeline."),Object(r.b)("h2",{id:"define-departures-objects"},"Define departures objects"),Object(r.b)("p",null,"Add the following lines to your configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'dataObjects {\n  ext-departures {\n    type = WebserviceFileDataObject\n    url = "https://opensky-network.org/api/flights/departure?airport=LSZB&begin=1630200800&end=1630310979"\n    readTimeoutMs=200000\n  }\n  stg-departures {\n    type = JsonFileDataObject\n    path = "~{id}"\n  }\n}\n')),Object(r.b)("p",null,"Here, we first created the DataObjects section. This section will contain our DataObjects of our pipeline.\nInside, we defined two DataObjects to start with."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The names ",Object(r.b)("em",{parentName:"p"},"ext-departures")," and ",Object(r.b)("em",{parentName:"p"},"stg-departures")," are called DataObject-ID.\nThey uniquely define the data object and we will frequently refer to these IDs as does SDL, i.e. in error messages.."),Object(r.b)("p",{parentName:"div"},"You will see further down, that actions also have a name that uniquely identifies them, they are called Action-ID."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ext-departures:",Object(r.b)("br",{parentName:"p"}),"\n","This data object acts as a source in our action and defines where we get our departure information from.\nWe set its type to WebserviceFileDataObject to tell SDL that this is a webservice call returning a file.\nSDL comes with a broad set of predefined data object types and can easily be extended. More on that later.\nEach type of data object comes with its own set of parameters. For a WebserviceFileDataObject, the only mandatory one is the url, so we set that as well.\nWe also set the option readTimeoutMs to a couple of seconds because the Rest-Service can be slow to respond.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"stg-departures:",Object(r.b)("br",{parentName:"p"}),"\n","This data object acts as a target for our first action, so where and how to download the file to.\nWe set type to JsonFileDataObject because we know from before that the webservice will return a json file.\nPath defines where the file will be stored. You could choose any name you want, but most of the time, the name of your DataObject is a good fit.\nInstead of writing ",Object(r.b)("em",{parentName:"p"},"stg-departures")," again,\nwe used the placeholder ",Object(r.b)("em",{parentName:"p"},"{~id}")," which gets replaced by the DataObject-ID. Don't forget to surround that placeholder\nwith double quotes so that it is interpreted as a string.\nWe defined a relative path - it is relative to the working directory SDL is started in.\nThe working directory has been set to the ",Object(r.b)("em",{parentName:"p"},"data")," directory in the Dockerfile by setting the JVM Property "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"-Duser.dir=/mnt/data\n")),Object(r.b)("p",{parentName:"li"},"so that's why all your relative paths will start in the ",Object(r.b)("em",{parentName:"p"},"data")," directory."))),Object(r.b)("h4",{id:"naming-conventions"},"Naming Conventions"),Object(r.b)("p",null,"A quick note on our naming conventions: We typically follow some conventions when naming our data objects and actions.\nThey follow the layering conventions of our structured Smart Data Lake:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'External data objects are prefixed with "ext"'),Object(r.b)("li",{parentName:"ul"},"Your first action typically copies the data into the Data Lake, without making any changes.\nThis layer is called the ",Object(r.b)("em",{parentName:"li"},"Staging Layer"),'.\nDataObjects of the staging layer are prefixed with "stg".'),Object(r.b)("li",{parentName:"ul"},"When applying some basic transformation to your data that does not require any specific business logic, you store the result in the ",Object(r.b)("em",{parentName:"li"},"Integration Layer"),'.\nSome of these transformations are data deduplication, historization and format standardization.\nDataObjects of the Integration Layer are prefixed with "int".'),Object(r.b)("li",{parentName:"ul"},"When applying business logic to your data, you store the result in the ",Object(r.b)("em",{parentName:"li"},"Business Tranformation Layer")," or ",Object(r.b)("em",{parentName:"li"},"BTL"),' for short.\nDataObjects of the Business Transformation Layer are prefixed with "btl".')),Object(r.b)("p",null,"You are of course free to use any other naming conventions, but it's worth to think about one at the beginning of your project."),Object(r.b)("p",null,"In our case, we simply copy data exactly as is from an external source. Hence, our output DataObject belongs to the Staging Layer."),Object(r.b)("h2",{id:"define-download-ext-departures"},"Define download-ext-departures"),Object(r.b)("p",null,"After the dataObjects section, add the following lines to your configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"actions {\n    download-departures {\n      type = FileTransferAction\n      inputId = ext-departures\n      outputId = stg-departures\n      metadata {\n        feed = download\n      }\n    }\n}\n")),Object(r.b)("p",null,"We added another section called actions, in which, you guessed it, all actions reside.\nWe defined our action and called it ",Object(r.b)("em",{parentName:"p"},"download-departures"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The type ",Object(r.b)("em",{parentName:"li"},"FileTransferAction")," tells SDL that it should transfer a file from one place to another without any transformation.\nIn our case, from a location on the web to a place on your machine."),Object(r.b)("li",{parentName:"ul"},"With inputId and outputId, we wire this action and the two data objects together."),Object(r.b)("li",{parentName:"ul"},'Finally, we added some metadata to our action. Metadata is used to select the right actions to run.\nIn our case, we defined a feed called "download". When starting SDL, we can tell it to execute only actions corresponding to certain feeds.\nMultiple actions can be associated with the same feed.\nYou can think of feeds as group of actions in your data pipeline, typically processing a data type through multiple layers.\nYou can group actions together into the same feed if you want to execute them together.\nWe will come back to the concept of feeds as our pipeline gets more complex.')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Metadata is not just used to select the right feeds.\nMetadata can also help a lot in documenting your data pipelines and making its data lineage understandable and discoverable. "))),Object(r.b)("h2",{id:"try-it-out"},"Try it out"),Object(r.b)("p",null,"Let's execute our action. We now come back to a similar ",Object(r.b)("em",{parentName:"p"},"docker run")," command as in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/sdl-docs/docs/getting-started/setup"}),"setup step")," of our guide.\nThe only difference is that we mount 2 volumes instead of one and specify the path to your config file.\nBefore, we only mounted the data folder so that you could see the results of the execution on your machine.\nThe config file that was being used was located inside the docker image.\nThis time, we add another volume with your config-file and tell SDL to use it with the ",Object(r.b)("em",{parentName:"p"},"--config")," option."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download\n")),Object(r.b)("p",null,"After executing it, you will see the file ",Object(r.b)("em",{parentName:"p"},"data/stg_departures/result.json")," has been replaced with the output of your pipeline."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Since both web servers are freely available on the internet, they might be overloaded by traffic.\nIf the download fails because of a timeout, either increase ",Object(r.b)("em",{parentName:"p"},"readTimeoutMs")," or wait a couple of minutes and try again.\nIf the download still won't work (or if you just get empty files), you can copy the contents of the folder ",Object(r.b)("em",{parentName:"p"},"data-fallback-download"),"\ninto your data folder. This will allow you to execute all steps starting from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/sdl-docs/docs/getting-started/part-1/select-columns"}),"Select Columns")))),Object(r.b)("p",null,"In case you run into issues when executing your pipeline and you want to terminate the process\nyou can use this docker command to list the running containers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"docker ps\n")),Object(r.b)("p",null,"While your feed-execution is running, the output of this command will contain\nan execution with the image name ",Object(r.b)("em",{parentName:"p"},"smart-data-lake/gs1:latest"),".\nUse the container id to stop the container by typing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"docker containter stop <container id>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations!")," You just wrote your first configuration and executed your feed! Now let's get our second input data source..."))}d.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);