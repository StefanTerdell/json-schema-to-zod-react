(this["webpackJsonpjson-schema-to-zod-react"]=this["webpackJsonpjson-schema-to-zod-react"]||[]).push([[0],{120:function(e,t){},123:function(e,t){},125:function(e,t){},139:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),o=n(59),s=n.n(o),a=n(13),i=n(60),l=n.n(i),j=n(61),h=n(34),d=n.n(h),u=n(0),b=function(){var e=Object(c.useState)("{}"),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),s=Object(a.a)(o,2),i=s[0],h=s[1],b=Object(c.useState)(""),O=Object(a.a)(b,2),f=O[0],x=O[1],g=Object(c.useState)(""),p=Object(a.a)(g,2),m=p[0],y=p[1],S=Object(c.useState)(!0),k=Object(a.a)(S,2),v=k[0],w=k[1];Object(c.useEffect)((function(){try{var e=d.a.parse(n);x(""),Object(j.jsonSchemaToZodDereffed)(e,m,v).then((function(e){console.log(e),h(e)})).catch((function(e){return x("Errors:\n".concat(e))}))}catch(t){x("Errors:\n".concat(t))}}),[n,m,v]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Json Schema To Zod"}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:10,padding:10,border:"1px solid grey"},children:[Object(u.jsx)("b",{children:"Schema name"}),Object(u.jsx)("input",{value:m,onChange:function(e){return y(e.target.value)}}),Object(u.jsx)("b",{children:"Module"}),Object(u.jsx)("input",{type:"checkbox",checked:v,onChange:function(e){return w(e.target.checked)}}),Object(u.jsx)("b",{children:"Json Schema"}),Object(u.jsx)("textarea",{style:{width:400,height:400},value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{style:{width:"100%"},disabled:!!f,onClick:function(){return function(){try{r(JSON.stringify(d.a.parse(n),null,2))}catch(e){x("Errors:\n".concat(e))}}()},children:"Format"})]}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:10,padding:10,border:"1px solid grey"},children:[Object(u.jsx)("b",{children:"Result"}),Object(u.jsx)("textarea",{style:{width:400,height:476,color:f?"red":"black"},value:f||i,onClick:function(e){return e.target.select()}}),Object(u.jsx)("button",{style:{width:"100%"},disabled:!!f,onClick:function(){return l()(i)},children:"Copy"})]})]}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/json-schema-to-zod",children:"Get the CLI NPM package here"}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"https://www.github.com/stefanTerdell/json-schema-to-zod",children:"Something borken? Please log an issue here"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),O()}},[[139,1,2]]]);
//# sourceMappingURL=main.d21a0ef3.chunk.js.map