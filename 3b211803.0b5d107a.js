(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/application-historical-part2-843a2c2778f891966427eaf1258fa99e.conf"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(101)),o={title:"Keeping historical data"},l={unversionedId:"getting-started/part-2/historical-data",id:"getting-started/part-2/historical-data",isDocsHomePage:!1,title:"Keeping historical data",description:"Goal",source:"@site/docs/getting-started/part-2/historical-data.md",slug:"/getting-started/part-2/historical-data",permalink:"/sdl-docs/docs/getting-started/part-2/historical-data",version:"current",sidebar:"docs",previous:{title:"Delta Lake - a better data format",permalink:"/sdl-docs/docs/getting-started/part-2/delta-lake-format"},next:{title:"Custom Webservice",permalink:"/sdl-docs/docs/getting-started/part-3/custom-webservice"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Historization of airport data",id:"historization-of-airport-data",children:[]},{value:"Deduplication of flight data",id:"deduplication-of-flight-data",children:[]},{value:"Summary",id:"summary",children:[]}],c={rightToc:s};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"goal"},"Goal"),Object(r.b)("p",null,"Data generally can be split into two groups:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Master data:",Object(r.b)("br",{parentName:"li"}),"data about objects that evolve over time, e.g. an airport, a person, a product... "),Object(r.b)("li",{parentName:"ul"},"Transactional data:",Object(r.b)("br",{parentName:"li"}),"data about events that took place at a certain point in time, e.g. a flight, a payment... ")),Object(r.b)("p",null,"To keep historical data for both these categories, different strategies are applied:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Master data")," is most often ",Object(r.b)("strong",{parentName:"li"},"historized"),' - this means tracking the evolution of objects over time by introducing a time dimension.\nUsually this is modelled with two additional attributes "valid_from" and "valid_to", where "valid_from" is an additional primary key column.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Transactional data")," is usually ",Object(r.b)("strong",{parentName:"li"},"deduplicated"),", as only the latest state of a specific event is of interest. If an update for an event occurs, the previous information is discarded (or consolidated in special cases).\nAdditional care must be taken to keep all historical events, even if they are no longer present in the source system. Often specific housekeeping rules are applied (e.g. retention period), either for legal or cost saving reasons.")),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"For Historization and Deduplication a data pipeline needs to read the state of the output DataObject, merge it with the new state of the input DataObject and write the result to the output DataObject.\nTo read and write the same DataObject in the same SDL Action, this must be a transactional DataObject.\nIt means the DataObject must implement the interface TransactionalSparkTableDataObject of SDL.\nLuckily in the previous chapter we already upgraded our data pipeline to use DeltaLakeTableDataObject, which is a TransactionalSparkTableDataObject."),Object(r.b)("p",null,"Further, we need a key to identify records for a specific object in our data, so we can build the time dimension or deduplicate records of the same object:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For airport masterdata (",Object(r.b)("inlineCode",{parentName:"li"},"int_airports"),') the attribute "ident" clearly serves this purpose.'),Object(r.b)("li",{parentName:"ul"},"For departure data (",Object(r.b)("inlineCode",{parentName:"li"},"int_departures"),") it gets more complicated to identify a flight. To simplify, let's assume we're only interested in one flight per aircraft, departure airport and day.\nThe key would then be the attributes ",Object(r.b)("inlineCode",{parentName:"li"},"icao24"),", ",Object(r.b)("inlineCode",{parentName:"li"},"estdepartureairport")," and ",Object(r.b)("inlineCode",{parentName:"li"},"trunc_date"),".")),Object(r.b)("h2",{id:"historization-of-airport-data"},"Historization of airport data"),Object(r.b)("p",null,"To historize airport master data, we have to adapt our configuration as follows:"),Object(r.b)("p",null,"Add a primary key to the table definition of ",Object(r.b)("inlineCode",{parentName:"p"},"int-airports"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'table {\n  db = "default"\n  name = "int_airports"\n  primaryKey = [ident]\n}\n')),Object(r.b)("p",null,"Note, that a primary key can be a composite primary key, therefore you need to define an array of columns ",Object(r.b)("inlineCode",{parentName:"p"},"[ident]"),"."),Object(r.b)("p",null,"For the action ",Object(r.b)("inlineCode",{parentName:"p"},"select-airport-cols"),", change it's type from ",Object(r.b)("inlineCode",{parentName:"p"},"CopyAction")," to ",Object(r.b)("inlineCode",{parentName:"p"},"HistorizeAction"),".",Object(r.b)("br",{parentName:"p"}),"\n","While you're at it, rename it to ",Object(r.b)("inlineCode",{parentName:"p"},"historize-airports")," to reflect it's new function."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"historize-airports {\n  type = HistorizeAction\n  ...\n}\n")),Object(r.b)("p",null,"With historization, this table will now get two additional columns called ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_captured")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_delimited"),".\nSchema evolution of existing tables will be explained later, so for now, just delete the table and it's data for the DataObject ",Object(r.b)("inlineCode",{parentName:"p"},"int-airports")," through Polynote.\nTo access DataObjects from Polynote you need to first read SDL configuration into a registry, see Notebook ",Object(r.b)("em",{parentName:"p"},"SelectingData")," chapter ",Object(r.b)("em",{parentName:"p"},"Select data by using DataObjects configured in SmartDataLake"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'val dataIntAirports = registry.get[DeltaLakeTableDataObject]("int-airports")\ndataIntAirports.dropTable\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Depending on your system setup, it's possible that Polynote is not allowed to drop the data of your table.\nIf you receive strange errors about dl_ts_captured and dl_ts_delimited not being found, please delete the folder data/int-airports/ manually."))),Object(r.b)("p",null,"Then start Action ",Object(r.b)("inlineCode",{parentName:"p"},"historize-airports"),".\nYou may have seen that the ",Object(r.b)("inlineCode",{parentName:"p"},"--feed-sel")," parameter of SDL command line supports more options to select actions to execute (see command line help).\nWe will now only execute this single action by changing this parameter to ",Object(r.b)("inlineCode",{parentName:"p"},"--feed-sel ids:historize-airports"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config --network getting-started_default smart-data-lake/gs1:latest -c /mnt/config --feed-sel ids:historize-airports\n")),Object(r.b)("p",null,"After successful execution you can check the schema and data of our table in Polynote.\nIt now has a time dimension through the two new columns ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_captured")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_delimited"),".\nThey form a closed interval, meaning start and end time are inclusive.\nIt has millisecond precision, but the timestamp value is set to the current time of our data pipeline run.\nThe two attributes show the time period in which an object with this combination of attribute values has existed in our data source.\nThe sampling rate is given by the frequency that our data pipeline is scheduled."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"dataIntAirports.getDataFrame().printSchema\n\nroot\n|-- ident: string (nullable = true)\n|-- name: string (nullable = true)\n|-- latitude_deg: string (nullable = true)\n|-- longitude_deg: string (nullable = true)\n|-- dl_ts_captured: timestamp (nullable = true)\n|-- dl_ts_delimited: timestamp (nullable = true)\n")),Object(r.b)("p",null,"If you look at the data, there should be only one record per object for now, as we didn't run our data pipeline with historical data yet."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'dataIntAirports.getDataFrame().orderBy($"ident",$"dl_ts_captured").show\n\n+-----+--------------------+------------------+-------------------+--------------------+-------------------+\n|ident|                name|      latitude_deg|      longitude_deg|      dl_ts_captured|    dl_ts_delimited|\n+-----+--------------------+------------------+-------------------+--------------------+-------------------+\n|  00A|   Total Rf Heliport|    40.07080078125| -74.93360137939453|2021-12-05 13:23:...|9999-12-31 00:00:00|\n| 00AA|Aero B Ranch Airport|         38.704022|        -101.473911|2021-12-05 13:23:...|9999-12-31 00:00:00|\n| 00AK|        Lowell Field|         59.947733|        -151.692524|2021-12-05 13:23:...|9999-12-31 00:00:00|\n| 00AL|        Epps Airpark| 34.86479949951172| -86.77030181884766|2021-12-05 13:23:...|9999-12-31 00:00:00|\n| 00AR|Newport Hospital ...|           35.6087|         -91.254898|2021-12-05 13:23:...|9999-12-31 00:00:00|\n...\n')),Object(r.b)("p",null,"Let's try to simulate the historization process by loading a historical state of the data and see if any of the airports have changed since then.\nFor this, drop table ",Object(r.b)("inlineCode",{parentName:"p"},"int-airports")," again.\nThen, delete all files in ",Object(r.b)("inlineCode",{parentName:"p"},"data/stg-airport")," and copy the historical ",Object(r.b)("inlineCode",{parentName:"p"},"result.csv")," from the folder ",Object(r.b)("inlineCode",{parentName:"p"},"data-fallback-download/stg-airport")," into the folder ",Object(r.b)("inlineCode",{parentName:"p"},"data/stg-aiport"),"."),Object(r.b)("p",null,"Now start the action ",Object(r.b)("inlineCode",{parentName:"p"},"historize-airports"),' (and only historize-airports) again to do an "initial load".\nRemember how you do that? That\'s right, you can define a single action with ',Object(r.b)("inlineCode",{parentName:"p"},"--feed-sel ids:historize-airports"),".",Object(r.b)("br",{parentName:"p"}),"\n","Afterwards, start actions ",Object(r.b)("inlineCode",{parentName:"p"},"download-airports")," and ",Object(r.b)("inlineCode",{parentName:"p"},"historize-airports")," by using the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"--feed-sel 'ids:(download|historize)-airports'")," to download fresh data and build up the airport history."),Object(r.b)("p",null,"Now check in Polynote again and you'll find several airports that have changed between the intitial and the current state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'dataIntAirports.getDataFrame()\n.groupBy($"ident").count\n.orderBy($"count".desc)\n.show\n\n+-------+-----+\n|  ident|count|\n+-------+-----+\n|RU-4111|    2|\n|   LL33|    2|\n|   73CA|    2|\n|CA-0120|    2|\n|   CDV3|    2|\n...\n')),Object(r.b)("p",null,"When checking the details it seems that for many airports the number of significant digits was reduced for the position:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'dataIntAirports.getDataFrame()\n.where($"ident"==="CDV3")\n.show(false)\n\n+-----+-------------------------------------------------+-------------+--------------+--------------------------+--------------------------+\n|ident|name                                             |latitude_deg |longitude_deg |dl_ts_captured            |dl_ts_delimited           |\n+-----+-------------------------------------------------+-------------+--------------+--------------------------+--------------------------+\n|CDV3 |Charlottetown (Queen Elizabeth Hospital) Heliport|46.255493    |-63.098887    |2021-12-05 20:52:58.800645|9999-12-31 00:00:00       |\n|CDV3 |Charlottetown (Queen Elizabeth Hospital) Heliport|46.2554925916|-63.0988866091|2021-12-05 20:40:31.629764|2021-12-05 20:52:58.799645|\n+-----+-------------------------------------------------+-------------+--------------+--------------------------+--------------------------+\n')),Object(r.b)("p",null,"Values for ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_capture")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_delimited")," respectively were set to the current time of our data pipeline run.\nFor an initial load, this should be set to the time of the historical data set.\nCurrently, this is not possible in SDL, but there are plans to implement this, see issue ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/smart-data-lake/smart-data-lake/issues/427"}),"#427"),"."),Object(r.b)("p",null,"Now let's continue with flight data."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Spark performance")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Maybe you're under the impression that HistorizeAction runs quite long for a small amount of data.\nAnd you're right about that:",Object(r.b)("br",{parentName:"p"}),"\n","On one side this is because in the background, it joins all existing data with the new input data and checks for changes.",Object(r.b)("br",{parentName:"p"}),"\n","On the other side there is a Spark property we should tune for small datasets.\nIf Spark joins data, it needs two processing stages and a shuffle in between to do so (you can read more about this in various Spark tutorials).\nThe default value is to create 200 tasks in each shuffle. With our dataset, 2 tasks would be enough already.\nYou can tune this by setting the following property in global.spark-options of your application.conf:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'"spark.sql.shuffle.partitions" = 2\n')),Object(r.b)("p",{parentName:"div"},"Also, the algorithm to detect and merge changes can be optimized by using Delta formats merge capabilities. This will be covered in part three of this tutorial. "))),Object(r.b)("h2",{id:"deduplication-of-flight-data"},"Deduplication of flight data"),Object(r.b)("p",null,"To deduplicate departure flight data, we have to adapt our configuration as follows:"),Object(r.b)("p",null,"Add a primary key to the table definition of ",Object(r.b)("inlineCode",{parentName:"p"},"int-departures"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'table {\n  db = "default"\n  name = "int_departures"\n  primaryKey = [icao24, estdepartureairport, dt]\n}\n')),Object(r.b)("p",null,"Change the type of action ",Object(r.b)("inlineCode",{parentName:"p"},"prepare-departures")," from ",Object(r.b)("inlineCode",{parentName:"p"},"CopyAction"),", this time to ",Object(r.b)("inlineCode",{parentName:"p"},"DeduplicateAction")," and rename it to ",Object(r.b)("inlineCode",{parentName:"p"},"deduplicate-departures"),", again to reflect its new type.\nIt also needs an additional transformer to calculate the new primary key column ",Object(r.b)("inlineCode",{parentName:"p"},"dt")," derived from the column ",Object(r.b)("inlineCode",{parentName:"p"},"firstseen"),".\nSo make sure to add these lines too: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deduplicate-departures {\n  type = DeduplicateAction\n  ...\n  transformers = [{\n    type = SQLDfTransformer\n    code = \"select stg_departures.*, date_format(from_unixtime(firstseen),'yyyyMMdd') dt from stg_departures\"\n  }]\n  ...\n}\n")),Object(r.b)("p",null,"Now, delete the table and data of the DataObject ",Object(r.b)("inlineCode",{parentName:"p"},"int-departures")," in Polynote, to prepare it for the new columns ",Object(r.b)("inlineCode",{parentName:"p"},"dt")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_captured"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'val dataIntDepartures = registry.get[DeltaLakeTableDataObject]("int-departures")\ndataIntDepartures.dropTable\n')),Object(r.b)("p",null,"Then start Action deduplicate-departures:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config --network getting-started_default smart-data-lake/gs1:latest -c /mnt/config --feed-sel ids:deduplicate-departures\n")),Object(r.b)("p",null,"After successful execution you can check the schema and data of our table in Polynote.\nThe new column ",Object(r.b)("inlineCode",{parentName:"p"},"dl_ts_captured")," shows the current time of the data pipeline run when this object first occurred in the input data. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"dataIntDepartures.getDataFrame().printSchema\n\nroot\n|-- arrivalairportcandidatescount: long (nullable = true)\n|-- callsign: string (nullable = true)\n|-- departureairportcandidatescount: long (nullable = true)\n|-- estarrivalairport: string (nullable = true)\n|-- estarrivalairporthorizdistance: long (nullable = true)\n|-- estarrivalairportvertdistance: long (nullable = true)\n|-- estdepartureairport: string (nullable = true)\n|-- estdepartureairporthorizdistance: long (nullable = true)\n|-- estdepartureairportvertdistance: long (nullable = true)\n|-- firstseen: long (nullable = true)\n|-- icao24: string (nullable = true)\n|-- lastseen: long (nullable = true)\n|-- dt: string (nullable = true)\n|-- dl_ts_captured: timestamp (nullable = true)\n")),Object(r.b)("p",null,"We can check the work of DeduplicateAction by the following query in Polynote: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'dataIntDepartures.getDataFrame()\n.groupBy($"icao24", $"estdepartureairport", $"dt")\n.count\n.orderBy($"count".desc)\n.show\n\n+------+-------------------+--------+-----+\n|icao24|estdepartureairport|      dt|count|\n+------+-------------------+--------+-----+\n|4b43ab|               LSZB|20210829|    3|\n|4b4b8d|               LSZB|20210829|    3|\n|4b1b13|               LSZB|20210829|    2|\n|4b4445|               LSZB|20210829|    2|\n|4b0f70|               LSZB|20210830|    1|\n|4b1a01|               LSZB|20210829|    1|\n|346603|               LSZB|20210829|    1|\n|4b4442|               LSZB|20210829|    1|\n|4d02d7|               LSZB|20210829|    1|\n|4b43ab|               LSZB|20210830|    1|\n...\n')),Object(r.b)("p",null,"... and it seems that it did not work properly! There are 2 or even 3 records for the same primary key!\nEven worse, we just deleted this table before, so DeduplicateAction shouldn't have any work to do at all."),Object(r.b)("p",null,"In fact DeduplicateAction assumes that input data is already unique for the given primary key.\nThis would be the case for example, in a messaging context, if you were to receive the same message twice.\nDeduplicateAction doesn't deduplicate your input data again, because deduplication is costly and data often is already unique.\nBut in our example we have duplicates in the input data set, and we need to add some deduplication logic to our input data (this will probably become a configuration flag in future SDL version, see issue ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/smart-data-lake/smart-data-lake/issues/428"}),"#428"),")."),Object(r.b)("p",null,"As the easiest way to do this is by using the Scala Spark API, we will add a second ScalaCodeDfTransformer as follows (make sure you get the brackets right): "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'deduplicate-departures {\n  type = DeduplicateAction\n  ...\n  transformers = [{\n    type = SQLDfTransformer\n    code = "select stg_departures.*, date_format(from_unixtime(firstseen),\'yyyyMMdd\') dt from stg_departures"\n  },{\n    type = ScalaCodeDfTransformer\n    code = """\n      import org.apache.spark.sql.{DataFrame, SparkSession}\n      def transform(session: SparkSession, options: Map[String,String], df: DataFrame, dataObjectId: String) : DataFrame = {\n        import session.implicits._\n        df.dropDuplicates("icao24", "estdepartureairport", "dt")\n      }\n      // return as function\n      transform _\n    """\n  }]\n  ...\n}\n')),Object(r.b)("p",null,"If you run Action ",Object(r.b)("inlineCode",{parentName:"p"},"deduplicate-departures")," again and check the result in Polynote, everything is fine now."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note how we have used a third way of defining transformation logic now:",Object(r.b)("br",{parentName:"p"}),"\n","In part 1 we first used a SQLDfsTransformer writing SQL code.",Object(r.b)("br",{parentName:"p"}),"\n","Then for the more complex example of computing distances, we used a  ScalaClassDfTransformer pointing to a Scala class.",Object(r.b)("br",{parentName:"p"}),"\n","Here, we simply include Scala code in our configuration file directly."))),Object(r.b)("p",null,"For sure DeduplicateAction did not have much work to do, as this was the first data load.\nIn order to get different data you would need to adjust the unix timestamp parameters in the URL of DataObject ",Object(r.b)("inlineCode",{parentName:"p"},"ext-departures"),".\nFeel free to play around."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Scala Code")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Scala is a compiled language. The compiler creates bytecode which can be run on a JVM.\nNormally compilation takes place before execution. So how does it work with scala code in the configuration as in our deduplication logic above?"),Object(r.b)("p",{parentName:"div"},"With Scala, you can compile code on the fly. This is actually what the Scala Shell/REPL is doing as well.\nThe Scala code in the configuration above gets compiled when ScalaCodeDfTransformer is instantiated during startup of SDL."))),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"You have now seen different parts of industrializing a data pipeline like robust data formats and caring about historical data.\nFurther, you have explored data interactively with a notebook. "),Object(r.b)("p",null,"The final configuration file of Part 2 should look like ",Object(r.b)("a",{target:"_blank",href:a(128).default},"this")),Object(r.b)("p",null,"In part 3 we will see how to incrementally load fresh flight data and optimize deduplication and historization.\nSee you!"))}d.isMDXComponent=!0}}]);