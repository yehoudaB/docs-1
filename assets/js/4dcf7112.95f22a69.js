(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3772],{339:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={},l=void 0,c={unversionedId:"reference/core/interfaces/callback/IUniswapV3MintCallback",id:"version-V3/reference/core/interfaces/callback/IUniswapV3MintCallback",isDocsHomePage:!1,title:"IUniswapV3MintCallback",description:"Any contract that calls IUniswapV3PoolActions#mint must implement this interface",source:"@site/versioned_docs/version-V3/reference/core/interfaces/callback/IUniswapV3MintCallback.md",sourceDirName:"reference/core/interfaces/callback",slug:"/reference/core/interfaces/callback/IUniswapV3MintCallback",permalink:"/protocol/reference/core/interfaces/callback/IUniswapV3MintCallback",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/core/interfaces/callback/IUniswapV3MintCallback.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"IUniswapV3FlashCallback",permalink:"/protocol/reference/core/interfaces/callback/IUniswapV3FlashCallback"},next:{title:"IUniswapV3SwapCallback",permalink:"/protocol/reference/core/interfaces/callback/IUniswapV3SwapCallback"}},p=[{value:"Functions",id:"functions",children:[{value:"uniswapV3MintCallback",id:"uniswapv3mintcallback",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Any contract that calls IUniswapV3PoolActions#mint must implement this interface"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"uniswapv3mintcallback"},"uniswapV3MintCallback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3MintCallback(\n    uint256 amount0Owed,\n    uint256 amount1Owed,\n    bytes data\n  ) external\n")),(0,i.kt)("p",null,"Called to ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," after minting liquidity to a position from IUniswapV3Pool#mint."),(0,i.kt)("p",null,"In the implementation you must pay the pool tokens owed for the minted liquidity.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount0Owed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 due to the pool for the minted liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount1Owed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 due to the pool for the minted liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#mint call")))))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);