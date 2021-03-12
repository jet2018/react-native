(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1176:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),s=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,j=p["".concat(b,".").concat(d)]||p[d]||u[d]||c;return t?i.a.createElement(j,r(r({ref:n},o),{},{components:t})):i.a.createElement(j,r({ref:n},o))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,b[1]=r;for(var o=2;o<c;o++)b[o]=t[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},553:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(8),c=(t(0),t(1176)),b={id:"easing",title:"Easing"},r={unversionedId:"easing",id:"version-0.60/easing",isDocsHomePage:!1,title:"Easing",description:"The Easing module implements common easing functions. This module is used by Animated.timing() to convey physically believable motion in animations.",source:"@site/versioned_docs/version-0.60/easing.md",slug:"/easing",permalink:"/docs/0.60/easing",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/easing.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"Dimensions",permalink:"/docs/0.60/dimensions"},next:{title:"\ud83d\udea7 ImageEditor",permalink:"/docs/0.60/imageeditor"}},l=[{value:"Predefined animations",id:"predefined-animations",children:[]},{value:"Standard functions",id:"standard-functions",children:[]},{value:"Additional functions",id:"additional-functions",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>step0()</code>",id:"step0",children:[]},{value:"<code>step1()</code>",id:"step1",children:[]},{value:"<code>linear()</code>",id:"linear",children:[]},{value:"<code>ease()</code>",id:"ease",children:[]},{value:"<code>quad()</code>",id:"quad",children:[]},{value:"<code>cubic()</code>",id:"cubic",children:[]},{value:"<code>poly()</code>",id:"poly",children:[]},{value:"<code>sin()</code>",id:"sin",children:[]},{value:"<code>circle()</code>",id:"circle",children:[]},{value:"<code>exp()</code>",id:"exp",children:[]},{value:"<code>elastic()</code>",id:"elastic",children:[]},{value:"<code>back()</code>",id:"back",children:[]},{value:"<code>bounce()</code>",id:"bounce",children:[]},{value:"<code>bezier()</code>",id:"bezier",children:[]},{value:"<code>in()</code>",id:"in",children:[]},{value:"<code>out()</code>",id:"out",children:[]},{value:"<code>inOut()</code>",id:"inout",children:[]}]}],o={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Easing")," module implements common easing functions. This module is used by ",Object(c.b)("a",{parentName:"p",href:"/docs/0.60/animated#timing"},"Animated.timing()")," to convey physically believable motion in animations."),Object(c.b)("p",null,"You can find a visualization of some common easing functions at ",Object(c.b)("a",{parentName:"p",href:"http://easings.net/"},"http://easings.net/")),Object(c.b)("h3",{id:"predefined-animations"},"Predefined animations"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Easing")," module provides several predefined animations through the following methods:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#back"},Object(c.b)("inlineCode",{parentName:"a"},"back"))," provides a basic animation where the object goes slightly back before moving forward"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#bounce"},Object(c.b)("inlineCode",{parentName:"a"},"bounce"))," provides a bouncing animation"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#ease"},Object(c.b)("inlineCode",{parentName:"a"},"ease"))," provides a basic inertial animation"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#elastic"},Object(c.b)("inlineCode",{parentName:"a"},"elastic"))," provides a basic spring interaction")),Object(c.b)("h3",{id:"standard-functions"},"Standard functions"),Object(c.b)("p",null,"Three standard easing functions are provided:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#linear"},Object(c.b)("inlineCode",{parentName:"a"},"linear"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#quad"},Object(c.b)("inlineCode",{parentName:"a"},"quad"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#cubic"},Object(c.b)("inlineCode",{parentName:"a"},"cubic")))),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"/docs/0.60/easing#poly"},Object(c.b)("inlineCode",{parentName:"a"},"poly"))," function can be used to implement quartic, quintic, and other higher power functions."),Object(c.b)("h3",{id:"additional-functions"},"Additional functions"),Object(c.b)("p",null,"Additional mathematical functions are provided by the following methods:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#bezier"},Object(c.b)("inlineCode",{parentName:"a"},"bezier"))," provides a cubic bezier curve"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#circle"},Object(c.b)("inlineCode",{parentName:"a"},"circle"))," provides a circular function"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#sin"},Object(c.b)("inlineCode",{parentName:"a"},"sin"))," provides a sinusoidal function"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#exp"},Object(c.b)("inlineCode",{parentName:"a"},"exp"))," provides an exponential function")),Object(c.b)("p",null,"The following helpers are used to modify other easing functions."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#in"},Object(c.b)("inlineCode",{parentName:"a"},"in"))," runs an easing function forwards"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#inout"},Object(c.b)("inlineCode",{parentName:"a"},"inOut"))," makes any easing function symmetrical"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.60/easing#out"},Object(c.b)("inlineCode",{parentName:"a"},"out"))," runs an easing function backwards")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"step0"},Object(c.b)("inlineCode",{parentName:"h3"},"step0()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static step0(n)\n")),Object(c.b)("p",null,"A stepping function, returns 1 for any positive value of ",Object(c.b)("inlineCode",{parentName:"p"},"n"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"step1"},Object(c.b)("inlineCode",{parentName:"h3"},"step1()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static step1(n)\n")),Object(c.b)("p",null,"A stepping function, returns 1 if ",Object(c.b)("inlineCode",{parentName:"p"},"n")," is greater than or equal to 1."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"linear"},Object(c.b)("inlineCode",{parentName:"h3"},"linear()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static linear(t)\n")),Object(c.b)("p",null,"A linear function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t"),". Position correlates to elapsed time one to one."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://cubic-bezier.com/#0,0,1,1"},"http://cubic-bezier.com/#0,0,1,1")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ease"},Object(c.b)("inlineCode",{parentName:"h3"},"ease()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static ease(t)\n")),Object(c.b)("p",null,"A basic inertial interaction, similar to an object slowly accelerating to speed."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://cubic-bezier.com/#.42,0,1,1"},"http://cubic-bezier.com/#.42,0,1,1")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"quad"},Object(c.b)("inlineCode",{parentName:"h3"},"quad()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static quad(t)\n")),Object(c.b)("p",null,"A quadratic function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t * t"),". Position equals the square of elapsed time."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuad"},"http://easings.net/#easeInQuad")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"cubic"},Object(c.b)("inlineCode",{parentName:"h3"},"cubic()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static cubic(t)\n")),Object(c.b)("p",null,"A cubic function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t * t * t"),". Position equals the cube of elapsed time."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInCubic"},"http://easings.net/#easeInCubic")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"poly"},Object(c.b)("inlineCode",{parentName:"h3"},"poly()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static poly(n)\n")),Object(c.b)("p",null,"A power function. Position is equal to the Nth power of elapsed time."),Object(c.b)("p",null,"n = 4: ",Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuart"},"http://easings.net/#easeInQuart")," n = 5: ",Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuint"},"http://easings.net/#easeInQuint")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sin"},Object(c.b)("inlineCode",{parentName:"h3"},"sin()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static sin(t)\n")),Object(c.b)("p",null,"A sinusoidal function."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInSine"},"http://easings.net/#easeInSine")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"circle"},Object(c.b)("inlineCode",{parentName:"h3"},"circle()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static circle(t)\n")),Object(c.b)("p",null,"A circular function."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInCirc"},"http://easings.net/#easeInCirc")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"exp"},Object(c.b)("inlineCode",{parentName:"h3"},"exp()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static exp(t)\n")),Object(c.b)("p",null,"An exponential function."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInExpo"},"http://easings.net/#easeInExpo")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"elastic"},Object(c.b)("inlineCode",{parentName:"h3"},"elastic()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static elastic(bounciness)\n")),Object(c.b)("p",null,"A basic elastic interaction, similar to a spring oscillating back and forth."),Object(c.b)("p",null,"Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInElastic"},"http://easings.net/#easeInElastic")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"back"},Object(c.b)("inlineCode",{parentName:"h3"},"back()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static back(s)\n")),Object(c.b)("p",null,"Use with ",Object(c.b)("inlineCode",{parentName:"p"},"Animated.parallel()")," to create a basic effect where the object animates back slightly as the animation starts."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"bounce"},Object(c.b)("inlineCode",{parentName:"h3"},"bounce()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static bounce(t)\n")),Object(c.b)("p",null,"Provides a basic bouncing effect."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"http://easings.net/#easeInBounce"},"http://easings.net/#easeInBounce")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"bezier"},Object(c.b)("inlineCode",{parentName:"h3"},"bezier()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static bezier(x1, y1, x2, y2)\n")),Object(c.b)("p",null,"Provides a cubic bezier curve, equivalent to CSS Transitions' ",Object(c.b)("inlineCode",{parentName:"p"},"transition-timing-function"),"."),Object(c.b)("p",null,"A useful tool to visualize cubic bezier curves can be found at ",Object(c.b)("a",{parentName:"p",href:"http://cubic-bezier.com/"},"http://cubic-bezier.com/")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"in"},Object(c.b)("inlineCode",{parentName:"h3"},"in()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static in easing;\n")),Object(c.b)("p",null,"Runs an easing function forwards."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"out"},Object(c.b)("inlineCode",{parentName:"h3"},"out()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static out(easing)\n")),Object(c.b)("p",null,"Runs an easing function backwards."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inout"},Object(c.b)("inlineCode",{parentName:"h3"},"inOut()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static inOut(easing)\n")),Object(c.b)("p",null,"Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration."))}s.isMDXComponent=!0}}]);