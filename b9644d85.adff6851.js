(window.webpackJsonp=window.webpackJsonp||[]).push([[779],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,A=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return a?r.a.createElement(A,l(l({ref:t},s),{},{components:a})):r.a.createElement(A,l({ref:t},s))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1177:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1178:function(e,t,a){"use strict";var n=a(0),r=a(1179);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1179:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1178),o=a(1177),l=a(68),c=a.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,u=e.groupId,p=e.className,A=Object(i.a)(),m=A.tabGroupChoices,f=A.setTabGroupChoices,O=Object(n.useState)(l),C=O[0],v=O[1],D=n.Children.toArray(e.children);if(null!=u){var h=m[u];null!=h&&h!==C&&d.some((function(e){return e.value===h}))&&v(h)}var E=function(e){v(e),null!=u&&f(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":C===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":C===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},a)}))),t?Object(n.cloneElement)(D.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},D.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}},1181:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1182:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},874:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(1176)),o=a(1180),l=a(1181),c=a(1182),s={id:"vibration",title:"Vibration"},b={unversionedId:"vibration",id:"version-0.62/vibration",isDocsHomePage:!1,title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.62/vibration.md",slug:"/vibration",permalink:"/docs/0.62/vibration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/vibration.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/api",previous:{title:"Transforms",permalink:"/docs/0.62/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.62/usecolorscheme"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>vibrate()</code>",id:"vibrate",children:[]},{value:"<code>cancel()</code>",id:"cancel",children:[]}]}],u={toc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Vibrates the device."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Afunction%20Separator()%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20App%20%3D%20%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%5D%3B%0A%0A%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Afunction%20Separator()%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20class%20App%20extends%20React.Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Android apps should request the ",Object(i.b)("inlineCode",{parentName:"p"},"android.permission.VIBRATE")," permission by adding ",Object(i.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The Vibration API is implemented as a ",Object(i.b)("inlineCode",{parentName:"p"},"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)")," call on iOS.")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"vibrate"},Object(i.b)("inlineCode",{parentName:"h3"},"vibrate()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Vibration.vibrate(?pattern: number | Array<number>, ?repeat: boolean)\n")),Object(i.b)("p",null,"Triggers a vibration with a fixed duration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"On Android,")," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," argument. ",Object(i.b)("strong",{parentName:"p"},"On iOS,")," the vibration duration is fixed at roughly 400 milliseconds."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"vibrate()")," method can take a ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," argument with an array of numbers that represent time in milliseconds. You may set ",Object(i.b)("inlineCode",{parentName:"p"},"repeat")," to true to run through the vibration pattern in a loop until ",Object(i.b)("inlineCode",{parentName:"p"},"cancel()")," is called."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"On Android,")," the odd indices of the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," array represent the vibration duration, while the even ones represent the separation time. ",Object(i.b)("strong",{parentName:"p"},"On iOS,")," the numbers in the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," array represent the separation time, as the vibration duration is fixed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Platform"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pattern"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Vibration duration in milliseconds. Defaults to 400 ms."),Object(i.b)("td",{parentName:"tr",align:null},"Android")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pattern"),Object(i.b)("td",{parentName:"tr",align:null},"Array of numbers"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Vibration pattern as an array of numbers in milliseconds."),Object(i.b)("td",{parentName:"tr",align:null},"Android, iOS")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"repeat"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Repeat vibration pattern until cancel(), default to false."),Object(i.b)("td",{parentName:"tr",align:null},"Android, iOS")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"cancel"},Object(i.b)("inlineCode",{parentName:"h3"},"cancel()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Vibration.cancel();\n")),Object(i.b)("p",null,"Call this to stop vibrating after having invoked ",Object(i.b)("inlineCode",{parentName:"p"},"vibrate()")," with repetition enabled."))}p.isMDXComponent=!0}}]);