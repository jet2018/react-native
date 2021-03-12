(window.webpackJsonp=window.webpackJsonp||[]).push([[1034],{1117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(1176)),o={id:"interactionmanager",title:"InteractionManager"},c={unversionedId:"interactionmanager",id:"version-0.60/interactionmanager",isDocsHomePage:!1,title:"InteractionManager",description:"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly.",source:"@site/versioned_docs/version-0.60/interactionmanager.md",slug:"/interactionmanager",permalink:"/docs/0.60/interactionmanager",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/interactionmanager.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"Image Style Props",permalink:"/docs/0.60/image-style-props"},next:{title:"Keyboard",permalink:"/docs/0.60/keyboard"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>runAfterInteractions()</code>",id:"runafterinteractions",children:[]},{value:"<code>createInteractionHandle()</code>",id:"createinteractionhandle",children:[]},{value:"<code>clearInteractionHandle()</code>",id:"clearinteractionhandle",children:[]},{value:"<code>setDeadline()</code>",id:"setdeadline",children:[]}]},{value:"Properties",id:"properties",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly."),Object(i.b)("p",null,"Applications can schedule tasks to run after interactions with the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n")),Object(i.b)("p",null,"Compare this to other scheduling alternatives:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"requestAnimationFrame(): for code that animates a view over time."),Object(i.b)("li",{parentName:"ul"},"setImmediate/setTimeout(): run code later, note this may delay animations."),Object(i.b)("li",{parentName:"ul"},"runAfterInteractions(): run code later, without delaying active animations.")),Object(i.b)("p",null,"The touch handling system considers one or more active touches to be an 'interaction' and will delay ",Object(i.b)("inlineCode",{parentName:"p"},"runAfterInteractions()")," callbacks until all touches have ended or been cancelled."),Object(i.b)("p",null,"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"var handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"runAfterInteractions")," takes either a plain callback function, or a ",Object(i.b)("inlineCode",{parentName:"p"},"PromiseTask")," object with a ",Object(i.b)("inlineCode",{parentName:"p"},"gen")," method that returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),". If a ",Object(i.b)("inlineCode",{parentName:"p"},"PromiseTask")," is supplied, then it is fully resolved (including asynchronous dependencies that also schedule more tasks via ",Object(i.b)("inlineCode",{parentName:"p"},"runAfterInteractions"),") before starting on the next task that might have been queued up synchronously earlier."),Object(i.b)("p",null,"By default, queued tasks are executed together in a loop in one ",Object(i.b)("inlineCode",{parentName:"p"},"setImmediate")," batch. If ",Object(i.b)("inlineCode",{parentName:"p"},"setDeadline")," is called with a positive number, then tasks will only be executed until the deadline (in terms of js event loop run time) approaches, at which point execution will yield via setTimeout, allowing events such as touches to start interactions and block queued tasks from executing, making apps more responsive."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"runafterinteractions"},Object(i.b)("inlineCode",{parentName:"h3"},"runAfterInteractions()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static runAfterInteractions(task)\n")),Object(i.b)("p",null,'Schedule a function to run after all interactions have completed. Returns a cancellable "promise".'),Object(i.b)("hr",null),Object(i.b)("h3",{id:"createinteractionhandle"},Object(i.b)("inlineCode",{parentName:"h3"},"createInteractionHandle()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static createInteractionHandle()\n")),Object(i.b)("p",null,"Notify manager that an interaction has started."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"clearinteractionhandle"},Object(i.b)("inlineCode",{parentName:"h3"},"clearInteractionHandle()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static clearInteractionHandle(handle)\n")),Object(i.b)("p",null,"Notify manager that an interaction has completed."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setdeadline"},Object(i.b)("inlineCode",{parentName:"h3"},"setDeadline()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static setDeadline(deadline)\n")),Object(i.b)("p",null,"A positive number will use setTimeout to schedule any tasks after the eventLoopRunningTime hits the deadline value, otherwise all tasks will be executed in one setImmediate batch (default)."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("hr",null))}u.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);