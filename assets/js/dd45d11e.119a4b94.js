"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3732],{96403:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={},s="Welcome",c={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"Welcome",description:"This is the documentation for the official IOTA Wallet Library Software. The documentation can be used to easily integrate an IOTA Wallet into your applications. You can read more about core principles behind IOTA client libraries in the following blog post.",source:"@site/external/wallet.rs/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/wallet.rs/welcome",version:"current",frontMatter:{},sidebar:"docs",next:{title:"Overview",permalink:"/wallet.rs/overview"}},p=[{value:"IOTA 1.5 (Chrysalis) in a Nutshell",id:"iota-15-chrysalis-in-a-nutshell",children:[]},{value:"Testnet",id:"testnet",children:[]},{value:"Joining the Discussion",id:"joining-the-discussion",children:[]},{value:"What You Will Find Here",id:"what-you-will-find-here",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"This is the documentation for the official IOTA Wallet Library Software. The documentation can be used to easily integrate an IOTA Wallet into your applications. You can read more about core principles behind IOTA client libraries in the following ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"blog post"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," is a general wallet library written in Rust. It is being utilized by our wallet software ",(0,o.kt)("inlineCode",{parentName:"p"},"Firefly")," and other software components across IOTA ecosystem. ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," contains all the logic to safely build wallets or integrations that require value-based transfers (such as exchanges, pay-as-you-go systems, etc.). ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," includes account state management and backup, account creation, transferring tokens and much more. Needless to say, it is also based on our official ",(0,o.kt)("em",{parentName:"p"},"one-source-code-of-truth")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library")," and can be integrated with the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-6ce55d311d7c/"},"Stronghold enclave")," to achieve a maximum level of security."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use Stronghold to store account data of the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs"),". It integrates the best security practices and is open-source."))),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, developers do not need to use a self-generated seed anymore. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," will create and store the encrypted seed at rest. It is not possible to extract the seed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," for security purposes. ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots are further secured with a password."),(0,o.kt)("h2",{id:"iota-15-chrysalis-in-a-nutshell"},"IOTA 1.5 (Chrysalis) in a Nutshell"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/dev_guide"},"Developer Guide to Chrysalis")," explains all the main concepts behind the IOTA Chrysalis in detail ."),(0,o.kt)("p",null,"Please, see a summary of changes in comparison to IOTA 1.0 at ",(0,o.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides"},"Chrysalis documentation"),"."),(0,o.kt)("h2",{id:"testnet"},"Testnet"),(0,o.kt)("p",null,"To join the Chrysalis public testnet checkout this ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-phase-2-testnet-out-now/"},"blog post"),". More information about Chrysalis components is available at the ",(0,o.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/"},"Chrysalis documentation portal"),"."),(0,o.kt)("h2",{id:"joining-the-discussion"},"Joining the Discussion"),(0,o.kt)("p",null,"If you want to get involved in discussions about this library, or you're looking for support, go to the #clients-discussion channel on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord"),"."),(0,o.kt)("h2",{id:"what-you-will-find-here"},"What You Will Find Here"),(0,o.kt)("p",null,"This documentation has four paths:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/overview"},"Overview"),": a detailed overview of the wallet library. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/libraries/overview"},"Libraries"),": all available programming languages and their resources."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/specification"},"Specification"),": a detailed explanation requirements and functionality."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/contribute"},"Contribute"),": how you can work on the wallet software, get in touch, join the community and become part of the X-Team!")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);