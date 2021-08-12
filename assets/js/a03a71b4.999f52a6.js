"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2868],{94500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l=["components"],o={},s="\ud83d\uddd3\ufe0f 14-07-2021 Team Identity: Async Meeting Notes",u={unversionedId:"meeting-notes/2021-07-14",id:"meeting-notes/2021-07-14",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f 14-07-2021 Team Identity: Async Meeting Notes",description:"tags: IOTA Identity Meeting Docs",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2021-07-14.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2021-07-14",permalink:"/identity.rs/meeting-notes/2021-07-14",version:"current",frontMatter:{}},p=[{value:"\u2139\ufe0f Info",id:"\ufe0f-info",children:[]},{value:"\ud83d\udc65 Participants",id:"-participants",children:[{value:"\u23ea What did you achieve last week?",id:"-what-did-you-achieve-last-week",children:[]},{value:"What did block you?",id:"what-did-block-you",children:[]},{value:"\u23e9 What will be the focus this week?",id:"-what-will-be-the-focus-this-week",children:[]}]},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[]},{value:"Circular Dependency (Preserve Order)",id:"circular-dependency-preserve-order",children:[]},{value:"Slow Debug version",id:"slow-debug-version",children:[]},{value:"publicKeyJwk",id:"publickeyjwk",children:[]},{value:"Error handling - Nested Enums",id:"error-handling---nested-enums",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-14-07-2021-team-identity-async-meeting-notes"},"\ud83d\uddd3\ufe0f 14-07-2021 Team Identity: Async Meeting Notes"),(0,a.kt)("h6",{id:"tags-iota-identity-meeting-docs"},"tags: ",(0,a.kt)("inlineCode",{parentName:"h6"},"IOTA Identity")," ",(0,a.kt)("inlineCode",{parentName:"h6"},"Meeting")," ",(0,a.kt)("inlineCode",{parentName:"h6"},"Docs")),(0,a.kt)("h2",{id:"\ufe0f-info"},"\u2139\ufe0f Info"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location"),": Google Hangouts\n",(0,a.kt)("strong",{parentName:"p"},"Date"),": Wednesday, 14-07-2021 - 17:00 to 18:00 (Berlin)\n",(0,a.kt)("strong",{parentName:"p"},"Agenda")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Standup ",(0,a.kt)("inlineCode",{parentName:"li"},"15min")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Discussion topics ",(0,a.kt)("inlineCode",{parentName:"li"},"45min"))))),(0,a.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,a.kt)("li",{parentName:"ul"},"@PhilippGackstatter"),(0,a.kt)("li",{parentName:"ul"},"@eike-hass"),(0,a.kt)("li",{parentName:"ul"},"@abdulmth"),(0,a.kt)("li",{parentName:"ul"},"@CraigBester"),(0,a.kt)("li",{parentName:"ul"},"@l1h3r")),(0,a.kt)("h3",{id:"-what-did-you-achieve-last-week"},"\u23ea What did you achieve last week?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@JelleMillenaar: Opened Issues, Kanban boards, new projects, presentations, Identity for Things hardware"),(0,a.kt)("li",{parentName:"ul"},"@eike-hass: Small discussion with @abdulmth about docusaurus/REPL integration"),(0,a.kt)("li",{parentName:"ul"},"@CraigBester: added ",(0,a.kt)("inlineCode",{parentName:"li"},"publicKeyMultibase")," support, investigating slow examples/tests, reading standards."),(0,a.kt)("li",{parentName:"ul"},"@abdulmth: WASM Browser Examples, Docusaurus Example integration, Learning about identity standards. "),(0,a.kt)("li",{parentName:"ul"},"@PhilippGackstatter: Impl async methods for the identity actor, get actor to compile to Wasm"),(0,a.kt)("li",{parentName:"ul"},"@l1h3r: Clean up examples, Refactor DID chains")),(0,a.kt)("h3",{id:"what-did-block-you"},"What did block you?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@PhilippGackstatter: Errors aren't serializable, that's an issue for both networking and FFI, wasm-bindgen snippets don't (yet) work with nodejs :( making libp2p websocket transport unavailable there"),(0,a.kt)("li",{parentName:"ul"},"@CraigBester: circular dependency when updating iota.rs (iota-client) package, low-level examples throwing network errors after update"),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h3",{id:"-what-will-be-the-focus-this-week"},"\u23e9 What will be the focus this week?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@abdulmth: documentaion migration to docusaurus. "),(0,a.kt)("li",{parentName:"ul"},"@PhilippGackstatter: Get a Wasm PoC working for the identity actor"),(0,a.kt)("li",{parentName:"ul"},"@l1h3r: Finish refactoring DID chains, add account WASM bindings"),(0,a.kt)("li",{parentName:"ul"},"@JelleMillenaar: Finish planning 1.0, hardware, ZKP, Streams sync"),(0,a.kt)("li",{parentName:"ul"},"@CraigBester: investigate/fix slow examples/tests issues, start implementing ",(0,a.kt)("inlineCode",{parentName:"li"},"publicKeyJwk")," afterwards"),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@PhilippGackstatter: Error handling for the actor and FFI & Actor handler API"),(0,a.kt)("li",{parentName:"ul"},"@eike-hass: example snippets workflow / expectations"),(0,a.kt)("li",{parentName:"ul"},"@JelleMillenaar: IOTA Identity on IoT Hardware (ST, Intel, RFID) - C-bindings"),(0,a.kt)("li",{parentName:"ul"},"PublickeyBase58 removal / publicKeyJwk? ")),(0,a.kt)("h2",{id:"circular-dependency-preserve-order"},"Circular Dependency (Preserve Order)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shared dependency with Identity"),(0,a.kt)("li",{parentName:"ul"},"Either serde_json & wasm-bindgen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/crypto.rs/pull/94"},"https://github.com/iotaledger/crypto.rs/pull/94")," Root of the problem?")),(0,a.kt)("h2",{id:"slow-debug-version"},"Slow Debug version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WASM unaffected atm"),(0,a.kt)("li",{parentName:"ul"},"Devin Link issue:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},(0,a.kt)("a",{parentName:"del",href:"https://github.com/iotaledger/iota.rs/pull/480"},"https://github.com/iotaledger/iota.rs/pull/480"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs/pull/586"},"permanode support"))))),(0,a.kt)("h2",{id:"publickeyjwk"},"publicKeyJwk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSON web signatures - Normalization non - JSON-LD")),(0,a.kt)("h2",{id:"error-handling---nested-enums"},"Error handling - Nested Enums"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only C-style enums possible with FFI"),(0,a.kt)("li",{parentName:"ul"},"Needs to be serializable "),(0,a.kt)("li",{parentName:"ul"},"Struct with ErrorCodes linked to String descriptions"),(0,a.kt)("li",{parentName:"ul"},"2 integers (Inner and outer) + Descriptions")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);