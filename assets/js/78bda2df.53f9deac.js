(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[176],{977:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"introduction",sidebar_position:1},s="The Uniswap V3 SDK",p={unversionedId:"introduction",id:"version-3.0.0/introduction",isDocsHomePage:!1,title:"The Uniswap V3 SDK",description:"Welcome to the Uniswap Protocol V3 SDK. Here you can find easily searchable references for the SDK. For deeper dives, we recommend referencing the SDK Github repo directly.",source:"@site/SDK_versioned_docs/version-3.0.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/sdk/introduction",version:"3.0.0",sidebarPosition:1,frontMatter:{id:"introduction",sidebar_position:1},sidebar:"version-V3/sdksidebar",next:{title:"Uniswap Subgraph Data",permalink:"/sdk/Subgraph data"}},c=[],u={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-uniswap-v3-sdk"},"The Uniswap V3 SDK"),(0,i.kt)("p",null,"Welcome to the Uniswap Protocol V3 SDK. Here you can find easily searchable references for the SDK. For deeper dives, we recommend referencing the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk"},(0,i.kt)("strong",{parentName:"a"},"SDK Github"))," repo directly."),(0,i.kt)("h1",{id:"alpha-software"},"Alpha software"),(0,i.kt)("p",null,"The latest version of the SDK is used in production in the Uniswap Interface,\nbut it is considered Alpha software and may contain bugs or change significantly between patch versions.\nIf you have questions about how to use the SDK, please reach out in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#dev-chat")," channel of the Discord.\nPull requests welcome!"),(0,i.kt)("h1",{id:"uniswap-v3-sdk"},"Uniswap V3 SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-v3-sdk"},(0,i.kt)("strong",{parentName:"a"},"V3 SDK Github Repo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-sdk-core"},(0,i.kt)("strong",{parentName:"a"},"SDK Core Github Repo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/v3-sdk"},(0,i.kt)("strong",{parentName:"a"},"SDK NPM Package")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3A%22Unit+Tests%22"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/Uniswap/uniswap-v3-sdk/workflows/Unit%20Tests/badge.svg",alt:"Unit Tests"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3ALint"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/Uniswap/uniswap-v3-sdk/workflows/Lint/badge.svg",alt:"Lint"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v3-sdk/v/latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@uniswap/v3-sdk/latest.svg",alt:"npm version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=@uniswap/v3-sdk@latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/bundlephobia/minzip/@uniswap/v3-sdk/latest.svg",alt:"npm bundle size (scoped version)"}))),(0,i.kt)("p",null,"loc"))}l.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);