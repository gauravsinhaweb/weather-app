(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),r=s(7),i=s.n(r),j=(s(26),s(27),s(5)),d=s.n(j),l=s(8),u=s(2),b=(s(14),s(19)),o=s.n(b),h=s.p+"static/media/footer.da2f300f.svg";s(12);var O=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("img",{src:h,width:"460",height:"200"})})},p=s.p+"static/media/bottom.2c988092.svg";var x=function(){return Object(c.jsx)("div",{className:"bottom",children:Object(c.jsx)("img",{src:p,width:"120",height:"120"})})},m=s(10),g=s.n(m),v=s.p+"static/media/Fog.64823203.svg";var f=function(){return Object(c.jsx)("div",{className:"ts",children:Object(c.jsx)("img",{src:v,width:"150",height:"150"})})},N=s.p+"static/media/noresult.f18512b2.png";var w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:N,width:"100",height:"100"})})};s(13);var S=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)("New Delhi"),i=Object(u.a)(r,2),j=i[0],b=i[1],h=Object(a.useState)(),p=Object(u.a)(h,2),m=p[0],v=p[1],N=Object(a.useState)(),S=Object(u.a)(N,2),y=S[0],D=S[1],F=Object(a.useState)(),k=Object(u.a)(F,2),A=k[0],C=k[1],M=Object(a.useState)(),H=Object(u.a)(M,2),J=H[0],T=H[1],L=Object(a.useState)(),P=Object(u.a)(L,2),I=P[0],B=P[1],E=(Q=new Date(1e3*A)).getHours(),U="0"+Q.getMinutes(),q="0"+Q.getSeconds(),G=E+":"+U.substr(-2)+":"+q.substr(-2),R=(E=(Q=new Date(1e3*J)).getHours(),U="0"+Q.getMinutes(),q="0"+Q.getSeconds(),E+":"+U.substr(-2)+":"+q.substr(-2)),V=new Date,W=new Array(7);W[0]="Sun",W[1]="Mon",W[2]="Tues",W[3]="Wedn",W[4]="Thurs",W[5]="Fri",W[6]="Sat";var Y=new Array(12);Y[0]="Jan",Y[1]="Feb",Y[2]="Mar",Y[3]="Apr",Y[4]="May",Y[5]="Jun",Y[6]="Jul",Y[7]="Aug",Y[8]="Sep",Y[9]="Oct",Y[10]="Nov",Y[11]="Dec";var _=Y[V.getUTCMonth()],z=W[V.getDay()],K=new Date,Q=z+" "+_+" "+K.getDate()+" "+K.getFullYear()+",",X=K.getHours()+":"+K.getMinutes();return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(j,"&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n(c.main),v(c.sys.country),D(c.weather[0].description),C(c.sys.sunrise),T(c.sys.sunset),B(c.name),console.log(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("input",{value:j,type:"search",onChange:function(e){b(e.target.value)},placeholder:"Search Location"}),Object(c.jsx)("span",{className:"icon",children:Object(c.jsx)(o.a,{onClick:function(){}})})]})}),s?Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)(x,{}),Object(c.jsx)(O,{}),Object(c.jsxs)("div",{className:"city",children:[I,", ",m,Object(c.jsx)("span",{className:"pin",children:Object(c.jsx)(g.a,{})})]}),Object(c.jsxs)("div",{className:"temp",children:[Math.round("".concat(s.temp)),"\xb0C"]}),Object(c.jsx)("div",{children:Object(c.jsx)(f,{})}),Object(c.jsxs)("div",{className:"desc",children:[y,","]}),Object(c.jsx)("div",{className:"pressure",children:"Pressure:"}),Object(c.jsxs)("div",{className:"feelpressure",children:[s.pressure/100," Pa"]}),Object(c.jsxs)("div",{className:"date",children:[Q,Object(c.jsx)("br",{}),X," Hrs"]}),Object(c.jsx)("div",{className:"feelslike",children:"Feels Like: "}),Object(c.jsxs)("div",{className:"feeltemp",children:[s.feels_like,"\xb0C"]}),Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)("span",{className:"dawn",children:"Dawn: "}),Object(c.jsxs)("span",{className:"bold",children:[G," Hrs"]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("span",{className:"dusk",children:"Dusk:"}),Object(c.jsxs)("span",{className:"bold",children:[" ",R," Hrs"]})]}),Object(c.jsx)("div",{className:"copyright",children:"Copyright \xa92021 All rights reserved. /GAURAV.SINHA"})]}):Object(c.jsxs)("p",{className:"nodata",children:[Object(c.jsx)(w,{})," no data found"]})]})};function y(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(S,{})})}var D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),D()}},[[35,1,2]]]);
//# sourceMappingURL=main.2b937e5b.chunk.js.map