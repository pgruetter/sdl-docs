(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/application-compute-part1-cols-1a13dfa8e702e9f28744120eb9f7ac21.conf"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(96)),i={title:"Joining It Together"},s={unversionedId:"getting-started/joining-it-together",id:"getting-started/joining-it-together",isDocsHomePage:!1,title:"Joining It Together",description:"Goal",source:"@site/docs/getting-started/joining-it-together.md",slug:"/getting-started/joining-it-together",permalink:"/sdl-docs/docs/getting-started/joining-it-together",version:"current",sidebar:"docs",previous:{title:"Select Columns",permalink:"/sdl-docs/docs/getting-started/select-columns"},next:{title:"Get Departure Coordinates",permalink:"/sdl-docs/docs/getting-started/joining-departures-and-arrivals"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Define output object",id:"define-output-object",children:[]},{value:"Define join_departures_airports action",id:"define-join_departures_airports-action",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],p={rightToc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"So now we have data from departures in our stage layer, and we have cleaned data for airports in our integration layer.\nIn this step we will finally join both data sources together.\nWe will continue based on the config file available ",Object(o.b)("a",{target:"_blank",href:n(149).default},"here"),".\nAt the end of the step, we will have all planes departing from Bern Airport\nin the given timeframe along with their readable destination airport names, as well as geo-coordinates."),Object(o.b)("p",null,"Like in the previous step, we need one more action and one DataObject for our output."),Object(o.b)("h2",{id:"define-output-object"},"Define output object"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'  btl-connected-airports {\n    type = CsvFileDataObject\n    path = "~{id}"\n  }\n')),Object(o.b)("h2",{id:"define-join_departures_airports-action"},"Define join_departures_airports action"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'  join-departures-airports {\n    type = CustomSparkAction\n    inputIds = [stg-departures, int-airports]\n    outputIds = [btl-connected-airports]\n    transformers = [{\n      type = SQLDfsTransformer\n      code = {\n        btl-connected-airports = """select stg_departures.estdepartureairport, stg_departures.estarrivalairport,\n        airports.*\n         from stg_departures join int_airports airports on stg_departures.estArrivalAirport = airports.ident"""\n      }\n    }\n    ]\n    metadata {\n      feed = compute\n    }\n  }\n')),Object(o.b)("p",null,"Now it gets interesting, a couple of things to note here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This time, we changed the Action Type from CopyAction to CustomSparkAction.\nUse CustomSparkAction when you need to do complex operations. For instance, CustomSparkAction allows multiple inputs,\nwhich CopyAction does not."),Object(o.b)("li",{parentName:"ul"},"Our input/output fields are now called inputId",Object(o.b)("strong",{parentName:"li"},"s")," and outputId",Object(o.b)("strong",{parentName:"li"},"s")," and they take a list of DataObject ids.\nSimilarly, our transformer is now of type SQLDf",Object(o.b)("strong",{parentName:"li"},"s"),"Transformer.\nAgain, the ",Object(o.b)("strong",{parentName:"li"},"s")," is important, since it shows that multiple inputs/output Data Objects are possible, which is what we need in this step.\nIn the previous step, we defined a SQLDfTransformer because we only needed one input."),Object(o.b)("li",{parentName:"ul"},"Finally, the ",Object(o.b)("em",{parentName:"li"},"SQLDfsTransformer")," expects it's code as a HOCON object rather than as a string.\nThis is due to the fact that you could have multiple\noutputs, in which case you would need to name them in order to distinguish them.\nIn our case, there is only one output DataObject: ",Object(o.b)("em",{parentName:"li"},"btl-connected-airports"),".\nThe SQL-Code itself is just a join between the two input Data Objects on the ICAO identifier.\nNote that we can just select all columns from airports, since we selected the ones that interest us in the previous step.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip: Use only one output")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As you can see, with CustomSparkAction it's possible to read from multiple inputs and write to multiple outputs.\nWe usually discourage writing to multiple Data Objects in one action though.\nAt some point, you will want to use the metadata from SDL to analyze your data lineage. If you have a CustomSparkAction\nwith multiple inputs and multiple outputs (an M:N-relationship), SDL assumes that all outputs depend on all inputs. This might add\nsome dependencies between DataObjects that don't really exist in the CustomSparkAction.\nAlways using one Data Object as output will make your data lineage more detailed and clear."))),Object(o.b)("h2",{id:"try-it-out"},"Try it out"),Object(o.b)("p",null,"You can run the usual ",Object(o.b)("em",{parentName:"p"},"docker run")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute\n")),Object(o.b)("p",null,"You should now see the resulting files in ",Object(o.b)("em",{parentName:"p"},"data/btl-connected-airports"),".\nGreat! Now we have names and coordinates of destination airports.\nWe are just missing the coordinates of Bern Airport.\nLet's add them in the next step."))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);