(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[136],{3365:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=t(2122),i=t(9756),r=(t(7294),t(3905)),a={id:"collect-fees",title:"Collecting Fees",sidebar_position:3},s=void 0,l={unversionedId:"guides/providing-liquidity/collect-fees",id:"version-V3/guides/providing-liquidity/collect-fees",isDocsHomePage:!1,title:"Collecting Fees",description:"Collect Fees",source:"@site/versioned_docs/version-V3/guides/providing-liquidity/collect-fees.md",sourceDirName:"guides/providing-liquidity",slug:"/guides/providing-liquidity/collect-fees",permalink:"/protocol/guides/providing-liquidity/collect-fees",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/guides/providing-liquidity/collect-fees.md",version:"V3",sidebarPosition:3,frontMatter:{id:"collect-fees",title:"Collecting Fees",sidebar_position:3},sidebar:"version-V3/mySidebar",previous:{title:"Mint a New Position",permalink:"/protocol/guides/providing-liquidity/mint-a-position"},next:{title:"Decrease Liquidity",permalink:"/protocol/guides/providing-liquidity/decrease-liquidity"}},c=[{value:"Collect Fees",id:"collect-fees",children:[]},{value:"Sending Fees To The Calling Address",id:"sending-fees-to-the-calling-address",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"collect-fees"},"Collect Fees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure to go through the ",(0,r.kt)("a",{parentName:"p",href:"/protocol/guides/providing-liquidity/setting-up"},"first guide")," before continuing to this section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For each of these liquidity interaction examples, our contract must be in possession of the liquidity position NFT. Therefore, in any example where the NFT deposit is not coded into a function, the contract is assumed to already be in possession of it."))),(0,r.kt)("p",null,"To collect the fees of an owner position, transfer the NFT from the calling address, assign the relevant variables from the NFT to local variables within our function, and pass those variables to the",(0,r.kt)("inlineCode",{parentName:"p"},"nonfungiblePositionManager")," to call ",(0,r.kt)("inlineCode",{parentName:"p"},"collect"),"."),(0,r.kt)("p",null,"This function collects all fees, sending them to the original owner of the NFT, while maintaining custody of the position NFT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice Collects the fees associated with provided liquidity\n    /// @dev The contract must hold the erc721 token before it can collect fees\n    /// @param tokenId The id of the erc721 token\n    /// @return amount0 The amount of fees collected in token0\n    /// @return amount1 The amount of fees collected in token1\n    function collectAllFees(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {\n        // Caller must own the ERC721 position\n        // Call to safeTransfer will trigger `onERC721Received` which must return the selector else transfer will fail\n        nonfungiblePositionManager.safeTransferFrom(msg.sender, address(this), tokenId);\n\n        // set amount0Max and amount1Max to uint256.max to collect all fees\n        // alternatively can set recipient to msg.sender and avoid another transaction in `sendToOwner`\n        INonfungiblePositionManager.CollectParams memory params =\n            INonfungiblePositionManager.CollectParams({\n                tokenId: tokenId,\n                recipient: address(this),\n                amount0Max: type(uint128).max,\n                amount1Max: type(uint128).max\n            });\n\n        (amount0, amount1) = nonfungiblePositionManager.collect(params);\n\n        // send collected feed back to owner\n        _sendToOwner(tokenId, amount0, amount1);\n    }\n")),(0,r.kt)("h2",{id:"sending-fees-to-the-calling-address"},"Sending Fees To The Calling Address"),(0,r.kt)("p",null,"This internal helper function sends any tokens, in the form of fees or position tokens, to the owner of an NFT."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"_sendToOwner"),", we pass the amount of fees due, previously populated in the last function, as arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"safeTransfer"),", which transfers the fees to ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice Transfers funds to owner of NFT\n    /// @param tokenId The id of the erc721\n    /// @param amount0 The amount of token0\n    /// @param amount1 The amount of token1\n    function _sendToOwner(\n        uint256 tokenId,\n        uint256 amount0,\n        uint256 amount1\n    ) internal {\n        // get owner of contract\n        address owner = deposits[tokenId].owner;\n\n        address token0 = deposits[tokenId].token0;\n        address token1 = deposits[tokenId].token1;\n        // send collected fees to owner\n        TransferHelper.safeTransfer(token0, owner, amount0);\n        TransferHelper.safeTransfer(token1, owner, amount1);\n    }\n")))}d.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);