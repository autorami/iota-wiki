"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8783],{92073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],s={},l="Consensus Mechanism",c={unversionedId:"protocol_specification/consensus_mechanism",id:"protocol_specification/consensus_mechanism",isDocsHomePage:!1,title:"Consensus Mechanism",description:"The consensus mechanism is necessary to achieve agreement among the nodes of the network. In case of a double spend, one way to decide which transaction should be considered valid would be to order them and pick the oldest one. However, the Tangle is only partially ordered. To tackle this problem in the context of the Tangle, we have designed an open and leaderless consensus mechanism. It combines a binary voting protocol (FPC) used as a pre-consensus to prevent metastable states, and a virtual voting protocol (Approval Weight) that provides finality similarly to the longest chain rule in Nakamoto consensus (i.e., heaviest branch).",source:"@site/external/goshimmer/documentation/docs/protocol_specification/consensus_mechanism.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/consensus_mechanism",permalink:"/goshimmer/protocol_specification/consensus_mechanism",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Congestion Control",permalink:"/goshimmer/protocol_specification/congestion_control"},next:{title:"ledgerstate",permalink:"/goshimmer/protocol_specification/ledgerstate"}},p=[{value:"FPC",id:"fpc",children:[{value:"FCoB",id:"fcob",children:[]},{value:"FPC statements",id:"fpc-statements",children:[]}]},{value:"dRNG",id:"drng",children:[{value:"Drand - A Distributed Randomness Beacon Daemon",id:"drand---a-distributed-randomness-beacon-daemon",children:[]}]},{value:"Approval Weight (AW)",id:"approval-weight-aw",children:[{value:"Finalization",id:"finalization",children:[]},{value:"Detailed Design",id:"detailed-design",children:[]}]},{value:"Active Consensus Mana",id:"active-consensus-mana",children:[]}],h={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consensus-mechanism"},"Consensus Mechanism"),(0,o.kt)("p",null,"The consensus mechanism is necessary to achieve agreement among the nodes of the network. In case of a double spend, one way to decide which transaction should be considered valid would be to order them and pick the oldest one. However, the Tangle is only partially ordered. To tackle this problem in the context of the Tangle, we have designed an open and leaderless consensus mechanism. It combines a binary voting protocol (FPC) used as a pre-consensus to prevent metastable states, and a virtual voting protocol (Approval Weight) that provides finality similarly to the longest chain rule in Nakamoto consensus (i.e., heaviest branch)."),(0,o.kt)("h2",{id:"fpc"},"FPC"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.10895"},"Fast Probabilistic Consensus")," (FPC) protocol is a binary voting protocol where each node starts with an initial opinion (a nulled boolean) on an object.  Nodes then exchange queries and responses about their opinions during several rounds, until each node terminates with a final boolean value.  "),(0,o.kt)("p",null,"FPC votes on two specific objects types: messages, in order to enforce timestamps (currently not yet enabled in GoShimmer), and transactions, in order to decide double spends. Additionally, applications can use FPC to query opinions about their opinion on other object types, although there is no guarantee that they will get a response.  "),(0,o.kt)("p",null,"The FPC is agnostic about the rest of the protocol, particularly when FPC should run and how the initial opinions are set. Deciding when FPC should run is a delicate question for two reasons."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is inefficient for FPC to vote on every single transaction."),(0,o.kt)("li",{parentName:"ol"},"If only a sub set of nodes participate in FPC, they are more vulnerable to attack since the consensus mana held by this collection of nodes is potentially much smaller.\nThus, since it cannot vote on everything, it must use subjective criterion to trigger voting which does not leave any group vulnerable to attack.")),(0,o.kt)("p",null,"For these reasons, we use ",(0,o.kt)("a",{parentName:"p",href:"#fcob"},"FCoB")," to manage FPC."),(0,o.kt)("h3",{id:"fcob"},"FCoB"),(0,o.kt)("p",null,"The following flow diagram shows the current implemention of the FCoB protocol."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FCoB",src:n(5392).Z})),(0,o.kt)("p",null,"Each opinion is associated to a ",(0,o.kt)("em",{parentName:"p"},"Level of Knowledge")," (LoK) that defines how confident a node is with respect to the value of the opinion. We can distinguish 3 levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Level 1 means that the node only knows that it holds this opinion."),(0,o.kt)("li",{parentName:"ul"},"Level 2 means that the node knows that all nodes have this opinion too (with high probability)."),(0,o.kt)("li",{parentName:"ul"},"Level 3 means that the node knows that all nodes have level 2 knowledge (with high probability).")),(0,o.kt)("p",null,"Within FCoB, there are three cases which are treated:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"No conflicts have been detected"),(0,o.kt)("li",{parentName:"ol"},"Conflicts have been detected but have been rejected"),(0,o.kt)("li",{parentName:"ol"},"Conflicts have been detected are either pending or have been confirmed")),(0,o.kt)("p",null,"In Case 1 is the most common because conflicts will never arrive for most transactions. Without conflicts, the opinion can be only set provisionally since it might change if a conflict arrives later. The opinion is set to true, but the level is set as if a conflict arrived at that time.   For example, after a given ",(0,o.kt)("inlineCode",{parentName:"p"},"Quarantine")," time has elapsed since arrival time, if a conflict does arrive the opinion will remain true with level at least 2.  "),(0,o.kt)("p",null,"Case 2 is an important special case of the FCoB rule. To see the need for this modification consider the following example.  Suppose someone issues a pair of conflicting transactions where both transactions are rejected by FPC. Then, if someone ever issues a new transaction consuming those funds, FCoB, strictly speaking would reject the new transaction, since it would conflict with a previous transaction.  Thus, if a pair of double spends are rejected, the funds would be locked.  This is undesirable and impractical behavior: an honest but malfunctioning wallet can issue double spends.  Moreover, tracking the locked funds would be onerous. "),(0,o.kt)("p",null,"Case 3 is the simplest case: since conflicts have been detected, we set the opinion according to the FCOB rule.  Then level is set according to the difference of ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction.arrivalTime + Quarantine")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"conflictTime"),", the oldest arrival time of a conflicting transaction.  Essentially, the level measures how many network delays there are between these two values.   "),(0,o.kt)("p",null,"To prevent the FCoB rule from locking funds, we modify it to the following: a transaction ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," satisfied the FCoB rule if all transactions ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," conflicting with ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),"  before ",(0,o.kt)("inlineCode",{parentName:"p"},"arrivalTime(X)+Quarantine")," has been rejected, i.e. has has opinion false and level 2 or 3.  With this rule, any conflicts which are rejected will not affect the opinion on future conflicts.  For simplicity case, all transactions falling under this case are treated as level 1."),(0,o.kt)("h3",{id:"fpc-statements"},"FPC statements"),(0,o.kt)("p",null,"The FPC protocol requires nodes to directly query randomly selected nodes for conflict resolution. However, the information produced during such a voting mechanism is not stored in the Tangle, rather only lives within the node's local metadata. This can be a problem for nodes joining the network at a later stage, specifically when a conflict is considered marked as level of knowledge 3 by the majority of the network, a new node cannot query it anymore.\nMoreover, since the quorum to query is randomly formed proportionally to cMana, the highest cMana nodes would need to reply to too many queries, as their probability to be included in the quorum of each node is high.\nWe propose an optimization of the protocol that, in turn, should solve both of the above issues. The idea is to let each node be free to choose whether writing its opinion on a given conflict and a given FPC round on the Tangle. "),(0,o.kt)("h4",{id:"payload"},"Payload"),(0,o.kt)("p",null,"We need to first define the FPC Statement payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Statement struct {\n   ConflictsCount  uint32\n    Conflicts       Conflicts\n    TimestampsCount uint32\n    Timestamps      Timestamps\n}\ntype Conflict struct {\n    ID transaction.ID\n    Opinion\n}\ntype Timestamp struct {\n    ID tangle.MessageID\n    Opinion\n}\n")),(0,o.kt)("h4",{id:"registry"},"Registry"),(0,o.kt)("p",null,"We also define an Opinion Registry where nodes can store and keep track of the opinions from each node after parsing FPC Statements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Registry struct {\n    nodesView map[identity.ID]*View\n}\ntype View struct {\n    NodeID     identity.ID\n    Conflicts  map[transaction.ID]Opinions\n    Timestamps map[tangle.MessageID]Opinions\n}\n")),(0,o.kt)("p",null,"Given a nodeID and a ConflictID (or a messageID for timestamps), a node can check if it has the required opinion in its registry, and thus use that during its FPC round, or if not, send a traditional query to the node."),(0,o.kt)("h4",{id:"broadcasting-an-fpc-statement"},"Broadcasting an FPC Statement"),(0,o.kt)("p",null,"A node, after forming its opinion for 1 or more conflicts during an FPC round, can prepare an FPC statement containing the result of that round and issue it on the Tangle.\nCurrently, any node that belongs to the top 70% cMana issues FPC statements. This parameter is local to the node and can be changed by the node operator."),(0,o.kt)("h2",{id:"drng"},"dRNG"),(0,o.kt)("p",null,"At its core, the Fast Probabilistic Consensus (FPC) runs to resolve potential conflicting transactions by voting on them. FPC requires a random number generator (RNG) to be more resilient to an attack aiming at creating a meta-stable state, where nodes in the network are constantly toggling their opinion on a given transaction and thus are unable to finalize it. Such a RNG can be provided by either a trusted and centralized entity or be decentralized and distributed. Clearly, the fully decentralized nature of IOTA 2.0 mandates the latter option, and this option is referred to a distributed RNG (dRNG)."),(0,o.kt)("p",null,"A dRNG can be implemented in very different ways, for instance by leveraging on cryptographic primitives such as verifiable secret sharing and threshold signatures,\nby using cryptographic sortition or also with verifiable delay functions.\nAfter reviewing some existing solutions, we decided to use a variant of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drand/drand"},"drand")," protocol,\noriginally developed within the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dedis"},"DEDIS organization"),", and as of December 2019, is now under the drand organization.\nThis protocol has been already used by other projects such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/leagueofentropy/"},"The League of Entropy"),"."),(0,o.kt)("h3",{id:"drand---a-distributed-randomness-beacon-daemon"},"Drand - A Distributed Randomness Beacon Daemon"),(0,o.kt)("p",null,'Drand (pronounced "dee-rand") is a distributed randomness beacon daemon written\nin ',(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Golang"),". Servers running drand can be linked with each\nother to produce collective, publicly verifiable, unbiased, unpredictable\nrandom values at fixed intervals using bilinear pairings and threshold\ncryptography. Drand nodes can also serve locally-generated private randomness\nto clients."),(0,o.kt)("p",null,"In a nutshell, drand works in two phases: ",(0,o.kt)("strong",{parentName:"p"},"setup")," and ",(0,o.kt)("strong",{parentName:"p"},"generation"),".\nIn the setup phase, a set of nodes (hereafter referred as \u201ccommittee\u201d) run a distributed key generation (DKG) protocol\nto create a collective private and public key pair shared among the members of the committee.\nMore specifically, at the end of this phase, each member obtains a copy of the public key as well as a private key share of the collective private key,\nsuch that no individual member knows the entire collective private key.\nThese private key shares will then be used by the committee members to sign their contributions during the next phase.\nThe generation phase works in discrete rounds.\nIn every round, the committee produces a new random value by leveraging on a deterministic threshold signature scheme such as BLS.\nEach member of the committee creates in round ",(0,o.kt)("em",{parentName:"p"},"r")," the partial BLS signature ",(0,o.kt)("em",{parentName:"p"},"\u03c3_r")," on the message ",(0,o.kt)("em",{parentName:"p"},"m=H(r || \u03c2_r-1)"),"\nwhere ",(0,o.kt)("em",{parentName:"p"},"\u03c2_r-1")," denotes the full BLS threshold signature from the previous round ",(0,o.kt)("em",{parentName:"p"},"r\u22121")," and ",(0,o.kt)("em",{parentName:"p"},"H")," is a cryptographic hash function.\nOnce at least ",(0,o.kt)("em",{parentName:"p"},"t")," members have broadcasted their partial signatures ",(0,o.kt)("em",{parentName:"p"},"\u03c3_r")," on ",(0,o.kt)("em",{parentName:"p"},"m"),",\nanyone can recover the full BLS threshold signature ",(0,o.kt)("em",{parentName:"p"},"\u03c2_r")," (via Lagrange interpolation) which corresponds to the random value of round ",(0,o.kt)("em",{parentName:"p"},"r"),".\nThen, the committee moves to the next round and reiterates the above process. For the first round, each member signs a seed fixed during the setup phase.\nThis process ensures that every new random value depends on all previously generated signatures.\nIf you are interested in knowing more about drand, we recommend you to check out their ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drand/drand"},"Github repository"),"."),(0,o.kt)("h2",{id:"approval-weight-aw"},"Approval Weight (AW)"),(0,o.kt)("p",null,"Approval weight represents the ",(0,o.kt)("a",{parentName:"p",href:"#active-consensus-mana"},"weight")," of branches (and messages), similar to the longest chain rule in Nakamoto consensus. However, instead of selecting a leader based on a puzzle (PoW) or stake (PoS), it allows every node to express its opinion by simply issuing any message and attaching it in a part of the Tangle it ",(0,o.kt)("em",{parentName:"p"},"likes")," (based on FCoB/FPC). This process is also known as virtual voting, and has been previously described in ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@hans_94488/a-new-consensus-the-tangle-multiverse-part-1-da4cb2a69772"},"On Tangle Voting"),". "),(0,o.kt)("p",null,"If a node realizes its opinion according to FCoB/FPC differs from that of the majority of weight, it has to do a reorg of its perception according to the heavier branch. In that way, all nodes will eventually converge to the heaviest branches, and, thus, come to consensus efficiently. "),(0,o.kt)("p",null,"AW also serves as a probabilistic finality tool for individual messages and their payloads, i.e., transactions."),(0,o.kt)("h3",{id:"finalization"},"Finalization"),(0,o.kt)("p",null,"Finality must always be considered as a probabilistic finality in the sense that a message is included in the ledger with a very high probability. Two qualities desired from a finality criteria are fast confirmation rate and a high probability of non-reversibility. "),(0,o.kt)("p",null,"A branch is considered finalized/confirmed if one of the following holds:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is the ",(0,o.kt)("em",{parentName:"li"},"MasterBranch"),"."),(0,o.kt)("li",{parentName:"ol"},"Its approval weight is at least ",(0,o.kt)("em",{parentName:"li"},"0.5")," higher than any of its conflicting branches. ")),(0,o.kt)("p",null,"A message is considered finalized/confirmed if the following holds:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Its approval weight is higher than ",(0,o.kt)("em",{parentName:"li"},"0.5"),", and its branch is confirmed.")),(0,o.kt)("p",null,"Conversely, a message that does not gather enough AW will not be finalized, and, thus, will be pending until it might be orphaned if not reachable via current tips anymore."),(0,o.kt)("h3",{id:"detailed-design"},"Detailed Design"),(0,o.kt)("p",null,"Approval weight is tracked with the help of supporters that cast votes for branches and messages by means of making statements. This is necessary due to the changing nature of cMana over time, which prevents simply counting the AW per branch or message. "),(0,o.kt)("h4",{id:"definitions"},"Definitions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Statement"),": A statement is any message issued by a ",(0,o.kt)("em",{parentName:"li"},"node"),", expressing its opinion and casting a (virtual) vote. It can be objectively ordered by its timestamp, and, if equal, its message ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Branch supporter"),": A branch supporter is a ",(0,o.kt)("em",{parentName:"li"},"node")," that issued a statement attaching to a branch, and, thus, voting for it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Marker/message supporter"),": A marker/message's supporter is a ",(0,o.kt)("em",{parentName:"li"},"node")," that issued a statement directly or indirectly referencing a marker/message, including its issuer.")),(0,o.kt)("h4",{id:"branches"},"Branches"),(0,o.kt)("p",null,"Tracking supporters of branches and following the heavier branch effectively is On Tangle Voting. It allows nodes to express their opinion simply by attaching a statement to a branch they like. This statement needs to propagate down the branch DAG, adding support to each of the branch parents. In case a supporter changes their opinion, support needs to be revoked from all conflicting branches and their children. Thus, a node can only support one branch of a conflict set. "),(0,o.kt)("p",null,"To make this more clear consider the following example:\n",(0,o.kt)("img",{alt:"Branch Supporter",src:n(89283).Z})),(0,o.kt)("p",null,"The green node issued ",(0,o.kt)("strong",{parentName:"p"},"statement 1")," and attached it to the aggregated branch ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1.1 + Branch 4.1.1"),". Thus, the green node is a supporter of all the aggregated branch's parent branches, which are (from top to bottom) ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4"),"."),(0,o.kt)("p",null,"Then, the green node issued ",(0,o.kt)("strong",{parentName:"p"},"statement 2")," and attached it to ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.2"),". This makes the green node a supporter of ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.2"),", however, ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.1")," is its conflict branch and thus support for ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.1")," has to be revoked."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4")," are parent branches of ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.2"),", which the green node is still supporting. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1")," are not conflicting to either of ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 4.1.2"),"'s parents, the green node remains their supporter."),(0,o.kt)("p",null,"Finally, the green nodes issued ",(0,o.kt)("strong",{parentName:"p"},"statement 3"),", which is in ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 2"),". Now the green node is a supporter of ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 2"),", and no longer a supporter of ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1")," is conflicting to ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 2"),". Note that, this supporter removal will propagate to child branches. Thus, the green node is removed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 1.1")," as well.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Branch 3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," and both of their child branches have nothing to do with this attachement, the supporter status remains."),(0,o.kt)("p",null,"It is important to notice that the arrival order of the statements does not make a difference on the final outcome. Due to the fact that statements can be ordered objectively, every node in the network eventually comes to the same conclusion as to who is supporting which branch, even when nodes change their opinion."),(0,o.kt)("h5",{id:"calculation-of-approval-weight"},"Calculation of Approval Weight"),(0,o.kt)("p",null,"The approval weight itself is calculated every time a new supporter is added to a branch. The AW for a branch ",(0,o.kt)("em",{parentName:"p"},"B")," is calculated as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AW(B) = supporters(B) dot 'active cMana nodes' / 'total active cMana'\n")),(0,o.kt)("p",null,"It is then evaluated whether it fulfills the ",(0,o.kt)("a",{parentName:"p",href:"#finalization"},"finalization")," criterion. If so, the branch is set to ",(0,o.kt)("em",{parentName:"p"},"confirmed"),", while all its conflicts are set to ",(0,o.kt)("em",{parentName:"p"},"rejected"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reorg"),": In case the node confirmed another branch of the conflict set first, e.g., because of a difference in perception of the ledger state, it will have to do reorg. This means, the node needs to adjust its perception of the ledger state, so that, eventually, all nodes converge and follow the heaviest branch by active cMana."),(0,o.kt)("h4",{id:"markers"},"Markers"),(0,o.kt)("p",null,"It would be computationally expensive to track the AW for each message individually. Instead, we approximate the AW with the help of ",(0,o.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/markers"},"markers"),". Once a marker fulfills the ",(0,o.kt)("a",{parentName:"p",href:"#finalization"},"finalization")," criterion, the confirmation is propagated into its past cone until all the messages are confirmed."),(0,o.kt)("p",null,"Rather than keeping a list of supporters for each marker and collecting supporters for each marker (which would also be expensive), we keep a list of supporters along with its approved marker index for each marker sequence. This approach provides a simple and fast look-up for marker supporters making use of the Tangle structure as mapped by the markers."),(0,o.kt)("p",null,"For each marker sequence, we keep a map of supporter to marker index, meaning a supporter supports a marker index ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),". This implies that the supporter supports all markers with index ",(0,o.kt)("inlineCode",{parentName:"p"},"<= i"),"."),(0,o.kt)("p",null,"Take the figure below as an example:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11289354/112416694-21012780-8d61-11eb-8089-cb9f5b236f30.png",alt:"MarkersApprovalWeight SequenceSupporters-Page-2"})),(0,o.kt)("p",null,"The purple circles represent markers of the same sequence, the numbers are marker indices."),(0,o.kt)("p",null,"Four nodes (A to D) issue statements with past markers of the purple sequence. Node A and D issue messages having past marker with index 6, thus node A and D are the supporters of marker 6 and all markers before, which is 1 to 5. On the other hand, node B issues a message having past marker with index 3, which implies node B is a supporter for marker 1 and 2 as well."),(0,o.kt)("p",null,"This is a fast look-up and avoids walking through a marker's future cone when it comes to retrieving supporters for approval weight calculation."),(0,o.kt)("p",null,"For example, to find all supporter of marker 2, we iterate through the map and filter out those support marker with ",(0,o.kt)("inlineCode",{parentName:"p"},"index >= 2"),". In this case, all nodes are its supporters. As for marker 5, it has supporters node A and D, which fulfill the check: ",(0,o.kt)("inlineCode",{parentName:"p"},"index >= 5"),"."),(0,o.kt)("p",null,"Here is another more complicated example with parent sequences:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11289354/112433680-8cf18900-8d7d-11eb-8944-54030581a033.png",alt:"MarkersApprovalWeight SequenceSupporters-Page-2(1)"})),(0,o.kt)("p",null,"The supporter will be propagated to the parent sequence."),(0,o.kt)("p",null,"Node A issues message A2 having past markers ",(0,o.kt)("inlineCode",{parentName:"p"},"[1,4], [3,5]"),", which implies node A is a supporter for marker ",(0,o.kt)("inlineCode",{parentName:"p"},"[1,1]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"[1,4]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[2,1]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"[2,3]"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"[3,4], [3,5]")," as well."),(0,o.kt)("h5",{id:"calculation-of-approval-weight-1"},"Calculation of Approval Weight"),(0,o.kt)("p",null,"The approval weight itself is calculated every time a new supporter is added to a marker, and the marker's branch ",(0,o.kt)("em",{parentName:"p"},"B")," has reached its finality criterion. The AW for a marker ",(0,o.kt)("em",{parentName:"p"},"M")," is calculated as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AW(M) = supporters(B) dot supporters(M) dot 'active cMana nodes' / 'total active cMana'\n")),(0,o.kt)("p",null,"It is then evaluated whether it fulfills the ",(0,o.kt)("a",{parentName:"p",href:"#finalization"},"finalization")," criterion. If so, the marker's message is set to ",(0,o.kt)("em",{parentName:"p"},"confirmed")," as well as all messages in its past cone."),(0,o.kt)("h2",{id:"active-consensus-mana"},"Active Consensus Mana"),(0,o.kt)("p",null,"It is important to track the currently ",(0,o.kt)("em",{parentName:"p"},"active")," consensus mana in the system, such that the AW of a given message and/or branch reflects an up-to-date measure of cumulative weight. Specifically, the system must be resilient against a long-range attack."),(0,o.kt)("p",null,"The active consensus mana tracks the set of the active nodes with some conensus mana. A node is considered to be active if it has issued any message in the last 30 minutes with respect to the TangleTime. The total active consensus mana is, therefore, the sum of all the consensus mana of each active node."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5392:function(e,t,n){t.Z=n.p+"assets/images/FCOB-33d2ddf7b609151732fb002020835c79.png"},89283:function(e,t,n){t.Z=n.p+"assets/images/branches-c0c4ec96cd0978505cf904170f8aa1c1.png"}}]);