(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,m=s["".concat(l,".").concat(p)]||s[p]||u[p]||b;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<b;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},217:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(1176)),l={id:"button",title:"Button"},o={unversionedId:"button",id:"version-0.64/button",isDocsHomePage:!1,title:"Button",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/versioned_docs/version-0.64/button.md",slug:"/button",permalink:"/docs/button",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.64/button.md",version:"0.64",lastUpdatedAt:1615576460,sidebar:"version-0.64/components",previous:{title:"ActivityIndicator",permalink:"/docs/activityindicator"},next:{title:"FlatList",permalink:"/docs/flatlist"}},i=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:'<div class="label required basic">Required</div><strong><code>onPress</code></strong>',id:"requiredonpress",children:[]},{value:'<div class="label required basic">Required</div><strong><code>title</code></strong>',id:"requiredtitle",children:[]},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:'<code>hasTVPreferredFocus</code> <div class="label tv">TV</div>',id:"hastvpreferredfocus-tv",children:[]},{value:'<code>nextFocusDown</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusdown-androidtv",children:[]},{value:'<code>nextFocusForward</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusforward-androidtv",children:[]},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusleft-androidtv",children:[]},{value:'<code>nextFocusRight</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusright-androidtv",children:[]},{value:'<code>nextFocusUp</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusup-androidtv",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:'<code>touchSoundDisabled</code> <div class="label android">Android</div>',id:"touchsounddisabled-android",children:[]}]}],c={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A basic button component that should render nicely on any platform. Supports a minimal level of customization."),Object(b.b)("p",null,"If this button doesn't look right for your app, you can build your own button using ",Object(b.b)("a",{parentName:"p",href:"touchableopacity"},"TouchableOpacity")," or ",Object(b.b)("a",{parentName:"p",href:"touchablewithoutfeedback"},"TouchableWithoutFeedback"),". For inspiration, look at the ",Object(b.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js"},"source code for this button component"),". Or, take a look at the ",Object(b.b)("a",{parentName:"p",href:"https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button"},"wide variety of button components built by the community"),"."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>\n')),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"Button Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Button%2C%20View%2C%20SafeAreaView%2C%20Text%2C%20Alert%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Separator%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%0A)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20The%20title%20and%20onPress%20handler%20are%20required.%20It%20is%20recommended%20to%20set%20accessibilityLabel%20to%20help%20make%20your%20app%20usable%20by%20everyone.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Simple%20Button%20pressed')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20Adjust%20the%20color%20in%20a%20way%20that%20looks%20standard%20on%20each%20platform.%20On%20%20iOS%2C%20the%20color%20prop%20controls%20the%20color%20of%20the%20text.%20On%20Android%2C%20the%20color%20adjusts%20the%20background%20color%20of%20the%20button.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20color%3D%22%23f194ff%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Button%20with%20adjusted%20color%20pressed')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20All%20interaction%20for%20the%20component%20are%20disabled.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Cannot%20press%20this%20one')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20This%20layout%20strategy%20lets%20the%20title%20define%20the%20width%20of%20the%20button.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.fixToText%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20button%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Left%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20button%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Right%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FSafeAreaView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20marginHorizontal%3A%2016%2C%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%7D%2C%0A%20%20fixToText%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"requiredonpress"},Object(b.b)("div",{class:"label required basic"},"Required"),Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"onPress"))),Object(b.b)("p",null,"Handler to be called when the user taps the button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function(",Object(b.b)("a",{parentName:"td",href:"pressevent"},"PressEvent"),")")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"requiredtitle"},Object(b.b)("div",{class:"label required basic"},"Required"),Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"title"))),Object(b.b)("p",null,"Text to display inside the button. On Android the given title will be converted to the uppercased form."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"accessibilitylabel"},Object(b.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(b.b)("p",null,"Text to display for blindness accessibility features."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"color"},Object(b.b)("inlineCode",{parentName:"h3"},"color")),Object(b.b)("p",null,"Color of the text (iOS), or background color of the button (Android)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"colors"},"color")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("ins",{style:{background:"#2196F3"},className:"color-box"})," `'#2196F3'` ",Object(b.b)("div",{className:"label android"},"Android"),Object(b.b)("hr",null),Object(b.b)("ins",{style:{background:"#007AFF"},className:"color-box"})," ",Object(b.b)("inlineCode",{parentName:"td"},"'#007AFF'")," ",Object(b.b)("div",{className:"label ios"},"iOS"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", disable all interactions for this component."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hastvpreferredfocus-tv"},Object(b.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")," ",Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"TV preferred focus."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusdown-androidtv"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusDown")," ",Object(b.b)("div",{class:"label android"},"Android"),Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates down. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusforward-androidtv"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusForward")," ",Object(b.b)("div",{class:"label android"},"Android"),Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates forward. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusleft-androidtv"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")," ",Object(b.b)("div",{class:"label android"},"Android"),Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates left. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusright-androidtv"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusRight")," ",Object(b.b)("div",{class:"label android"},"Android"),Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates right. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusup-androidtv"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusUp")," ",Object(b.b)("div",{class:"label android"},"Android"),Object(b.b)("div",{class:"label tv"},"TV")),Object(b.b)("p",null,"Designates the next view to receive focus when the user navigates up. See the ",Object(b.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp"},"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"testid"},Object(b.b)("inlineCode",{parentName:"h3"},"testID")),Object(b.b)("p",null,"Used to locate this view in end-to-end tests."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"touchsounddisabled-android"},Object(b.b)("inlineCode",{parentName:"h3"},"touchSoundDisabled")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", doesn't play system sound on touch."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))))}d.isMDXComponent=!0}}]);