(window.webpackJsonp=window.webpackJsonp||[]).push([[762],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,s=u["".concat(b,".").concat(d)]||u[d]||m[d]||r;return a?l.a.createElement(s,i(i({ref:t},o),{},{components:a})):l.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<r;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},857:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(8),r=(a(0),a(1176)),b={id:"animatedvalue",title:"Animated.Value"},i={unversionedId:"animatedvalue",id:"animatedvalue",isDocsHomePage:!1,title:"Animated.Value",description:"Standard value for driving animations. One Animated.Value can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling setValue) will stop any previous ones.",source:"@site/../docs/animatedvalue.md",slug:"/animatedvalue",permalink:"/docs/next/animatedvalue",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/animatedvalue.md",version:"current",lastUpdatedAt:1588592798,sidebar:"api",previous:{title:"Animated",permalink:"/docs/next/animated"},next:{title:"Animated.ValueXY",permalink:"/docs/next/animatedvaluexy"}},c=[{value:"Methods",id:"methods",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[]},{value:"<code>setOffset()</code>",id:"setoffset",children:[]},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[]},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[]},{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[]},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[]},{value:"<code>interpolate()</code>",id:"interpolate",children:[]},{value:"<code>animate()</code>",id:"animate",children:[]},{value:"<code>stopTracking()</code>",id:"stoptracking",children:[]},{value:"<code>track()</code>",id:"track",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Standard value for driving animations. One ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Value")," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",Object(r.b)("inlineCode",{parentName:"p"},"setValue"),") will stop any previous ones."),Object(r.b)("p",null,"Typically initialized with ",Object(r.b)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"setvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"setValue(value);\n")),Object(r.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"value"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Value")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"setOffset(offset);\n")),Object(r.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(r.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"offset"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Offset value")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flattenoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"flattenOffset();\n")),Object(r.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"extractoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"extractOffset();\n")),Object(r.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"addlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"addListener(callback);\n")),Object(r.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(r.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"The callback function which will receive an object with a ",Object(r.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removelistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"removeListener(id);\n")),Object(r.b)("p",null,"Unregister a listener. The ",Object(r.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(r.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"id"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Id for the listener being removed.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removealllisteners"},Object(r.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"removeAllListeners();\n")),Object(r.b)("p",null,"Remove all registered listeners."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stopanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"stopAnimation([callback]);\n")),Object(r.b)("p",null,"Stops any running animation or tracking. ",Object(r.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"A function that will receive the final value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resetanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"resetAnimation([callback]);\n")),Object(r.b)("p",null,"Stops any animation and resets the value to its original."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"A function that will receive the original value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"interpolate"},Object(r.b)("inlineCode",{parentName:"h3"},"interpolate()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"interpolate(config);\n")),Object(r.b)("p",null,"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."),Object(r.b)("p",null,"See ",Object(r.b)("inlineCode",{parentName:"p"},"AnimatedInterpolation.js")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config"),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See below.")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"config")," object is composed of the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inputRange"),": an array of numbers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"outputRange"),": an array of numbers or strings"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"easing")," (optional): a function that returns a number, given an input number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolate")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolateLeft")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolateRight")," (optional): a string such as 'extend', 'identity', or 'clamp'")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animate"},Object(r.b)("inlineCode",{parentName:"h3"},"animate()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"animate(animation, callback);\n")),Object(r.b)("p",null,"Typically only used internally, but could be used by a custom Animation class."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"animation"),Object(r.b)("td",{parentName:"tr",align:null},"Animation"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See ",Object(r.b)("inlineCode",{parentName:"td"},"Animation.js"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Callback function.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stoptracking"},Object(r.b)("inlineCode",{parentName:"h3"},"stopTracking()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"stopTracking();\n")),Object(r.b)("p",null,"Typically only used internally."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"track"},Object(r.b)("inlineCode",{parentName:"h3"},"track()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"track(tracking);\n")),Object(r.b)("p",null,"Typically only used internally."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"tracking"),Object(r.b)("td",{parentName:"tr",align:null},"AnimatedNode"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See ",Object(r.b)("inlineCode",{parentName:"td"},"AnimatedNode.js"))))))}p.isMDXComponent=!0}}]);