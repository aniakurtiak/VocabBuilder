"use strict";(self.webpackChunkreact_create_app=self.webpackChunkreact_create_app||[]).push([[901],{3525:function(n,e,t){t.d(e,{A:function(){return en}});var i,r=t(9439),o=t(2791),a=t(4420),d=t(546),p=t(686),c=t(168),s=t(7924),h=["title","titleId"];function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},l.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function x(n,e){var t=n.title,r=n.titleId,a=u(n,h);return o.createElement("svg",l({width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,i||(i=o.createElement("path",{d:"M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM17.5 17.5l-3.625-3.625",stroke:"#121417",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var g,f,m,b,Z,w,j,v,y,P,k,z,C,E,A,F=o.forwardRef(x),I=(t.p,s.ZP.div(g||(g=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 36px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: start;\n    margin-bottom: 28px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    justify-content: center;\n    margin-bottom: 0;\n  }\n\n"])))),S=s.ZP.div(f||(f=(0,c.Z)(["\n  position: relative;\n"]))),T=s.ZP.input(m||(m=(0,c.Z)(["\n  border: 1px solid rgba(18, 20, 23, 0.1);\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 343px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  background: ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:hover {\n    outline: none;\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 274px;\n  }\n"])),(function(n){return n.theme.white1}),(function(n){return n.theme.black}),(function(n){return n.theme.green}),(function(n){return n.theme.green})),q=(0,s.ZP)(F)(b||(b=(0,c.Z)(["\n  position: absolute;\n  right: 24px;\n  top: 14px;\n"]))),O=t(6351),W=t(485),_=t(1413),H=s.ZP.div(Z||(Z=(0,c.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n  }\n"]))),R={input:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{margin:"0",padding:"0"})},valueContainer:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{margin:"0",padding:"0"})},control:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{border:"1px solid rgba(18, 20, 23, 0.1)",borderRadius:"15px",padding:"12px 24px",width:"343px",height:"48px",background:"#f8f8f8","&:hover":{outline:"none",borderColor:"#85aa9f",boxShadow:"none"},"&:focus-within":{outline:"none",borderColor:"#85aa9f",boxShadow:"none"},"@media screen and (min-width: 768px)":{width:"164px"}})},dropdownIndicator:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{color:"#121417",cursor:"pointer",padding:"0","& svg":{width:"20px",height:"20px",strokeWidth:"0.02px","&:hover":{fill:"#85aa9f"}}})},placeholder:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{color:"#121417",fontSize:"16px",fontStyle:"normal",fontWeight:"500",lineHeight:"1.5",padding:"0"})},option:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{backgroundColor:e.isFocused?"#85aa9f":"transparent",fontWeight:"500",lineHeight:"1.5",color:"#121417"})},singleValue:function(n,e){return(0,_.Z)((0,_.Z)({},n),{},{fontWeight:"500",lineHeight:"1.5",color:"#121417"})}},M=s.ZP.div(w||(w=(0,c.Z)(["\n  margin-top: 8px;\n  display: flex;\n  font-weight: 400;\n  font-size: 12px;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),B=s.ZP.label(j||(j=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),U=s.ZP.input(v||(v=(0,c.Z)(["\n  position: relative;\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(18, 20, 23, 0.2);\n  border-radius: 50%;\n  cursor: pointer;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 10px;\n    height: 10px;\n    background-color: transparent;\n    border-radius: 50%;\n  }\n\n  &:checked {\n    border-color: ",";\n    &::before {\n      background-color: ",";\n    }\n  }\n  @keyframes borderChange {\n    from {\n      border: 2px solid rgba(18, 20, 23, 0.2);\n    }\n    to {\n      border-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.green}),(function(n){return n.theme.green})),V=t(184),N=function(){var n=(0,a.v9)(O.us),e=(0,a.v9)(O.il),t=(0,a.I0)(),i=function(n){t((0,p.o9)(n.target.value))};return(0,V.jsxs)(H,{children:[(0,V.jsx)(W.ZP,{styles:R,options:n,value:e,onChange:function(n){t((0,p.PR)(n))},placeholder:"Categories"}),"Verb"===e.value&&(0,V.jsxs)(M,{children:[(0,V.jsxs)(B,{children:[(0,V.jsx)(U,{type:"radio",name:"verbType",value:"regular",onChange:i})," ","Regular"]}),(0,V.jsxs)(B,{children:[(0,V.jsx)(U,{type:"radio",name:"verbType",value:"irregular",onChange:i})," ","Irregular"]})]})]})},G=function(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1],c=(0,a.I0)();(0,o.useEffect)((function(){c((0,d.p)())}),[c]);return(0,o.useEffect)((function(){var n=setTimeout((function(){c((0,p.q1)(t))}),300);return function(){clearTimeout(n)}}),[t,c]),(0,V.jsxs)(I,{children:[(0,V.jsxs)(S,{children:[(0,V.jsx)(T,{type:"text",value:t,onChange:function(n){i(n.target.value.trim())},placeholder:"Find the word"}),(0,V.jsx)("button",{children:(0,V.jsx)(q,{})})]}),(0,V.jsx)(N,{})]})},J=t(1087),L=s.ZP.div(y||(y=(0,c.Z)(["\n  @media screen and (min-width: 1440px) {\n    width: 1240px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),$=s.ZP.div(P||(P=(0,c.Z)(["\n\n    @media screen and (min-width: 768px) { \n  display: flex;\n  align-items: center;\n  gap: 16px;\n    }\n"]))),D=s.ZP.p(k||(k=(0,c.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  color: rgba(18, 20, 23, 0.5);\n  line-height: 1.5;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 0;\n  }\n"]))),Y=s.ZP.div(z||(z=(0,c.Z)(["\nmargin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n    @media screen and (min-width: 768px) {\n    margin-top: 0;  \n    }\n"]))),K=s.ZP.button(C||(C=(0,c.Z)(["\n  border: none;\n  background: none;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  display: flex;\n    gap: 8px;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.green})),Q=(0,s.ZP)(J.rU)(E||(E=(0,c.Z)(["\n  display: flex;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  gap: 8px;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.green})),X=s.ZP.svg(A||(A=(0,c.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),nn=t(3029),en=function(n){var e=n.onClickAddWord;return(0,V.jsxs)(L,{children:[(0,V.jsx)(G,{}),(0,V.jsxs)($,{children:[(0,V.jsx)(D,{children:"To study: "}),(0,V.jsxs)(Y,{children:[(0,V.jsxs)(K,{type:"button",onClick:e,children:["Add word",(0,V.jsx)(X,{children:(0,V.jsx)("use",{href:"".concat(nn.Z,"#icon-plus")})})]}),(0,V.jsxs)(Q,{to:"/training",children:["Train onself",(0,V.jsx)(X,{children:(0,V.jsx)("use",{href:"".concat(nn.Z,"#icon-horizontal")})})]})]})]})]})}},901:function(n,e,t){t.r(e),t.d(e,{default:function(){return ue}});var i,r,o,a,d,p,c,s,h,l,u,x,g,f,m,b,Z,w,j,v,y,P,k,z,C,E,A,F,I,S,T,q,O,W,_,H,R,M,B,U,V,N,G,J,L,$,D,Y=t(9439),K=t(3525),Q=t(2791),X=t(168),nn=t(7924),en=nn.ZP.div(i||(i=(0,X.Z)(["\n  background: ",";\n  padding-top: 32px;\n  padding-left: 32px;\n  padding-right: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 80px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n"])),(function(n){return n.theme.white1})),tn=t(1413),rn=t(4420),on=t(6351),an=t(1206),dn=t(1358),pn=nn.ZP.div(r||(r=(0,X.Z)(["\n  margin-top: 32px;\n\n  @media screen and (min-width: 768px) {\n    border-radius: 15px;\n    padding: 18px;\n    background: #fff;\n    margin-top: 28px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1240px;\n  }\n"]))),cn=nn.ZP.table(o||(o=(0,X.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),sn=nn.ZP.thead(a||(a=(0,X.Z)(["\n  background: rgba(133, 170, 159, 0.1);\n"]))),hn=nn.ZP.th(d||(d=(0,X.Z)(["\n  border-bottom: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n  &:last-child {\n    border-right: none;\n    border-radius: 0 8px 0 0;\n  }\n  &:first-child {\n    border-radius: 8px 0 0 0;\n  }\n  font-weight: 500;\n  font-size: 16px;\n  width: ","px;\n  padding: 16px 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"])),(function(n){return n.width})),ln=nn.ZP.tbody(p||(p=(0,X.Z)(["\n  box-sizing: border-box;\n"]))),un=nn.ZP.td(c||(c=(0,X.Z)(["\n  font-size: 14px;\n  border-top: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n  border-left: none;\n  padding: 8px;\n  &:first-child {\n    border-left: none;\n  }\n  &:last-child {\n    border-right: none;\n    padding: 16px 10px 16px 14px;\n    white-space: pre-wrap;\n    background: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    font-weight: 500;\n  }\n\n"])),(function(n){return n.theme.white})),xn=nn.ZP.div(s||(s=(0,X.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),gn=nn.ZP.svg(h||(h=(0,X.Z)(["\n  display: none;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n    width: 28px;\n    height: 28px;\n  }\n"]))),fn=t(3029),mn=t(52),bn=t.n(mn),Zn=nn.ZP.div(l||(l=(0,X.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),wn=nn.ZP.div(u||(u=(0,X.Z)(["\n  position: relative;\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 117px;\n  height: 70px;\n  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 8px;\n\n    @media screen and (min-width: 768px) {\n        width: 124px;\n        height: 80px;\n    }\n"]))),jn=nn.ZP.svg(x||(x=(0,X.Z)(["\n  width: 16px;\n  height: 16px;\n"]))),vn=nn.ZP.button(g||(g=(0,X.Z)(["\n  background: none;\n  font-weight: 500;\n  font-size: 14px;\n  display: flex;\n    align-items: center;\n    justify-content: center;\n  gap: 8px;\n\n  &:hover {\n    color: ",";\n    scale: 1.1;\n  }\n\n   \n\n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n        line-height: 1.5;\n    }\n"])),(function(n){return n.theme.black})),yn=nn.ZP.svg(f||(f=(0,X.Z)(["\n  width: 12px;\n  height: 12px;\n  fill: rgba(18, 20, 23, 0.5);\n  &:hover {\n    fill: ",";\n  }\n  &:active {\n    fill: ",";\n    }\n\n\n    @media screen and (min-width: 768px) {\n        width: 14px;\n        height: 14px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 16px;\n        height: 16px;\n    }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.black})),Pn=t(3749),kn=t(5218),zn=t(184),Cn=function(n){var e=n.word,t=n.onClickEditWord,i=(0,Q.useState)(!1),r=(0,Y.Z)(i,2),o=r[0],a=r[1],d=(0,rn.I0)(),p=function(){a(!o)};return(0,zn.jsx)(Zn,{children:(0,zn.jsx)(bn(),{isOpen:o,body:(0,zn.jsxs)(wn,{children:[(0,zn.jsxs)(vn,{onClick:function(){!function(n){d((0,Pn.n)(n)),t()}(e)},children:[(0,zn.jsx)(jn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-edit")})}),"Edit"]}),(0,zn.jsxs)(vn,{onClick:function(){!function(n){d((0,an.x8)(n._id)).unwrap().then((function(){kn.ZP.success("This word was deleted"),d((0,an.ne)())})).catch((function(n){kn.ZP.error(n)}))}(e)},children:[(0,zn.jsx)(jn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-trash")})}),"Delete"]})]}),place:"left",preferPlace:"start",tipSize:.1,onOuterAction:p,children:(0,zn.jsx)(vn,{onClick:p,children:(0,zn.jsx)(yn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-dots")})})})})})},En=function(n){var e=n.onClickEditWord,t=(0,rn.v9)(on.Fu),i=(0,rn.I0)(),r=function(n){var e=n.text;return(0,zn.jsxs)(xn,{children:[(0,zn.jsx)("span",{children:e}),(0,zn.jsx)(gn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-uk"),children:"z"})})]})},o=function(n){var e=n.text;return(0,zn.jsxs)(xn,{children:[(0,zn.jsx)("span",{children:e}),(0,zn.jsx)(gn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-ua"),children:"z"})})]})};(0,Q.useEffect)((function(){i((0,an.ne)())}),[i]);var a=Q.useMemo((function(){return[{Header:function(){return(0,zn.jsx)(r,{text:"Word"})},accessor:"en",width:82},{Header:function(){return(0,zn.jsx)(o,{text:"Translation"})},accessor:"ua",width:116},{Header:"Progress",accessor:"progress",width:95},{Header:"",accessor:"actions",Cell:function(n){var t=n.row;return(0,zn.jsx)(Cn,{word:t.original,onClickEditWord:e})},width:50}]}),[e]),d=Q.useMemo((function(){return t||[]}),[t]),p=(0,dn.useTable)({columns:a,data:d}),c=p.getTableProps,s=p.getTableBodyProps,h=p.headerGroups,l=p.rows,u=p.prepareRow;return(0,zn.jsx)(pn,{children:(0,zn.jsxs)(cn,(0,tn.Z)((0,tn.Z)({},c()),{},{children:[(0,zn.jsx)(sn,{children:h.map((function(n){return(0,zn.jsx)("tr",(0,tn.Z)((0,tn.Z)({},n.getHeaderGroupProps()),{},{children:n.headers.map((function(n){return(0,zn.jsx)(hn,(0,tn.Z)((0,tn.Z)({},n.getHeaderProps()),{},{width:n.width,children:n.render("Header")}))}))}))}))}),(0,zn.jsx)(ln,(0,tn.Z)((0,tn.Z)({},s()),{},{children:l.map((function(n){return u(n),(0,zn.jsx)("tr",(0,tn.Z)((0,tn.Z)({},n.getRowProps()),{},{children:n.cells.map((function(e){return(0,zn.jsx)(un,(0,tn.Z)((0,tn.Z)({},e.getCellProps()),{},{children:e.render("Cell",{word:n.original})}))}))}))}))}))]}))})},An=t(2658),Fn=t(5705),In=nn.ZP.div(m||(m=(0,X.Z)(["\n  position: absolute;\n  width: 342px;\n  max-height: 100vh;\n  /* overflow: auto; */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scalex(1);\n  border-radius: 15px;\n  /* height: 621px; */\n  background: ",";\n  padding: 48px 16px;\n\n  @media screen and (min-width: 768px) {\n    width: 627px;\n    padding: 48px 64px;\n  }\n"])),(function(n){return n.theme.green})),Sn=nn.ZP.svg(b||(b=(0,X.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n    top: 20px;\n    right: 20px;\n  }\n"]))),Tn=nn.ZP.h2(Z||(Z=(0,X.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.17;\n  letter-spacing: -0.02em;\n  color: ",";\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 40px;\n    line-height: 1.2;\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.white})),qn=nn.ZP.p(w||(w=(0,X.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    color: rgba(252, 252, 252, 0.8);\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.white})),On=(0,nn.ZP)(Fn.l0)(j||(j=(0,X.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Wn=nn.ZP.div(v||(v=(0,X.Z)(["\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n  }\n"]))),_n=nn.ZP.div(y||(y=(0,X.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n  }\n"]))),Hn=nn.ZP.label(P||(P=(0,X.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4.5px;\n  margin-bottom: 4px;\n  font-weight: 500;\n  font-size: 14px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    order: 2;\n    margin-bottom: 0;\n    gap: 8px;\n  }\n"])),(function(n){return n.theme.white})),Rn=nn.ZP.svg(k||(k=(0,X.Z)(["\n  width: 28px;\n  height: 28px;\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n  }\n"]))),Mn=(0,nn.ZP)(Fn.gN)(z||(z=(0,X.Z)(["\n  border: 1px solid #d1d5db;\n  background: ",";\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 311px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 11.5;\n  color: ",";\n  margin-bottom: 16px;\n\n  :hover {\n    outline: none;\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    order: 1;\n    border: 1px solid rgba(252, 252, 252, 0.3);\n    padding: 16px 18px;\n    width: 354px;\n    height: 56px;\n    margin-bottom: 0px;\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.white})),Bn=(0,nn.ZP)(Fn.Bc)(C||(C=(0,X.Z)(["\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 120%;\n  color: ",";\n  margin-top: -10px;\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.white})),Un=(0,nn.ZP)(Fn.Bc)(E||(E=(0,X.Z)(["\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.2;\n  color: ",";\n  margin-top: 10px;\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.white})),Vn=nn.ZP.div(A||(A=(0,X.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 16px;\n\n  @media screen and (min-width: 768px) {\n    gap: 10px;\n    margin-top: 32px;\n  }\n"]))),Nn=nn.ZP.button(F||(F=(0,X.Z)(["\n  border: 1px solid rgba(252, 252, 252, 0.4);\n  border-radius: 30px;\n  padding: 12px 45px;\n  width: 159px;\n  height: 48px;\n  background: ",";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 245px;\n    height: 56px;\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.black})),Gn=nn.ZP.div(I||(I=(0,X.Z)(["\n  margin-bottom: 32px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n"]))),Jn=nn.ZP.select(S||(S=(0,X.Z)(["\n  border: 1px solid #d1d5db;\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 311px;\n  height: 48px;\n  background: #85aa9f;\n  font-size: 16px;\n  color: #fcfcfc;\n  /* appearance: none; */\n  cursor: pointer;\n\n  &:hover {\n    outline: none;\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: calc(50% - 3px);\n    right: 16px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 6px 0;\n    border-color: #fcfcfc transparent transparent;\n    transform: translateY(-50%);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 204px;\n    border: 1px solid rgba(252, 252, 252, 0.3);\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.white})),Ln=((0,nn.ZP)(Fn.gN)(T||(T=(0,X.Z)(["\n  & + "," {\n    & option {\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(18, 20, 23, 0.5);\n      border-radius: 15px;\n      padding: 12px 107px 12px 24px;\n      width: 311px;\n      height: 240px;\n      box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n      background: #fff;\n      cursor: pointer;\n    }\n\n    & option:hover {\n      color: ",";\n      background: #fff;\n\n    }\n    \n    & option:checked {\n      color: ",";\n    }\n  }\n"])),Jn,(function(n){return n.theme.green}),(function(n){return n.theme.green})),nn.ZP.option(q||(q=(0,X.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(18, 20, 23, 0.5);\n  border-radius: 15px;\n  padding: 12px 107px 12px 24px;\n  width: 311px;\n  height: 240px;\n  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n  background: #fff;\n  cursor: pointer;\n"])))),$n=nn.ZP.div(O||(O=(0,X.Z)(["\n  margin-top: 8px;\n  display: flex;\n  font-weight: 400;\n  font-size: 12px;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),Dn=nn.ZP.label(W||(W=(0,X.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: ",";\n"])),(function(n){return n.theme.white})),Yn=nn.ZP.input(_||(_=(0,X.Z)(["\n  position: relative;\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(252, 252, 252, 0.2);\n  border-radius: 50%;\n  cursor: pointer;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 10px;\n    height: 10px;\n    background-color: transparent;\n    border-radius: 50%;\n  }\n\n  &:checked {\n    border-color: ",";\n    &::before {\n      background-color: ",";\n    }\n  }\n  @keyframes borderChange {\n    from {\n      border: 2px solid rgba(252, 252, 252, 0.2);\n    }\n    to {\n      border-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.white})),Kn=t(8007),Qn=Kn.Ry().shape({category:Kn.Z_().required("Category is required"),verbType:Kn.Z_().when("category",{is:"verb",then:Kn.Z_().required("Verb type is required")}),en:Kn.Z_().matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,"Invalid English input").required("English is required"),ua:Kn.Z_().matches(/^(?![A-Za-z])[\t-\r \xA0\u02BC\u0404\u0406\u0407\u0410-\u044F\u0454\u0456\u0457\u0490\u0491\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/,"Invalid Ukrainian input").required("Ukrainian is required")}),Xn=function(n){var e=n.toggleModal,t=n.close,i=(0,rn.v9)(on.us),r=(0,rn.I0)(),o=(0,rn.v9)(on.qg),a=(0,Q.useState)(""),d=(0,Y.Z)(a,2),p=d[0],c=d[1];return(0,Q.useEffect)((function(){o&&kn.ZP.error(o)}),[o]),(0,zn.jsxs)(In,{children:[(0,zn.jsx)(Sn,{onClick:e,type:"button",children:(0,zn.jsx)("svg",{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-close")})})}),(0,zn.jsx)(Tn,{children:"Add word"}),(0,zn.jsx)(qn,{children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),(0,zn.jsx)(Fn.J9,{initialValues:{en:"",ua:"",category:""},validationSchema:Qn,onSubmit:function(n){var e=(0,tn.Z)({},n);"verb"===n.category&&(e.isIrregular="irregular"===p),r((0,an.ge)(e)).unwrap().then((function(){r((0,an.ne)()),t()})).catch((function(n){kn.ZP.error(n)}))},children:function(n){var t=n.values,r=n.setFieldValue;return(0,zn.jsxs)(On,{children:[(0,zn.jsxs)(Gn,{children:[(0,zn.jsxs)(Fn.gN,{as:Jn,name:"category",id:"category",children:[(0,zn.jsx)("option",{value:"",children:"Categories"}),i&&i.map((function(n){return(0,zn.jsx)(Ln,{value:n.value,children:n.value},n.value)}))]}),(0,zn.jsx)(Un,{name:"category",component:"div"}),"Verb"===t.category&&(0,zn.jsxs)($n,{children:[(0,zn.jsxs)(Dn,{children:[(0,zn.jsx)(Yn,{type:"radio",name:"verbType",value:"regular",checked:"regular"===p,onChange:function(){c("regular"),r("isIrregular",!1)}}),"Regular"]}),(0,zn.jsxs)(Dn,{children:[(0,zn.jsx)(Yn,{type:"radio",name:"verbType",value:"irregular",checked:"irregular"===p,onChange:function(){c("irregular"),r("isIrregular",!0)}}),"Irregular"]}),(0,zn.jsx)(Fn.Bc,{name:"verbType",component:"div"})]})]}),(0,zn.jsxs)(Wn,{children:[(0,zn.jsxs)(_n,{children:[(0,zn.jsxs)(Hn,{htmlFor:"ua",children:[(0,zn.jsx)(Rn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-ua")})}),"Ukrainian"]}),(0,zn.jsx)(Mn,{type:"text",name:"ua",id:"ua"})]}),(0,zn.jsx)(Bn,{name:"ua",component:"div"}),(0,zn.jsxs)(_n,{children:[(0,zn.jsxs)(Hn,{htmlFor:"uk",children:[(0,zn.jsx)(Rn,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-uk")})}),"English"]}),(0,zn.jsx)(Mn,{type:"text",name:"en",id:"uk"})]}),(0,zn.jsx)(Bn,{name:"en",component:"div"})]}),(0,zn.jsxs)(Vn,{children:[(0,zn.jsx)(Nn,{type:"submit",children:"Add"}),(0,zn.jsx)(Nn,{type:"button",onClick:e,children:"Cancel"})]})]})}})]})},ne=nn.ZP.div(H||(H=(0,X.Z)(["\n  position: absolute;\n  width: 342px;\n  max-height: 100vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scalex(1);\n  border-radius: 15px;\n  background: ",";\n  padding: 48px 16px;\n\n  @media screen and (min-width: 768px) {\n    width: 627px;\n    padding: 48px 64px;\n  }\n"])),(function(n){return n.theme.green})),ee=nn.ZP.svg(R||(R=(0,X.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n    top: 20px;\n    right: 20px;\n  }\n"]))),te=(0,nn.ZP)(Fn.l0)(M||(M=(0,X.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),ie=nn.ZP.div(B||(B=(0,X.Z)(["\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n  }\n"]))),re=nn.ZP.div(U||(U=(0,X.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 32px;\n    align-items: center;\n  }\n"]))),oe=nn.ZP.label(V||(V=(0,X.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4.5px;\n  margin-bottom: 4px;\n  font-weight: 500;\n  font-size: 14px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    order: 2;\n    margin-bottom: 0;\n    gap: 8px;\n  }\n"])),(function(n){return n.theme.white})),ae=nn.ZP.svg(N||(N=(0,X.Z)(["\n  width: 28px;\n  height: 28px;\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n  }\n"]))),de=(0,nn.ZP)(Fn.gN)(G||(G=(0,X.Z)(["\n  border: 1px solid #d1d5db;\n  background: ",";\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 311px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 11.5;\n  color: ",";\n  margin-bottom: 16px;\n\n  :hover {\n    outline: none;\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    order: 1;\n    border: 1px solid rgba(252, 252, 252, 0.3);\n    padding: 16px 18px;\n    width: 354px;\n    height: 56px;\n    margin-bottom: 0px;\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.white})),pe=(0,nn.ZP)(Fn.Bc)(J||(J=(0,X.Z)(["\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 120%;\n  color: ",";\n  margin-top: -10px;\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.white})),ce=((0,nn.ZP)(Fn.Bc)(L||(L=(0,X.Z)(["\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.2;\n  color: ",";\n  margin-top: 10px;\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.white})),nn.ZP.div($||($=(0,X.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 16px;\n\n  @media screen and (min-width: 768px) {\n    gap: 10px;\n    margin-top: 32px;\n  }\n"])))),se=nn.ZP.button(D||(D=(0,X.Z)(["\n  border: 1px solid rgba(252, 252, 252, 0.4);\n  border-radius: 30px;\n  padding: 12px 45px;\n  width: 159px;\n  height: 48px;\n  background: ",";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 245px;\n    height: 56px;\n  }\n"])),(function(n){return n.theme.green}),(function(n){return n.theme.white}),(function(n){return n.theme.white}),(function(n){return n.theme.black})),he=Kn.Ry().shape({en:Kn.Z_().matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,"Invalid English input").required("English is required"),ua:Kn.Z_().matches(/^(?![A-Za-z])[\t-\r \xA0\u02BC\u0404\u0406\u0407\u0410-\u044F\u0454\u0456\u0457\u0490\u0491\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/,"Invalid Ukrainian input").required("Ukrainian is required")}),le=function(n){var e=n.toggleModal,t=(0,rn.v9)(on.xR),i=(0,rn.I0)(),r=t._id,o=t.category;return(0,zn.jsxs)(ne,{children:[(0,zn.jsx)(ee,{onClick:e,type:"button",children:(0,zn.jsx)("svg",{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-close")})})}),(0,zn.jsx)(Fn.J9,{initialValues:{en:t.en,ua:t.ua},validationSchema:he,onSubmit:function(n){var t=(0,tn.Z)((0,tn.Z)({},n),{},{category:o,id:r});"verb"===o&&(t=(0,tn.Z)((0,tn.Z)({},t),{},{isIrregular:!0})),i((0,an.A8)(t)).unwrap().then((function(){kn.ZP.success("Word updated successfully"),i((0,an.ne)()),e()})).catch((function(n){kn.ZP.error(n)}))},children:function(n){n.values,n.handleSubmit;return(0,zn.jsxs)(te,{children:[(0,zn.jsxs)(ie,{children:[(0,zn.jsxs)(re,{children:[(0,zn.jsxs)(oe,{htmlFor:"ua",children:[(0,zn.jsx)(ae,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-ua")})}),"Ukrainian"]}),(0,zn.jsx)(de,{type:"text",name:"ua",id:"ua"})]}),(0,zn.jsx)(pe,{name:"ua",component:"div"}),(0,zn.jsxs)(re,{children:[(0,zn.jsxs)(oe,{htmlFor:"en",children:[(0,zn.jsx)(ae,{children:(0,zn.jsx)("use",{href:"".concat(fn.Z,"#icon-uk")})}),"English"]}),(0,zn.jsx)(de,{type:"text",name:"en",id:"en"})]}),(0,zn.jsx)(pe,{name:"en",component:"div"})]}),(0,zn.jsxs)(ce,{children:[(0,zn.jsx)(se,{type:"submit",children:"Save"}),(0,zn.jsx)(se,{type:"button",onClick:e,children:"Cancel"})]})]})}})]})},ue=function(){var n=(0,Q.useState)(!1),e=(0,Y.Z)(n,2),t=e[0],i=e[1],r=(0,Q.useState)(!1),o=(0,Y.Z)(r,2),a=o[0],d=o[1],p=(0,Q.useState)(!1),c=(0,Y.Z)(p,2),s=c[0],h=c[1],l=function(){i((function(n){return!n}))};var u=function(){i(!1)};return(0,zn.jsxs)(en,{children:[(0,zn.jsx)(K.A,{onClickAddWord:function(){h(!1),d(!0),l()}}),(0,zn.jsx)(En,{onClickEditWord:function(){d(!1),h(!0),l()}}),t&&(0,zn.jsxs)(An.u,{toggleModal:l,children:[a&&(0,zn.jsx)(Xn,{toggleModal:l,close:u}),s&&(0,zn.jsx)(le,{toggleModal:l,close:u})]})]})}}}]);
//# sourceMappingURL=901.1d4429cc.chunk.js.map