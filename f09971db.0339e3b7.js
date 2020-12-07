(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),o=(n(0),n(96)),r={id:"firstRun",title:"First Run",sidebar_label:"First Run"},s={unversionedId:"firstRun",id:"firstRun",isDocsHomePage:!1,title:"First Run",description:"To run the example, you should have a jar file (see Build) and the application.conf (see First Config).",source:"@site/docs/firstRun.md",slug:"/firstRun",permalink:"/sdl-docs/docs/firstRun",version:"current",sidebar_label:"First Run",sidebar:"docs",previous:{title:"First Configuration",permalink:"/sdl-docs/docs/firstConfig"},next:{title:"Next Steps",permalink:"/sdl-docs/docs/nextSteps"}},l=[{value:"What just happened?",id:"what-just-happened",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To run the example, you should have a jar file (see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/sdl-docs/docs/build"}),"Build"),") and the application.conf (see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/sdl-docs/docs/firstConfig"}),"First Config"),")."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For simplicity, put all files in one working directory: The smartdatalake-jar-with-dependencies, the application.conf and the sample CSV file.\nYou will notice that the path for the input CSV file wasn't specified, so it's expected to be found in the current working directory.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Execute the feed:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"java -jar smartdatalake-jar-with-dependencies.jar --feed-sel getting-started")),Object(o.b)("p",{parentName:"li"},"Change the jar filename accordingly, it will contain the version number.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check to see if the target folder was created and contains the Excel file."))),Object(o.b)("p",null,"Note, that you need to run the jar file with Java 8 (or higher)."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to see additional command line parameters and options."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"-c")," option for example can be used to define one or more locations of your configurations files, if SDLB should not look for the application.conf resource in your classpath.\nYou can define configuration files directly or directories which contain multiple configuration files.\nIf a directory is given, all configuration files found in this directory and its subdirectories will be merged together."),Object(o.b)("p",null,"If you placed the CSV file in another directory, you need to define its location in your application.conf instead of just providing the name of the CSV file."),Object(o.b)("h2",{id:"what-just-happened"},"What just happened?"),Object(o.b)("p",null,"As you can see from the log written, a lot has happened in this simple example already."),Object(o.b)("p",null,"First, SDLB read your ",Object(o.b)("inlineCode",{parentName:"p"},"application.conf")," since we didn't specify another filename and parsed its content.\nThen, given the feed name ",Object(o.b)("inlineCode",{parentName:"p"},"getting-started"),", SDLB looked for any actions matching this feed name and found one.\nIt builds up a DAG (directed acyclic graph) which in this case only consists of a Start node and the one action."),Object(o.b)("p",null,"Each run constists of different stages which will be explained in more detail later.\nInteresting here is the init phase where SDLB performs the early validation to see if the source file is here and accessible.\nIf it can't find the file, it's not even starting with processing and stops after a few seconds."),Object(o.b)("p",null,"Once the init phase is finished, the CSV file is ready, converted to a Spark DataFrame and finally written to the Excel file."),Object(o.b)("p",null,"That's it!",Object(o.b)("br",{parentName:"p"}),"\n","You just successfully ran your first Smart Data Lake feed."))}d.isMDXComponent=!0}}]);