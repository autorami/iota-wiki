"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5475],{92287:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c=["components"],i={},u="The `_default` contract",l={unversionedId:"contract_core/default",id:"contract_core/default",isDocsHomePage:!1,title:"The `_default` contract",description:"The _default contract is one of the core contracts on each ISCP",source:"@site/external/wasp/documentation/docs/contract_core/default.md",sourceDirName:"contract_core",slug:"/contract_core/default",permalink:"/wasp/contract_core/default",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `root` contract",permalink:"/wasp/contract_core/root"},next:{title:"The `accounts` contract",permalink:"/wasp/contract_core/accounts"}},p=[],f={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-_default-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"_default")," contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"_default")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/wasp/contract_core/overview"},"core contracts")," on each ISCP\nchain."),(0,a.kt)("p",null,"The function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"_default")," contract is to provide a fall-back target for any\nrequest that cannot be handled by the chain or contract it was addressed to."),(0,a.kt)("p",null,"It provides no entry points but scoops up any tokens that were passed as part of\nthe request and returns them to the caller (minus fees)."))}s.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);