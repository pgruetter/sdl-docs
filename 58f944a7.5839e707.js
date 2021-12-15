(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?r.a.createElement(m,s(s({ref:t},d),{},{components:n})):r.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(101)),i={id:"docker-on-windows",title:"Notes for Windows Users"},s={unversionedId:"getting-started/docker-on-windows",id:"getting-started/docker-on-windows",isDocsHomePage:!1,title:"Notes for Windows Users",description:"Free Docker alternative for Windows",source:"@site/docs/getting-started/docker-on-windows.md",slug:"/getting-started/docker-on-windows",permalink:"/sdl-docs/docs/getting-started/docker-on-windows",version:"current",sidebar:"docs",previous:{title:"Common Problems",permalink:"/sdl-docs/docs/getting-started/common-problems"}},c=[{value:"Free Docker alternative for Windows",id:"free-docker-alternative-for-windows",children:[]},{value:"Using podman compose",id:"using-podman-compose",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"free-docker-alternative-for-windows"},"Free Docker alternative for Windows"),Object(a.b)("p",null,"You can use Docker Desktop for Windows together with Windows command line or Windows Linux Subsystem (WSL2) for this tutorial. But note that Docker Desktop for Windows needs a license for commercial use\nbeginning of 2022."),Object(a.b)("p",null,"There is a free alternative for Linux or WSL2 called Podman from Redhat, which has a compatible command line and also the Dockerfiles are compatible, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://podman.io/"}),"podman.io"),".\nFurther advantages are that Podman is more lightweight - it doesn't need a service and root privileges to run containers.\nInstall podman on WSL2 Ubuntu:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'. /etc/os-release\necho "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\ncurl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -\nsudo apt-get update\nsudo apt-get -y upgrade\nsudo apt-get -y install podman\n')),Object(a.b)("h2",{id:"using-podman-compose"},"Using podman compose"),Object(a.b)("p",null,"For ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"delta-lake-format"}),"part 2 of this guide"),", you need docker compose.\nFor Windows, you can use the altenative podman compose.\nInstall podman-compose for podman in WSL2:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"sudo apt install python3-pip\nsudo pip3 install podman-compose\n")),Object(a.b)("p",null,"After starting ",Object(a.b)("inlineCode",{parentName:"p"},"podman-compose up")," in the getting-started folder you should now be able to open Polynote on port localhost:8192, as WSL2 automatically publishes all ports on Windows.\nIf the port is not accessible, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"wsl hostname -I")," on Windows command line to get the IP adress of WSL, and then access Polynote over {ip-address}:8192."))}l.isMDXComponent=!0}}]);