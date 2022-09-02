(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{29:function(n,e,t){},30:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),r=t(12),c=t.n(r),o=t(2),s=t(4),d=t(3),p=t(10),l=t(13),u="https://jsonplaceholder.typicode.com/users";function x(){return h.apply(this,arguments)}function h(){return h=Object(l.a)(Object(p.a)().mark((function n(){var e,t,a=arguments;return Object(p.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,fetch(e);case 3:if(!(t=n.sent).ok){n.next=10;break}return n.next=7,t.json();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=Promise.reject(new Error("Not Found"));case 11:return n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}var j,b=t(5),f=t(6),m=t(0);function g(n){var e=n.search,t=n.onChange;return Object(m.jsx)(w,{type:"text",name:"filter",placeholder:"Search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:t})}var O,w=d.a.input(j||(j=Object(o.a)(["\n  width: 248px;\n  height: 70px;\n  background: #333348;\n  border-radius: 40px;\n  padding: 20px 35px;\n  font-family: inherit;\n  color: #eee;\n  border: none;\n  &::placeholder {\n    color: #eee;\n  }\n"]))),v=["changesort","filter","changeFilter"];function C(n){var e=n.changesort,t=n.filter,a=n.changeFilter,i=Object(f.a)(n,v);return Object(m.jsxs)(P,Object(b.a)(Object(b.a)({},i),{},{children:[Object(m.jsx)("p",{onClick:e,children:"Sort "}),Object(m.jsx)(g,{search:t,onChange:a})]}))}var k,y,S,P=d.a.div(O||(O=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=t(17);function z(n){var e=n.post,t=Object(a.useState)(!1),i=Object(s.a)(t,2),r=i[0],c=i[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(N,{children:[Object(m.jsx)(A,{onClick:function(){return c(!r)},children:e.title},e.title),r?Object(m.jsx)(E,{children:e.body},e.body):null]})})}var F,N=d.a.li(k||(k=Object(o.a)(["\n  position: relative;\n  cursor: pointer;\n  &:not(:last-child) {\n    margin-bottom: 60px;\n    &::after {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 1px;\n      background: #4c4c6a;\n      margin-top: 30px;\n    }\n  }\n"]))),A=d.a.p(y||(y=Object(o.a)(["\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n\n  @media screen and (min-width: 1000px) {\n    font-size: 18px;\n  }\n  @media screen and (min-width: 1500px) {\n    font-size: 36px;\n  }\n"]))),E=d.a.p(S||(S=Object(o.a)(["\n  color: #fff;\n  margin-top: 20px;\n  @media screen and (min-width: 1000px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1500px) {\n    font-size: 18px;\n  }\n"]))),B=["data"];function J(n){var e=n.data,t=Object(f.a)(n,B);return Object(m.jsx)(m.Fragment,{children:e&&Object(m.jsx)(Z,Object(b.a)(Object(b.a)({},t),{},{children:e.map((function(n){return Object(m.jsx)(z,{post:n},Object(I.a)())}))}))})}var L,M,Z=d.a.ul(F||(F=Object(o.a)(["\n  position: absolute;\n  background: #333348;\n  border-radius: 40px;\n  right: 0;\n  top: 0;\n  @media screen and (min-width: 1000px) {\n    width: 430px;\n    padding: 30px 20px;\n  }\n\n  @media screen and (min-width: 1500px) {\n    padding: 50px 50px;\n    width: 870px;\n  }\n"])));function D(n){var e=n.ID,t=n.name,i=n.email,r=n.phone,c=n.onClick,o=Object(a.useState)([]),d=Object(s.a)(o,2),p=d[0],l=d[1],h=Object(a.useState)(!1),j=Object(s.a)(h,2),b=j[0],f=j[1];Object(a.useEffect)((function(){var n;(n=e,x("".concat(u,"/").concat(n,"/posts"))).then((function(n){return l(n)})).catch((function(n){return console.log(n)}))}),[e]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H,{onClick:c,children:[Object(m.jsx)("p",{children:t}),Object(m.jsx)("p",{children:i}),Object(m.jsx)("p",{children:r.split(" ")[0]}),Object(m.jsx)("p",{children:r.split(" ")[1]}),Object(m.jsx)(U,{type:"button",onClick:function(n){f(!b)},children:b?"Hide posts":"Show all posts "})]}),b&&Object(m.jsx)(J,{data:p})]})}var T,q,H=d.a.li(L||(L=Object(o.a)(["\n  width: 420px;\n  height: 370px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #333348;\n  border-radius: 40px;\n  &:not(:nth-last-child(-n + 2)) {\n    margin-bottom: 30px;\n  }\n  @media screen and (min-width: 1000px) {\n    font-size: 14px;\n    width: 220px;\n    height: 240px;\n  }\n\n  @media screen and (min-width: 1500px) {\n    width: 270px;\n    height: 265px;\n    font-size: 18px;\n  }\n"]))),U=d.a.button(M||(M=Object(o.a)(["\n  display: block;\n  background: #52519d;\n  border-radius: 40px;\n  padding: 16px 38px;\n  border: none;\n  color: inherit;\n  margin: 0 auto;\n  margin-top: 30px;\n\n  @media screen and (min-width: 1000px) {\n    padding: 16px 15px;\n  }\n"])));function $(n){var e=n.firstContentIndex,t=n.lastContentIndex,a=n.users;return Object(m.jsx)(m.Fragment,{children:a&&Object(m.jsx)(Q,{id:"wrap",children:Object(m.jsx)(R,{onClick:function(n){"BUTTON"===n.target.nodeName&&document.querySelector("#list").classList.toggle("list")},id:"list",children:a.slice(e,t).map((function(n){var e=n.id,t=n.name,a=n.email,i=n.phone;return Object(m.jsx)(D,{ID:e,name:t,email:a,phone:i},e)}))})})})}var G,K,Q=d.a.div(T||(T=Object(o.a)(["\n  position: relative;\n\n  .list {\n    margin-right: auto;\n    margin-left: 0;\n    padding-top: 30px;\n  }\n"]))),R=d.a.ul(q||(q=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  justify-content: space-between;\n  @media screen and (min-width: 1000px) {\n    width: 450px;\n  }\n  @media screen and (min-width: 1500px) {\n    width: 570px;\n  }\n"]))),V=function(n){var e=n.contentPerPage,t=n.count,i=Object(a.useState)(1),r=Object(s.a)(i,2),c=r[0],o=r[1],d=Math.ceil(t/e),p=c*e,l=function(n){o((function(e){return n?e===d?e:e+1:1===e?e:e-1}))};return{nextPage:function(){return l(!0)},prevPage:function(){return l(!1)},setPage:function(n){o(n>d?d:n<1?1:n)},firstContentIndex:p-e,lastContentIndex:p,page:c}};t(28),t(29),t(30);function W(){var n=Object(a.useState)([]),e=Object(s.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(!1),c=Object(s.a)(r,2),o=c[0],d=c[1],p=Object(a.useState)(""),l=Object(s.a)(p,2),h=l[0],j=l[1],b=Object(a.useState)(!1),f=Object(s.a)(b,2),g=f[0],O=f[1],w=V({contentPerPage:4,count:t.length}),v=w.firstContentIndex,k=w.lastContentIndex,y=w.nextPage,S=w.prevPage,P=w.setPage;Object(a.useEffect)((function(){x(u).then((function(n){i(n)})).catch(console.error())}),[]);var I=function(){var n=h.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return console.log(I),Object(m.jsxs)(X,{children:[Object(m.jsx)(C,{className:"header",changeFilter:function(n){j(n.target.value),P(1)},filter:h,changesort:function(){O(!g),g?t.sort((function(n,e){return e.name.localeCompare(n.name)})):t.sort((function(n,e){return n.name.localeCompare(e.name)}))}}),I.length>0?Object(m.jsx)($,{users:I,onClick:function(){d(!o)},showPost:o,firstContentIndex:v,lastContentIndex:k}):Object(m.jsx)("div",{children:"Sorry, users not found"}),Object(m.jsxs)(Y,{children:[Object(m.jsx)("div",{onClick:S,children:"Previous"}),Object(m.jsx)("div",{onClick:y,className:"page",children:"Next"})]})]})}var X=d.a.div(G||(G=Object(o.a)(["\n  width: 1000px;\n  padding: 50px 0px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 1000px) {\n    width: 1000px;\n  }\n\n  @media screen and (min-width: 1500px) {\n    width: 1470px;\n  }\n\n  .header {\n    margin-bottom: 35px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n"]))),Y=d.a.div(K||(K=Object(o.a)(["\n  position: fixed;\n  bottom: 70px;\n  display: flex;\n  justify-content: space-between;\n  width: 1000px;\n\n  @media screen and (min-width: 1500px) {\n    width: 1470px;\n  }\n"])));c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.217d2010.chunk.js.map