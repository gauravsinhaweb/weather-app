(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,s){},24:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),n=s(14),r=s.n(n),i=(s(36),s(37),s(12)),j=s.n(i),d=s(15),l=s(4),b=(s(24),s.p+"static/media/footer.da2f300f.svg");s(21);var u=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("img",{src:b,width:"460",height:"200"})})},o=s.p+"static/media/bottom.2c988092.svg";var h=function(){return Object(c.jsx)("div",{className:"bottom",children:Object(c.jsx)("img",{src:o,width:"120",height:"120"})})},O=s(17),p=s.n(O),x=s.p+"static/media/Fog.64823203.svg";var m=function(){return Object(c.jsx)("div",{className:"ts",children:Object(c.jsx)("img",{src:x,width:"150",height:"150"})})},g=s.p+"static/media/noresult.f18512b2.png";var v=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:g,width:"100",height:"100"})})};var f=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)("New Delhi"),i=Object(l.a)(r,2),b=i[0],o=i[1],O=Object(a.useState)(),x=Object(l.a)(O,2),g=x[0],f=x[1],N=Object(a.useState)(),w=Object(l.a)(N,2),S=w[0],y=w[1],D=Object(a.useState)(),M=Object(l.a)(D,2),F=M[0],k=M[1],H=Object(a.useState)(),A=Object(l.a)(H,2),C=A[0],J=A[1],P=Object(a.useState)(),T=Object(l.a)(P,2),L=T[0],I=T[1],E=(_=new Date(1e3*F)).getHours(),B="0"+_.getMinutes(),G="0"+_.getSeconds(),R=E+":"+B.substr(-2)+":"+G.substr(-2),U=(E=(_=new Date(1e3*C)).getHours(),B="0"+_.getMinutes(),G="0"+_.getSeconds(),E+":"+B.substr(-2)+":"+G.substr(-2)),V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][_.getMonth()],W=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"][_.getDay()],Y=new Date,_=W+" "+V+" "+Y.getDate()+" "+Y.getFullYear()+",",q=Y.getHours()+":"+Y.getMinutes();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(b,"&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n(c.main),f(c.sys.country),y(c.weather[0].description),k(c.sys.sunrise),J(c.sys.sunset),I(c.name);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"search",children:Object(c.jsx)("input",{value:b,type:"search",onChange:function(e){o(e.target.value)},placeholder:"Search Location"})})}),s?Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)(h,{}),Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"city",children:[L,", ",g,Object(c.jsx)("span",{className:"pin",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("div",{className:"temp",children:[Math.round("".concat(s.temp)),"\xb0C"]}),Object(c.jsx)("div",{children:Object(c.jsx)(m,{})}),Object(c.jsxs)("div",{className:"desc",children:[S,","]}),Object(c.jsx)("div",{className:"pressure",children:"Pressure:"}),Object(c.jsxs)("div",{className:"feelpressure",children:[s.pressure/100," Pa"]}),Object(c.jsxs)("div",{className:"date",children:[_,Object(c.jsx)("br",{}),q," Hrs"]}),Object(c.jsx)("div",{className:"feelslike",children:"Feels Like: "}),Object(c.jsxs)("div",{className:"feeltemp",children:[s.feels_like,"\xb0C"]}),Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("span",{className:"dawn",children:"Dawn: "}),Object(c.jsxs)("span",{className:"bold",children:[R," Hrs"]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("span",{className:"dusk",children:"Dusk:"}),Object(c.jsxs)("span",{className:"bold",children:[" ",U," Hrs"]})]}),Object(c.jsx)("div",{className:"copyright",children:"Copyright \xa92021 All rights reserved. /GAURAV.SINHA"})]}):Object(c.jsxs)("p",{className:"nodata",children:[Object(c.jsx)(v,{})," no data found"]})]})},N=s(28);var w=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(),i=Object(l.a)(r,2),b=i[0],o=i[1],O=Object(a.useState)(),x=Object(l.a)(O,2),g=x[0],v=x[1],f=Object(a.useState)(),w=Object(l.a)(f,2),S=w[0],y=w[1],D=Object(a.useState)(),M=Object(l.a)(D,2),F=M[0],k=M[1],H=Object(a.useState)(),A=Object(l.a)(H,2),C=A[0],J=A[1],P=Object(a.useState)(),T=Object(l.a)(P,2),L=T[0],I=T[1],E=Object(a.useState)(),B=Object(l.a)(E,2),G=B[0],R=B[1],U=(Q=new Date(1e3*S)).getHours(),V="0"+Q.getMinutes(),W="0"+Q.getSeconds(),Y=U+":"+V.substr(-2)+":"+W.substr(-2),_=(U=(Q=new Date(1e3*F)).getHours(),V="0"+Q.getMinutes(),W="0"+Q.getSeconds(),U+":"+V.substr(-2)+":"+W.substr(-2)),q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Q.getMonth()],z=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"][Q.getDay()],K=new Date,Q=z+" "+q+" "+K.getDate()+" "+K.getFullYear()+",",X=K.getHours()+":"+K.getMinutes();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?lat=".concat(G,"&lon=").concat(L,"&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n(c.main),o(c.sys.country),v(c.weather[0].description),y(c.sys.sunrise),k(c.sys.sunset),J(c.name);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[G,L]),Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)(N.a,{render:function(e){e.fetchingPosition;var t=e.position,s=(t=void 0===t?{}:t).coords,a=(s=void 0===s?{}:s).latitude,n=s.longitude,r=e.error;e.getCurrentPosition;return Object(c.jsxs)("div",{children:[r&&Object(c.jsx)("div",{children:r.message}),Object(c.jsxs)("pre",{children:[R("".concat(a)),I("".concat(n))]})]})}}),Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)(h,{}),Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"city",children:[C,", ",b,Object(c.jsx)("span",{className:"pin",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("div",{className:"temp",children:[Math.round("".concat(s.temp)),"\xb0C"]}),Object(c.jsx)("div",{children:Object(c.jsx)(m,{})}),Object(c.jsxs)("div",{className:"desc",children:[g,","]}),Object(c.jsx)("div",{className:"pressure",children:"Pressure:"}),Object(c.jsxs)("div",{className:"feelpressure",children:[s.pressure/100," Pa"]}),Object(c.jsxs)("div",{className:"date",children:[Q,Object(c.jsx)("br",{}),X," Hrs"]}),Object(c.jsx)("div",{className:"feelslike",children:"Feels Like: "}),Object(c.jsxs)("div",{className:"feeltemp",children:[s.feels_like,"\xb0C"]}),Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("span",{className:"dawn",children:"Dawn: "}),Object(c.jsxs)("span",{className:"bold",children:[Y," Hrs"]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("span",{className:"dusk",children:"Dusk:"}),Object(c.jsxs)("span",{className:"bold",children:[" ",_," Hrs"]})]}),Object(c.jsx)("div",{className:"copyright",children:"Copyright \xa92021 All rights reserved. /GAURAV.SINHA"})]})]})},S=s(19),y=s(3),D=s(29),M=s.n(D);function F(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("span",{className:"icon",children:Object(c.jsx)(S.b,{to:"geolocation",children:Object(c.jsx)(M.a,{})})}),Object(c.jsxs)(y.c,{children:[Object(c.jsx)(y.a,{exact:!0,path:"/",component:f}),Object(c.jsx)(y.a,{exact:!0,path:"/geolocation",component:w}),Object(c.jsx)(y.a,{path:"/weather-app/geolocation",component:w}),Object(c.jsx)(y.a,{path:"/",component:f})]})]})}var k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(c.jsx)(S.a,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),k()}},[[49,1,2]]]);
//# sourceMappingURL=main.db680b96.chunk.js.map