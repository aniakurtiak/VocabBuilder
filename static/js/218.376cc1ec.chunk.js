"use strict";(self.webpackChunkreact_create_app=self.webpackChunkreact_create_app||[]).push([[218],{5218:function(n,t,e){e.d(t,{ZP:function(){return yn}});var r=e(168),a=e(9439),o=e(3433),i=e(1413),s=e(2791),c=e(4942),u={data:""},d=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||u},f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,m=function n(t,e){var r="",a="",o="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},g={},v=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},y=function(n,t,e,r,a){var o=v(n),i=g[o]||(g[o]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(o));if(!g[i]){var s=o!==n?n:function(n){for(var t,e,r=[{}];t=f.exec(n.replace(p,""));)t[4]?r.shift():t[3]?(e=t[3].replace(l," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]}(n);g[i]=m(a?(0,c.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var u=e&&g.g?g.g:null;return e&&(g.g=g[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(g[i],t,r,u),i},b=function(n,t,e){return n.reduce((function(n,r,a){var o=t[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":m(i,""):!1===i?"":i}return n+r+(null==o?"":o)}),"")};function h(n){var t=this||{},e=n.call?n(t.p):n;return y(e.unshift?e.raw?b(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,d(t.target),t.g,t.o,t.k)}h.bind({g:1});var Z,x,w,k,E,j,z,A,_,C,I,N,F,O,D,T,M,P,L,S=h.bind({k:1});function q(n,t){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:x&&x()},s),e.o=/ *go\d+/.test(c),s.className=h.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),w&&u[0]&&w(s),Z(u,s)}return t?t(a):a}}var H=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},$=function(){var n=0;return function(){return(++n).toString()}}(),B=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),G=new Map,J=function(n){if(!G.has(n)){var t=setTimeout((function(){G.delete(n),U({type:4,toastId:n})}),1e3);G.set(n,t)}},K=function n(t,e){switch(e.type){case 0:return(0,i.Z)((0,i.Z)({},t),{},{toasts:[e.toast].concat((0,o.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=G.get(n);t&&clearTimeout(t)}(e.toast.id),(0,i.Z)((0,i.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,i.Z)((0,i.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var a=e.toastId;return a?J(a):t.toasts.forEach((function(n){J(n.id)})),(0,i.Z)((0,i.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===a||void 0===a?(0,i.Z)((0,i.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,i.Z)((0,i.Z)({},t),{},{toasts:[]}):(0,i.Z)((0,i.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,i.Z)((0,i.Z)({},t),{},{pausedAt:e.time});case 6:var s=e.time-(t.pausedAt||0);return(0,i.Z)((0,i.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,i.Z)((0,i.Z)({},n),{},{pauseDuration:n.pauseDuration+s})}))})}},Q=[],R={toasts:[],pausedAt:void 0},U=function(n){R=K(R,n),Q.forEach((function(n){n(R)}))},V=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,i.Z)((0,i.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||$()})}(t,n,e);return U({type:2,toast:r}),r.id}},W=function(n,t){return V("blank")(n,t)};W.error=V("error"),W.success=V("success"),W.loading=V("loading"),W.custom=V("custom"),W.dismiss=function(n){U({type:3,toastId:n})},W.remove=function(n){return U({type:4,toastId:n})},W.promise=function(n,t,e){var r=W.loading(t.loading,(0,i.Z)((0,i.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return W.success(H(t.success,n),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){W.error(H(t.error,n),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.error))})),n};var X=S(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),Y=S(E||(E=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),nn=S(j||(j=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),tn=q("div")(z||(z=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),X,Y,(function(n){return n.secondary||"#fff"}),nn),en=S(A||(A=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),rn=q("div")(_||(_=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),en),an=S(C||(C=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),on=S(I||(I=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),sn=q("div")(N||(N=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),an,on,(function(n){return n.secondary||"#fff"})),cn=q("div")(F||(F=(0,r.Z)(["\n  position: absolute;\n"]))),un=q("div")(O||(O=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),dn=S(D||(D=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),fn=q("div")(T||(T=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),dn),pn=function(n){var t=n.toast,e=t.icon,r=t.type,a=t.iconTheme;return void 0!==e?"string"==typeof e?s.createElement(fn,null,e):e:"blank"===r?null:s.createElement(un,null,s.createElement(rn,(0,i.Z)({},a)),"loading"!==r&&s.createElement(cn,null,"error"===r?s.createElement(tn,(0,i.Z)({},a)):s.createElement(sn,(0,i.Z)({},a))))},ln=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},mn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},gn=q("div")(M||(M=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),vn=q("div")(P||(P=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));s.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,c=t.height?function(n,t){var e=n.includes("top")?1:-1,r=B()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ln(e),mn(e)],o=(0,a.Z)(r,2),i=o[0],s=o[1];return{animation:t?"".concat(S(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(S(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},u=s.createElement(pn,{toast:t}),d=s.createElement(vn,(0,i.Z)({},t.ariaProps),H(t.message,t));return s.createElement(gn,{className:t.className,style:(0,i.Z)((0,i.Z)((0,i.Z)({},c),r),t.style)},"function"==typeof o?o({icon:u,message:d}):s.createElement(s.Fragment,null,u,d))}));!function(n,t,e,r){m.p=t,Z=n,x=e,w=r}(s.createElement);h(L||(L=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));var yn=W}}]);
//# sourceMappingURL=218.376cc1ec.chunk.js.map