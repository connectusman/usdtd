(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1030:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(24),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},a=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},o=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(5),r=n(59),a=(n(0),n(246)),o=n(40),s=n(1),i=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===o.g.ACTIVE?Object(s.jsx)(a.h,Object(c.a)({},n)):t===o.g.PENDING?Object(s.jsx)(a.g,Object(c.a)({},n)):Object(s.jsx)(a.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(a.d,Object(c.a)({},n)):Object(s.jsx)(a.b,Object(c.a)({},n))}},1058:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(5),a=n(9),o=(n(0),n(2)),s=n(6),i=n(1),l=s.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(o.p,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},1082:function(e,t,n){"use strict";var c,r=n(9),a=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},1083:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(35),o=n(1058),s=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,j=e.cakeBnbLpBalance,d=Object(r.b)().t;return Object(s.jsxs)(o.a,{mb:"0",children:[Object(s.jsx)(c.Ac,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:d("Your voting power is determined by the amount of USDTd you held at the block detailed below. USDTd held in other places does not contribute to your voting power.")}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Overview")}),Object(s.jsxs)(o.b,{children:[Object(s.jsx)(c.Ac,{color:"secondary",children:d("Your Voting Power")}),Object(s.jsx)(c.Ac,{bold:!0,fontSize:"20px",children:Object(a.d)(t,0,3)})]}),Object(s.jsx)(c.Ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Your Cake Held Now")}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Wallet")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(n,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Manual USDTd Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(l,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Auto USDTd Pool")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(i,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("Other USDTd Pools")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(b,0,3)})]}),Object(s.jsxs)(c.db,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(s.jsx)(c.Ac,{color:"textSubtle",fontSize:"16px",children:d("USDTd BNB LP")}),Object(s.jsx)(c.Ac,{textAlign:"right",children:Object(a.d)(j,0,3)})]})]})}},1084:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(10),s=n(8),i=n(0),l=n(49),b=n(240),j=n(37),d=n(112),u=n(988),x={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,p=Object(i.useState)(x),O=Object(s.a)(p,2),h=O[0],f=O[1],m=Object(i.useState)(!!c),v=Object(s.a)(m,2),g=v[0],w=v[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,s,i,l,x,p,O,h,m,v,g;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(u.g)(c,i,o);case 14:l=n.sent,x=l.cakeBalance,p=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,v=l.cakeVaultBalance,g=l.verificationHash,t&&f((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:g,cakeBalance:parseFloat(x),cakeBnbLpBalance:parseFloat(p),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(v),total:parseFloat(h)})}));case 23:return n.prev=23,w(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,w]),Object(a.a)(Object(a.a)({},h),{},{isLoading:g})}},1127:function(e,t,n){"use strict";var c,r,a,o,s,i=n(5),l=(n(0),n(1130)),b=n.n(l),j=n(1166),d=n.n(j),u=n(59),x=n(9),p=n(2),O=n(6),h=n(1),f=["node"],m=O.e.table(c||(c=Object(x.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),v=O.e.div(r||(r=Object(x.a)(["\n  width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n"]))),g=O.e.div(a||(a=Object(x.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),w=function(e){return Object(h.jsx)(p.fb,Object(i.a)({as:"h4",scale:"lg",my:"16px"},e))},k={h1:w,h2:w,h3:w,h4:w,h5:w,h6:w,p:function(e){return Object(h.jsx)(p.Ac,Object(i.a)({as:"p",my:"16px"},e))},table:function(e){e.node;var t=Object(u.a)(e,f);return Object(h.jsx)(v,{children:Object(h.jsx)(m,{children:t.children})})},ol:function(e){return Object(h.jsx)(g,Object(i.a)({as:"ol"},e))},ul:function(e){return Object(h.jsx)(g,Object(i.a)({as:"ul"},e))},pre:O.e.pre(o||(o=Object(x.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text})),a:O.e.a(s||(s=Object(x.a)(["\n  word-break: break-all;\n"])))};t.a=function(e){return Object(h.jsx)(b.a,Object(i.a)({remarkPlugins:[d.a],components:k},e))}},1606:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),s=n(2),i=n(49),l=n(90),b=n(110),j=n(79),d=n(40),u=n(1030),x=n(487),p=n(13),O=n(319),h=n(1127),f=n(475),m=n(988),v=n(1051),g=n(1082),w=n(9),k=n(6),S=n(949),y=n(38),A=n(193),B=n(994),C=n(1),I=Object(k.e)(s.p)(c||(c=Object(w.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),D=function(e){var t=e.proposal,n=Object(p.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(C.jsxs)(s.z,{mb:"16px",children:[Object(C.jsx)(s.C,{children:Object(C.jsx)(s.fb,{as:"h3",scale:"md",children:n("Details")})}),Object(C.jsxs)(s.A,{children:[Object(C.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",children:n("Identifier")}),Object(C.jsx)(s.sb,{href:"".concat(B.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(C.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",children:n("Creator")}),Object(C.jsx)(s.sb,{href:Object(y.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(C.jsxs)(s.db,{alignItems:"center",mb:"16px",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",children:n("Snapshot")}),Object(C.jsx)(s.sb,{href:Object(y.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(C.jsxs)(I,{p:"16px",children:[Object(C.jsx)(v.a,{proposalState:t.state,mb:"8px"}),Object(C.jsxs)(s.db,{alignItems:"center",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(C.jsx)(s.Ac,{ml:"8px",children:Object(S.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(C.jsxs)(s.db,{alignItems:"center",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(C.jsx)(s.Ac,{ml:"8px",children:Object(S.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},L=n(473),P=n.n(L),V=n(35),N=Object(k.e)(s.Ac)(r||(r=Object(w.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),T=function(e){var t=e.choices,n=e.votes,c=Object(p.b)().t,r=Object(m.a)(n),a=Object(u.e)(),o=Object(i.c)().account,l=Object(m.f)(n);return Object(C.jsxs)(s.z,{children:[Object(C.jsx)(s.C,{children:Object(C.jsx)(s.fb,{as:"h3",scale:"md",children:c("Current Results")})}),Object(C.jsxs)(s.A,{children:[a===d.j.IDLE&&t.map((function(e,t){var n=r[e]||[],a=Object(m.f)(n),i=0===l?0:a/l*100,b=n.some((function(e){return o&&e.voter.toLowerCase()===o.toLowerCase()}));return Object(C.jsxs)(s.p,{mt:t>0?"24px":"0px",children:[Object(C.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(C.jsx)(N,{mb:"4px",title:e,children:e}),b&&Object(C.jsxs)(s.xc,{variant:"success",outline:!0,ml:"8px",children:[Object(C.jsx)(s.K,{mr:"4px"})," ",c("Voted")]})]}),Object(C.jsx)(s.p,{mb:"4px",children:Object(C.jsx)(s.Zb,{primaryStep:i,scale:"sm"})}),Object(C.jsxs)(s.db,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(s.Ac,{color:"textSubtle",children:c("%total% Votes",{total:Object(V.d)(a,0,2)})}),Object(C.jsxs)(s.Ac,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),a===d.j.LOADING&&P()(t.length).map((function(e,t){return Object(C.jsx)(s.p,{mt:t>0?"24px":"0px",children:Object(C.jsx)(s.hc,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(5),E=n(3),F=n.n(E),M=n(10),H=n(8),U=n(59),J=n(118),Y=n(121),G=n(16),K=n(184),Q=n(22),R=n(101);!function(e){e.MAIN="main",e.DETAILS="details"}(a||(a={}));var W,_,Z,q,X,$,ee,te,ne=n(1058),ce=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,a=e.onConfirm,o=e.onViewDetails,i=e.onDismiss,l=Object(p.b)().t;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(ne.a,{children:[Object(C.jsx)(s.Ac,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Voting For")}),Object(C.jsx)(N,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(C.jsx)(s.Ac,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Your Voting Power")}),r?Object(C.jsx)(s.hc,{height:"64px",mb:"24px"}):Object(C.jsxs)(ne.b,{onClick:o,style:{cursor:"pointer"},children:[Object(C.jsx)(s.Ac,{bold:!0,fontSize:"20px",children:Object(V.d)(n,0,3)}),Object(C.jsx)(s.ib,{scale:"sm",variant:"text",children:Object(C.jsx)(s.O,{width:"24px"})})]}),Object(C.jsx)(s.Ac,{as:"p",color:"textSubtle",fontSize:"14px",children:l("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(C.jsx)(s.u,{isLoading:c,endIcon:c?Object(C.jsx)(s.i,{spin:!0,color:"currentColor"}):null,disabled:r||0===n,width:"100%",mb:"8px",onClick:a,children:l("Confirm Vote")}),Object(C.jsx)(s.u,{variant:"secondary",width:"100%",onClick:i,children:l("Cancel")})]})},re=n(1083),ae=n(1084),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,l=e.block,b=e.onDismiss,j=Object(o.useState)(a.MAIN),u=Object(H.a)(j,2),x=u[0],O=u[1],h=Object(o.useState)(!0),f=Object(H.a)(h,2),v=f[0],g=f[1],w=Object(o.useState)(!1),k=Object(H.a)(w,2),S=k[0],y=k[1],A=Object(i.c)().account,B=Object(p.b)().t,I=Object(J.a)().toastError,D=Object(Q.a)().library,L=Object(R.a)().theme,P=Object(ae.a)(l,v),V=P.isLoading,N=P.total,T=P.cakeBalance,E=P.cakeVaultBalance,U=P.cakePoolBalance,Y=P.poolsBalance,W=P.cakeBnbLpBalance,_=P.verificationHash,Z=x===a.MAIN,q=Z?null:function(){return O(a.MAIN)},X=(t={},Object(G.a)(t,a.MAIN,B("Confirm Vote")),Object(G.a)(t,a.DETAILS,B("Voting Power")),t),$=function(){g(!1),b()},ee=function(){var e=Object(M.a)(F.a.mark((function e(){var t,a,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(m.e)()),{},{type:d.i.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:N.toString(),verificationHash:_}}})),e.next=5,Object(K.c)(D,A,t);case 5:return a=e.sent,o={address:A,msg:t,sig:a},e.next=9,Object(m.i)(o);case 9:return y(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),y(!1),I(B("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)(s.Fb,{title:X[x],onBack:q,onDismiss:b,hideCloseButton:!Z,headerBackground:L.colors.gradients.cardHeader,children:Object(C.jsxs)(s.p,{mb:"24px",width:"320px",children:[x===a.MAIN&&Object(C.jsx)(ce,{vote:r,isLoading:V,isPending:S,total:N,onConfirm:ee,onViewDetails:function(){return O(a.DETAILS)},onDismiss:$}),x===a.DETAILS&&Object(C.jsx)(re.a,{total:N,cakeBalance:T,cakeVaultBalance:E,cakePoolBalance:U,poolsBalance:Y,cakeBnbLpBalance:W})]})})},se=["proposal"],ie=k.e.label(W||(W=Object(w.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),le=k.e.div(_||(_=Object(w.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),be=function(e){var t=e.proposal,n=Object(U.a)(e,se),c=Object(o.useState)(null),r=Object(H.a)(c,2),a=r[0],l=r[1],b=Object(p.b)().t,d=Object(J.a)().toastSuccess,u=Object(j.b)(),O=Object(i.c)().account,h=function(){var e=Object(M.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(b("Vote cast!")),u(Object(x.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(s.cd)(Object(C.jsx)(oe,{onSuccess:h,proposalId:t.id,vote:a,block:Number(t.snapshot)})),m=Object(H.a)(f,1)[0];return Object(C.jsxs)(s.z,Object(z.a)(Object(z.a)({},n),{},{children:[Object(C.jsx)(s.C,{children:Object(C.jsx)(s.fb,{as:"h3",scale:"md",children:b("Cast your vote")})}),Object(C.jsxs)(s.A,{children:[t.choices.map((function(e,t){var n=t+1===(null===a||void 0===a?void 0:a.value);return Object(C.jsxs)(ie,{isChecked:n,isDisabled:!O,children:[Object(C.jsx)("div",{style:{flexShrink:0},children:Object(C.jsx)(s.bc,{scale:"sm",value:e,checked:n,onChange:function(){l({label:e,value:t+1})},disabled:!O})}),Object(C.jsx)(le,{children:Object(C.jsx)(s.Ac,{as:"span",title:e,children:e})})]},e)})),O?Object(C.jsx)(s.u,{onClick:m,disabled:null===a,children:b("Cast Vote")}):Object(C.jsx)(Y.a,{})]})]}))},je=n(323),de=n.n(je),ue=Object(k.e)(s.db)(Z||(Z=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),xe=Object(k.e)(s.hc)(q||(q=Object(w.a)(["\n  flex: 1;\n"]))),pe=function(){return Object(C.jsx)(s.p,{children:P()(10).map((function(e){return Object(C.jsxs)(ue,{children:[Object(C.jsx)(s.hc,{height:"21px",mr:"32px",width:"100px"}),Object(C.jsx)(xe,{height:"21px",mr:"32px",width:"100%"}),Object(C.jsx)(xe,{height:"21px",width:"100%"})]},e)}))})},Oe=Object(k.e)(s.p).attrs({alignItems:"center"})(X||(X=Object(w.a)(["\n  grid-area: address;\n"]))),he=Object(k.e)(s.p)($||($=Object(w.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),fe=Object(k.e)(s.p)(ee||(ee=Object(w.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),me=Object(k.e)(s.eb)(te||(te=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ve=function(e){var t,n=e.vote,c=e.isVoter,r=Object(p.b)().t,a=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),o=a?parseFloat(n.metadata.votingPower).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3}):"--";return Object(C.jsxs)(me,{children:[Object(C.jsx)(Oe,{children:Object(C.jsxs)(s.db,{alignItems:"center",children:[Object(C.jsx)(s.sb,{href:Object(y.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(C.jsxs)(s.xc,{variant:"success",outline:!0,ml:"8px",children:[Object(C.jsx)(s.K,{mr:"4px"})," ",r("Voted")]})]})}),Object(C.jsx)(he,{children:Object(C.jsx)(N,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(C.jsx)(fe,{children:Object(C.jsxs)(s.db,{alignItems:"center",justifyContent:"end",children:[Object(C.jsx)(s.Ac,{title:n.metadata.votingPower,children:o}),a&&Object(C.jsx)(s.sb,{href:"".concat(B.b,"/").concat(n.id)})]})})]})},ge=function(e){var t,n=parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower);return n||(n=0),n},we=function(e){var t=e.votes,n=Object(o.useState)(!1),c=Object(H.a)(n,2),r=c[0],a=c[1],l=Object(p.b)().t,b=Object(i.c)().account,j=de()(t,[ge,"created"],["desc","desc"]),x=r?j:j.slice(0,20),O=Object(u.e)()===d.j.IDLE;return Object(C.jsxs)(s.z,{children:[Object(C.jsx)(s.C,{children:Object(C.jsxs)(s.db,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(s.fb,{as:"h3",scale:"md",children:l("Votes (%count%)",{count:t.length.toLocaleString()})}),!O&&Object(C.jsx)(s.i,{spin:!0,width:"22px"})]})}),!O&&Object(C.jsx)(pe,{}),O&&x.length>0&&Object(C.jsxs)(C.Fragment,{children:[x.map((function(e){var t=b&&e.voter.toLowerCase()===b.toLowerCase();return Object(C.jsx)(ve,{vote:e,isVoter:t},e.id)})),Object(C.jsx)(s.db,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(C.jsx)(s.u,{width:"100%",onClick:function(){a(!r)},variant:"text",endIcon:r?Object(C.jsx)(s.P,{color:"primary",width:"21px"}):Object(C.jsx)(s.M,{color:"primary",width:"21px"}),disabled:!O,children:l(r?"Hide":"See All")})})]}),O&&0===x.length&&Object(C.jsx)(s.db,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(C.jsx)(s.fb,{as:"h5",children:l("No votes found")})})]})},ke=n(237);t.default=function(){var e=Object(l.i)().id,t=Object(u.a)(e),n=Object(p.b)().t,c=Object(i.c)().account,r=Object(j.b)(),a=Object(u.d)(e),w=Object(u.e)(),k=Object(u.b)(),S=c&&a.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),y=null!==t&&void 0!==t?t:{},A=y.id,B=void 0===A?null:A,I=y.snapshot,L=void 0===I?null:I,P=w===d.j.LOADING||k===d.j.LOADING;return Object(o.useEffect)((function(){r(Object(x.b)(e))}),[e,r]),Object(o.useEffect)((function(){B&&L&&r(Object(x.d)({proposalId:B,block:Number(L)}))}),[B,L,r]),t?Object(C.jsxs)(O.a,{py:"40px",children:[Object(C.jsx)(ke.a,{}),Object(C.jsx)(s.p,{mb:"40px",children:Object(C.jsx)(s.u,{as:b.a,to:"/voting",variant:"text",startIcon:Object(C.jsx)(s.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(C.jsxs)(g.a,{children:[Object(C.jsxs)(s.p,{children:[Object(C.jsxs)(s.p,{mb:"32px",children:[Object(C.jsxs)(s.db,{alignItems:"center",mb:"8px",children:[Object(C.jsx)(v.a,{proposalState:t.state}),Object(C.jsx)(v.b,{isCoreProposal:Object(m.h)(t),ml:"8px"})]}),Object(C.jsx)(s.fb,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(C.jsx)(s.p,{children:Object(C.jsx)(h.a,{children:t.body})})]}),!P&&!S&&t.state===d.g.ACTIVE&&Object(C.jsx)(be,{proposal:t,mb:"16px"}),Object(C.jsx)(we,{votes:a})]}),Object(C.jsxs)(s.p,{children:[Object(C.jsx)(D,{proposal:t}),Object(C.jsx)(T,{choices:t.choices,votes:a})]})]})]}):Object(C.jsx)(f.a,{})}},988:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return w}));var c=n(16),r=n(32),a=n(5),o=n(3),s=n.n(o),i=n(10),l=n(57),b=n(34),j=n(40),d=n(112),u=n(994),x=function(e){return u.a.includes(e.author.toLowerCase())},p=function(e,t){switch(t){case j.h.COMMUNITY:return e.filter((function(e){return!x(e)}));case j.h.CORE:return e.filter((function(e){return x(e)}));case j.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"USDTd",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:u.e,timestamp:(Date.now()/1e3).toFixed(),space:u.c}},m=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,d.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},w=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},994:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),a="https://gateway.ipfs.io/ipfs",o="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=14.4e61c2de.chunk.js.map