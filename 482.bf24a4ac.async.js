"use strict";(self.webpackChunkyk_doc=self.webpackChunkyk_doc||[]).push([[482],{5482:function(sn,h,a){a.r(h),a.d(h,{default:function(){return nn}});var Z=a(97685),s=a(30168),i=a(62435),O=a(34804),x=a(97460),T=a(50756),g=a(92578),D=function(n,e){return i.createElement(g.Z,(0,x.Z)({},n,{ref:e,icon:T.Z}))},X=i.forwardRef(D),y=X,B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},K=B,F=function(n,e){return i.createElement(g.Z,(0,x.Z)({},n,{ref:e,icon:K}))},G=i.forwardRef(F),b=G,H=a(26554),J=function(n,e){return i.createElement(g.Z,(0,x.Z)({},n,{ref:e,icon:H.Z}))},Q=i.forwardRef(J),M=Q,V=a(86250),W=a(29093),Y=a(21680),u=a.n(Y),$=a(95090),w=a(58617),r=a(70917),S,R,z,L,j,A,k=(0,W.kc)(function(l){var n=l.token,e=l.css,o=n.colorSplit,t=n.iconCls,c=n.fontSizeIcon;return{prevNextNavMobile:e(S||(S=(0,s.Z)([`
      position: fixed;
      top: 40%;
      right: 10px;
      z-index: 2;
      cursor: pointer;
    `]))),verticalText:e(R||(R=(0,s.Z)([`
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: `,`px;
      background: `,`;
      padding: 12px 6px;
      border-radius: 40px;

      a {
        height: auto;
        line-height: unset;
        color: #fff;

        .anticon {
          color: #fff;
        }

        .anticon-up {
          margin-bottom: 4px;
        }

        .anticon-down {
          margin-top: 4px;
        }
      }
    `])),n.fontSize,n.colorPrimary),prevNextNav:e(z||(z=(0,s.Z)([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),n.fontSize,o),pageNav:e(L||(L=(0,s.Z)([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all `,`;
      }

      .chinese {
        margin-inline-start: `,`px;
      }
    `])),t,c,n.motionDurationSlow,n.marginXXS),prevNav:e(j||(j=(0,s.Z)([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end `,`;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `])),n.motionDurationSlow),nextNav:e(A||(A=(0,s.Z)([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start `,`;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])),n.motionDurationSlow)}}),q=function l(n){return Array.isArray(n)?n.reduce(function(e,o){if(!o)return e;if("children"in o&&o.children){var t;return e.concat((t=l(o.children))!==null&&t!==void 0?t:[])}return e.concat(o)},[]):null},_=function(n){var e=n.rtl,o=k(),t=o.styles,c={className:"footer-nav-icon-before"},m={className:"footer-nav-icon-after"},en=(0,i.useContext)(w.Z),d=en.isMobile,tn=e?d?(0,r.tZ)(O.Z,c):(0,r.tZ)(y,c):d?(0,r.tZ)(b,c):(0,r.tZ)(M,c),an=e?d?(0,r.tZ)(b,m):(0,r.tZ)(M,m):d?(0,r.tZ)(O.Z,m):(0,r.tZ)(y,m),rn=(0,$.Z)({before:tn,after:an}),E=(0,Z.Z)(rn,2),C=E[0],I=E[1],on=(0,i.useMemo)(function(){var p=q(C);if(!p)return[null,null];var N=-1;return p.forEach(function(P,ln){P&&P.key===I&&(N=ln)}),[p[N-1],p[N+1]]},[C,I]),U=(0,Z.Z)(on,2),v=U[0],f=U[1];return d?(0,r.tZ)(V.Z,{vertical:!0,className:t.prevNextNavMobile,gap:16},v&&(0,r.tZ)("div",{className:t.verticalText},i.cloneElement(v.label,{className:u()(t.pageNav,t.prevNav,v.className)})),f&&(0,r.tZ)("div",{className:t.verticalText},i.cloneElement(f.label,{className:u()(t.pageNav,t.nextNav,f.className)}))):(0,r.tZ)("section",{className:t.prevNextNav},v&&i.cloneElement(v.label,{className:u()(t.pageNav,t.prevNav,v.className)}),f&&i.cloneElement(f.label,{className:u()(t.pageNav,t.nextNav,f.className)}))},nn=_}}]);
