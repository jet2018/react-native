(window.webpackJsonp=window.webpackJsonp||[]).push([[689],{1176:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return h}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(i),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return i?a.a.createElement(h,l(l({ref:t},s),{},{components:i})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},787:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(3),a=i(8),r=(i(0),i(1176)),o={id:"pixelratio",title:"PixelRatio"},l={unversionedId:"pixelratio",id:"version-0.60/pixelratio",isDocsHomePage:!1,title:"PixelRatio",description:"PixelRatio class gives access to the device pixel density.",source:"@site/versioned_docs/version-0.60/pixelratio.md",slug:"/pixelratio",permalink:"/docs/0.60/pixelratio",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/pixelratio.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"PermissionsAndroid",permalink:"/docs/0.60/permissionsandroid"},next:{title:"PushNotificationIOS",permalink:"/docs/0.60/pushnotificationios"}},c=[{value:"Fetching a correctly sized image",id:"fetching-a-correctly-sized-image",children:[]},{value:"Pixel grid snapping",id:"pixel-grid-snapping",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>getFontScale()</code>",id:"getfontscale",children:[]},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",children:[]},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",children:[]}]}],s={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PixelRatio class gives access to the device pixel density."),Object(r.b)("h2",{id:"fetching-a-correctly-sized-image"},"Fetching a correctly sized image"),Object(r.b)("p",null,"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100)\n});\n<Image source={image} style={{ width: 200, height: 100 }} />;\n")),Object(r.b)("h2",{id:"pixel-grid-snapping"},"Pixel grid snapping"),Object(r.b)("p",null,"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd7960 for iPhone 4 or 750\xd71334 for iPhone 6. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."),Object(r.b)("p",null,"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."),Object(r.b)("p",null,"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."),Object(r.b)("p",null,"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static get()\n")),Object(r.b)("p",null,"Returns the device pixel density. Some examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"PixelRatio.get() === 1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"mdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},"PixelRatio.get() === 1.5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"hdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},"PixelRatio.get() === 2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone 4, 4S"),Object(r.b)("li",{parentName:"ul"},"iPhone 5, 5C, 5S"),Object(r.b)("li",{parentName:"ul"},"iPhone 6, 7, 8"),Object(r.b)("li",{parentName:"ul"},"iPhone XR"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},"PixelRatio.get() === 3",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone 6 Plus, 7 Plus, 8 Plus"),Object(r.b)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),Object(r.b)("li",{parentName:"ul"},"Pixel, Pixel 2"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xxhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},"PixelRatio.get() === 3.5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Nexus 6"),Object(r.b)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xxxhdpi Android devices"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfontscale"},Object(r.b)("inlineCode",{parentName:"h3"},"getFontScale()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static getFontScale()\n")),Object(r.b)("p",null,"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."),Object(r.b)("p",null,"If a font scale is not set, this returns the device pixel ratio."),Object(r.b)("p",null,"Currently this is only implemented on Android and reflects the user preference set in Settings > Display > Font size, on iOS it will always return the default pixel ratio. @platform android"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpixelsizeforlayoutsize"},Object(r.b)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static getPixelSizeForLayoutSize(layoutSize)\n")),Object(r.b)("p",null,"Converts a layout size (dp) to pixel size (px)."),Object(r.b)("p",null,"Guaranteed to return an integer number."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"roundtonearestpixel"},Object(r.b)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static roundToNearestPixel(layoutSize)\n")),Object(r.b)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."))}u.isMDXComponent=!0}}]);