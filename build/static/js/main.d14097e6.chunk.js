(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var o=t(3),c=t(2),a=t(14),r=t.n(a),u=t(4),i=t.n(u),l="/api/persons",s=function(){return i.a.get(l).then((function(e){return e.data}))},d=function(e){return i.a.post(l,e).then((function(e){return e.data}))},h=function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},j=t(0),f=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),i=u[0],l=u[1],f=Object(c.useState)(""),O=Object(o.a)(f,2),v=O[0],x=O[1],w=Object(c.useState)(""),S=Object(o.a)(w,2),C=S[0],k=S[1],N=Object(c.useState)(!0),y=Object(o.a)(N,2),P=y[0],T=y[1],I=Object(c.useState)(null),D=Object(o.a)(I,2),E=D[0],J=D[1];Object(c.useEffect)((function(){s().then((function(e){a(e)}))}),[]);var U=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{style:{color:"green",fontStyle:"italic",fontSize:20,borderStyle:"solid",padding:10,background:"lightgrey"},children:n})},z=P?t:t.filter((function(e){return e.name.toUpperCase().includes(C.toUpperCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(U,{message:E}),Object(j.jsx)(g,{newSearch:C,handleSearchChange:function(e){0===C.length&&T(!0),C.length>0&&T(!1),k(e.target.value)}}),Object(j.jsx)("h3",{children:"add a new"}),Object(j.jsx)(p,{addInfo:function(e){e.preventDefault();var n={name:i,number:v},o=t.map((function(e){return e.name})),c=t.map((function(e){return e.number}));if(console.log(o),console.log(c),o.includes(i)){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var r=o.indexOf(i);console.log(r);var u=t[r].id;console.log("Id on"+u),J("".concat(i," is now updated")),setTimeout((function(){J(null)}),5e3),h(u,n).then((function(e){a(t.filter((function(e){return e.id!==u}))),a(t.concat(e)),l(""),x("")}))}}else c.includes(v)?alert("Phone number ".concat(v," is already in use")):(J("".concat(i," is now added to phonebook")),setTimeout((function(){J(null)}),5e3),d(n).then((function(e){a(t.concat(e)),l(""),x("")})))},newName:i,handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},newNumber:v,handleNumberChange:function(e){x(e.target.value)}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(m,{namesToShow:z,persons:t,deletePerson:function(e){var n=e.id,o=e.name;window.confirm("Delete ".concat(o," from phonebook?"))&&(J("".concat(o," is now deleted from phonebook")),setTimeout((function(){J(null)}),5e3),b(n).then=function(){a(t.filter((function(e){return e.id!==n}))),l(""),x("")})}})]})},m=function(e){var n=e.namesToShow,t=e.deletePerson;return Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsx)(O,{person:e,deletePerson:function(){return t(e)}},e.id)}))})},O=function(e){var n=e.person,t=e.deletePerson;return console.log("person komponentissa tulostuuko id: "+n.id+" ja nimi: "+n.name),Object(j.jsxs)("li",{children:[n.name," ",n.number,Object(j.jsx)("button",{onClick:t,id:n.id,name:n.name,children:"delete"})]})},p=function(e){var n=e.addInfo,t=e.newName,o=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:t,onChange:o})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:c,onChange:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},g=function(e){var n=e.newSearch,t=e.handleSearchChange;return Object(j.jsxs)("div",{children:["filer shown with ",Object(j.jsx)("input",{value:n,onChange:t})]})};r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"));n.default=f}},[[38,1,2]]]);
//# sourceMappingURL=main.d14097e6.chunk.js.map