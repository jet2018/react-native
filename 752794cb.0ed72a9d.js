(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,s=p["".concat(i,".").concat(h)]||p[h]||u[h]||l;return n?r.a.createElement(s,b(b({ref:t},d),{},{components:n})):r.a.createElement(s,b({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var d=2;d<l;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},612:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),l=(n(0),n(1176)),i={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},b={unversionedId:"drawerlayoutandroid",id:"version-0.60/drawerlayoutandroid",isDocsHomePage:!1,title:"DrawerLayoutAndroid",description:"React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.",source:"@site/versioned_docs/version-0.60/drawerlayoutandroid.md",slug:"/drawerlayoutandroid",permalink:"/docs/0.60/drawerlayoutandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/drawerlayoutandroid.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"DatePickerIOS",permalink:"/docs/0.60/datepickerios"},next:{title:"FlatList",permalink:"/docs/0.60/flatlist"}},o=[{value:"Props",id:"props",children:[{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",children:[]},{value:"<code>drawerPosition</code>",id:"drawerposition",children:[]},{value:"<code>drawerWidth</code>",id:"drawerwidth",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",children:[]},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",children:[]},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",children:[]},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",children:[]},{value:"<code>drawerBackgroundColor</code>",id:"drawerbackgroundcolor",children:[]},{value:"<code>statusBarBackgroundColor</code>",id:"statusbarbackgroundcolor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>openDrawer()</code>",id:"opendrawer",children:[]},{value:"<code>closeDrawer()</code>",id:"closedrawer",children:[]}]}],d={toc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"React component that wraps the platform ",Object(l.b)("inlineCode",{parentName:"p"},"DrawerLayout")," (Android only). The Drawer (typically used for navigation) is rendered with ",Object(l.b)("inlineCode",{parentName:"p"},"renderNavigationView")," and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"drawerPosition")," prop and its width can be set by the ",Object(l.b)("inlineCode",{parentName:"p"},"drawerWidth")," prop."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"render: function() {\n  var navigationView = (\n    <View style={{flex: 1, backgroundColor: '#fff'}}>\n      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>\n    </View>\n  );\n  return (\n    <DrawerLayoutAndroid\n      drawerWidth={300}\n      drawerPosition={DrawerLayoutAndroid.positions.Left}\n      renderNavigationView={() => navigationView}>\n      <View style={{flex: 1, alignItems: 'center'}}>\n        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>\n        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>\n      </View>\n    </DrawerLayoutAndroid>\n  );\n},\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/view#props"},"View Props"),"."),Object(l.b)("h3",{id:"rendernavigationview"},Object(l.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(l.b)("p",null,"The navigation view that will be rendered to the side of the screen and can be pulled in."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerclose"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerClose")),Object(l.b)("p",null,"Function called whenever the navigation view has been closed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerposition"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerPosition")),Object(l.b)("p",null,"Specifies the side of the screen from which the drawer will slide in."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerwidth"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerWidth")),Object(l.b)("p",null,"Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"keyboarddismissmode"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(l.b)("p",null,"Determines whether the keyboard gets dismissed in response to a drag."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'none' (the default), drags do not dismiss the keyboard."),Object(l.b)("li",{parentName:"ul"},"'on-drag', the keyboard is dismissed when a drag begins.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('none', 'on-drag')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerlockmode"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerLockMode")),Object(l.b)("p",null,"Specifies the lock mode of the drawer. The drawer can be locked in 3 states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"unlocked (default), meaning that the drawer will respond (open/close) to touch gestures."),Object(l.b)("li",{parentName:"ul"},"locked-closed, meaning that the drawer will stay closed and not respond to gestures."),Object(l.b)("li",{parentName:"ul"},"locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (",Object(l.b)("inlineCode",{parentName:"li"},"openDrawer"),"/",Object(l.b)("inlineCode",{parentName:"li"},"closeDrawer"),").")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('unlocked', 'locked-closed', 'locked-open')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondraweropen"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerOpen")),Object(l.b)("p",null,"Function called whenever the navigation view has been opened."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerslide"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerSlide")),Object(l.b)("p",null,"Function called whenever there is an interaction with the navigation view."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerstatechanged"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerStateChanged")),Object(l.b)("p",null,"Function called when the drawer state has changed. The drawer can be in 3 states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"idle, meaning there is no interaction with the navigation view happening at the time"),Object(l.b)("li",{parentName:"ul"},"dragging, meaning there is currently an interaction with the navigation view"),Object(l.b)("li",{parentName:"ul"},"settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerbackgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerBackgroundColor")),Object(l.b)("p",null,"Specifies the background color of the drawer. The default value is ",Object(l.b)("inlineCode",{parentName:"p"},"white"),". If you want to set the opacity of the drawer, use rgba. Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />\n);\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/0.60/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"statusbarbackgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"statusBarBackgroundColor")),Object(l.b)("p",null,"Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/0.60/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"opendrawer"},Object(l.b)("inlineCode",{parentName:"h3"},"openDrawer()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"openDrawer();\n")),Object(l.b)("p",null,"Opens the drawer."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"closedrawer"},Object(l.b)("inlineCode",{parentName:"h3"},"closeDrawer()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"closeDrawer();\n")),Object(l.b)("p",null,"Closes the drawer."))}c.isMDXComponent=!0}}]);