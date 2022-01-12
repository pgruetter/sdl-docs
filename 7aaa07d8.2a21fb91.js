(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(122)),i={id:"build",title:"Build SDL"},c={unversionedId:"reference/build",id:"reference/build",isDocsHomePage:!1,title:"Build SDL",description:"Build from Source Code",source:"@site/docs/reference/build.md",slug:"/reference/build",permalink:"/sdl-docs/docs/reference/build",version:"current",sidebar:"docs",previous:{title:"Notes for Windows Users",permalink:"/sdl-docs/docs/getting-started/troubleshooting/docker-on-windows"},next:{title:"Command Line",permalink:"/sdl-docs/docs/reference/commandLine"}},l=[{value:"Build from Source Code",id:"build-from-source-code",children:[{value:"Build Dependencies",id:"build-dependencies",children:[]},{value:"Releases and snapshots",id:"releases-and-snapshots",children:[]},{value:"Start a new project",id:"start-a-new-project",children:[]},{value:"Building JAR with Runtime Dependencies",id:"building-jar-with-runtime-dependencies",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"build-from-source-code"},"Build from Source Code"),Object(o.b)("p",null,"In the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/sdl-docs/docs/getting-started/setup"}),"getting started guide")," we used Docker to get you up to speed quickly.\nIf you take a closer look at the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/smart-data-lake/getting-started/blob/master/Dockerfile"}),"Dockerfile"),",\nyou will see that we simply execute Apache Maven for you to build the jar file and configure an appropriate entrypoint for the container. "),Object(o.b)("p",null,"In a real world project, you probably want more control over the build process, this page helps you in this case."),Object(o.b)("p",null,"Smart Data Lake Builder is build using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://maven.apache.org/"}),"Apache Maven"),".\nHere is an overview of the various versions at play:"),Object(o.b)("h3",{id:"build-dependencies"},"Build Dependencies"),Object(o.b)("p",null,"SDL Version 1.x"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Spark 2.4")),Object(o.b)("li",{parentName:"ul"},"JDK 8 (Spark 2 doesn't support JDK 9 or higher)"),Object(o.b)("li",{parentName:"ul"},"Scala 2.11 or 2.12"),Object(o.b)("li",{parentName:"ul"},"Maven 3.0 (or higher)")),Object(o.b)("p",null,"SDL Version 2.x"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Spark 3.x")),Object(o.b)("li",{parentName:"ul"},"JDK >= 8"),Object(o.b)("li",{parentName:"ul"},"Scala 2.12 (Spark 3 doesn't support scala 2.11 anymore)"),Object(o.b)("li",{parentName:"ul"},"Maven 3.0 (or higher)")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you don't have strong reasons to still use Spark 2.X, you should use the latest version of Smart Data Lake Builder which comes with Spark 3.X."))),Object(o.b)("h3",{id:"releases-and-snapshots"},"Releases and snapshots"),Object(o.b)("p",null,"You rarely need to build Smart Data Lake Builder yourself.\nWe publish releases regularly on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/smart-data-lake/smart-data-lake/releases"}),"Github"),".\nThese releases are automatically published on Maven Central and can therefore be used directly.\nOn every merge to the develop branch, we also release snapshot releases to Sonatype, so you can even reference SNAPSHOT releases for cutting edge versions. "),Object(o.b)("h3",{id:"start-a-new-project"},"Start a new project"),Object(o.b)("p",null,"So how do you usually start with a new project?\nTake a look at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/smart-data-lake/sdl-examples"}),"sdl-examples")," as a template.\nYou start a new Maven project and define our ",Object(o.b)("inlineCode",{parentName:"p"},"sdl-parent")," as your projects parent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"<parent>\n    <groupId>io.smartdatalake</groupId>\n    <artifactId>sdl-parent</artifactId>\n    \x3c!--\n        Set the smartdatalake version to use here.\n        If version cannot be resolved, make sure maven central repository is defined in settings.xml and the corresponding profile activated.\n        If version in IntelliJ still cannot be resolved, a restart of IntelliJ might help!\n    --\x3e\n    <version>2.1.1</version>\n</parent>\n")),Object(o.b)("h3",{id:"building-jar-with-runtime-dependencies"},"Building JAR with Runtime Dependencies"),Object(o.b)("p",null,"With that, you also get all profiles defined in our parent project,\nso it's easy to generate a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"fat-jar"))," for example (including all dependencies you need).\nWhen deploying to a cluster with Apache Spark preconfigured, you don't need to include this dependency yourself.\nUse the profile ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"fat-jar"))," in this case.",Object(o.b)("br",{parentName:"p"}),"\n","If you want to generate a jar for local execution or somewhere Apache Spark is not provided, use the profile ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"fat-jar-with-spark"))," instead."))}p.isMDXComponent=!0}}]);