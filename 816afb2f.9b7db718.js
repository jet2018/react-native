(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1177:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1178:function(e,t,n){"use strict";var a=n(0),r=n(1179);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1179:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1180:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1178),s=n(1177),l=n(68),i=n.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,A=m.setTabGroupChoices,f=Object(a.useState)(l),v=f[0],O=f[1],g=a.Children.toArray(e.children);if(null!=d){var j=h[d];null!=j&&j!==v&&p.some((function(e){return e.value===j}))&&O(j)}var y=function(e){O(e),null!=d&&A(d,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},1181:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1182:function(e,t,n){"use strict";var a=n(7),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),s=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},665:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(1176)),s=n(1180),l=n(1181),i=n(1182),c={id:"panresponder",title:"PanResponder"},u={unversionedId:"panresponder",id:"version-0.64/panresponder",isDocsHomePage:!1,title:"PanResponder",description:"PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.",source:"@site/versioned_docs/version-0.64/panresponder.md",slug:"/panresponder",permalink:"/docs/panresponder",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.64/panresponder.md",version:"0.64",lastUpdatedAt:1615576460,sidebar:"version-0.64/api",previous:{title:"Linking",permalink:"/docs/linking"},next:{title:"PixelRatio",permalink:"/docs/pixelratio"}},p=[{value:"Usage Pattern",id:"usage-pattern",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>create()</code>",id:"create",children:[]}]}],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," holds an ",Object(o.b)("inlineCode",{parentName:"p"},"InteractionManager")," handle to block long-running JS events from interrupting active gestures."),Object(o.b)("p",null,"It provides a predictable wrapper of the responder handlers provided by the ",Object(o.b)("a",{parentName:"p",href:"/docs/gesture-responder-system"},"gesture responder system"),". For each handler, it provides a new ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object alongside the native event object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onPanResponderMove: (event, gestureState) => {}\n")),Object(o.b)("p",null,"A native event is a synthetic touch event with form of ",Object(o.b)("a",{parentName:"p",href:"pressevent"},"PressEvent"),"."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object has the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stateID")," - ID of the gestureState- persisted as long as there's at least one touch on screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveX")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveY")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dx")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dy")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vx")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vy")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"numberActiveTouches")," - Number of touches currently on screen")),Object(o.b)("h2",{id:"usage-pattern"},"Usage Pattern"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const ExampleComponent = () => {\n  const panResponder = React.useRef(\n    PanResponder.create({\n      // Ask to be the responder:\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // The gesture has started. Show visual feedback so the user knows\n        // what is happening!\n        // gestureState.d{x,y} will be set to zero now\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // The most recent move distance is gestureState.move{X,Y}\n        // The accumulated gesture distance since becoming responder is\n        // gestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) =>\n        true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // The user has released all touches while this view is the\n        // responder. This typically means a gesture has succeeded\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // Another component has become the responder, so this gesture\n        // should be cancelled\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // Returns whether this component should block native components from becoming the JS\n        // responder. Returns true by default. Is currently only supported on android.\n        return true;\n      }\n    })\n  ).current;\n\n  return <View {...panResponder.panHandlers} />;\n};\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," works with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API to help build complex gestures in the UI. The following example contains an animated ",Object(o.b)("inlineCode",{parentName:"p"},"View")," component which can be dragged freely across the screen"),Object(o.b)(s.a,{groupId:"syntax",defaultValue:i.a.defaultSyntax,values:i.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20useRef(%0A%20%20%20%20PanResponder.create(%7B%0A%20%20%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20pan.setOffset(%7B%0A%20%20%20%20%20%20%20%20%20%20x%3A%20pan.x._value%2C%0A%20%20%20%20%20%20%20%20%20%20y%3A%20pan.y._value%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20onPanResponderMove%3A%20Animated.event(%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20dx%3A%20pan.x%2C%20dy%3A%20pan.y%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20pan.flattenOffset()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20).current%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20pan.x%20%7D%2C%20%7B%20translateY%3A%20pan.y%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20titleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20lineHeight%3A%2024%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20width%3A%20150%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%2C%0A%20%20%20%20borderRadius%3A%205%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20pan%20%3D%20new%20Animated.ValueXY()%3B%0A%20%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.pan.setOffset(%7B%0A%20%20%20%20%20%20%20%20x%3A%20this.pan.x._value%2C%0A%20%20%20%20%20%20%20%20y%3A%20this.pan.y._value%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%20dx%3A%20this.pan.x%2C%20dy%3A%20this.pan.y%20%7D%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.pan.flattenOffset()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20this.pan.x%20%7D%2C%20%7B%20translateY%3A%20this.pan.y%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%7B...this.panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20titleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20lineHeight%3A%2024%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20width%3A%20150%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%2C%0A%20%20%20%20borderRadius%3A%205%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("p",null,"Try the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js"},"PanResponder example in RNTester"),"."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static create(config)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config ",Object(o.b)("div",{className:"label basic required"},"Required")),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"Refer below")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," object provides enhanced versions of all of the responder callbacks that provide not only the ",Object(o.b)("a",{parentName:"p",href:"pressevent"},Object(o.b)("inlineCode",{parentName:"a"},"PressEvent")),", but also the ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," gesture state, by replacing the word ",Object(o.b)("inlineCode",{parentName:"p"},"Responder")," with ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," in each of the typical ",Object(o.b)("inlineCode",{parentName:"p"},"onResponder*")," callbacks. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," object would look like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderReject: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderGrant: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderStart: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderEnd: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderRelease: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderMove: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminate: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminationRequest: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onShouldBlockNativeResponder: (e, gestureState) => {...}"))),Object(o.b)("p",null,"In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well."),Object(o.b)("p",null,"Be careful with ",Object(o.b)("inlineCode",{parentName:"p"},"onStartShould*")," callbacks. They only reflect updated ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder."))}b.isMDXComponent=!0}}]);