(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],p=0,m=[];p<o.length;p++)r=o[p],s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"07fc":function(t,e,i){},"20f5":function(t,e,i){},"2abe":function(t,e,i){var n={"./00_core.json":"79c9","./01_emeritus.json":"d498","./02_bleskomat.json":"e094"};function s(t){var e=a(t);return i(e)}function a(t){var e=n[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="2abe"},"2b71":function(t,e,i){},"32fe":function(t,e,i){t.exports=i.p+"img/ln.f52fa1da.svg"},"50c3":function(t,e,i){"use strict";var n=i("7b3c"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"content"},[i("Nav"),i("div",{staticClass:"container"},[i("router-view")],1),i("div",{staticClass:"push"})],1),i("Footer")],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Nav"},[i("div",{staticClass:"bar container"},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"six columns menu"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v(" About ")])],1),i("li",[i("router-link",{attrs:{to:"/join"}},[t._v(" Join ")])],1),i("li",[i("div",{staticClass:"dropdown"},[t._m(1),i("div",{staticClass:"dropdown-content"},t._l(t.teams,(function(e){return i("router-link",{key:e,attrs:{to:"/project"+e.project.route}},[t._v(" "+t._s(e.project.name)+" ")])})),1)])]),i("li",[i("router-link",{attrs:{to:"/contact"}},[t._v(" Contact ")])],1)])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"six columns logo"},[n("img",{attrs:{src:i("d739")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropbtn"},[i("div",[t._v(" Projects ")])])}],c=(i("7f7f"),i("ac6a"),i("2abe")),l={};function u(t){t.keys().forEach((function(e){l[t(e).project.name]=t(e)}))}u(c);var p=l,m={name:"Nav",data:function(){return{teams:p}},props:{}},h=m,d=(i("63eb"),i("2877")),f=Object(d["a"])(h,r,o,!1,null,"c583e868",null),v=f.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"Footer"},[i("div",{staticClass:"bar container"},[i("div",{staticClass:"canary row"},[i("p",[t._v(" The hackerspace has never been contacted by any agency anywhere in the world in a way which requires that contact not to be disclosed. ")])]),i("div",{staticClass:"row last-line"},[i("div",[i("a",{attrs:{href:"https://paralelnipolis.cz",target:"_blank"}},[t._v(" Paralelni Polis ")])]),t._v(" | "),i("div",[i("a",{attrs:{href:"https://flyingcircuit.com",target:"_blank"}},[t._v(" Flying Circuit ")])]),t._v(" | "),i("div",[i("a",{attrs:{href:"https://github.com/bordel",target:"_blank"}},[t._v(" Github ")])])])])])}],_={name:"Footer",data:function(){return{}},props:{}},w=_,k=(i("649e"),Object(d["a"])(w,b,g,!1,null,"7d2ba581",null)),C=k.exports,y={name:"app",components:{Nav:v,Footer:C}},j=y,A=(i("034f"),Object(d["a"])(j,s,a,!1,null,null,null)),E=A.exports,x=(i("456d"),i("8c4f")),M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[t._m(0),t._m(1),t._m(2),i("div",{staticClass:"row space"},[i("div",{staticClass:"twelve columns cta"},[t._m(3),i("router-link",{attrs:{to:"/join"}},[i("button",{staticClass:"button-primary cta-btn"},[t._v(" Become a member ")])])],1)])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("h1",[t._v(" Hackerspace ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("p",[t._v(" Bordel is a "),i("b",[t._v(" small community hackerspace ")]),t._v(" located in the basement of Paralelní Polis in Prague. Basically, It's room with a modular setup suitable for work, hacking or organizing smaller workshops. There is a bunch of "),i("b",[t._v(" hw, tools, 3d printers, soldering gear, a workbench ")]),t._v("and some music/noise instruments available for use. "),i("b",[t._v(" The space doesn't have an ideological affiliation ")]),t._v(" nor explicit limitations of technological topics to be worked on. The topics of hosted events will be influenced by the users/members of the space. We are a "),i("b",[t._v(" non-profit initiative ")]),t._v(" whose existence depends on community contributions and the courtesy of Paralelni Polis. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("h1",[t._v(" God bless this mess! ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"six offset-by-three columns"},[i("h2",[t._v(" Are you a fan? ")])])}],T={name:"Home",props:{msg:String}},I=T,B=(i("8077"),Object(d["a"])(I,M,S,!1,null,"334872a5",null)),P=B.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[t._m(0),t._m(1),i("Form"),t._m(2)],1)},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"twelve columns"},[i("h1",[t._v(" Membership ")]),i("p",[t._v(" Members of the Bordel space will get access to the room and all of the tooling during opening hours of Paralelni Polis (weekdays 8am - 8pm) or whenever there are people with keys in the building. Additionally, members will get access to selected events happening in Paralelni Polis. ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"six columns"},[i("h2",[t._v(" Price ")]),i("p",[t._v(" Membership fee is "),i("b",[t._v("500 czk")]),t._v(" monthly. ")])]),i("div",{staticClass:"six columns"},[i("h2",[t._v(" Capacity ")]),i("p",[t._v(" Capacity is limited to "),i("b",[t._v("20 members")]),t._v(". ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("h1",[t._v(" Rules ")]),i("ol",[i("li",[t._v(" Respect privacy of others ")]),i("li",[t._v(" Clean the mess before you leave. ")]),i("li",[t._v(" Keep your project in you box when you are not working on it ")]),i("li",[t._v(" Last person locks the door ")]),i("li",[t._v(" Don't mess with projects of other people before talking to them ")]),i("li",[t._v(" Fuck the rules! ")])])])}],D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("hr"),i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"nine columns"},[i("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[i("div",{staticClass:"row"},[i("label",[t._v("Name")]),i("input",{attrs:{type:"text",name:"user_name"}}),i("label",[t._v("Email")]),i("input",{attrs:{type:"email",name:"user_email"}}),i("label",[t._v(" When do you want to visit us? ")]),i("textarea",{attrs:{name:"message"}}),i("input",{attrs:{type:"submit",disabled:this.formSent},domProps:{value:this.submitTxt}})])])])]),i("hr")])},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"three columns"},[i("h2",[t._v(" How to join? ")]),i("p",[t._v(" Fill out the form or just show up to say hi! We'll get back to you asap with an assigned member id & membership fee payment information. ")])])}],R=i("0f91"),Z=i.n(R),G={name:"Form",data:function(){return{formSent:!1,submitTxt:"SEND"}},props:{},methods:{sendEmail:function(t){var e=this;this.formSent=!0,Z.a.sendForm("sendgrid","bordel",t.target,"user_yp7nwFFITxZGqJNNYO8vr").then((function(t){console.log("SUCCESS!",t.status,t.text),e.formSent=!0,e.submitTxt="SUCCESS! SEE YOU SOON!"}),(function(t){e.formSent=!1,console.log("FAILED...",t),e.submitTxt="OOPS, PLEASE TRY AGAIN!"}))}}},Y=G,F=(i("aed3"),Object(d["a"])(Y,D,N,!1,null,"9010d47c",null)),W=F.exports,U={name:"Join",components:{Form:W},props:{msg:String}},H=U,L=(i("9899"),Object(d["a"])(H,O,J,!1,null,"df217edc",null)),Q=L.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Team"},[n("div",{staticClass:"row"},[n("h1",[t._v(" "+t._s(t.project.name)+" ")]),n("p",[t._v(" "+t._s(t.project.description))])]),t._l(t.team,(function(e){return n("div",{key:e,staticClass:"row profile"},[n("div",{staticClass:"three columns pic"},[n("img",{attrs:{src:e.pic}})]),n("div",{staticClass:"nine columns"},[n("div",{staticClass:"first"},[n("h3",{staticClass:"left name"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"social"},[""!==e.github?n("a",{staticClass:"soc-logo",attrs:{href:e.github}},[n("img",{attrs:{src:i("cb79")}})]):t._e(),""!==e.twitter?n("a",{staticClass:"soc-logo",attrs:{href:e.twitter}},[n("img",{attrs:{src:i("7cc7")}})]):t._e(),""!==e.linkedin?n("a",{staticClass:"soc-logo",attrs:{href:e.linkedin}},[n("img",{attrs:{src:i("32fe")}})]):t._e(),""!==e.keybase?n("a",{staticClass:"soc-logo",attrs:{href:e.keybase}},[n("img",{attrs:{src:i("c1ce")}})]):t._e()])]),n("h4",{staticClass:"left"},[t._v(" "+t._s(e.role)+" ")]),n("div",{staticClass:"links"}),n("p",{staticClass:"left"},[t._v(" "+t._s(e.bio)+" ")])])])}))],2)},z=[],V={name:"Team",data:function(){return{}},computed:{team:function(){return this.$attrs.team},project:function(){return this.$attrs.project}}},$=V,q=(i("50c3"),Object(d["a"])($,X,z,!1,null,"477e93a9",null)),K=q.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[i("div",{staticClass:"row"},[i("div",{staticClass:"twelve columns"},[i("h2",[t._v(" Get in touch ")]),i("p",[t._v(" Don't hesitate to reach out anytime "),i("a",{attrs:{href:"mailto:bordel@paralelnipolis.cz>"}},[t._v(" bordel@paralelnipolis.cz ")])]),i("p",[t._v(" Or just drop us a line and visit us!")])])]),i("br"),i("br"),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"three columns"},[i("h2",[t._v(" Address ")]),i("ul",[i("li",[t._v(" Dělnická 43 ")]),i("li",[t._v(" Praha 7 ")]),i("li",[t._v(" 170 00 ")])]),i("p",[i("a",{attrs:{href:"https://www.openstreetmap.org/?mlat=50.10340&mlon=14.45050#map=19/50.10340/14.45050"}},[t._v(" OpenStreetMaps ")])])]),i("div",{staticClass:"nine columns map"},[i("iframe",{staticStyle:{border:"1px solid black"},attrs:{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://www.openstreetmap.org/export/embed.html?bbox=14.448727369308473%2C50.10252234354523%2C14.452267885208132%2C50.10427369033035&layer=mapnik&marker=50.103398024941846%2C14.4504976272583"}})])])])}],it={name:"Contact",props:{msg:String}},nt=it,st=(i("59dc"),Object(d["a"])(nt,tt,et,!1,null,"1c680fb7",null)),at=st.exports;n["a"].use(x["a"]);var rt,ot=[{path:"/",name:"Home",component:P},{path:"/join",name:"Join",component:Q},{path:"/project",name:"Project",component:K},{path:"/contact",name:"Contact",component:at}];Object.keys(p).forEach((function(t){rt={path:"/project".concat(p[t].project.route),name:p[t].project.name,component:K,props:p[t]},ot.push(rt)}));var ct=new x["a"]({routes:ot});n["a"].config.productionTip=!1,new n["a"]({router:ct,render:function(t){return t(E)}}).$mount("#app")},"59dc":function(t,e,i){"use strict";var n=i("77a2"),s=i.n(n);s.a},"63eb":function(t,e,i){"use strict";var n=i("07fc"),s=i.n(n);s.a},"649e":function(t,e,i){"use strict";var n=i("2b71"),s=i.n(n);s.a},"77a2":function(t,e,i){},"79c9":function(t){t.exports={project:{route:"/core",name:"Core ops",description:"Initial members of the hackerspace",github:"https://github.com/bordel",subpage:""},team:{person:{name:"Hackatoshi",role:"The Mastermind",bio:"Plotting a brand new conspiracy.",pic:"https://pbs.twimg.com/profile_images/1133402934203551744/2owPMCpV_400x400.jpg",pic2:"",github:"https://github.com/paralelnipolis",twitter:"https://twitter.com/hackatoshi",linkedin:"",keybase:""},person2:{name:"Josef",role:"Janitor",bio:"Maintaining the disarray!",pic:"https://pbs.twimg.com/profile_images/758331934380531713/DXp-GLUV_400x400.jpg",pic2:"",github:"https://github.com/JosefJ",twitter:"https://twitter.com/josefj_",linkedin:"",keybase:""},person3:{name:"TaxMeIfYouCan",role:"Housekeeper",bio:"Building privacy weapons, collecting stickers. ",pic:"https://pbs.twimg.com/profile_images/1176124492592099328/SZXrLPHC_400x400.jpg",pic2:"",github:"https://github.com/taxmeifyoucan",twitter:"https://twitter.com/_TaxMeIfYouCan_",linkedin:"",keybase:""}}}},"7b3c":function(t,e,i){},"7cc7":function(t,e,i){t.exports=i.p+"img/tw.e08259cf.png"},8077:function(t,e,i){"use strict";var n=i("fb92"),s=i.n(n);s.a},"85ec":function(t,e,i){},9899:function(t,e,i){"use strict";var n=i("20f5"),s=i.n(n);s.a},aed3:function(t,e,i){"use strict";var n=i("e89d"),s=i.n(n);s.a},c1ce:function(t,e,i){t.exports=i.p+"img/kb.e5acdca3.png"},cb79:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},d498:function(t){t.exports={project:{route:"/emeritus",name:"Emeritus members",description:"Our honorable members of the hackerspace",github:"",subpage:""},team:{person:{name:"Sodomak",role:"",bio:"I remember computers without Internet, Internet without Google and mobile communication without encryption",pic:"https://pbs.twimg.com/profile_images/1319650786390016000/VNBl5725_400x400.jpg",pic2:"",github:"https://github.com/sodomak",twitter:"https://twitter.com/sodomak",linkedin:"",keybase:""},person2:{name:"Lea Petras",role:"Bordelmama",bio:"",pic:"https://pbs.twimg.com/profile_images/1022616852567154690/GIMH-S9__400x400.jpg",pic2:"",github:"",twitter:"https://twitter.com/LeaPetras",linkedin:"",keybase:""}}}},d739:function(t,e,i){t.exports=i.p+"img/bordel.e01b19d9.png"},e094:function(t){t.exports={project:{route:"/bleskomat",name:"Bleskomat",description:"The world's simplest Lightning Network ATM",github:"https://github.com/samotari/bleskomat",subpage:""},team:{person:{name:'Charles Hill ("chill")',role:"Hacker, Co-Founder and Co-Creator of Bleskomat",bio:"",pic:"https://degreesofzero.com/images/chill-desert.png",pic2:"",github:"https://github.com/chill117",twitter:"",linkedin:"",keybase:""},person2:{name:"Carlos García Ortiz",role:"Developer, Co-Founder and Co-Creator of Bleskomat",bio:"",pic:"https://avatars2.githubusercontent.com/u/5362163?s=400&u=b898787f526eb3bd4281d3fcd71c6cbaafdce342&v=4",pic2:"",github:"https://github.com/karliatto",twitter:"",linkedin:"",keybase:""}}}},e89d:function(t,e,i){},fb92:function(t,e,i){}});
//# sourceMappingURL=app.23a4f610.js.map