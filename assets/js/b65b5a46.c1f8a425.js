"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9556],{49309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return h},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={},s="How the IOTA Chrysalis Phase 2 Token Migration Works",d={unversionedId:"guides/migration-mechanism",id:"guides/migration-mechanism",isDocsHomePage:!1,title:"How the IOTA Chrysalis Phase 2 Token Migration Works",description:"For the transition to Chrysalis Phase 2, the IOTA Foundation had to develop a way for funds to be migrated to the new",source:"@site/external/chrysalis-docs/docs/guides/migration-mechanism.md",sourceDirName:"guides",slug:"/guides/migration-mechanism",permalink:"/chrysalis-docs/guides/migration-mechanism",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Chrysalis Migration",permalink:"/chrysalis-docs/guides/token_guide"},next:{title:"IOTA Hub Migration Guide",permalink:"/chrysalis-docs/guides/hub_guide"}},h=[{value:"Components",id:"components",children:[]},{value:"How it Actually Works",id:"how-it-actually-works",children:[{value:"Verifier Node",id:"verifier-node",children:[]},{value:"Verifier Node",id:"verifier-node-1",children:[]}]}],u={toc:h};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-the-iota-chrysalis-phase-2-token-migration-works"},"How the IOTA Chrysalis Phase 2 Token Migration Works"),(0,r.kt)("p",null,"For the transition to Chrysalis Phase 2, the IOTA Foundation had to develop a way for funds to be migrated to the new\nnetwork. The reason a migration mechanism was necessary was because the previous network no longer supported WOTS addresses."),(0,r.kt)("p",null,"The developed mechanism features the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is trustless, meaning that everyone who is interested can verify that migrated funds were legitimate."),(0,r.kt)("li",{parentName:"ul"},"Migrated funds take less than 5 minutes until they become available in the network."),(0,r.kt)("li",{parentName:"ul"},"Migrations take place at any time for the foreseeable future.")),(0,r.kt)("p",null,"Before we proceed into the developed mechanism, you can view why other mechanisms were not chosen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Migrating funds by performing periodic global snapshots on both networks"),": while this approach would have\nbeen the easiest to do, it would have blocked the funds of people between the times of global snapshots. For example, if\nwe would have taken global snapshots monthly (to carry over funds from burn/migration addresses), token holders would\nhave been excluded from opportunities arising from the change in token price. In this case, perhaps a user wanted to sell\ntokens but were blocked by the fact that the next global snapshot would only be performed in 20 days and so they\ncouldn't move their tokens to an exchange (which only supports Chrysalis Phase 2 IOTA)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Supporting WOTS on Chrysalis Phase 2 (and only allowing to send to non WOTS addresses)"),": while this was also a\nviable option, we decided to not include support for WOTS as it brought a number of legacy problems we did not want includedf:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WOTS signatures are very large and make up a disproportional amount of data in a transaction (note that our PoW\nrequirement in Chrysalis' Phase 2 was dependent on the size of the message). Additionally, there were no real bounds\non how big such signatures could grow to (even if per default we only supported 3 security levels in our\nlibraries)."),(0,r.kt)("li",{parentName:"ul"},"We would have needed to pollute our new Chrysalis Phase 2 models with support for these addresses and signatures,\nadding unnecessary complexity to what should be a clean protocol."),(0,r.kt)("li",{parentName:"ul"},"Chrysalis Phase 2 nodes would have needed to keep a spent address list to inform wallets that they had vulernable\naddresses.")))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The developed migration mechanism was built from following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrysalis phase 2 data types (for reference, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/luca-moser/protocol-rfcs/blob/rfc/wotsicide/text/0035-wotsicide/0035-wotsicide.md"},"the RFC")," for details):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output"),": an object which specified an amount of tokens held in the treasury."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Input"),": an object which referenced a previous ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction"),": an object which defined a ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Input")," referencing the last ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," and a\nnew ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," that held the delta of what the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction")," was spending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),": an object which held a pointer to a legacy milestone index, a list of funds to mint, and\na ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction"),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," can only be an inner payload of a milestone."))),(0,r.kt)("li",{parentName:"ul"},"Chrysalis Phase 2 nodes which validated receipts"),(0,r.kt)("li",{parentName:"ul"},"Legacy nodes which provided a special API command for the above Chrysalis Phase 2 nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),": this was the last ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," in the ledger. There only one existed at any point in time.\nAfter Chrysalis Phase 2 network launched, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),' contained the total supply of tokens (2779530283277761) minus the funds which were already migrated during the "7-day-migration-period" prior to the network launch. This means that all funds which are not migrated from the legacy network, always will reside in the ',(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),".")),(0,r.kt)("p",null,"Note, that again, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt")," could only be contained within a milestone and that valid milestones could only be issued by\nthe Coordinator, therefore, minting of migrated funds could only happen through milestones and not any other type of\ntransactions. Likewise, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Treasury Transaction")," was only valid as an inner payload of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"."),(0,r.kt)("h2",{id:"how-it-actually-works"},"How it Actually Works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In essence, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),' carried the information about funds which were migrated or "burned" to a ',(0,r.kt)("inlineCode",{parentName:"li"},"migration address"),"\non the legacy network. A ",(0,r.kt)("inlineCode",{parentName:"li"},"migration address")," looks like any other normal address on the legacy network but it\nencapsulates actual information, such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The target Ed25519 address on the Chrysalis Phase 2 network from which the token holder wants their funds to be\naccessible from."),(0,r.kt)("li",{parentName:"ul"},"A checksum of that Ed25519 address."),(0,r.kt)("li",{parentName:"ul"},"A tryte prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"TRANSFER")," (these addresses always start with this prefix)."))),(0,r.kt)("li",{parentName:"ol"},"As mentioned above, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," could only be contained in a milestone and therefore the Coordinator on the Chrysalis\nPhase 2 network:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Periodically polled data from a legacy node about what kind of newly confirmed burned/migrated funds there were (while also performing WOTS signature verification on these and the legacy milestone bundle)."),(0,r.kt)("li",{parentName:"ol"},"Then a milestone is produced with a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," that contained those funds, where within the ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),",\na ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction")," was placed which deducts the sum of tokens migrated from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),"."))),(0,r.kt)("li",{parentName:"ol"},"Chrysalis Phase 2 nodes then saw receipts when applying milestones and automatically generated outputs for the Ed25519\naddress as defined in the origin ",(0,r.kt)("inlineCode",{parentName:"li"},"migration address")," in the legacy network. As an optional step (which is not turned\non by default), every node could have been configured to verify whether the funds in the receipt were really migrated in the\nold network using a legacy node and whether all funds for a given legacy milestone index were migrated. If this\nverification failed, the node would have automatically panicked as the integrity was no longer correct.")),(0,r.kt)("p",null,"This meant that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IOTA Foundation could not mint funds out of thin air, because nodes in the Chrysalis Phase 2 network verify that the\nfunds were burned in the legacy network."),(0,r.kt)("li",{parentName:"ul"},"All migration bundles, respectively transferred to ",(0,r.kt)("inlineCode",{parentName:"li"},"migration addresses")," which were confirmed by a given legacy\nmilestone, had to have been migrated fully to the new network, as otherwise the verification failed."),(0,r.kt)("li",{parentName:"ul"},"Node operators were free to choose which legacy nodes they queried with their Chrysalis Phase 2 nodes, so the\nverification of migrations/receipts was decentralized. For example, a node operator chooses to both operate their own\nlegacy and Chrysalis Phase 2 nodes.")),(0,r.kt)("p",null,"Essentially, via the Firefly wallet, token holders:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Produced migration bundles which sent funds to ",(0,r.kt)("inlineCode",{parentName:"li"},"migration addresses")," controlled by the given owner."),(0,r.kt)("li",{parentName:"ol"},"These bundles were confirmed on the legacy network."),(0,r.kt)("li",{parentName:"ol"},"The Chrysalis Phase 2 Coordinator picked these confirmed legacy bundles up and generated receipts minting those funds\nto the target Ed25519 address."),(0,r.kt)("li",{parentName:"ol"},"Verifier nodes verified the receipts and made sure that the funds originated from the legacy network.")),(0,r.kt)("h3",{id:"verifier-node"},"Verifier Node"),(0,r.kt)("p",null,"A verifier node was a Chrysalis Phase 2 node which upon seeing receipts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Queried a legacy node for the confirmation data for the specified milestone in the receipt."),(0,r.kt)("li",{parentName:"ol"},"Then performed WOTS signature verification of the legacy milestone bundle and all confirmed bundles."),(0,r.kt)("li",{parentName:"ol"},"Additionally it also checked that all confirmed funds on the legacy network for the given legacy milestone, were"),(0,r.kt)("li",{parentName:"ol"},"Produce migration bundles which sent funds to ",(0,r.kt)("inlineCode",{parentName:"li"},"migration addresses")," controlled by the given owner."),(0,r.kt)("li",{parentName:"ol"},"These bundles are confirmed on the legacy network."),(0,r.kt)("li",{parentName:"ol"},"The Chrysalis Phase 2 Coordinator picks these confirmed legacy bundles up and generates receipts minting those funds\nto the target Ed25519 address."),(0,r.kt)("li",{parentName:"ol"},"Verifier nodes verify the receipts and make sure that the funds originate from the legacy network.")),(0,r.kt)("h3",{id:"verifier-node-1"},"Verifier Node"),(0,r.kt)("p",null,"A verifier node is a Chrysalis Phase 2 node which upon seeing receipts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Queries a legacy node for the confirmation data for the specified milestone in the receipt."),(0,r.kt)("li",{parentName:"ol"},"Then performs WOTS signature verification of the legacy milestone bundle and all confirmed bundles."),(0,r.kt)("li",{parentName:"ol"},"Additionally it also checks that all confirmed funds on the legacy network for the given legacy milestone, are\nindeed minted with a given batch of receipts (i.e. nothing is left out).")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://hornet.docs.iota.org/post_installation/run_as_verifier.html"},"Hornet as a verifier node")))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=i,m=c["".concat(s,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);