"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4068],{35849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={},p="WebAPI - clientLib",s={unversionedId:"apis/webAPI",id:"apis/webAPI",isDocsHomePage:!1,title:"WebAPI - clientLib",description:"The web API interface allows to access functionality of the node software via exposed http endpoints.",source:"@site/external/goshimmer/documentation/docs/apis/webAPI.md",sourceDirName:"apis",slug:"/apis/webAPI",permalink:"/goshimmer/apis/webAPI",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Client Lib: Interaction With Layers",permalink:"/goshimmer/apis/api"},next:{title:"Info API Methods",permalink:"/goshimmer/apis/info"}},c=[{value:"How to use the API",id:"how-to-use-the-api",children:[]},{value:"GET and POST",id:"get-and-post",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webapi---clientlib"},"WebAPI - clientLib"),(0,o.kt)("p",null,"The web API interface allows to access functionality of the node software via exposed http endpoints."),(0,o.kt)("h2",{id:"how-to-use-the-api"},"How to use the API"),(0,o.kt)("p",null,"The default port to access the web API is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"8080:8080/tcp")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", where the first port number is the internal port number within the node software, and the second for the access from an http port. An example where these two would be set to different values, or the external port is not utilized, can be found in the docker-network tool (see also the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the docker-network tool folder)."),(0,o.kt)("p",null,"The server instance of the web API is contacted via ",(0,o.kt)("inlineCode",{parentName:"p"},"webapi.Server()"),". Next we need to register a route with a matching handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"webapi.Server().ROUTE(path string, h HandlerFunc)\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"ROUTE")," will be replaced later in this documentation by ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc")," defines a function to serve HTTP requests that gives access to the Context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"func HandlerFunc(c Context) error\n")),(0,o.kt)("p",null,"We can then use the Context to send a JSON response to the node: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"JSON(statuscode int, i interface{}) error\n")),(0,o.kt)("p",null,"An implementation example is shown later for the POST method."),(0,o.kt)("h2",{id:"get-and-post"},"GET and POST"),(0,o.kt)("p",null,"Two methods are currently used. First, with ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," we register a new GET route for a handler function. The handler is accessed via the address ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),". The handler for a GET method can set the node to perform certain actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'webapi.Server().GET("path", HandlerFunc)\n')),(0,o.kt)("p",null,"A command can be sent to the node software to the API, e.g. via command prompt: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://127.0.0.1:8080/path?command"\n')),(0,o.kt)("p",null,"$$ . $$"),(0,o.kt)("p",null,"Second, with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," we register a new POST route for a handler function. The handler can receive a JSON body input and send specific messages to the tangle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'webapi.Server().POST("path", HandlerFunc)\n')),(0,o.kt)("p",null,"For example, the following Handler ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastData")," sends a data message to the tangle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"func broadcastData(c echo.Context) error {\n    var request Request\n    if err := c.Bind(&request); err != nil {\n        log.Info(err.Error())\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n\n    msg, err := messagelayer.IssuePayload(\n        payload.NewGenericDataPayload(request.Data), messagelayer.Tangle())\n    if err != nil {\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n    return c.JSON(http.StatusOK, Response{ID: msg.ID().String()})\n}\n")),(0,o.kt)("p",null,"As an example the JSON body   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "data":"HelloWor"\n}\n')),(0,o.kt)("p",null,"can be sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/data"),', which will issue a data message containing "HelloWor" (note that in this  example the data input is size limited.)'))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);