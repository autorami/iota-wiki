"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[847],{54155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={},s="Getting Started",u={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to",source:"@site/external/hornet/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/getting_started",permalink:"/hornet/getting_started/getting_started",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Welcome to HORNET",permalink:"/hornet/welcome"},next:{title:"Nodes 101",permalink:"/hornet/getting_started/nodes_101"}},d=[{value:"Recommended Requirements",id:"recommended-requirements",children:[]},{value:"Operating System",id:"operating-system",children:[{value:"Linux (and Raspberry Pi)",id:"linux-and-raspberry-pi",children:[]},{value:"MacOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"Configuration",id:"configuration",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to\nconnect to and trust someone else's node. Additionally, you help the IOTA network to become more distributed and resilient."),(0,i.kt)("p",null,"The node software is the backbone of the IOTA network. For an overview of tasks a node is responsible for, please\nsee ",(0,i.kt)("a",{parentName:"p",href:"/hornet/getting_started/nodes_101"},"Node 101"),"."),(0,i.kt)("p",null,"To make sure that your device meets the minimum security requirements for running a node, please\nsee ",(0,i.kt)("a",{parentName:"p",href:"/hornet/getting_started/security_101"},"Security 101"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you install Hornet version 0.6.0+ since it is the minimum version that targets IOTA 1.5 (Chrysalis) network.\nVersions below 0.6.0 (such as 0.5.x) target the legacy IOTA network which is not the focus of this documentation."))),(0,i.kt)("h2",{id:"recommended-requirements"},"Recommended Requirements"),(0,i.kt)("p",null,"To handle a potential high rate of messages per second, nodes need enough computational power to run reliably, and\nshould have following minimum specs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4 cores or 4 vCPU"),(0,i.kt)("li",{parentName:"ul"},"8 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"SSD storage"),(0,i.kt)("li",{parentName:"ul"},"A public IP address")),(0,i.kt)("p",null,"The amount of storage you need will depend on whether and how often you plan on pruning old data from your local\ndatabase."),(0,i.kt)("p",null,"Hornet exposes different functionality on different ports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"15600 TCP - Gossip protocol port"),(0,i.kt)("li",{parentName:"ul"},"14265 TCP - REST HTTP API port (optional)"),(0,i.kt)("li",{parentName:"ul"},"8081 TCP - Dashboard (optional)")),(0,i.kt)("p",null,"The mentioned ports are important for flawless node operation. The REST HTTP API port is optional and is only needed if\nyou want to offer access to your node's API. All ports can be customized inside\nthe ",(0,i.kt)("a",{parentName:"p",href:"/hornet/post_installation/configuration"},"config.json")," file."),(0,i.kt)("p",null,"The default dashboard only listens on localhost:8081 per default. If you want to make it accessible from\nthe Internet, you will need to change the default configuration (though we recommend using a reverse proxy)."),(0,i.kt)("h2",{id:"operating-system"},"Operating System"),(0,i.kt)("p",null,"Hornet is written in Go and can be deployed on all major platforms using several installation methods."),(0,i.kt)("p",null,"Hornet ships as a single executable binary (",(0,i.kt)("inlineCode",{parentName:"p"},"hornet")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hornet.exe"),") and some JSON configuration files; no further dependencies are needed."),(0,i.kt)("h3",{id:"linux-and-raspberry-pi"},"Linux (and Raspberry Pi)"),(0,i.kt)("p",null,"Recommended installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/installation_steps#hornet-apt-repository-linux-distro-specific"},"Hornet apt repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image"))),(0,i.kt)("p",null,"Other installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/installation_steps#pre-built-binaries"},"Prebuilt binary files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/installation_steps#build-from-source"},"Build from source"))),(0,i.kt)("h3",{id:"macos"},"MacOS"),(0,i.kt)("p",null,"Recommended installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image")," ")),(0,i.kt)("p",null,"Other installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/installation_steps#pre-built-binaries"},"Prebuilt binary files"))),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Recommended installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/using_docker"},"Docker image")," ")),(0,i.kt)("p",null,"Other installation methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hornet/getting_started/installation_steps#pre-built-binaries"},"Prebuilt binary files"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Hornet uses several JSON configuration files that can be adjusted based on your deployment and use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.json"),": includes all core configuration parameters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peering.json"),": includes connection details to node neighbors (peers)")),(0,i.kt)("p",null,"See more details regarding the configuration in the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/post_installation/post_installation"},"post installation"),"\nchapter."))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);