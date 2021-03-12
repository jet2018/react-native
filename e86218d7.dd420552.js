(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1069:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1176)),o={id:"vibration",title:"Vibration"},b={unversionedId:"vibration",id:"version-0.60/vibration",isDocsHomePage:!1,title:"Vibration",description:"The Vibration API is exposed at Vibration.vibrate(). The vibration is synchronous so this method will return immediately.",source:"@site/versioned_docs/version-0.60/vibration.md",slug:"/vibration",permalink:"/docs/0.60/vibration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/vibration.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"Transforms",permalink:"/docs/0.60/transforms"},next:{title:"View Style Props",permalink:"/docs/0.60/view-style-props"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>vibrate()</code>",id:"vibrate",children:[]},{value:"<code>cancel()</code>",id:"cancel",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vibration API is exposed at ",Object(i.b)("inlineCode",{parentName:"p"},"Vibration.vibrate()"),". The vibration is synchronous so this method will return immediately."),Object(i.b)("p",null,"There will be no effect on devices that do not support Vibration, eg. the simulator."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note for Android:")," add ",Object(i.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The vibration duration in iOS is not configurable"),", so there are some differences with Android. In Android, if ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," is a number, it specifies the vibration duration in ms. If ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," is an array, those odd indices are the vibration duration, while the even ones are the separation time."),Object(i.b)("p",null,"In iOS, invoking ",Object(i.b)("inlineCode",{parentName:"p"},"vibrate(duration)")," will ignore the duration and vibrate for a fixed time. While the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," array is used to define the duration between each vibration. See below example for more."),Object(i.b)("p",null,"Repeatable vibration is also supported, the vibration will repeat with defined pattern until ",Object(i.b)("inlineCode",{parentName:"p"},"cancel()")," is called."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const DURATION = 10000;\nconst PATTERN = [1000, 2000, 3000];\n\nVibration.vibrate(DURATION);\n// Android: vibrate for 10s\n// iOS: duration is not configurable, vibrate for fixed time (about 500ms)\n\nVibration.vibrate(PATTERN);\n// Android: wait 1s -> vibrate 2s -> wait 3s\n// iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate\n\nVibration.vibrate(PATTERN, true);\n// Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...\n// iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...\n\nVibration.cancel();\n// Android: vibration stopped\n// iOS: vibration stopped\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"vibrate"},Object(i.b)("inlineCode",{parentName:"h3"},"vibrate()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Vibration.vibrate(pattern: number, Array<number>, repeat: boolean)\n")),Object(i.b)("p",null,"Trigger a vibration with specified ",Object(i.b)("inlineCode",{parentName:"p"},"pattern"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pattern"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"number or Array<number>")),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"Vibration pattern, accept a number or an array of numbers. Default to 400ms.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"repeat"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Repeat vibration pattern until cancel(), default to false.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"cancel"},Object(i.b)("inlineCode",{parentName:"h3"},"cancel()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Vibration.cancel();\n")),Object(i.b)("p",null,"Stop vibration."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Vibration.cancel()\n")))}p.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?a.a.createElement(m,b(b({ref:t},c),{},{components:n})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);