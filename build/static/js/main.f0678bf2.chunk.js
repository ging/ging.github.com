(window.webpackJsonpging=window.webpackJsonpging||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(37),a(38),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),p=a(14),E=[{route:"/",title:"Home"},{route:"/projects",title:"Projects"},{route:"/research",title:"Research"},{route:"/team",title:"Team"},{route:"/about",title:"About"}],h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"nav_bar",id:"header_home"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"imagotype"},r.a.createElement("div",{className:"isotype"}),r.a.createElement("div",{className:"logotype"},"GING"))),r.a.createElement("div",{className:"menu_icon"},r.a.createElement("i",{className:"material-icons show "+(this.state.open?"responsive-hidden":"responsive-shown"),onClick:function(){e.setState({open:!e.state.open})}},"menu"),r.a.createElement("i",{className:"material-icons close "+(this.state.open?"responsive-shown":"responsive-hidden"),onClick:function(){e.setState({open:!e.state.open})}},"close")),r.a.createElement("div",{className:"menu "+(this.state.open?"responsive-shown":"responsive-hidden")},r.a.createElement("ul",null,E.map(function(t){return r.a.createElement("li",{className:t.route===e.props.route?"li-selected":""},r.a.createElement(p.b,{to:t.route},t.title))}))))}}]),t}(r.a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,"2019 \xa9"),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"http://www.dit.upm.es/",target:"_blank"},"Department of Telematic Systems Engineering")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"http://www.etsit.upm.es/de.html",target:"_blank"},"ETSI Telecomunicaci\xf3n")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",href:"http://www.upm.es/internacional",target:"_blank"},"UPM"))))}}]),t}(r.a.Component),g=a(16);function v(e){return console.log("/build"),r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{alt:"spinner",src:"/build/spinner.svg"}))}var f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={team:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"_pubications"},this.state.loading?r.a.createElement(v,null):this.state.papers.filter(function(e){return"article-journal"===e.type}).filter(function(e,t){return t<3}).map(function(e){var t=e.doi,a=e.content;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/publications.json").then(function(e){return e.json()}).then(function(t){return e.setState({papers:t,loading:!1})})}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={team:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home_page"},r.a.createElement("div",{className:"parallax",id:"parallax"},r.a.createElement(h,{route:this.props.match.path}),r.a.createElement("div",{className:"parallax__layer parallax__layer--base"},r.a.createElement("main",null,r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"group_logo"},r.a.createElement("img",{alt:"logo",className:"logo",src:"/build/assets/img/group-logo.png"})),r.a.createElement("div",{className:"group_description"},r.a.createElement("h1",null,"Next Generation Internet Group"),r.a.createElement("h2",null,"A research group from the ",r.a.createElement("a",{rel:"noopener noreferrer",href:"http://www.dit.upm.es/",className:"link2",target:"_blank"},"   Telematics Engineering Department (DIT) "),"at    ",r.a.createElement("a",{rel:"noopener noreferrer",href:"http://www.upm.es/internacional",className:"link2",target:"_blank"},"Universidad Polit\xe9cnica de Madrid (UPM) ")))),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"carousel"},r.a.createElement(g.a,null,this.state.loading?r.a.createElement(v,null):this.state.carousel.map(function(e){var t=e.label,a=e.description,n=e.image,l=e.url;return r.a.createElement(g.a.Item,null,r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"image",src:"/build"+n,alt:t}),r.a.createElement(g.a.Caption,null,r.a.createElement("h3",null,t),r.a.createElement("p",null,a))))}))),r.a.createElement("div",{className:"latest_publications"},r.a.createElement("h3",null,"Latest publications"),r.a.createElement(f,null),r.a.createElement("a",{href:"/research",rel:"noopener noreferrer"},r.a.createElement("div",{className:"more"},"more...")))),r.a.createElement(d,null)))),r.a.createElement("div",{className:"parallax__layer parallax__layer--back"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"triangle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"rectangle"})))))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/carousel.json").then(function(e){return e.json()}).then(function(t){return e.setState({carousel:t,loading:!1})})}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={projects:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement(h,{route:this.props.match.path}),r.a.createElement("main",null,r.a.createElement("section",{className:"our_projects"},this.state.loading?r.a.createElement(v,null):this.state.projects.map(function(e){var t=e.logo,a=e.title,n=e.description,l=e.route;e.noBlank;return r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project_logo"},r.a.createElement(N,{route:l},r.a.createElement("img",{alt:"Project Logo",src:"/build"+t}))),r.a.createElement("div",{className:"project_main"},r.a.createElement(N,{route:l},r.a.createElement("div",{className:"project_content"},r.a.createElement("div",{className:"project_title"},r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"project_description description"},r.a.createElement("h3",null,n))))))}))),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/projects.json").then(function(e){return e.json()}).then(function(t){return e.setState({projects:t,loading:!1})})}}]),t}(r.a.Component),N=function(e){return e.route.match("http")?r.a.createElement("a",{target:"_blank",href:e.route,rel:"noopener noreferrer"},e.children):r.a.createElement(p.b,{to:e.route},e.children)},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={tools:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tools"},r.a.createElement(h,{route:"/projects"}),r.a.createElement("main",null,r.a.createElement("section",{className:"our_tools"},this.state.loading?r.a.createElement(v,null):this.state.tools.map(function(e){var t=e.title,a=e.description,n=e.route;e.author;return r.a.createElement("div",{className:"tool"},r.a.createElement("div",{className:"tool_title"},r.a.createElement("a",{href:n},r.a.createElement("h2",null,t))),r.a.createElement("div",{className:"tool_main"},r.a.createElement("a",{target:"_blank",href:"/build"+n,rel:"noopener noreferrer"},r.a.createElement("div",{className:"tool_content"},r.a.createElement("div",{className:"tool_description description"},r.a.createElement("h3",null,a))))))}))),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/tools.json").then(function(e){return e.json()}).then(function(t){return e.setState({tools:t,loading:!1})})}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getYears",value:function(e){var t=new Set;for(var a in e)try{var n=e[a].date[0];t.add(n.toString())}catch(r){}return Array.from(t)}},{key:"render",value:function(){var e=this,t=this.getYears(this.props.papers);return r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"filter"},r.a.createElement("label",{htmlFor:"search"},"Search"),r.a.createElement("input",{key:" ",type:"text",value:this.props.search,onChange:function(t){return e.props.changeSearch(""===t.target.value?void 0:t.target.value)}})),r.a.createElement("div",{className:"filter"},r.a.createElement("label",{for:"publication"},"Filter by publication type"),r.a.createElement("select",{id:"publication",name:"publication",onChange:function(t){return e.props.changeType("all"===t.target.value?void 0:t.target.value)}},r.a.createElement("option",{key:"all",value:"all"},"All"),r.a.createElement("option",{key:"journal",value:"article-journal"},"Journal article"),r.a.createElement("option",{key:"conference",value:"paper-conference"},"Conference proceedings"))),r.a.createElement("div",{className:"filter"},r.a.createElement("label",{for:"year"},"Filter by year"),r.a.createElement("select",{id:"year",name:"year",onChange:function(t){return e.props.changeYear("all"===t.target.value?void 0:t.target.value)}},r.a.createElement("option",{key:"all",value:"all"},"All"),t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={papers:[],search:"",year:void 0,type:void 0,loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.papers,n=t.search,l=t.year,c=t.type,o=t.loading;return r.a.createElement("div",{className:"research"},r.a.createElement(h,{route:this.props.match.path}),r.a.createElement("main",null,r.a.createElement("section",{className:"research"},r.a.createElement(y,{search:n,year:l,type:c,papers:a,changeSearch:function(t){return e.setState({search:t})},changeYear:function(t){return e.setState({year:t})},changeType:function(t){return e.setState({type:t})}}),o?r.a.createElement(v,null):a.filter(function(e){return(!n||n.toLowerCase().replace(new RegExp(/\s/g),"").replace(new RegExp(/[\xe0\xe1\xe2\xe3\xe4\xe5]/g),"a").replace(new RegExp(/\xe6/g),"ae").replace(new RegExp(/\xe7/g),"c").replace(new RegExp(/[\xe8\xe9\xea\xeb]/g),"e").replace(new RegExp(/[\xec\xed\xee\xef]/g),"i").replace(new RegExp(/\xf1/g),"n").replace(new RegExp(/[\xf2\xf3\xf4\xf5\xf6]/g),"o").replace(new RegExp(/\u0153/g),"oe").replace(new RegExp(/[\xf9\xfa\xfb\xfc]/g),"u").replace(new RegExp(/[\xfd\xff]/g),"y").replace(new RegExp(/\W/g),"").split(" ").every(function(t){return e.content.toLowerCase().replace(new RegExp(/\s/g),"").replace(new RegExp(/[\xe0\xe1\xe2\xe3\xe4\xe5]/g),"a").replace(new RegExp(/\xe6/g),"ae").replace(new RegExp(/\xe7/g),"c").replace(new RegExp(/[\xe8\xe9\xea\xeb]/g),"e").replace(new RegExp(/[\xec\xed\xee\xef]/g),"i").replace(new RegExp(/\xf1/g),"n").replace(new RegExp(/[\xf2\xf3\xf4\xf5\xf6]/g),"o").replace(new RegExp(/\u0153/g),"oe").replace(new RegExp(/[\xf9\xfa\xfb\xfc]/g),"u").replace(new RegExp(/[\xfd\xff]/g),"y").replace(new RegExp(/\W/g),"").includes(t)}))&&(!l||e.date&&e.date[0]&&e.date[0].toString()===l)&&(!c||e.type&&e.type===c)}).map(function(e){var t=e.date,a=e.doi,n=e.content;return r.a.createElement("div",{className:"paper"},r.a.createElement("div",{className:"paper_date"},r.a.createElement("h4",null,t?t[0]:"")),r.a.createElement("div",{className:"paper_main"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:a},r.a.createElement("div",{className:"paper_content"},r.a.createElement("div",{className:"paper_title"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:n}}))))))}))),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/publications.json").then(function(e){return e.json()}).then(function(t){return e.setState({papers:t,loading:!1})})}}]),t}(r.a.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={team:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"team"},r.a.createElement(h,{route:this.props.match.path}),r.a.createElement("main",null,r.a.createElement("section",{className:"teammates"},this.state.loading?r.a.createElement(v,null):Object.values(this.state.team).map(function(e){var t=e.title,a=e.members;return r.a.createElement("div",{className:"teamgrouptitle"},r.a.createElement("h2",null,t),a.map(function(e){var t=e.name,a=e.description,n=e.photo,l=e.github,c=e.email,o=c?c.split("@"):null;return r.a.createElement("div",{className:"teammate"},r.a.createElement("div",{className:"mate_img"},r.a.createElement("a",{href:l},r.a.createElement("img",{alt:"Team member",src:"/build"+n,className:"grayscale"}))),r.a.createElement("div",{className:"mate_info"},r.a.createElement("div",{className:"mate_name"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"mate_description"},r.a.createElement("p",null,a),r.a.createElement("p",null,r.a.createElement("b",null,o?r.a.createElement("span",null,o[0],"  ",r.a.createElement("img",{alt:"at",className:"at",src:"/build/assets/img/arroba-symbol.svg"}),o[1]):"")))))}))}))),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),fetch("/build/assets/team.json").then(function(e){return e.json()}).then(function(t){return e.setState({team:t,loading:!1})})}}]),t}(r.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(h,{route:this.props.match.path}),r.a.createElement("main",null,r.a.createElement("section",{className:"about_description"},r.a.createElement("p",null,"We have gathered a long teaching experience at the University. Our main research interests are focused on the last technologies in Internet and the WWW, such as HTML5. We have extensive experience in video-conferencing systems, social networks websites and e-Learning. Our latest participation in research projects include ongoing EU-founded projects such as Global Excursions and FI-WARE")),r.a.createElement("h2",null,"Where are we?"),r.a.createElement("section",{className:"location"},r.a.createElement("div",{className:"col1"},r.a.createElement("div",{className:"location_map map-responsive"},r.a.createElement("iframe",{title:"maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses",width:"600",height:"450",frameborder:"0",style:{border:0},allowfullscreen:!0}))),r.a.createElement("div",{className:"col2"},r.a.createElement("div",{className:"location_info"},r.a.createElement("h2",null,"E.T.S. DE INGENIEROS DE TELECOMUNICACI\xd3N"),r.a.createElement("h3",null,"Av. Complutense, 30, 28040 Madrid Edificio B")),r.a.createElement("div",{className:"contact"},r.a.createElement("h2",null,"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"E-mail"),r.a.createElement("p",null,"gi.internetng@upm.es")),r.a.createElement("li",null,r.a.createElement("h3",null,"Phone"),r.a.createElement("p",null,"91 336 73 31")),r.a.createElement("li",null,r.a.createElement("h3",null,"Fax"),r.a.createElement("p",null,"91 336 73 33"))))))),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(r.a.Component),x=a(11),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(x.a,{path:"/",exact:!0,component:b}),r.a.createElement(x.a,{path:"/projects",component:j}),r.a.createElement(x.a,{path:"/tools",component:w}),r.a.createElement(x.a,{path:"/research",component:O}),r.a.createElement(x.a,{path:"/team",component:_}),r.a.createElement(x.a,{path:"/about",component:k})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.f0678bf2.chunk.js.map