(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[41],{1573:function(e,t,c){"use strict";c.r(t),c.d(t,"ITEMS_PER_PAGE",(function(){return f})),c.d(t,"PageButtons",(function(){return y})),c.d(t,"Arrow",(function(){return k}));var n,r,s=c(8),i=c(9),l=c(0),o=c(2),a=c(6),j=c(110),b=c(971),u=c(13),d=c(237),O=c(476),x=c(127),h=c(1),f=10,m="totalVolumeBNB",p="numberTokensListed",g="totalSupply",y=a.e.div(n||(n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]))),k=a.e.div(r||(r=Object(i.a)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.default=function(){var e=Object(u.b)().t,t=Object(b.f)(),c=Object(o.bd)().isMobile,n=Object(l.useState)(null),r=Object(s.a)(n,2),i=r[0],a=r[1],v=Object(l.useState)(!1),C=Object(s.a)(v,2),S=C[0],w=C[1],F=Object(l.useState)(1),A=Object(s.a)(F,2),B=A[0],P=A[1],E=Object(l.useState)(1),D=Object(s.a)(E,2),I=D[0],M=D[1];Object(l.useEffect)((function(){setTimeout((function(){window.scroll({top:0,left:0,behavior:"smooth"})}),50)}),[B]),Object(l.useEffect)((function(){var e=1,c=t?Object.values(t):[];c.length%f===0&&(e=0),M(Math.floor(c.length/f)+e)}),[t]);var T=Object(l.useMemo)((function(){return(t?Object.values(t):[]).sort((function(e,t){return i&&e&&t?parseFloat(e[i])>parseFloat(t[i])?1*(S?-1:1):-1*(S?-1:1):-1})).slice(f*(B-1),B*f)}),[B,t,S,i]),V=Object(l.useCallback)((function(e){a(e),w(i!==e||!S)}),[S,i]),L=Object(l.useCallback)((function(e){return i===e?S?"\u2193":"\u2191":""}),[S,i]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O.a,{children:Object(h.jsx)(o.fb,{as:"h1",scale:"xxl",color:"secondary",children:e("Collections")})}),Object(h.jsx)(d.b,{children:Object(h.jsxs)(o.z,{children:[Object(h.jsxs)(o.wc,{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)(o.Cc,{textAlign:"left",children:e("Collection")}),Object(h.jsxs)(o.Cc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return V(m)},children:[e("Volume"),L(m)]}),!c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.Cc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return V(p)},children:[e("Items"),L(p)]}),Object(h.jsxs)(o.Cc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return V(g)},children:[e("Supply"),L(g)]})]})]})}),Object(h.jsx)("tbody",{children:T.map((function(e){var t=e.totalVolumeBNB?parseFloat(e.totalVolumeBNB).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0";return Object(h.jsxs)("tr",{children:[Object(h.jsx)(o.yc,{children:Object(h.jsx)(j.a,{to:"".concat(x.a,"/collections/").concat(e.address),children:Object(h.jsxs)(o.db,{alignItems:"center",children:[Object(h.jsx)(o.Yb,{src:e.avatar,width:48,height:48,mr:"16px"}),e.name]})})}),Object(h.jsx)(o.yc,{children:Object(h.jsxs)(o.db,{alignItems:"center",children:[t,Object(h.jsx)(o.n,{ml:"8px"})]})}),!c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.yc,{children:e.numberTokensListed}),Object(h.jsx)(o.yc,{children:e.totalSupply})]})]},e.address)}))})]}),Object(h.jsxs)(y,{children:[Object(h.jsx)(k,{onClick:function(){P(1===B?B:B-1)},children:Object(h.jsx)(o.c,{color:1===B?"textDisabled":"primary"})}),Object(h.jsx)(o.Ac,{children:e("Page %page% of %maxPage%",{page:B,maxPage:I})}),Object(h.jsx)(k,{onClick:function(){P(B===I?B:B+1)},children:Object(h.jsx)(o.f,{color:B===I?"textDisabled":"primary"})})]})]})})]})}}}]);
//# sourceMappingURL=41.b415ed06.chunk.js.map