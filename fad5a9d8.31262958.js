(window.webpackJsonp=window.webpackJsonp||[]).push([[1067],{1149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(1176)),o={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},b={unversionedId:"touchablenativefeedback",id:"version-0.62/touchablenativefeedback",isDocsHomePage:!1,title:"TouchableNativeFeedback",description:"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.",source:"@site/versioned_docs/version-0.62/touchablenativefeedback.md",slug:"/touchablenativefeedback",permalink:"/docs/0.62/touchablenativefeedback",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/touchablenativefeedback.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/components",previous:{title:"DrawerLayoutAndroid",permalink:"/docs/0.62/drawerlayoutandroid"},next:{title:"InputAccessoryView",permalink:"/docs/0.62/inputaccessoryview"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>background</code>",id:"background",children:[]},{value:"<code>useForeground</code>",id:"useforeground",children:[]},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[]},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[]},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[]},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[]},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[]},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>SelectableBackground()</code>",id:"selectablebackground",children:[]},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",children:[]},{value:"<code>Ripple()</code>",id:"ripple",children:[]},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",children:[]}]}],i={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback."),Object(l.b)("p",null,"At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set."),Object(l.b)("p",null,"Background drawable of native feedback touchable can be customized with ",Object(l.b)("inlineCode",{parentName:"p"},"background")," property."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"TouchableNativeFeedback Android Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20TouchableNativeFeedback%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20randomHexColor%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%22%23000000%22.replace(%2F0%2Fg%2C%20function()%20%7B%0A%20%20%20%20return%20(~~(Math.random()%20*%2016)).toString(16)%3B%0A%20%20%7D)%3B%0A%7D%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BrippleColor%2C%20setRippleColor%5D%20%3D%20useState(randomHexColor())%3B%0A%20%20const%20%5BrippleOverflow%2C%20setRippleOverflow%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setRippleColor(randomHexColor())%3B%0A%20%20%20%20%20%20%20%20%20%20setRippleOverflow(!rippleOverflow)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple(rippleColor%2C%20rippleOverflow)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.touchable%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETouchableNativeFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20touchable%3A%20%7B%20flex%3A%200.5%2C%20borderColor%3A%20%22black%22%2C%20borderWidth%3A%201%20%7D%2C%0A%20%20text%3A%20%7B%20alignSelf%3A%20%22center%22%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.62/touchablewithoutfeedback#props"},"TouchableWithoutFeedback Props"),"."),Object(l.b)("h3",{id:"background"},Object(l.b)("inlineCode",{parentName:"h3"},"background")),Object(l.b)("p",null,"Determines the type of background drawable that's going to be used to display feedback. It takes an object with ",Object(l.b)("inlineCode",{parentName:"p"},"type")," property and extra data depending on the ",Object(l.b)("inlineCode",{parentName:"p"},"type"),". It's recommended to use one of the static methods to generate that dictionary."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"backgroundPropType"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"useforeground"},Object(l.b)("inlineCode",{parentName:"h3"},"useForeground")),Object(l.b)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),Object(l.b)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hastvpreferredfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(l.b)("p",null,"TV preferred focus (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusdown"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(l.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusforward"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(l.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusleft"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(l.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusright"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(l.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusup"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(l.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"selectablebackground"},Object(l.b)("inlineCode",{parentName:"h3"},"SelectableBackground()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static SelectableBackground()\n")),Object(l.b)("p",null,"Creates an object that represents android theme's default background for selectable elements (?android:attr/selectableItemBackground)."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"selectablebackgroundborderless"},Object(l.b)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static SelectableBackgroundBorderless()\n")),Object(l.b)("p",null,"Creates an object that represent android theme's default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ripple"},Object(l.b)("inlineCode",{parentName:"h3"},"Ripple()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static Ripple(color: string, borderless: boolean)\n")),Object(l.b)("p",null,"Creates an object that represents ripple drawable with specified color (as a string). If property ",Object(l.b)("inlineCode",{parentName:"p"},"borderless")," evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The ripple color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderless"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"If the ripple can render outside its bounds")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"canusenativeforeground"},Object(l.b)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static canUseNativeForeground()\n")))}d.isMDXComponent=!0},1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||l;return a?r.a.createElement(m,b(b({ref:t},i),{},{components:a})):r.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);