"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[373],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(b,r(r({ref:n},d),{},{components:t})):a.createElement(b,r({ref:n},d))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const i={},r="Statically-linked and Dynamically-linked Libraries",o={unversionedId:"Lab/Software Stack/static-dynamic",id:"Lab/Software Stack/static-dynamic",title:"Statically-linked and Dynamically-linked Libraries",description:"Libraries can be statically-linked or dynamically-linked, creating statically-linked executables and dynamically-linked executables.",source:"@site/docs/Lab/Software Stack/static-dynamic.md",sourceDirName:"Lab/Software Stack",slug:"/Lab/Software Stack/static-dynamic",permalink:"/operating-systems/18/Lab/Software Stack/static-dynamic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Libraries and libc",permalink:"/operating-systems/18/Lab/Software Stack/libc"},next:{title:"Library calls vs system calls",permalink:"/operating-systems/18/Lab/Software Stack/libcall-syscall"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"statically-linked-and-dynamically-linked-libraries"},"Statically-linked and Dynamically-linked Libraries"),(0,l.kt)("p",null,"Libraries can be statically-linked or dynamically-linked, creating statically-linked executables and dynamically-linked executables.\nTypically, the executables found in modern operating systems are dynamically-linked, given their reduced size and ability to share libraries at runtime."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"support/static-dynamic/"),' folder stores the implementation of a simple "Hello, World!"-printing program that uses both static and dynamic linking of libraries.\nLet\'s build and run the two executables:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/static-dynamic$ ls\nhello.c  Makefile\n\nstudent@os:~/.../lab/support/static-dynamic$ make\ncc -Wall   -c -o hello.o hello.c\ncc   hello.o   -o hello\ncc -static -o hello_static hello.o\n\nstudent@os:~/.../lab/support/static-dynamic$ ls -lh\ntotal 852K\n-rwxrwxr-x 1 razvan razvan 8.2K Aug  2 15:53 hello\n-rw-rw-r-- 1 razvan razvan   76 Aug  2 15:51 hello.c\n-rw-rw-r-- 1 razvan razvan 1.6K Aug  2 15:53 hello.o\n-rwxrwxr-x 1 razvan razvan 827K Aug  2 15:53 hello_static\n-rw-rw-r-- 1 razvan razvan  237 Aug  2 15:53 Makefile\n\nstudent@os:~/.../lab/support/static-dynamic$ ./hello\nHello, World!\n\nstudent@os:~/.../lab/support/static-dynamic$ ./hello_static\nHello, World!\n")),(0,l.kt)("p",null,"The two executables (",(0,l.kt)("inlineCode",{parentName:"p"},"hello")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hello_static"),") behave similarly, despite having vastly different sizes (",(0,l.kt)("inlineCode",{parentName:"p"},"8.2K")," vs. ",(0,l.kt)("inlineCode",{parentName:"p"},"827K")," - 100 times larger)."),(0,l.kt)("p",null,"We use ",(0,l.kt)("inlineCode",{parentName:"p"},"nm")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ldd")," to catch differences between the two types of resulting executables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/static-dynamic$ ldd hello\n        linux-vdso.so.1 (0x00007ffc8d9b2000)\n        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f10d1d88000)\n        /lib64/ld-linux-x86-64.so.2 (0x00007f10d237b000)\n\nstudent@os:~/.../lab/support/static-dynamic$ ldd hello_static\n        not a dynamic executable\n\nstudent@os:~/.../lab/support/static-dynamic$ nm hello | wc -l\n33\n\nstudent@os:~/.../lab/support/static-dynamic$ nm hello_static | wc -l\n1674\n")),(0,l.kt)("p",null,"The dynamic executable references the dynamically-linked libc library (",(0,l.kt)("inlineCode",{parentName:"p"},"/lib/x86_64-linux-gnu/libc.so.6"),"), while the statically-linked executable has no references.\nAlso, given the statically-linked executable integrated entire parts of statically-linked libraries, there are many more symbols than in the case of a dynamically-linked executable (",(0,l.kt)("inlineCode",{parentName:"p"},"1674")," vs. ",(0,l.kt)("inlineCode",{parentName:"p"},"33"),")."),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"strace")," to see that there are differences in the preparatory system calls for each type of executables.\nFor the dynamically-linked executable, the dynamically-linked library (",(0,l.kt)("inlineCode",{parentName:"p"},"/lib/x86_64-linux-gnu/libc.so.6"),") is opened during runtime:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/static-dynamic$ strace ./hello\nexecve("./hello", ["./hello"], 0x7ffc409c6640 /* 66 vars */) = 0\nbrk(NULL)                               = 0x55a72eda6000\naccess("/etc/ld.so.nohwcap", F_OK)      = -1 ENOENT (No such file or directory)\naccess("/etc/ld.so.preload", R_OK)      = -1 ENOENT (No such file or directory)\nopenat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3\nfstat(3, {st_mode=S_IFREG|0644, st_size=198014, ...}) = 0\nmmap(NULL, 198014, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f3136a41000\nclose(3)                                = 0\naccess("/etc/ld.so.nohwcap", F_OK)      = -1 ENOENT (No such file or directory)\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3\nread(3, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\35\\2\\0\\0\\0\\0\\0"..., 832) = 832\nfstat(3, {st_mode=S_IFREG|0755, st_size=2030928, ...}) = 0\nmmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f3136a3f000\nmmap(NULL, 4131552, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f3136458000\nmprotect(0x7f313663f000, 2097152, PROT_NONE) = 0\nmmap(0x7f313683f000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1e7000) = 0x7f313683f000\nmmap(0x7f3136845000, 15072, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f3136845000\nclose(3)                                = 0\narch_prctl(ARCH_SET_FS, 0x7f3136a404c0) = 0\nmprotect(0x7f313683f000, 16384, PROT_READ) = 0\nmprotect(0x55a72d1bb000, 4096, PROT_READ) = 0\nmprotect(0x7f3136a72000, 4096, PROT_READ) = 0\nmunmap(0x7f3136a41000, 198014)          = 0\nfstat(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 18), ...}) = 0\nbrk(NULL)                               = 0x55a72eda6000\nbrk(0x55a72edc7000)                     = 0x55a72edc7000\nwrite(1, "Hello, World!\\n", 14Hello, World!\n)         = 14\nexit_group(0)                           = ?\n+++ exited with 0 +++\n\nstudent@os:~/.../lab/support/static-dynamic$ strace ./hello_static\nexecve("./hello_static", ["./hello_static"], 0x7ffc9fd45400 /* 66 vars */) = 0\nbrk(NULL)                               = 0xff8000\nbrk(0xff91c0)                           = 0xff91c0\narch_prctl(ARCH_SET_FS, 0xff8880)       = 0\nuname({sysname="Linux", nodename="yggdrasil", ...}) = 0\nreadlink("/proc/self/exe", "/home/razvan/school/so/operating"..., 4096) = 116\nbrk(0x101a1c0)                          = 0x101a1c0\nbrk(0x101b000)                          = 0x101b000\naccess("/etc/ld.so.nohwcap", F_OK)      = -1 ENOENT (No such file or directory)\nfstat(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 18), ...}) = 0\nwrite(1, "Hello, World!\\n", 14Hello, World!\n)         = 14\nexit_group(0)                           = ?\n+++ exited with 0 +++\n')),(0,l.kt)("p",null,"Similarly, we can investigate a system executable (",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/ls"),") to see that indeed all referenced dynamically-linked libraries are opened (via the ",(0,l.kt)("inlineCode",{parentName:"p"},"openat")," system call) at runtime:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/static-dynamic$ ldd $(which ls)\n    linux-vdso.so.1 (0x00007ffc3bdf3000)\n    libselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1 (0x00007f092bd88000)\n    libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f092b997000)\n    libpcre.so.3 => /lib/x86_64-linux-gnu/libpcre.so.3 (0x00007f092b726000)\n    libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f092b522000)\n    /lib64/ld-linux-x86-64.so.2 (0x00007f092c1d2000)\n    libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f092b303000)\n\nstudent@os:~/.../lab/support/static-dynamic$ strace -e openat ls\nopenat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libselinux.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpcre.so.3", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libdl.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpthread.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/proc/filesystems", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/locale/locale-archive", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, ".", O_RDONLY|O_NONBLOCK|O_CLOEXEC|O_DIRECTORY) = 3\ncommunity  docs  _index.html  search.md\n+++ exited with 0 +++\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/operating-systems/18/Lab/Software%20Stack/quiz/libs"},"Quiz")))}u.isMDXComponent=!0}}]);