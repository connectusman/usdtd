(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[17],{1058:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(5),a=n(9),o=(n(0),n(2)),s=n(6),i=n(1),l=s.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(o.p,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},1082:function(e,t,n){"use strict";var c,r=n(9),a=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},1083:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(35),o=n(1058),s=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,u=e.cakeBnbLpBalance,d=Object(r.b)().t;return Object(s.jsxs)(o.a,{mb:"0",children:[Object(s.jsx)(c.Ac,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:d("Your voting power is determined by the amount of USDTd you held at the block detailed below. USDTd held in other places does not contribute to your voting power.")}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Overview")}),Object(s.jsxs)(o.b,{children:[Object(s.jsx)(c.Ac,{color:"secondary",children:d("Your Voting Power")}),Object(s.jsx)(c.Ac,{bold:!0,fontSize:"20px",children:Object(a.d)(t,0,3)})]}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Your Cake Held Now")}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Wallet")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(n,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Manual USDTd Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(l,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Auto USDTd Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(i,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Other USDTd Pools")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(b,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("USDTd BNB LP")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(u,0,3)})]})]})}},1084:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(10),s=n(8),i=n(0),l=n(49),b=n(240),u=n(37),d=n(112),j=n(988),p={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,x=Object(i.useState)(p),O=Object(s.a)(x,2),h=O[0],f=O[1],m=Object(i.useState)(!!c),v=Object(s.a)(m,2),g=v[0],y=v[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,s,i,l,p,x,O,h,m,v,g;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(j.g)(c,i,o);case 14:l=n.sent,p=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,v=l.cakeVaultBalance,g=l.verificationHash,t&&f((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:g,cakeBalance:parseFloat(p),cakeBnbLpBalance:parseFloat(x),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(v),total:parseFloat(h)})}));case 23:return n.prev=23,y(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,y]),Object(a.a)(Object(a.a)({},h),{},{isLoading:g})}},1127:function(e,t,n){"use strict";var c,r,a,o,s,i=n(5),l=(n(0),n(1130)),b=n.n(l),u=n(1166),d=n.n(u),j=n(59),p=n(9),x=n(2),O=n(6),h=n(1),f=["node"],m=O.e.table(c||(c=Object(p.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),v=O.e.div(r||(r=Object(p.a)(["\n  width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n"]))),g=O.e.div(a||(a=Object(p.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),y=function(e){return Object(h.jsx)(x.fb,Object(i.a)({as:"h4",scale:"lg",my:"16px"},e))},k={h1:y,h2:y,h3:y,h4:y,h5:y,h6:y,p:function(e){return Object(h.jsx)(x.Ac,Object(i.a)({as:"p",my:"16px"},e))},table:function(e){e.node;var t=Object(j.a)(e,f);return Object(h.jsx)(v,{children:Object(h.jsx)(m,{children:t.children})})},ol:function(e){return Object(h.jsx)(g,Object(i.a)({as:"ol"},e))},ul:function(e){return Object(h.jsx)(g,Object(i.a)({as:"ul"},e))},pre:O.e.pre(o||(o=Object(p.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text})),a:O.e.a(s||(s=Object(p.a)(["\n  word-break: break-all;\n"])))};t.a=function(e){return Object(h.jsx)(b.a,Object(i.a)({remarkPlugins:[d.a],components:k},e))}},1610:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(16),s=n(3),i=n.n(s),l=n(5),b=n(10),u=n(8),d=n(0),j=n(2),p=n(90),x=n(110),O=n(49),h=n(473),f=n.n(h),m=n(479),v=n.n(m),g=n(123),y=n(40),k=n(118),w=n(22),T=n(38),B=n(193),A=n(184),S=n(13),D=n(319),C=n(586),P=n(121),I=n(1127),z=n(237),L=n(988),E=n(1082),F=n(9),Y=n(6),M=n(1),H=Y.e.label(c||(c=Object(F.a)(["\n  color: ",";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.text})),U=Object(Y.e)(H)(r||(r=Object(F.a)(["\n  font-size: 20px;\n"]))),V=Object(Y.e)(H)(a||(a=Object(F.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),N=function(e){var t=e.children;return Object(M.jsx)(j.Ac,{color:"failure",mb:"4px",children:t})},R=function(e){var t=e.errors;return Object(M.jsx)(j.p,{mt:"8px",children:t.map((function(e){return Object(M.jsx)(N,{children:e},e)}))})},q=n(32),J=n(290),W=n.n(J),Q=n(59),_=["onRemove","onTextInput"],G=function(e){var t=e.onRemove,n=e.onTextInput,c=Object(Q.a)(e,_),r=Object(d.useState)(!1),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(d.useState)(!1),b=Object(u.a)(i,2),p=b[0],x=b[1];return Object(M.jsxs)(j.p,{position:"relative",mb:"16px",children:[Object(M.jsx)(j.mb,Object(l.a)(Object(l.a)({},c),{},{onChange:function(e){var t=e.currentTarget.value;s(p&&0===t.length),x(!0),n(t)},isWarning:o})),t&&Object(M.jsx)(j.p,{position:"absolute",right:"8px",top:"0px",zIndex:30,children:Object(M.jsx)(j.ib,{variant:"text",onClick:t,children:Object(M.jsx)(j.R,{})})})]})},K=function(){return{id:W()(),value:""}},X=function(e){var t=e.choices,n=e.onChange,c=Object(S.b)().t,r=t.filter((function(e){return e.value.length>0})).length>=2;return Object(M.jsxs)(j.z,{children:[Object(M.jsx)(j.C,{children:Object(M.jsx)(j.fb,{as:"h3",scale:"md",children:c("Choices")})}),Object(M.jsxs)(j.A,{children:[t.map((function(e,r){var a=e.id,o=e.value;return Object(M.jsx)(G,{scale:"lg",onTextInput:function(e){var c=Object(q.a)(t),r=c.findIndex((function(e){return e.id===a}));c[r].value=e,n(c)},placeholder:c("Input choice text"),value:o,onRemove:r>1?function(){n(t.filter((function(e){return e.id!==a})))}:void 0},a)})),Object(M.jsx)(j.u,{type:"button",onClick:function(){n([].concat(Object(q.a)(t),[K()]))},disabled:!r,children:c("Add Choice")})]})]})},Z=n(444),$=n(949),ee=n(898),te=function(e,t){if(!Object(Z.default)(e)||!Object(Z.default)(t))return null;var n=Object($.default)(e,"yyyy-MM-dd"),c=Object($.default)(t,"HH:mm:ss");return Object(ee.default)("".concat(n,"T").concat(c)).getTime()/1e3},ne=n(994),ce=n(101),re=n(1084),ae=n(1083),oe=function(e){var t=e.block,n=e.onDismiss,c=Object(S.b)().t,r=Object(d.useState)(!0),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(re.a)(t,o),l=i.isLoading,b=i.total,p=i.cakeBalance,x=i.cakeVaultBalance,O=i.cakePoolBalance,h=i.poolsBalance,f=i.cakeBnbLpBalance,m=Object(ce.a)().theme;return Object(M.jsx)(j.Fb,{title:c("Voting Power"),onDismiss:function(){s(!1),n()},headerBackground:m.colors.gradients.cardHeader,children:Object(M.jsx)(j.p,{mb:"24px",width:"320px",children:l?Object(M.jsx)(j.db,{height:"450px",alignItems:"center",justifyContent:"center",children:Object(M.jsx)(j.kc,{size:80})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ae.a,{total:b,cakeBalance:p,cakeVaultBalance:x,cakePoolBalance:O,poolsBalance:h,cakeBnbLpBalance:f}),Object(M.jsx)(j.u,{variant:"secondary",onClick:n,width:"100%",mt:"16px",children:c("Close")})]})})})},se=Object(d.lazy)((function(){return Promise.all([n.e(8),n.e(32)]).then(n.bind(null,1592))}));t.default=function(){var e=Object(d.useState)({name:"",body:"",choices:f()(2).map(K),startDate:null,startTime:null,endDate:null,endTime:null,snapshot:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(d.useState)(!1),a=Object(u.a)(r,2),s=a[0],h=a[1],m=Object(d.useState)({}),F=Object(u.a)(m,2),Y=F[0],H=F[1],N=Object(S.b)().t,J=Object(O.c)().account,W=Object(g.b)(),Q=Object(p.g)().push,_=Object(w.a)().library,G=Object(k.a)(),$=G.toastSuccess,ee=G.toastError,ce=Object(j.cd)(Object(M.jsx)(oe,{block:n.snapshot})),re=Object(u.a)(ce,1)[0],ae=n.name,ie=n.body,le=n.choices,be=n.startDate,ue=n.startTime,de=n.endDate,je=n.endTime,pe=n.snapshot,xe=function(e,t){var n=e.name,c=e.body,r=e.choices,a=e.startDate,o=e.startTime,s=e.endDate,i=e.endTime,l=e.snapshot,b={};n||(b.name=[t("%field% is required",{field:"Title"})]),c||(b.body=[t("%field% is required",{field:"Body"})]),r.length<2&&(b.choices=[t("Please create a minimum of %num% choices",{num:2})]);var u=r.some((function(e){return!e.value}));2===r.length&&u&&(b.choices=Array.isArray(b.choices)?[].concat(Object(q.a)(b.choices),[t("Choices must not be empty")]):b.choices=[t("Choices must not be empty")]),Object(Z.default)(a)||(b.startDate=[t("Please select a valid date")]),Object(Z.default)(o)||(b.startTime=[t("Please select a valid time")]),Object(Z.default)(s)||(b.endDate=[t("Please select a valid date")]),Object(Z.default)(i)||(b.endTime=[t("Please select a valid time")]);var d=te(a,o);return te(s,i)<d&&(b.endDate=Array.isArray(b.endDate)?[].concat(Object(q.a)(b.endDate),[t("End date must be after the start date")]):b.endDate=[t("End date must be after the start date")]),0===l&&(b.snapshot=[t("Invalid snapshot")]),b}(n,N),Oe=function(){var e=Object(b.a)(i.a.mark((function e(t){var n,c,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h(!0),n=JSON.stringify(Object(l.a)(Object(l.a)({},Object(L.e)()),{},{type:y.i.PROPOSAL,payload:{name:ae,body:ie,snapshot:pe,start:te(be,ue),end:te(de,je),choices:le.filter((function(e){return e.value})).map((function(e){return e.value})),metadata:Object(L.d)(),type:"single-choice"}})),e.next=6,Object(A.c)(_,J,n);case 6:if(!(c=e.sent)){e.next=16;break}return r={address:J,msg:n,sig:c},e.next=11,Object(L.i)(r);case 11:a=e.sent,Q("/voting/proposal/".concat(a.ipfsHash)),$(N("Proposal created!")),e.next=17;break;case 16:ee(N("Error"),N("Unable to sign payload"));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),ee(N("Error"),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.error)),console.error(e.t0),h(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e,t){c((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,t))})),H((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))},fe=function(e){return function(t){he(e,t)}},me=Object(d.useMemo)((function(){return{hideIcons:J&&ne.a.includes(J.toLowerCase())?[]:["guide","fullscreen","preview","side-by-side","image"]}}),[J]);return Object(d.useEffect)((function(){W>0&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{snapshot:W})}))}),[W,c]),Object(M.jsxs)(D.a,{py:"40px",children:[Object(M.jsx)(z.a,{}),Object(M.jsx)(j.p,{mb:"48px",children:Object(M.jsxs)(j.q,{children:[Object(M.jsx)(x.a,{to:"/",children:N("Home")}),Object(M.jsx)(x.a,{to:"/voting",children:N("Voting")}),Object(M.jsx)(j.Ac,{children:N("Make a Proposal")})]})}),Object(M.jsx)("form",{onSubmit:Oe,children:Object(M.jsxs)(E.a,{children:[Object(M.jsxs)(j.p,{children:[Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(U,{htmlFor:"name",children:N("Title")}),Object(M.jsx)(j.mb,{id:"name",name:"name",value:ae,scale:"lg",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;he(n,c)},required:!0}),xe.name&&Y.name&&Object(M.jsx)(R,{errors:xe.name})]}),Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(U,{htmlFor:"body",children:N("Content")}),Object(M.jsx)(j.Ac,{color:"textSubtle",mb:"8px",children:N("Tip: write in Markdown!")}),Object(M.jsx)(se,{id:"body",name:"body",onTextChange:function(e){he("body",e)},value:ie,options:me,required:!0}),xe.body&&Y.body&&Object(M.jsx)(R,{errors:xe.body})]}),ie&&Object(M.jsx)(j.p,{mb:"24px",children:Object(M.jsxs)(j.z,{children:[Object(M.jsx)(j.C,{children:Object(M.jsx)(j.fb,{as:"h3",scale:"md",children:N("Preview")})}),Object(M.jsx)(j.A,{p:"0",px:"24px",children:Object(M.jsx)(I.a,{children:ie})})]})}),Object(M.jsx)(X,{choices:le,onChange:function(e){he("choices",e)}}),xe.choices&&Y.choices&&Object(M.jsx)(R,{errors:xe.choices})]}),Object(M.jsx)(j.p,{children:Object(M.jsxs)(j.z,{children:[Object(M.jsx)(j.C,{children:Object(M.jsx)(j.fb,{as:"h3",scale:"md",children:N("Actions")})}),Object(M.jsxs)(j.A,{children:[Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(V,{children:N("Start Date")}),Object(M.jsx)(C.a,{name:"startDate",onChange:fe("startDate"),selected:be,placeholderText:"YYYY/MM/DD"}),xe.startDate&&Y.startDate&&Object(M.jsx)(R,{errors:xe.startDate})]}),Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(V,{children:N("Start Time")}),Object(M.jsx)(C.c,{name:"startTime",onChange:fe("startTime"),selected:ue,placeholderText:"00:00"}),xe.startTime&&Y.startTime&&Object(M.jsx)(R,{errors:xe.startTime})]}),Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(V,{children:N("End Date")}),Object(M.jsx)(C.a,{name:"endDate",onChange:fe("endDate"),selected:de,placeholderText:"YYYY/MM/DD"}),xe.endDate&&Y.endDate&&Object(M.jsx)(R,{errors:xe.endDate})]}),Object(M.jsxs)(j.p,{mb:"24px",children:[Object(M.jsx)(V,{children:N("End Time")}),Object(M.jsx)(C.c,{name:"endTime",onChange:fe("endTime"),selected:je,placeholderText:"00:00"}),xe.endTime&&Y.endTime&&Object(M.jsx)(R,{errors:xe.endTime})]}),J&&Object(M.jsxs)(j.db,{alignItems:"center",mb:"8px",children:[Object(M.jsx)(j.Ac,{color:"textSubtle",mr:"16px",children:N("Creator")}),Object(M.jsx)(j.sb,{href:Object(T.e)(J,"address"),children:Object(B.a)(J)})]}),Object(M.jsxs)(j.db,{alignItems:"center",mb:"16px",children:[Object(M.jsx)(j.Ac,{color:"textSubtle",mr:"16px",children:N("Snapshot")}),Object(M.jsx)(j.sb,{href:Object(T.e)(pe,"block"),children:pe})]}),J?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(j.u,{type:"submit",width:"100%",isLoading:s,endIcon:s?Object(M.jsx)(j.i,{spin:!0,color:"currentColor"}):null,disabled:!v()(xe),mb:"16px",children:N("Publish")}),Object(M.jsxs)(j.Ac,{color:"failure",as:"p",mb:"4px",children:[N("You need at least %count% voting power to publish a proposal.",{count:ne.f})," "]}),Object(M.jsx)(j.u,{scale:"sm",type:"button",variant:"text",onClick:re,p:0,children:N("Check voting power")})]}):Object(M.jsx)(P.a,{width:"100%",type:"button"})]})]})})]})})]})}},988:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return y}));var c=n(16),r=n(32),a=n(5),o=n(3),s=n.n(o),i=n(10),l=n(57),b=n(34),u=n(40),d=n(112),j=n(994),p=function(e){return j.a.includes(e.author.toLowerCase())},x=function(e,t){switch(t){case u.h.COMMUNITY:return e.filter((function(e){return!p(e)}));case u.h.CORE:return e.filter((function(e){return p(e)}));case u.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"USDTd",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:j.e,timestamp:(Date.now()/1e3).toFixed(),space:j.c}},m=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,d.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},994:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),a="https://gateway.ipfs.io/ipfs",o="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=17.4bdd0eff.chunk.js.map