"use strict";(self.webpackChunk_innocces_st=self.webpackChunk_innocces_st||[]).push([[9514,5477],{8376:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});var a=n(9496),l=n(5924),o=n(5310),r=n(6502),c=n(4802),i=n(4329),s=n(964),d=n(6186),m=n(3590),u=n(7775),b=n(3996),p=n(9392);const h="backToTopButton_JW9V",E="backToTopButtonShow_J6Pf";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=n(3442),v=n(7835),_=n(2289),k=n(6861),C=n(5882);function N(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_Dwje",S="collapseSidebarButtonIcon_MOq6";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(N,{className:S}))}var x=n(4893),T=n(2719);const y=Symbol("EmptyContext"),w=a.createContext(y);function L(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(w.Provider,{value:o},t)}var A=n(675),M=n(5397),B=n(6977),P=n(6884);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,P.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),v=(0,M.Mg)(h,o),{collapsed:k,setCollapsed:N}=(0,A.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:S}=function(){const e=(0,a.useContext)(w);if(e===y)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),S(e?null:s),N(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&N(!0)}),[b,I,s,N,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(U,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:c+1})))}var W=n(383),D=n(3951);const R="menuExternalLink_JXC2";function J(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,W.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!E&&R,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(D.Z,null)))}const V="menuHtmlItem_AJRN";function z(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[V,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(H,(0,C.Z)({item:t},n));case"html":return a.createElement(z,(0,C.Z)({item:t},n));default:return a.createElement(J,(0,C.Z)({item:t},n))}}function O(e){let{items:t,...n}=e;return a.createElement(L,null,t.map(((e,t)=>a.createElement(q,(0,C.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(O),j="menu_rcZM",Y="menuWithAnnouncementBar_WZ7q";function G(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",j,c&&Y,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const K="sidebar_gDRw",X="sidebarWithHideableNavbar_p4le",Q="sidebarHidden_eeUv",$="sidebarLogo_OBTr";function ee(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(K,c&&X,r&&Q)},c&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(G,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:o}))}const te=a.memo(ee);var ne=n(8851),ae=n(4097);const le=e=>{let{sidebar:t,path:n}=e;const o=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function oe(e){return a.createElement(ne.Zo,{component:le,props:e})}const re=a.memo(oe);function ce(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(re,e))}const ie="expandButton_HgW5",se="expandButtonIcon_NOV5";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(N,{className:se}))}const me="docSidebarContainer_obPh",ue="docSidebarContainerHidden_j3nB";function be(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(de,{toggleSidebar:d}))}const he={docMainContainer:"docMainContainer_eJ5L",docMainContainerEnhanced:"docMainContainerEnhanced_itza",docItemWrapperEnhanced:"docItemWrapperEnhanced_psJ9"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!o)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const fe="docPage_Znsi",ge="docsWrapper_xjao";function ve(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(5477),ke=n(666);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ne(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ve,null,c)))))}},5477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),l=n(7775),o=n(5310),r=n(3590);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},964:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(9496),l=n(2719);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);