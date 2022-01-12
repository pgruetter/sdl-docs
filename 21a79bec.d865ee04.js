(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),f=n,u=b["".concat(c,".").concat(f)]||b[f]||d[f]||i;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(122)),c={id:"deploy-microsoft-azure",title:"Deploy on Microsoft Azure Databricks"},o={unversionedId:"reference/deploy-microsoft-azure",id:"reference/deploy-microsoft-azure",isDocsHomePage:!1,title:"Deploy on Microsoft Azure Databricks",description:"This page is under review and currently not visible in the menu.",source:"@site/docs/reference/deploy-microsoft-azure.md",slug:"/reference/deploy-microsoft-azure",permalink:"/sdl-docs/docs/reference/deploy-microsoft-azure",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This page is under review and currently not visible in the menu."))),Object(i.b)("p",null,"Smart Data Lake can be executed on the Databricks Service running on Microsoft Azure.\nThe following steps show how to execute a simple copy feed."),Object(i.b)("p",null,"At the time of this writing, a few extra steps are needed to overwrite specific libraries.\nWhen running a job in Databricks, a few dependencies are given and can not be simply overwritten with your own as described in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/databricks/jobs#library-dependencies"}),"Azure documentation"),".\nSince we use a newer version of typesafe config, we need to force the overwrite of this dependency.\nWe will create a cluster init script that downloads the library and saves it on the cluster, then use Sparks ChildFirstURLClassLoader to explicitly load our library first.\nThis can hopefully be simplified in the future."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In your Azure portal, create a Databricks Workspace and launch it")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a cluster that fits your needs. For a first test you can use the miminal configuration of 1 Worker and 1 Driver node.\nThis example was tested on Databricks Runtime Version 6.2.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the Advanced Options, Init Scripts and configure the path:\ndbfs:/databricks/scripts/config-install.sh")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On your local machine, create a simple script called config-install.sh with the following content"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\nwget -O /databricks/jars/config-1.3.4.jar https://repo1.maven.org/maven2/com/typesafe/config/1.3.4/config-1.3.4.jar\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To copy this local file to your Databricks filesystem, use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.databricks.com/dev-tools/cli/index.html"}),"Databricks CLI"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"databricks fs mkdirs dbfs:/databricks/scripts\ndatabricks fs cp \\&ltpath-to/config-install.sh\\&gt dbfs:/databricks/scripts/\n")),Object(i.b)("p",{parentName:"li"},"Now this script gets executed everytime the cluster starts.\nIt will download the config library and put it in a place where the classloader can find it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start your cluster, check the event log to see if it's up.\nIf something is wrong with the init script, the cluster will not start.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On your local machine, create a second file called application.conf with the following content:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-hocon"}),'dataObjects {\n  ab-csv-dbfs {\n    type = CsvFileDataObject\n    path = "file:///dbfs/data/AB_NYC_2019.csv"\n  }\n  ab-reduced-csv-dbfs {\n    type = CsvFileDataObject\n    path = "file:///dbfs/data/~{id}/nyc_reduced.csv"\n  }\n}\n\nactions {\n  loadDbfs2Dbfs {\n    type = CopyAction\n    inputId = ab-csv-dbfs\n    outputId = ab-reduced-csv-dbfs\n    metadata {\n      feed = ab-azure\n    }\n  }\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload the file to the conf folder in dbfs:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"databricks fs mkdirs dbfs:/conf\ndatabricks fs cp path-to/application.conf dbfs:/conf/\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Also copy the example CSV file from sdl-examples to the data folder:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"databricks fs mkdirs dbfs:/data\ndatabricks fs cp <path-to/AB_NYC_2019.csv> dbfs:/data/\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now create a Job with the following details:"),Object(i.b)("p",{parentName:"li"}," Task: Upload JAR - Choose the smartdatalake-","<","version",">","-jar-with-dependencies.jar"),Object(i.b)("p",{parentName:"li"}," Main Class: io.smartdatalake.app.DatabricksSmartDataLakeBuilder\nArguments: -c file:///dbfs/conf/ --feed-sel ab-azure -m yarn"),Object(i.b)("p",{parentName:"li"}," The option ",Object(i.b)("em",{parentName:"p"},"--override-jars")," is set automatically to the correct value for DatabricksConfigurableApp.\nIf you want to override any additional libraries, you can provide a list with this option."),Object(i.b)("p",{parentName:"li"}," If you don't have the JAR file yet, check the README on how to build it (using the Maven profile fat-jar).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the job and check the result, you should now have the output written in dbfs:/data/ab-reduced-csv-dbfs"))))}p.isMDXComponent=!0}}]);