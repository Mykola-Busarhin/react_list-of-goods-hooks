(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(c.NONE),u=Object(i.a)(o,2),h=u[0],N=u[1],d=function(t,e,n){var s=Object(r.a)(t);return s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return c.NONE}})),n&&s.reverse(),s}(j,h,n);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return N(c.ALPHABET)},className:l()("button is-info",{"is-light":h!==c.ALPHABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return N(c.LENGTH)},className:l()("button is-success",{"is-light":h!==c.LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return s(!n)},className:l()("button is-warning",{"is-light":!n}),children:"Reverse"}),(h!==c.NONE||n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(!1),N(c.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.012e12b4.chunk.js.map