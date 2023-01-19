"use strict";(self.webpackChunk_innocces_st=self.webpackChunk_innocces_st||[]).push([[1010],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var a=i(9496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(i),m=r,k=c["".concat(p,".").concat(m)]||c[m]||g[m]||n;return i?a.createElement(k,l(l({ref:t},u),{},{components:i})):a.createElement(k,l({ref:t},u))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<n;o++)l[o]=i[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2478:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var a=i(5882),r=(i(9496),i(9613));const n={slug:"2023-01-19110324",title:"2023-01-19 Design System\u3001Tailwind Rust RegExp\u3001CSS Fallbacks for WebP background images with @supports\u3001use querySelectorAll() with wildcards\u3001Optimizing resource loading with Priority Hints\u3001Painter\u3001vite-plugin-legacy-qiankun",authors:["innocces"],tags:["Design System","Tailwind Rust RegExp","CSS Fallbacks for WebP background images with @supports","use querySelectorAll() with wildcards","Optimizing resource loading with Priority Hints","Painter","vite-plugin-legacy-qiankun"]},l=void 0,s={permalink:"/st/2023-01-19110324",editUrl:"https://github.com/innocces/st/tree/main/blog/2023-01-19110324.md",source:"@site/blog/2023-01-19110324.md",title:"2023-01-19 Design System\u3001Tailwind Rust RegExp\u3001CSS Fallbacks for WebP background images with @supports\u3001use querySelectorAll() with wildcards\u3001Optimizing resource loading with Priority Hints\u3001Painter\u3001vite-plugin-legacy-qiankun",description:"\u6574\u5408\u6765\u6e90\u5305\u542b \u54b2\u5948\u7684\u5e73\u884c\u65f6\u7a7a\u3001 \u5404\u79cd\u524d\u7aef\u8bba\u575b\u4ee5\u53ca\u5439\u6c34\u7fa4",date:"2023-01-19T00:00:00.000Z",formattedDate:"2023\u5e741\u670819\u65e5",tags:[{label:"Design System",permalink:"/st/tags/design-system"},{label:"Tailwind Rust RegExp",permalink:"/st/tags/tailwind-rust-reg-exp"},{label:"CSS Fallbacks for WebP background images with @supports",permalink:"/st/tags/css-fallbacks-for-web-p-background-images-with-supports"},{label:"use querySelectorAll() with wildcards",permalink:"/st/tags/use-query-selector-all-with-wildcards"},{label:"Optimizing resource loading with Priority Hints",permalink:"/st/tags/optimizing-resource-loading-with-priority-hints"},{label:"Painter",permalink:"/st/tags/painter"},{label:"vite-plugin-legacy-qiankun",permalink:"/st/tags/vite-plugin-legacy-qiankun"}],readingTime:2.21,hasTruncateMarker:!1,authors:[{name:"innocces",title:"(:\u0437\u300d\u2220) art designer ---- ajiang",url:"https://github.com/innocces",imageURL:"https://github.com/innocces.png",key:"innocces"}],frontMatter:{slug:"2023-01-19110324",title:"2023-01-19 Design System\u3001Tailwind Rust RegExp\u3001CSS Fallbacks for WebP background images with @supports\u3001use querySelectorAll() with wildcards\u3001Optimizing resource loading with Priority Hints\u3001Painter\u3001vite-plugin-legacy-qiankun",authors:["innocces"],tags:["Design System","Tailwind Rust RegExp","CSS Fallbacks for WebP background images with @supports","use querySelectorAll() with wildcards","Optimizing resource loading with Priority Hints","Painter","vite-plugin-legacy-qiankun"]},nextItem:{title:"2023-01-09 BarcodeDetector\u3001JavaScript Rising Stars\u3001Qwik blog\u3001ReactNative V0.71.0\u3001proxy-memoize V2.0\u3001Zustand vs. Signals",permalink:"/st/2023-01-09104828"}},p={authorsImageUrls:[void 0]},o=[{value:"Design System",id:"design-system",level:2},{value:"Tailwind Rust RegExp",id:"tailwind-rust-regexp",level:2},{value:"CSS Fallbacks for WebP background images with @supports",id:"css-fallbacks-for-webp-background-images-with-supports",level:2},{value:"use querySelectorAll() with wildcards",id:"use-queryselectorall-with-wildcards",level:2},{value:"Optimizing resource loading with Priority Hints",id:"optimizing-resource-loading-with-priority-hints",level:2},{value:"Painter",id:"painter",level:2},{value:"vite-plugin-legacy-qiankun",id:"vite-plugin-legacy-qiankun",level:2},{value:"\u5e38\u7528\u7f51\u7ad9\u63a8\u8350",id:"\u5e38\u7528\u7f51\u7ad9\u63a8\u8350",level:2}],u={toc:o};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6574\u5408\u6765\u6e90\u5305\u542b ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/SakinaSpace"},"\u54b2\u5948\u7684\u5e73\u884c\u65f6\u7a7a"),"\u3001 \u5404\u79cd\u524d\u7aef\u8bba\u575b\u4ee5\u53ca\u5439\u6c34\u7fa4")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674097153747-2023.webp",alt:"blog pic"})),(0,r.kt)("p",null,"\u6458\u8981"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Design System")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tailwind Rust RegExp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSS Fallbacks for WebP background images with @supports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use querySelectorAll() with wildcards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optimizing resource loading with Priority Hints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Painter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"vite-plugin-legacy-qiankun"))),(0,r.kt)("h2",{id:"design-system"},"Design System"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.figma.com/community/file/1194699559909576628?ref=designerdailyreport.com"},"Design System blog")),(0,r.kt)("p",null,"![Design System PIC]","(",(0,r.kt)("a",{parentName:"p",href:"https://blog-pic.deno.dev/2023-01-19/1674060267058-Design"},"https://blog-pic.deno.dev/2023-01-19/1674060267058-Design")," System.png)"),(0,r.kt)("p",null,"Design System \u2013 Figma UI kit with dashboard templates"),(0,r.kt)("h2",{id:"tailwind-rust-regexp"},"Tailwind Rust RegExp"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674060629066-tailwind-rust.jpeg",alt:"Tailwind Rust RegExp PIC"})),(0,r.kt)("p",null,"tailwind \u7684 \u4f5c\u8005\u516c\u5e03\u4e86\u90e8\u5206\u5b9e\u9a8c\u6027\u7684\u4f7f\u7528 rust \u91cd\u5199\u7684 tailwind \u7684 benchmark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"We've been exploring rewriting the code that scans all of your templates for Tailwind classes in Rust for better performance \u2014 fun to benchmark.\n\nStill no idea what I'm doing so lots of room for improvement I'm sure, but this is extracting classes from 250 template files\n")),(0,r.kt)("h2",{id:"css-fallbacks-for-webp-background-images-with-supports"},"CSS Fallbacks for WebP background images with @supports"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.js-craft.io/blog/css-fallbacks-for-webp-background-images-with-supports/"},"CSS Fallbacks for WebP background images with @supports Blog")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674061291274-supports.png",alt:"CSS Fallbacks for WebP background images with @supports PIC"})),(0,r.kt)("p",null,"=.- \u652f\u6301\u7684\u6d4f\u89c8\u5668\u76f4\u63a5 @supports. \u4e0d\u652f\u6301\u7684\u53ef\u4ee5 multibackground urls"),(0,r.kt)("h2",{id:"use-queryselectorall-with-wildcards"},"use querySelectorAll() with wildcards"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.js-craft.io/blog/javascript-use-queryselectorall-with-wildcards/"},"use querySelectorAll() with wildcards blog")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674061695278-querySelectorAll.png",alt:"use querySelectorAll() with wildcards PIC"})),(0,r.kt)("p",null,"CSS \u9009\u62e9\u5668\u6c34\u771f\u7684\u5f88\u6df1"),(0,r.kt)("h2",{id:"optimizing-resource-loading-with-priority-hints"},"Optimizing resource loading with Priority Hints"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.dev/priority-hints/"},"Optimizing resource loading with Priority Hints blog")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674094650643-priority.avif",alt:"Optimizing resource loading with Priority Hints PIC"})),(0,r.kt)("p",null,"Priority Hints indicate the relative priority of resources to the browser. They can enable optimal loading and improve Core Web Vitals."),(0,r.kt)("p",null,"A few key areas where Priority Hints can help:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boost the priority of the LCP image by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},'fetchpriority="high"')," on the image element, causing LCP to happen sooner."),(0,r.kt)("li",{parentName:"ul"},"Increase the priority of async scripts using better semantics than the current hack that is commonly used (inserting a ",(0,r.kt)("inlineCode",{parentName:"li"},'<link rel="preload">')," for the async script)."),(0,r.kt)("li",{parentName:"ul"},"Decrease the priority of late-body scripts to allow for better sequencing with images.")),(0,r.kt)("p",null,"\u9996\u5c4f\u4e3b\u56fe\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},'fetchpriority="high"')," \u6765\u63d0\u5347 LCP",(0,r.kt)("br",{parentName:"p"}),"\n","\u811a\u672c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"preload")),(0,r.kt)("h2",{id:"painter"},"Painter"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7187787634779881509"},"Painter juejin")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674095318258-painter.awebp",alt:"Painter"})),(0,r.kt)("p",null,"\u9898\u4e3b\u4ece\u66ff\u6362\u7684\u601d\u8def\u548c\u6392\u67e5\u95ee\u9898\u7684\u65b9\u5f0f\u5199\u7684\u975e\u5e38\u8be6\u7ec6"),(0,r.kt)("h2",{id:"vite-plugin-legacy-qiankun"},"vite-plugin-legacy-qiankun"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7189117358697349178"},"vite-plugin-legacy-qiankun juejin"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lishaobos/vite-plugin-legacy-qiankun"},"vite-plugin-legacy-qiankun github")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog-pic.deno.dev/2023-01-19/1674096307651-vite-qiankun.png",alt:"vite-plugin-legacy-qiankun PIC"})),(0,r.kt)("p",null,"\u5728\u4e0d\u7834\u574f qiankun \u673a\u5236\u7684\u57fa\u7840\u4e0a, \u652f\u6301\u4f7f\u7528 vite \u5f00\u53d1. \u751f\u4ea7\u6253\u5305\u4f9d\u7136\u4f7f\u7528 webpack"),(0,r.kt)("p",null,"\u5176\u4ed6\u65b9\u6848:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/micro-fe-solution/vite-qiankun-starter"},"vite-qiankun-starter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tengmaoqing/vite-plugin-qiankun"},"vite-plugin-qiankun"))),(0,r.kt)("h2",{id:"\u5e38\u7528\u7f51\u7ad9\u63a8\u8350"},"\u5e38\u7528\u7f51\u7ad9\u63a8\u8350"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://dev.to/"},"DEV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/?tag=javascript"},"Medium"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/"},"Stackoverflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.v2ex.com/"},"V2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/discussions?category=developers"},"Producthunt")))))}c.isMDXComponent=!0}}]);