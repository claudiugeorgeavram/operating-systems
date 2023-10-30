"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[5616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(a),d=n,u=f["".concat(l,".").concat(d)]||f[d]||m[d]||o;return a?r.createElement(u,s(s({ref:t},p),{},{components:a})):r.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},s="Software Stack",i={unversionedId:"Lab/Software Stack/overview",id:"Lab/Software Stack/overview",title:"Software Stack",description:"Software comprises of code and data that is loaded in memory and used by the CPU.",source:"@site/docs/Lab/Software Stack/overview.md",sourceDirName:"Lab/Software Stack",slug:"/Lab/Software Stack/overview",permalink:"/operating-systems/18/Lab/Software Stack/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Software Stack",permalink:"/operating-systems/18/Lab/Software Stack/"},next:{title:"Modern Software Stacks",permalink:"/operating-systems/18/Lab/Software Stack/modern-sw-stack"}},l={},c=[{value:"Contents",id:"contents",level:2}],p={toc:c},f="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(f,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"software-stack"},"Software Stack"),(0,n.kt)("p",null,"Software comprises of code and data that is loaded in memory and used by the CPU.\nCode means instructions that are to be fetched by the CPU, decoded and executed.\nThis is called ",(0,n.kt)("strong",{parentName:"p"},"machine code"),", i.e. binary instructions that are understood by the CPU."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Hardware and Software",src:a(4084).Z,width:"754",height:"329"})),(0,n.kt)("p",null,"So, when compared to hardware, ",(0,n.kt)("strong",{parentName:"p"},"software is highly flexible"),".\nWe can tie together specific instructions to handle a given task and run them on hardware (CPU, memory, I/O).\nDifferent pieces of these instructions solve different tasks and run on the same hardware.\nMoreover, these pieces of instructions can be duplicated and run on different pieces of hardware, thus providing ",(0,n.kt)("strong",{parentName:"p"},"software reusability"),".\nAll we are left with is creating those pieces of instructions, also called programs."),(0,n.kt)("p",null,"In summary, software has intrinsic characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"flexibility"),": We can (easily) create new pieces of software.\nLittle is required, we don't need raw materials as in the case of hardware or housing or transportation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"reusability"),": Software can be easily copied to new systems and provide the same benefits there.")),(0,n.kt)("p",null,"Other characteristics are important to have, as they make life easier for both users and developers of software:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"portability"),": This is the ability to build and run the same program on different computing platforms.\nThis allows a developer to write the application code once and then run it everywhere."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fast development"),": We want developers to be able to write code faster, using higher-level programming languages.")),(0,n.kt)("p",null,"The last two characteristics rely on two items:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"higher-level programming languages"),": As discussed above, a compiler will take a higher-level program and transform it into binary code for different computing platforms, thus providing portability.\nAlso, it's easier to read (comprehend) and write (develop) source code in a higher-level programming language, thus providing fast development.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"software stacks"),": A software stack is the layering of software such that each lower layer provides a set of features that the higher layer can directly use.\nThis means that there is no need for the higher layer to reimplement those features;\nthis provides fast development: focus on only the newer / required parts of software."),(0,n.kt)("p",{parentName:"li"},'Also, each lower layer provides a generic interface to the higher layer.\nThese generic interfaces "hides" possible differences in the even lower layers.\nThis way, a software stack ensures portability across different other parts of software (and hardware as well).\nFor example, the standard C library, that we will present shortly, ensures portability across different operating systems.'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Software Stack",src:a(3504).Z,width:"627",height:"405"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/operating-systems/18/Lab/Software%20Stack/quiz/software"},"Quiz")),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/overview"},"Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/modern-sw-stack"},"Modern Software Stacks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/basic-syscall"},"Basic System Calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/syscall-wrapper"},"System Call Wrapper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/common-functions"},"Common Functions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/libc"},"Libraries and libc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/static-dynamic"},"Statically-linked and Dynamically-linked Libraries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/libcall-syscall"},"Library calls vs system calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/high-level-lang"},"High-Level Languages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/app-investigate"},"App Investigation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/operating-systems/18/Lab/Software%20Stack/arena"},"Arena"))))}m.isMDXComponent=!0},4084:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hardware-software-98463c6b754c2d0e75ccc886451176e6.svg"},3504:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/software-stack-ffefaf1db325c303dbc9909b608b58a5.svg"}}]);