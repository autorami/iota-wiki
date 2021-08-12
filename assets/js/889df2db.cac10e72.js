"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7605],{56571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={},s="Manual Peering",p={unversionedId:"tutorials/manual_peering",id:"tutorials/manual_peering",isDocsHomePage:!1,title:"Manual Peering",description:"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering. It can be an additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real world trust. Furthermore, it allows to operate nodes without exposing their IP address to the network.",source:"@site/external/goshimmer/documentation/docs/tutorials/manual_peering.md",sourceDirName:"tutorials",slug:"/tutorials/manual_peering",permalink:"/goshimmer/tutorials/manual_peering",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to create dApps",permalink:"/goshimmer/tutorials/dApp"},next:{title:"Create a static identity",permalink:"/goshimmer/tutorials/static_identity"}},c=[{value:"How Manual Peering Works",id:"how-manual-peering-works",children:[]},{value:"How to Set Known Peers via Config File",id:"how-to-set-known-peers-via-config-file",children:[{value:"Config Record Example",id:"config-record-example",children:[]},{value:"Config Record Description",id:"config-record-description",children:[]}]},{value:"How to manage Known Peers via web API",id:"how-to-manage-known-peers-via-web-api",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manual-peering"},"Manual Peering"),(0,a.kt)("p",null,"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering. It can be an additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real world trust. Furthermore, it allows to operate nodes without exposing their IP address to the network.\nThere are two ways to configure the list of known peers of the node:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add known peers using the JSON config file"),(0,a.kt)("li",{parentName:"ol"},"Add/View/Delete via the web API of the node")),(0,a.kt)("h2",{id:"how-manual-peering-works"},"How Manual Peering Works"),(0,a.kt)("p",null,"When the user provides the list of known peers, which looks like a list of IP addresses with ports and public keys of peers,\nthe node remembers it and starts a background process that is trying to connect with every peer from the list. To establish\nthe connection with a peer, the other peer should have our local peer in its list of known peers. So the condition for\npeers to connect is that they should have each other in their known peers lists. In case of network failure the node\nwill keep reconnecting with known peers until it succeeds."),(0,a.kt)("p",null,"In other words, the only thing that users have to do to be connected via manual peering is to\nexchange their IP address with port and public key and set that information to known peers of their nodes and machines will do the rest."),(0,a.kt)("h2",{id:"how-to-set-known-peers-via-config-file"},"How to Set Known Peers via Config File"),(0,a.kt)("p",null,"Add the following record to the root of your JSON config file that you are using to run the node."),(0,a.kt)("h3",{id:"config-record-example"},"Config Record Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manualPeering": {\n    "knownPeers": "[{\\"publicKey\\": \\"CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3\\", \\"address\\": \\"127.0.0.1:14666\\"}]"\n  }\n}\n')),(0,a.kt)("h3",{id:"config-record-description"},"Config Record Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")))),(0,a.kt)("h2",{id:"how-to-manage-known-peers-via-web-api"},"How to manage Known Peers via web API"),(0,a.kt)("p",null,"See manual peering API docs ",(0,a.kt)("a",{parentName:"p",href:"/goshimmer/apis/manual_peering"},"page"),"\nfor information on how to manage the known peers list via web API."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);