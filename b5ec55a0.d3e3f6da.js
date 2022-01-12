(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(122)),o={title:"Industrializing our data pipeline"},l={unversionedId:"getting-started/part-2/industrializing",id:"getting-started/part-2/industrializing",isDocsHomePage:!1,title:"Industrializing our data pipeline",description:"Now that we have successfully loaded and analyzed the data, we show the results to our friend Tom.",source:"@site/docs/getting-started/part-2/industrializing.md",slug:"/getting-started/part-2/industrializing",permalink:"/sdl-docs/docs/getting-started/part-2/industrializing",version:"current",sidebar:"docs",previous:{title:"Compute Distances",permalink:"/sdl-docs/docs/getting-started/part-1/compute-distances"},next:{title:"Delta Lake - a better data format",permalink:"/sdl-docs/docs/getting-started/part-2/delta-lake-format"}},c=[{value:"Agenda",id:"agenda",children:[]}],s={rightToc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Now that we have successfully loaded and analyzed the data, we show the results to our friend Tom.\nHe is very satisfied with the results and would like to bring this data pipeline to production. He is especially interested in keeping all historical data, in order to analyze data over time.\nFrom your side you tell Tom, that the pipeline works well, but that CSV-Files are not a very stable and reliable data format, and that you'll suggest him a better solution for this. "),Object(i.b)("h2",{id:"agenda"},"Agenda"),Object(i.b)("p",null,"In Part 2 we will cover the following two points:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Using a better, transactional data format: Delta Lake"),Object(i.b)("li",{parentName:"ol"},"Keeping historical data: Historization and Deduplication")),Object(i.b)("p",null,"Additionally we will use Polynote-Notebook to easily interact with our data."),Object(i.b)("p",null,"Part 2 is based on ",Object(i.b)("a",{target:"_blank",href:n(148).default},"this")," configuration file, ",Object(i.b)("strong",{parentName:"p"},"copy it to config/application.conf")," to walk through the tutorial. "))}u.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},148:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/application-compute-part1-final-aeb4ac9bbb8f6943ed72b034c65720c0.conf"}}]);