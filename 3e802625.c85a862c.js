(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},127:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/application-download-part1-2c6fe280fda4919737a0643935da5403.conf"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/application-download-part1-errors-3796d64e316a5e580617b30c5432a8d6.conf"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(101)),r={title:"Get Airports"},s={unversionedId:"getting-started/get-airports",id:"getting-started/get-airports",isDocsHomePage:!1,title:"Get Airports",description:"Goal",source:"@site/docs/getting-started/get-airports.md",slug:"/getting-started/get-airports",permalink:"/sdl-docs/docs/getting-started/get-airports",version:"current",sidebar:"docs",previous:{title:"Get Departures",permalink:"/sdl-docs/docs/getting-started/get-departures"},next:{title:"Select Columns",permalink:"/sdl-docs/docs/getting-started/select-columns"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Mess Up the Solution",id:"mess-up-the-solution",children:[]},{value:"Try fixing it",id:"try-fixing-it",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"goal"},"Goal"),Object(i.b)("p",null,"In this step, we will download airports master data from the website described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"get-input-data"}),"Inputs"),' using Smart Data Lake Builder.\nBecause this step is very similar to the previous one, we will make some "mistake" on purpose to demonstrate how to deal with config errors.'),Object(i.b)("p",null,"Just like in the previous step, we need one action and two DataObjects.\nExcept for the object and action names, the config to add here is almost identical to the previous step."),Object(i.b)("p",null,'You are welcome to try to implement it yourself before continuing.\nJust as in the previous step, you can use "download" as feed name.'),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("p",null,"You should now have a file similar to ",Object(i.b)("a",{target:"_blank",href:n(127).default},"this")," one.\nThe only notable difference is that you had to use the type ",Object(i.b)("strong",{parentName:"p"},"CsvFileDataObject")," for the airports.csv file,\nsince this is what the second webservice answers with.\nNote that you would not get an error at this point if you had chosen another file format.\nSince we use ",Object(i.b)("em",{parentName:"p"},"FileTransferAction")," in both cases, the files are copied without the content being interpreted yet."),Object(i.b)("p",null,"You can start the same ",Object(i.b)("em",{parentName:"p"},"docker run")," command as before and you should see that both directories\n",Object(i.b)("em",{parentName:"p"},"stg-airports")," and ",Object(i.b)("em",{parentName:"p"},"stg-departures")," have new files now.\nNotice that since both actions have the same feed, the option ",Object(i.b)("em",{parentName:"p"},"--feed-sel download")," executes both of them."),Object(i.b)("h2",{id:"mess-up-the-solution"},"Mess Up the Solution"),Object(i.b)("p",null,"Now let's see what happens when things don't go as planned.\nFor that, replace your config file with the contents of ",Object(i.b)("a",{target:"_blank",href:n(151).default},"this")," file.\nWhen you start the ",Object(i.b)("em",{parentName:"p"},"docker run")," command again, you will see two errors:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'The name of the DataObject "NOPEext-departures" does not match with the inputId of the action download-departures.\nThis is a very common error and the stacktrace should help you to quickly find and correct it')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'Exception in thread "main" io.smartdatalake.config.ConfigurationException: (Action~download-departures) [] key not found: DataObject~ext-departures\n')),Object(i.b)("p",null,"As noted before, SDL will often use Action-IDs and DataObject-IDs to communicate where to look in your configuration files."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"An unknown DataObject type was used. In this example, stg-airports was assigned the type UnicornFileDataObject, which does not exist.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'Exception in thread "main" io.smartdatalake.config.ConfigurationException: (DataObject~stg-airports) ClassNotFoundException: io.smartdatalake.workflow.dataobject.UnicornFileDataObject\n')),Object(i.b)("p",null,"Internally, the types you choose are represented by Scala Classes.\nThese classes define all characteristics of a DataObject and all it's parameters, i.e. the url we defined in our WebserviceFileDataObject.\nThis also explains why you get a ",Object(i.b)("em",{parentName:"p"},"ClassNotFoundException")," in this case."),Object(i.b)("h2",{id:"try-fixing-it"},"Try fixing it"),Object(i.b)("p",null,"Try to fix one of the errors and keep the other one to see what happens: Nothing.\nWhy is that? "),Object(i.b)("p",null,"SDL validates your configuration file(s) before executing it's contents.\nIf the configuration does not make sense, it will abort before executing anything to minimize the chance that you'll end up in an inconsistent state."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During validation, the whole configuration is checked, not just the parts you are trying to execute.\nIf you have large configuration files, it can sometimes be confusing to see an error and realize that\nit's not on the part you are currently working on but in a different section."))),Object(i.b)("p",null,"SDL is built to detect configuration errors as early as possible (early-validation). It does this by going through several phases."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Validate configuration",Object(i.b)("br",{parentName:"li"}),"validate superfluous attributes, missing mandatory attributes, attribute content and consistency when referencing other configuration objects."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Prepare")," phase",Object(i.b)("br",{parentName:"li"}),"validate preconditions, e.g. connections and existence of tables and directories."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Init")," phase",Object(i.b)("br",{parentName:"li"}),"executes the whole feed ",Object(i.b)("em",{parentName:"li"},"without any data")," to spot incompatibilities between the Data Objects that cannot be spotted\nby just looking at the config file. For example a column which doesn't exist but is referenced in a later Action will cause the init phase to fail."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Exec")," phase",Object(i.b)("br",{parentName:"li"}),"only if all previous phases have been passed successfully, execution is started.")),Object(i.b)("p",null,'When running SDL, you can clearly find "prepare", "init" and "exec" steps for every Action in the logs.'),Object(i.b)("p",null,"Now is a good time to fix both errors in your configuration file and execute the action again."),Object(i.b)("p",null,"Early-validation is a core feature of SDL and will become more and more valuable with the increasing complexity of your data pipelines.\nSpeaking of increasing complexity: In the next step, we will begin transforming our data."))}p.isMDXComponent=!0}}]);