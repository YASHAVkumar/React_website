(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(30),r=s.n(i),l=s(2),o=s(3),j=s(5),d=s(4),b=(s(39),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{className:"form-inline ",action:"/search",children:Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("input",{placeholder:"Search Problem Tag",type:"text",name:"input",className:"btn btn-outline-success text-danger bg-white form-control"}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("input",{className:"btn btn-success",type:"submit",name:"Submit",value:"Search"})})]})})})}}]),s}(n.a.Component)),h=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("nav",{className:"navbar navbar-expand-sm sticky-top navbar-light",children:[Object(c.jsx)("div",{className:"navbar-collapse collapse",children:Object(c.jsx)("ul",{className:"nav navbar-nav ",children:Object(c.jsx)("li",{className:"nav-brand",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("h2",{children:"Coder's Choice"})})})})}),Object(c.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b,{})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"/info@contact",className:"nav-link ",children:"Contact"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"/info@about",className:"nav-link",children:"About"})})]})]}),Object(c.jsx)("hr",{})]})})}}]),s}(n.a.Component),m=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container-fluid ",style:{background:"black"},children:[Object(c.jsxs)("div",{className:"container-fluid text-info my-3 pt-3 sticky-bottom",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("u",{children:"About C Language"})}),Object(c.jsxs)("ol",{children:[Object(c.jsx)("li",{children:"C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. - www.tutorialspoint.com"}),Object(c.jsx)("li",{children:"The main features of C language include low-level access to memory, a simple set of keywords, and clean style, these features make C language suitable for system programmings like an operating system or compiler development.- www.geeksforgeeks.org"}),Object(c.jsx)("li",{children:"C language is a system programming language because it can be used to do low-level programming (for example driver and kernel).- www.javatpoint.com"})]})]}),Object(c.jsxs)("div",{className:"container-fluid text-info my-3 pt-3 sticky-bottom",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("u",{children:"About Java Language"})}),Object(c.jsx)("p",{children:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages."})]})]})}}]),s}(n.a.Component),u=s(12),x=s.n(u),O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).componentDidMount=function(){c.getRequest()},c.getRequest=function(){x.a.get("http://127.0.0.1:5000/findall").then((function(e){c.setState({problems:e.data})}))},c.state={problems:[]},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:" bg-light",children:Object(c.jsxs)("table",{className:"table ",children:[Object(c.jsx)("thead",{style:{background:"black",color:"coral",fontSize:"1vw"},children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"S No. "}),Object(c.jsx)("td",{children:"Problem Name"}),Object(c.jsx)("td",{children:"Problem Tag"}),Object(c.jsx)("td",{children:"Problem Level"}),Object(c.jsx)("td",{children:"Language"})]})}),Object(c.jsx)("tbody",{className:"text-dark",children:this.state.problems.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[t+1,"."]}),Object(c.jsx)("td",{children:Object(c.jsx)("form",{action:"showproblem/",children:Object(c.jsx)("button",{className:"btn ",value:e._id,name:"id",children:e.ProblemName})})}),Object(c.jsx)("td",{children:Object(c.jsx)("form",{action:"showproblem/",children:Object(c.jsx)("button",{className:"btn ",value:e._id,name:"id",children:e.ProblemTag})})}),Object(c.jsx)("td",{children:Object(c.jsxs)("button",{className:"btn",disabled:!0,children:[" ",e.ProblemCategories]})}),Object(c.jsx)("td",{children:Object(c.jsxs)("button",{className:"btn",disabled:!0,children:[" ",e.ProblemLanguage]})})]},t)}))})]})})})}}]),s}(n.a.Component);var p=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Hey dear Coder!!"}),Object(c.jsx)("span",{children:"Click Below to post your questions. "}),Object(c.jsx)("form",{action:"/addproblem",children:Object(c.jsx)("button",{className:" my-1 pl-3 btn btn-dark btn-outline-success",children:"My Own Code"})})]})})},g=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-2"}),Object(c.jsxs)("div",{className:"col-sm-7 shadow-lg",children:[Object(c.jsx)("div",{className:"container ",children:Object(c.jsx)("span",{style:{fontSize:"4vw",color:"#0e0b2a"},children:"Learn C and Java with Me"})}),Object(c.jsx)(O,{})]}),Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)(p,{})})]}),Object(c.jsx)(m,{})]})}}]),s}(n.a.Component),v=s(14);var f=function(){return Object(c.jsx)("div",{style:{border:"1vw solid black",width:"100%"}})},N=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{class:"alert alert-info",style:{textAlign:"center"},children:"Use Basic Html tags for best view in textbox "})}}]),s}(n.a.Component),y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).func=function(e){var t=e.target.name,s=e.target.value;console.log(" hi sir this is func"),"name"===t&&c.setState({name:s}),"tag"===t&&(s=s.toUpperCase(),c.setState({tag:s})),"cat"===t&&c.setState({cat:s}),"question"===t&&c.setState({question:s}),"solution"===t&&c.setState({solution:s}),"lan"===t&&c.setState({lan:s}),"user"===t&&c.setState({user:s})},c.set=function(e){alert("Thanks buddy"),console.log(c.state),console.log("this is from set"),x.a.post("http://127.0.0.1:5000/setproblem",c.state)},c.state={name:"",tag:"",cat:"",question:"",solution:"",lan:"",user:"Unknown"},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("div",{className:"container-fluid ",children:[Object(c.jsxs)("div",{className:"row ml-1 pt-2  bg-success shadow-sm",children:[Object(c.jsxs)("h1",{style:{marginLeft:"1vw",color:"white",textShadow:"2px 2px black,2px 2px red"},children:["Hey Coder ",Object(c.jsx)("img",{alt:"Hi!!",src:"https://media.giphy.com/media/LY8yDak6Tngb6FfPrt/source.gif",width:"50",height:"50"})," , Thanks for Contributing to Coder's Choice."]}),Object(c.jsx)("h4",{style:{color:"cyan",marginLeft:"2vw"},children:"Add your problem or information "})]}),Object(c.jsx)("hr",{}),Object(c.jsx)(N,{}),Object(c.jsx)("div",{className:"container ml-5 shadow-sm",children:Object(c.jsxs)("form",{action:"#",method:"get",onSubmit:this.set,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemName",children:"Enter Your Problem Name"}),Object(c.jsx)("textarea",{className:"form-control",name:"name",row:"2",maxlength:"50",required:!0,placeholder:"Enter text here",onChange:this.func.bind(this)})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemTag",children:"Enter Your Problem Tag "}),Object(c.jsx)("input",{className:"form-control",maxlength:"8",type:"text",name:"tag",required:!0,placeholder:"Enter text here",onChange:this.func.bind(this),style:{textTransform:"uppercase"}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemLanguage",children:"Select your Language"}),Object(c.jsxs)("select",{className:"form-control",name:"lan",onMouseMove:this.func.bind(this),required:!0,onChange:this.func.bind(this),children:[Object(c.jsx)("option",{children:"C"}),Object(c.jsx)("option",{children:"Java"})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemCategories",children:"Difficulty of Problem"}),Object(c.jsxs)("select",{className:"form-control",name:"cat",onMouseMove:this.func.bind(this),required:!0,onChange:this.func.bind(this),children:[Object(c.jsx)("option",{children:"Easy"}),Object(c.jsx)("option",{children:"Medium"}),Object(c.jsx)("option",{children:"Hard"})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemQuestion",children:"Enter Your Problem Question"}),Object(c.jsx)("textarea",{className:"form-control",name:"question",row:"2",placeholder:"Enter text here",onChange:this.func.bind(this)})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemSolution",children:"Enter Your Problem Solution"}),Object(c.jsx)("textarea",{className:"form-control",name:"solution",row:"2",required:!0,placeholder:"Enter text here",onChange:this.func.bind(this)})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("h1",{for:"ProblemDeclaration",children:"Question Declaration"}),Object(c.jsxs)("label",{children:["These all statements are true and correct. Oterwise admin have all Rights to ",Object(c.jsxs)("abbr",{title:"R & D",children:[" ",Object(c.jsx)("b",{children:" Delete or Edit"})," "]})," this statements"]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"checkbox",defaultChecked:!0,name:"check"})," I Agree",Object(c.jsx)("input",{className:"form-control",name:"user",row:"2",maxlength:"15",placeholder:"Enter text here",onChange:this.func.bind(this)})]}),Object(c.jsxs)("div",{className:"btn-group btn-group-justified.block my-3 pl-5 ",children:[Object(c.jsx)("input",{className:"btn btn-primary btn-outline-success text-white mr-5 ",type:"submit",name:"Data",value:"Save"}),Object(c.jsx)("input",{className:"btn btn-primary btn-outline-warning text-white",type:"reset",name:"Reset",value:"Reset"})]})]})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h2",{children:"Preview Your Code "}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"container-fluid bg-light",children:Object(c.jsxs)("div",{className:"row mt-5",children:[Object(c.jsx)("div",{className:"col-sm-2",id:"ques",children:Object(c.jsx)("div",{className:"container bg-dark text-white",children:Object(c.jsxs)("h4",{children:["Thanks to ",this.state.user]})})}),Object(c.jsx)("div",{className:"col-sm-9",children:Object(c.jsxs)("div",{className:"container-fluid shadow-md bg-white",children:[Object(c.jsxs)("div",{style:{textAlign:"end"},children:[Object(c.jsxs)("h2",{children:["Problem in ",this.state.lan]}),Object(c.jsxs)("h4",{children:["Level - ",this.state.cat]})]}),Object(c.jsx)(f,{}),Object(c.jsxs)("div",{style:{display:"inline-block"},width:"100%",children:[Object(c.jsxs)("span",{style:{fontSize:"3vw"},children:[this.state.name,"  |"]}),Object(c.jsxs)("span",{style:{fontSize:"1vw",color:"red"},children:[" ",this.state.tag]})]}),Object(c.jsx)(f,{}),Object(c.jsx)("div",{style:{marginTop:"1vw"},children:Object(c.jsx)("h2",{children:Object(c.jsx)(v.a,{content:this.state.question})})}),Object(c.jsx)(f,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"container bg-light shadow-lg border",style:{marginTop:"1vw",color:"black"},children:Object(c.jsx)("h5",{children:Object(c.jsx)(v.a,{content:this.state.solution})})})})]})}),Object(c.jsx)("div",{className:"col-sm-1"})]})})]})]})]})}}]),s}(n.a.Component),w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container-fluid my-5 pt-3",style:{textAligin:"center",backgroundColor:"coral",fontSize:"8vw",textAlign:"center"},children:Object(c.jsxs)("div",{className:"container shadow-lg my-5",children:[Object(c.jsx)("h1",{children:"404 No Page Found."}),Object(c.jsxs)("h3",{children:["Please Redirect to Home Page ",Object(c.jsx)("button",{className:"btn btn-lg",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("abbr",{title:"Click me take to a flight of home page",children:"HOME"})})})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{className:"btn btn-danger btn-lg",disabled:!0,children:["Error ",Object(c.jsx)("span",{}),Object(c.jsx)("span",{className:"spinner-grow spinner-grow-lg"}),Object(c.jsx)("span",{className:"spinner-grow spinner-grow-lg"}),Object(c.jsx)("span",{className:"spinner-grow spinner-grow-sm"}),Object(c.jsx)("span",{className:"spinner-grow spinner-grow-sm"})]})})]})})})},k=(s(58),s(59),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).getRequest=function(){console.log("hi sir i'm sunny");var e=window.location.search.slice(1);e='{"'+(e=(e=e.replace(/=/g,'":"')).replace(/&/g,'","'))+'"}';var t=JSON.parse(e);console.log(t.id),x.a.post("http://127.0.0.1:5000/findone",t).then((function(e){console.log(e.data);var t=e.data;c.setState({name:t.ProblemName,tag:t.ProblemTag,cat:t.ProblemCategories,question:t.ProblemQuestion,solution:t.ProblemSolution,lan:t.ProblemLanguage,user:t.ContributorName})}))},c.componentDidMount=function(){c.getRequest()},c.state={name:"",tag:"",cat:"",question:"",solution:"",lan:"",user:"User"},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"container-fluid bg-light",children:Object(c.jsxs)("div",{className:"row mt-5",children:[Object(c.jsx)("div",{className:"col-sm-2",id:"ques",children:Object(c.jsx)("div",{className:"container bg-dark text-white",children:Object(c.jsxs)("h4",{children:["Thanks to ",this.state.user]})})}),Object(c.jsx)("div",{className:"col-sm-9",children:Object(c.jsxs)("div",{className:"container-fluid shadow-md bg-white",children:[Object(c.jsxs)("div",{style:{textAlign:"end"},children:[Object(c.jsxs)("h2",{children:["Problem in ",this.state.lan]}),Object(c.jsxs)("h4",{children:["Level - ",this.state.cat]})]}),Object(c.jsx)(f,{}),Object(c.jsxs)("div",{style:{display:"inline-block"},width:"100%",children:[Object(c.jsxs)("span",{style:{fontSize:"3vw"},children:[this.state.name,"  |"]}),Object(c.jsxs)("span",{style:{fontSize:"1vw",color:"red"},children:[" ",this.state.tag]})]}),Object(c.jsx)(f,{}),Object(c.jsx)("div",{style:{marginTop:"1vw"},children:Object(c.jsx)("h2",{children:Object(c.jsx)(v.a,{content:this.state.question})})}),Object(c.jsx)(f,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"container bg-light shadow-lg border",style:{marginTop:"1vw",color:"black"},children:Object(c.jsx)("h5",{children:Object(c.jsx)(v.a,{content:this.state.solution})})})})]})}),Object(c.jsx)("div",{className:"col-sm-1"})]})})]})}}]),s}(n.a.Component)),C=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"container-fluid mx-auto pt-2",style:{backgroundColor:"coral",width:"100%",height:"100%"},children:Object(c.jsxs)("div",{className:"container my-4 pt-4 shadow-lg",children:[Object(c.jsxs)("h1",{style:{color:"white"},children:[Object(c.jsx)("label",{className:"text-dark",children:"CREATER :- "})," YASHAV KUMAR"]}),Object(c.jsx)("h1",{style:{color:"red"},children:"About Me :-"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{style:{color:"white"},children:"Hi I am Yashav wellcome's you. First thanks for visiting my site, I'm full stack Developer and 3 year Student at chitkara. I Hope u like my work. I devoted most of this my time to build amazing websites to see more such work i uploaded  some Handles down below please visit and follow me. If u want source code please visit to my github handle."}),Object(c.jsx)("h1",{className:"text-dark",children:"My Social Handles :-"}),Object(c.jsxs)("p",{className:"pt-3",children:[Object(c.jsxs)("div",{className:" bg-light pt-3 pl-3",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/yashav-kumar/",target:"blank",children:Object(c.jsx)("img",{align:"center",src:"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg",alt:"yashav-kumar",height:"30",width:"40"})}),Object(c.jsx)("label",{className:"text-secondary",children:" Linkedin Username"})," ",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/yashav-kumar/",children:"yashav-kumar"})]}),Object(c.jsxs)("div",{className:"bg-white  pt-2 pl-3",children:[Object(c.jsx)("a",{href:"https://www.facebook.com/Yashav.kumar.19",target:"blank",children:Object(c.jsx)("img",{align:"center",src:"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg",alt:"Yashav.kuamar.19",height:"30",width:"40"})}),Object(c.jsx)("label",{className:"text-secondary",children:"Facebook Username"})," ",Object(c.jsx)("a",{href:"https://www.facebook.com/Yashav.kumar.19",children:"yashav.kumar.19"})]}),Object(c.jsxs)("div",{className:"bg-white  pt-2 pl-3",children:[Object(c.jsx)("a",{href:"https://www.instagram.com/yashav__kumar/",target:"blank",children:Object(c.jsx)("img",{align:"center",src:"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg",alt:"yashav__kumar",height:"30",width:"40"})}),Object(c.jsx)("label",{className:"text-secondary",children:"Instagram Username"})," ",Object(c.jsx)("a",{href:"https://www.instagram.com/yashav__kumar/",children:"yashav__kumar"})]}),Object(c.jsxs)("div",{className:"bg-white  pt-2 pb-3 pl-3",children:[Object(c.jsx)("a",{href:"https://github.com/YASHAVkumar",children:Object(c.jsx)("img",{src:"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",alt:"github",height:"30",width:"40"})}),Object(c.jsx)("label",{className:"text-secondary",children:"Git hub Username"})," ",Object(c.jsx)("a",{href:"https://github.com/YASHAVkumar",children:"YASHAVkumar"})]})]})]})]})})]})}}]),s}(n.a.Component),S=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).getRequest=function(){console.log("Jaduu");var e=window.location.search.slice(1);e='{"'+(e=(e=e.replace(/=/g,'":"')).replace(/&/g,'","'))+'"}';var t=JSON.parse(e);console.log(t.input),x.a.post("http://127.0.0.1:5000/findbytag",t).then((function(e){var t=e.data;c.setState({search:t}),console.log(c.state)}))},c.componentDidMount=function(){c.getRequest()},c.state={search:[]},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{className:"row my-3 pt-5",children:[Object(c.jsx)("div",{className:"col-sm-2"}),Object(c.jsx)("div",{className:"col-sm-7 shadow-lg",children:Object(c.jsx)("div",{className:"container bg-light",children:Object(c.jsxs)("table",{className:"table ",children:[Object(c.jsx)("thead",{style:{background:"black",color:"coral",fontSize:"1vw"},children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"S No. "}),Object(c.jsx)("td",{children:"Problem Name"}),Object(c.jsx)("td",{children:"Problem Tag"}),Object(c.jsx)("td",{children:"Problem Level"}),Object(c.jsx)("td",{children:"Language"})]})}),Object(c.jsx)("tbody",{className:"text-dark",children:this.state.search.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[t+1,"."]}),Object(c.jsx)("td",{children:Object(c.jsx)("form",{action:"showproblem/",children:Object(c.jsx)("button",{className:"btn ",value:e._id,name:"id",children:e.ProblemName})})}),Object(c.jsx)("td",{children:Object(c.jsx)("form",{action:"showproblem/",children:Object(c.jsx)("button",{className:"btn ",value:e._id,name:"id",children:e.ProblemTag})})}),Object(c.jsx)("td",{children:Object(c.jsxs)("button",{className:"btn",children:[" ",e.ProblemCategories]})}),Object(c.jsx)("td",{children:Object(c.jsxs)("button",{className:"btn",children:[" ",e.ProblemLanguage]})})]},t)}))})]})})}),Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)(p,{})})]})]})}}]),s}(n.a.Component),P=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).del=function(e){var t=e.target.name,s=e.target.value;"name"===t?c.setState({name:s}):"email"===t?c.setState({email:s}):"feedback"===t&&c.setState({feedback:s})},c.alertBox=function(){alert("Successfully Submitted")},c.detail=function(){console.log("well come back dear!!"),console.log(c.state),x.a.post("http://127.0.0.1:5000/details",c.state),c.alertBox()},c.state={name:"",email:"",feedback:""},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"my-3 pt-4 mx-auto",style:{backgroundColor:"coral"},children:Object(c.jsx)("div",{className:"container-fluid",style:{position:"relative",top:"20%",background:"transparent"},children:Object(c.jsx)("div",{className:"container pt-5 shadow-lg text-dark",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-sm-6 ",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:Object(c.jsx)("u",{children:"My Contacts"})})}),Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{type:"none",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:"NAME :"})," ",Object(c.jsxs)("h2",{children:[Object(c.jsx)("i",{className:"far fa-user",children:" "})," YASHAV KUMAR"]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:"Email :"})," ",Object(c.jsxs)("h2",{children:[Object(c.jsx)("i",{className:"fas fa-phone"})," yashavkumar91@gmail.com"]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:"ADDRESS :"})," ",Object(c.jsxs)("h2",{children:[Object(c.jsx)("i",{className:"fas fa-address-card"})," Kangra (H.P), India"]})]})]})})]}),Object(c.jsxs)("div",{className:"col-sm-6",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:Object(c.jsx)("u",{children:"Please Send Your Feedback!!"})})}),Object(c.jsx)("form",{action:"#",onSubmit:this.detail,children:Object(c.jsx)("table",{className:"table text-light",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)("i",{className:"far fa-user"})}),Object(c.jsx)("label",{children:"Name "})]}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{className:"btn btn-outline-info btn-lg",name:"name",type:"text",required:!0,placeholder:"Your Name",onChange:this.del.bind(this)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)("i",{className:"fas fa-envelope-square"})}),Object(c.jsx)("label",{children:"Email  "})]}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{className:"btn btn-outline-info btn-lg",name:"email",type:"email",required:!0,placeholder:"Your Email",onChange:this.del.bind(this)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)("i",{className:"fas fa-grin-squint"})}),Object(c.jsx)("label",{children:"Your Suggestions "})]}),Object(c.jsx)("td",{children:Object(c.jsx)("textarea",{className:"btn btn-outline-info btn-lg",name:"feedback",type:"text",placeholder:"Your text here",height:"140px",required:!0,onChange:this.del.bind(this)})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("input",{className:"btn btn-outline-primary btn-secondary btn-lg",type:"submit",name:"submit"})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{className:"btn btn-outline-primary btn-secondary btn-lg",type:"reset",name:"Reset"})})]})]})})})]})]})})})})]})}}]),s}(n.a.Component),q=s(32),A=s(6);var T=function(){return Object(c.jsx)(q.a,{children:Object(c.jsxs)(A.c,{children:[Object(c.jsx)(A.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})}),Object(c.jsx)(A.a,{path:"/addproblem",children:Object(c.jsx)(y,{})}),Object(c.jsx)(A.a,{path:"/showproblem",children:Object(c.jsx)(k,{})}),Object(c.jsx)(A.a,{path:"/info@about",children:Object(c.jsx)(C,{})}),Object(c.jsx)(A.a,{path:"/info@contact",children:Object(c.jsx)(P,{})}),Object(c.jsx)(A.a,{path:"/search",children:Object(c.jsx)(S,{})}),Object(c.jsx)(A.a,{path:"*",children:Object(c.jsx)(w,{})})]})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.25646ebe.chunk.js.map