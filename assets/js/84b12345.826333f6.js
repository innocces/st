"use strict";(self.webpackChunk_innocces_st=self.webpackChunk_innocces_st||[]).push([[4156],{7045:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var o=n(9496),a=n(4637),l=n.n(a),r=n(5634),i=n(589);const c=[{dependencies:[i.HorizontalRuleNode],export:e=>(0,i.$isHorizontalRuleNode)(e)?"***":null,regExp:/^(---|\*\*\*|___)\s?$/,replace:(e,t,n,o)=>{const a=(0,i.$createHorizontalRuleNode)();o||null!=e.getNextSibling()?e.replace(a):e.insertBefore(a),a.selectNext()},type:"element"},...r.ELEMENT_TRANSFORMERS,...r.TEXT_FORMAT_TRANSFORMERS,...r.TEXT_MATCH_TRANSFORMERS];var s=n(7685),d=n(1050),u=n(2163),m=n(5647),g=n(662),h=n(1019),p=n(1248),E=n.n(p),b=n(584),f=n(8021),N=n(8703),k=n(6344),C=n(3357),x=n(3801),w=n(5355),S=n(179),y=n(3700),v=n(1314),M=n(6464),T=n(6828),R=n(7995),$=n(9510),O=n(8342),_=n(5288),L=n(3774);const A={paragraph:{text:"Normal",icon:o.createElement(O.Zqz,null),handler:()=>(0,v.$createParagraphNode)()},quote:{text:"Quote",icon:o.createElement(O.VvY,null),handler:()=>(0,b.$createQuoteNode)()},code:{text:"Code Block",icon:o.createElement(O.vcz,null),handler:()=>(0,k.$createCodeNode)()},h1:{text:"Large Heading",icon:o.createElement(_.biO,null),handler:()=>(0,b.$createHeadingNode)("h1")},h2:{text:"Small Heading",icon:o.createElement(_.fr8,null),handler:()=>(0,b.$createHeadingNode)("h2")},ul:{text:"Bullet List",icon:o.createElement($.t5C,null),handler:e=>e.dispatchCommand(N.INSERT_UNORDERED_LIST_COMMAND),unHandler:e=>e.dispatchCommand(N.REMOVE_LIST_COMMAND)},ol:{text:"Numbered List",icon:o.createElement($.Bxc,null),handler:e=>e.dispatchCommand(N.INSERT_ORDERED_LIST_COMMAND),unHandler:e=>e.dispatchCommand(N.REMOVE_LIST_COMMAND)}},D={link:{icon:o.createElement($.uFt,null)},code:{icon:o.createElement(O.vcz,null),onClick:e=>e.dispatchCommand(v.FORMAT_TEXT_COMMAND,"code")},strikethrough:{icon:o.createElement($.eFW,null),onClick:e=>e.dispatchCommand(v.FORMAT_TEXT_COMMAND,"strikethrough")},underline:{icon:o.createElement($.bbH,null),onClick:e=>e.dispatchCommand(v.FORMAT_TEXT_COMMAND,"underline")},italic:{icon:o.createElement($.ld6,null),onClick:e=>e.dispatchCommand(v.FORMAT_TEXT_COMMAND,"italic")},bold:{icon:o.createElement($.DPm,null),onClick:e=>e.dispatchCommand(v.FORMAT_TEXT_COMMAND,"bold")}},F=new Set(Object.keys(A));function P(e,t){null===t?(e.style.opacity="0",e.style.top="-1000px",e.style.left="-1000px"):(e.style.opacity="1",e.style.top=`${t.top+t.height+window.pageYOffset+10}px`,e.style.left=t.left+window.pageXOffset-e.offsetWidth/2+t.width/2+"px")}function H(e){let{editor:t}=e;const n=(0,o.useRef)(null),a=(0,o.useRef)(null),l=(0,o.useRef)(!1),[r,i]=(0,o.useState)(""),[c,s]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null),m=(0,o.useCallback)((()=>{const e=(0,v.$getSelection)();if((0,v.$isRangeSelection)(e)){const t=B(e),n=t.getParent();(0,C.$isLinkNode)(n)?i(n.getURL()):(0,C.$isLinkNode)(t)?i(t.getURL()):i("")}const o=n.current,a=window.getSelection(),r=document.activeElement;if(null===o)return;const c=t.getRootElement();if(null!==e&&!a.isCollapsed&&null!==c&&c.contains(a.anchorNode)){const t=a.getRangeAt(0);let n;if(a.anchorNode===c){let e=c;for(;null!=e.firstElementChild;)e=e.firstElementChild;n=e.getBoundingClientRect()}else n=t.getBoundingClientRect();l.current||P(o,n),u(e)}else r&&"link-input"===r.className||(P(o,null),u(null),s(!1),i(""));return!0}),[t]);return(0,o.useEffect)((()=>(0,T.mergeRegister)(t.registerUpdateListener((e=>{let{editorState:t}=e;t.read((()=>{m()}))})),t.registerCommand(v.SELECTION_CHANGE_COMMAND,(()=>(m(),!0)),1))),[t,m]),(0,o.useEffect)((()=>{t.getEditorState().read((()=>{m()}))}),[t,m]),(0,o.useEffect)((()=>{c&&a.current&&a.current.focus()}),[c]),o.createElement("div",{ref:n,className:"absolute bg-white shadow max-w-xs w-full rounded-lg px-3 py-2"},c?o.createElement("input",{ref:a,className:"block w-full px-3 py-2 bg-slate-400 text-base rounded-2xl relative  border-none outline-none",value:r,onChange:e=>{i(e.target.value)},onKeyDown:e=>{"Enter"===e.key?(e.preventDefault(),null!==d&&(""!==r&&t.dispatchCommand(C.TOGGLE_LINK_COMMAND,r),s(!1))):"Escape"===e.key&&(e.preventDefault(),s(!1))}}):o.createElement(o.Fragment,null,o.createElement("div",{className:"block w-full px-3 py-2 bg-slate-400 text-base rounded-2xl relative"},o.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},r),o.createElement("div",{className:"absolute right-0 top-0 bottom-0 cursor-pointer w-9 flex items-center justify-center",role:"button",tabIndex:0,onMouseDown:e=>e.preventDefault(),onClick:()=>{s(!0)}},o.createElement(L.zmo,null)))))}function I(e){let{onChange:t,className:n,options:a,value:l}=e;return o.createElement("select",{className:n,onChange:t,value:l},o.createElement("option",{hidden:!0,value:""}),a.map((e=>o.createElement("option",{key:e,value:e},e))))}function B(e){const t=e.anchor,n=e.focus,o=e.anchor.getNode(),a=e.focus.getNode();if(o===a)return o;return e.isBackward()?(0,M.$isAtNodeEnd)(n)?o:a:(0,M.$isAtNodeEnd)(t)?a:o}function Y(e){let{editor:t,blockType:n}=e;const a=(0,o.useMemo)((()=>A[n]),[n]);return o.createElement("div",{className:"dropdown dropdown--hoverable"},o.createElement("button",{className:"button button--secondary px-2 mr-4 flex items-center justify-between w-36","data-toggle":"dropdown"},o.createElement("span",{className:"flex-1 flex items-center whitespace-nowrap text-ellipsis overflow-hidden mr-1"},a.icon,o.createElement("span",{className:"ml-2"},a.text)),o.createElement(O.IAR,null)),o.createElement("ul",{className:"dropdown__menu"},Object.entries(A).map((e=>{let[a,{icon:l,text:r,handler:i,unHandler:c}]=e;return o.createElement("li",{key:a,className:"w-full"},o.createElement("button",{className:"button button--secondary bg-transparent w-full text-left border-none px-2 flex items-center hover:bg-slate-400 hover:text-white dark:text-white",onClick:()=>((e,o,a)=>{const l=["ul","ol"];n!==e?l.includes(e)?o?.(t):t.update((()=>{const e=(0,v.$getSelection)();(0,v.$isRangeSelection)(e)&&(0,M.$wrapNodes)(e,o)})):l.includes(e)&&a?.(t)})(a,i,c)},l,o.createElement("span",{className:"ml-2"},r)))}))))}function G(){const[e]=(0,y.useLexicalComposerContext)(),t=(0,o.useRef)(null),[n,a]=(0,o.useState)("paragraph"),[l,r]=(0,o.useState)(null),[i,c]=(0,o.useState)(""),[s,d]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),[g,h]=(0,o.useState)(!1),[p,E]=(0,o.useState)(!1),[f,x]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),M=(0,o.useCallback)((()=>{const t=(0,v.$getSelection)();if((0,v.$isRangeSelection)(t)){const n=t.anchor.getNode(),o="root"===n.getKey()?n:n.getTopLevelElementOrThrow(),l=o.getKey();if(null!==e.getElementByKey(l))if(r(l),(0,N.$isListNode)(o)){const e=(0,T.$getNearestNodeOfType)(n,N.ListNode),t=e?e.getTag():o.getTag();a(t)}else{const e=(0,b.$isHeadingNode)(o)?o.getTag():o.getType();a(e),(0,k.$isCodeNode)(o)&&c(o.getLanguage()||(0,k.getDefaultCodeLanguage)())}m(t.hasFormat("bold")),h(t.hasFormat("italic")),E(t.hasFormat("underline")),x(t.hasFormat("strikethrough")),S(t.hasFormat("code"));const i=B(t),s=i.getParent();(0,C.$isLinkNode)(s)||(0,C.$isLinkNode)(i)?d(!0):d(!1)}}),[e]);(0,o.useEffect)((()=>(0,T.mergeRegister)(e.registerUpdateListener((e=>{let{editorState:t}=e;t.read((()=>{M()}))})),e.registerCommand(v.SELECTION_CHANGE_COMMAND,((e,t)=>(M(),!1)),1))),[e,M]);const $=(0,o.useMemo)((()=>(0,k.getCodeLanguages)()),[]),O=(0,o.useCallback)((t=>{e.update((()=>{if(null!==l){const e=(0,v.$getNodeByKey)(l);(0,k.$isCodeNode)(e)&&e.setLanguage(t.target.value)}}))}),[e,l]),_=(0,o.useCallback)((()=>{s?e.dispatchCommand(C.TOGGLE_LINK_COMMAND,null):e.dispatchCommand(C.TOGGLE_LINK_COMMAND,"https://")}),[e,s]);return o.createElement("div",{className:"toolbar flex items-center p-4 shadow",ref:t},F.has(n)&&o.createElement(Y,{editor:e,blockType:n}),"code"===n?o.createElement(I,{className:"button button--outline button--secondary appearance-none",onChange:O,options:$,value:i}):o.createElement(o.Fragment,null,Object.entries(D).map((t=>{let[n,{icon:a,onClick:l}]=t;return o.createElement("button",{className:"button button--secondary px-2 mr-4 flex items-center",key:n,"aria-label":`Format ${n}`,onClick:()=>{"link"===n?_():l?.(e)}},a)})),s&&(0,R.createPortal)(o.createElement(H,{editor:e}),document.body)))}function V(){const[e]=(0,y.useLexicalComposerContext)(),t=(0,o.useCallback)((()=>{e.update((()=>{const e=(0,v.$getRoot)(),t=e.getFirstChild();if((0,k.$isCodeNode)(t)&&"markdown"===t.getLanguage())(0,r.$convertFromMarkdownString)(t.getTextContent(),c);else{const t=(0,r.$convertToMarkdownString)(c);e.clear().append((0,k.$createCodeNode)("markdown").append((0,v.$createTextNode)(t)))}e.selectEnd()}))}),[e]);return o.createElement("button",{className:"button button--primary text-2xl px-2 leading-6 absolute right-2 bottom-2",onClick:t,title:"Convert From Markdown","aria-label":"Convert from markdown"},o.createElement(_.aUD,null))}function z(){const[e]=(0,y.useLexicalComposerContext)();return(0,o.useEffect)((()=>(0,k.registerCodeHighlighting)(e)),[e]),null}const K={namespace:"blog editor",theme:{ltr:"ltr",rtl:"rtl",placeholder:"editor-placeholder",paragraph:"editor-paragraph",quote:"editor-quote",heading:{h1:"editor-heading-h1",h2:"editor-heading-h2",h3:"editor-heading-h3",h4:"editor-heading-h4",h5:"editor-heading-h5",h6:"editor-heading-h6"},list:{nested:{listitem:"editor-nested-listitem"},ol:"editor-list-ol",ul:"editor-list-ul",listitem:"editor-listitem"},image:"editor-image",link:"editor-link",text:{bold:"editor-text-bold",italic:"editor-text-italic",overflowed:"editor-text-overflowed",hashtag:"editor-text-hashtag",underline:"editor-text-underline",strikethrough:"editor-text-strikethrough",underlineStrikethrough:"editor-text-underlineStrikethrough",code:"editor-text-code"},code:"theme-code-block",codeHighlight:{atrule:"editor-tokenAttr",attr:"editor-tokenAttr",boolean:"editor-tokenProperty",builtin:"editor-tokenSelector",cdata:"editor-tokenComment",char:"editor-tokenSelector",class:"editor-tokenFunction","class-name":"editor-tokenFunction",comment:"editor-tokenComment",constant:"editor-tokenProperty",deleted:"editor-tokenProperty",doctype:"editor-tokenComment",entity:"editor-tokenOperator",function:"editor-tokenFunction",important:"editor-tokenVariable",inserted:"editor-tokenSelector",keyword:"editor-tokenAttr",namespace:"editor-tokenVariable",number:"editor-tokenProperty",operator:"editor-tokenOperator",prolog:"editor-tokenComment",property:"editor-tokenProperty",punctuation:"editor-tokenPunctuation",regex:"editor-tokenVariable",selector:"editor-tokenSelector",string:"editor-tokenSelector",symbol:"editor-tokenProperty",tag:"editor-tokenProperty",url:"editor-tokenOperator",variable:"editor-tokenVariable"}},onError(e){throw e},nodes:[b.HeadingNode,N.ListNode,N.ListItemNode,b.QuoteNode,k.CodeNode,k.CodeHighlightNode,f.TableNode,f.TableCellNode,f.TableRowNode,C.AutoLinkNode,C.LinkNode]};function X(){return o.createElement("div",{className:"absolute"},"Play around with the Markdown plugin...")}const j=function(e){let{onChange:t}=e;return o.createElement(d.LexicalComposer,{initialConfig:K},o.createElement("div",{className:"flex flex-col flex-1 w-full bg-white rounded shadow-md relative"},o.createElement(G,null),o.createElement("div",{className:"flex flex-1 w-full relative p-4"},o.createElement(u.RichTextPlugin,{contentEditable:o.createElement(m.ContentEditable,{className:"flex-1 outline-none"}),placeholder:o.createElement(X,null),ErrorBoundary:E()}),o.createElement(g.AutoFocusPlugin,null),o.createElement(h.OnChangePlugin,{onChange:t}),o.createElement(w.ListPlugin,null),o.createElement(x.LinkPlugin,null),o.createElement(S.MarkdownShortcutPlugin,{transformers:r.TRANSFORMERS}),o.createElement(z,null)),o.createElement(V,null)))};var U=n(8531),q=n(5924);const Q={api:"https://api.github.com",type:"github",name:"innocces/st",branch:"main",url:"https://github.com/innocces/st"},Z=()=>{const[e,t]=(0,o.useState)(l()().format("YYYY-MM-DD blog")),[n,a]=(0,o.useState)("news, fe"),[i,d]=(0,o.useState)(!1),[u,m]=(0,o.useState)(""),g=(0,o.useCallback)((e=>{e.read((()=>{m((0,r.$convertToMarkdownString)(c))}))}),[]),h=(0,o.useCallback)((async()=>{if(i)return;if(!e.length||!n.length||!u.length)return;d(!0);const t=l()().format("YYYY-MM-DDHHmmss"),o=`${`---\nslug: ${t}\ntitle: ${e}\nauthors: [innocces]\ntags: [${n}]\n---\n> \u6574\u5408\u6765\u6e90\u5305\u542b [\u54b2\u5948\u7684\u5e73\u884c\u65f6\u7a7a](https://t.me/SakinaSpace)\u3001 \u5404\u79cd\u524d\u7aef\u8bba\u575b\u4ee5\u53ca\u5439\u6c34\u7fa4`}\n\n${u}\n\n## \u5e38\u7528\u7f51\u7ad9\u63a8\u8350\n\n- [DEV](https://dev.to/)\n\n- [Medium](https://medium.com/?tag=javascript)\n\n- [Github](https://github.com/)\n\n- [Stackoverflow](https://stackoverflow.com/)\n\n- [V2](https://www.v2ex.com/)\n\n- [Producthunt](https://www.producthunt.com/discussions?category=developers)\n    `,a=localStorage.getItem("gh-token"),{api:r,type:c,name:s}=Q,m={content:(0,U.cv)(o),message:`blog(${t}.md): ${e} - [${n}]`},g=await fetch(`${r}/repos/${s}/contents/blog/${t}.md`,{method:"PUT",headers:{Authorization:`token ${a}`},body:JSON.stringify(m)}),h=await g.json();h.message?alert(h.message):alert("create success!"),d(!1)}),[u,e,n,i]);return o.createElement(s.Z,{title:"create blog",description:"create async blog to repo",wrapperClassName:"flex"},o.createElement("div",{className:"container flex flex-1 flex-col py-4"},o.createElement("input",{value:e,className:"border border-solid border-slate-400 px-4 outline-none h-10 rounded-md text-base mb-4",onChange:e=>t(e.target.value),placeholder:"please enter post title"}),o.createElement("input",{value:n,className:"border border-solid border-slate-400 px-4 outline-none h-10 rounded-md text-base mb-4",onChange:e=>a(e.target.value),placeholder:"please enter post tag, split with quate"}),o.createElement(j,{onChange:g}),o.createElement("div",{className:"text-center mt-4"},o.createElement("button",{className:(0,q.Z)("button button--primary",i&&"disabled"),onClick:h},"\u4fdd\u5b58"))))}}}]);