(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1282:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/RNPerformanceStartup-1fd20cca7c74d0ee7a15fe9e8199610f.png"},750:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(1176)),i={title:"React Native Performance in Marketplace",author:"Aaron Chiu",authorTitle:"Software Engineer at Facebook",authorURL:"https://www.facebook.com/aaronechiu",authorFBID:1057500063,authorTwitter:"AaaChiuuu",tags:["engineering"]},c={permalink:"/blog/2017/08/07/react-native-performance-in-marketplace",source:"@site/blog/2017-08-07-react-native-performance-in-marketplace.md",description:"React Native is used in multiple places across multiple apps in the Facebook family including a top level tab in the main Facebook apps. Our focus for this post is a highly visible product, Marketplace. It is available in a dozen or so countries and enables users to discover products and services provided by other users.",date:"2017-08-07T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"React Native Performance in Marketplace",readingTime:4.86,truncated:!1,prevItem:{title:"React Native Monthly #3",permalink:"/blog/2017/08/30/react-native-monthly-3"},nextItem:{title:"React Native Monthly #2",permalink:"/blog/2017/07/28/react-native-monthly-2"}},s=[{value:"A different approach",id:"a-different-approach",children:[]},{value:"Down the path of production instrumentation",id:"down-the-path-of-production-instrumentation",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Future plans",id:"future-plans",children:[]}],l={toc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native is used in multiple places across multiple apps in the Facebook family including a top level tab in the main Facebook apps. Our focus for this post is a highly visible product, ",Object(o.b)("a",{parentName:"p",href:"https://newsroom.fb.com/news/2016/10/introducing-marketplace-buy-and-sell-with-your-local-community/"},"Marketplace"),". It is available in a dozen or so countries and enables users to discover products and services provided by other users."),Object(o.b)("p",null,"In the first half of 2017, through the joint effort of the Relay Team, the Marketplace team, the Mobile JS Platform team, and the React Native team, we cut Marketplace Time to Interaction (TTI) in half for Android ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/307478339448736/year-class-a-classification-system-for-android/"},"Year Class 2010-11 devices"),". Facebook has historically considered these devices as low-end Android devices, and they have the slowest TTIs on any platform or device type."),Object(o.b)("p",null,"A typical React Native startup looks something like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(1282).default})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Disclaimer: ratios aren't representative and will vary depending on how React Native is configured and used.")),Object(o.b)("p",null,"We first initialize the React Native core (aka the \u201cBridge\u201d) before running the product specific JavaScript which determines what native views React Native will render in the Native Processing Time."),Object(o.b)("h3",{id:"a-different-approach"},"A different approach"),Object(o.b)("p",null,"One of the earlier mistakes that we made was to let ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/747457662026706/performance-instrumentation-for-android-apps/"},"Systrace and CTScan")," drive our performance efforts. These tools helped us find a lot of low-hanging fruit in 2016, but we discovered that both Systrace and CTScan are ",Object(o.b)("strong",{parentName:"p"},"not representative of production scenarios")," and cannot emulate what happens in the wild. Ratios of time spent in the breakdowns are often incorrect and, wildly off-base at times. At the extreme, some things that we expected to take a few milliseconds actually take hundreds or thousands of milliseconds. That said, CTScan is useful and we've found it catches a third of regressions before they hit production."),Object(o.b)("p",null,"On Android, we attribute the shortcomings of these tools to the fact that 1) React Native is a multithreaded framework, 2) Marketplace is co-located with a multitude of complex views such as Newsfeed and other top-level tabs, and 3) computation times vary wildly. Thus, this half, we let production measurements and breakdowns drive almost all of our decision making and prioritization."),Object(o.b)("h3",{id:"down-the-path-of-production-instrumentation"},"Down the path of production instrumentation"),Object(o.b)("p",null,"Instrumenting production may sound simple on the surface, but it turned out to be quite a complex process. It took multiple iteration cycles of 2-3 weeks each; due to the latency of landing a commit in master, to pushing the app to the Play Store, to gathering sufficient production samples to have confidence in our work. Each iteration cycle involved discovering if our breakdowns were accurate, if they had the right level of granularity, and if they properly added up to the whole time span. We could not rely on alpha and beta releases because they are not representative of the general population. In essence, we very tediously built a very accurate production trace based on the aggregate of millions of samples."),Object(o.b)("p",null,"One of the reasons we meticulously verified that every millisecond in breakdowns properly added up to their parent metrics was that we realized early on there were gaps in our instrumentation. It turned out that our initial breakdowns did not account for stalls caused by thread jumps. Thread jumps themselves aren't expensive, but thread jumps to busy threads already doing work are very expensive. We eventually reproduced these blockages locally by sprinkling ",Object(o.b)("inlineCode",{parentName:"p"},"Thread.sleep()")," calls at the right moments, and we managed to fix them by:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"removing our dependency on AsyncTask,"),Object(o.b)("li",{parentName:"ol"},"undoing the forced initialization of ReactContext and NativeModules on the UI thread, and"),Object(o.b)("li",{parentName:"ol"},"removing the dependency on measuring the ReactRootView at initialization time.")),Object(o.b)("p",null,"Together, removing these thread blockage issues reduced the startup time by over 25%."),Object(o.b)("p",null,"Production metrics also challenged some of our prior assumptions. For example, we used to pre-load many JavaScript modules on the startup path under the assumption that co-locating modules in one bundle would reduce their initialization cost. However, the cost of pre-loading and co-locating these modules far outweighed the benefits. By re-configuring our inline require blacklists and removing JavaScript modules from the startup path, we were able to avoid loading unnecessary modules such as Relay Classic (when only ",Object(o.b)("a",{parentName:"p",href:"https://relay.dev/docs/new-in-relay-modern"},"Relay Modern")," was necessary). Today, our ",Object(o.b)("inlineCode",{parentName:"p"},"RUN_JS_BUNDLE")," breakdown is over 75% faster."),Object(o.b)("p",null,"We also found wins by investigating product-specific native modules. For example, by lazily injecting a native module's dependencies, we reduced that native module's cost by 98%. By removing the contention of Marketplace startup with other products, we reduced startup by an equivalent interval."),Object(o.b)("p",null,"The best part is that many of these improvements are broadly applicable to all screens built with React Native."),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"People assume that React Native startup performance problems are caused by JavaScript being slow or exceedingly high network times. While speeding up things like JavaScript would bring down TTI by a non-trivial sum, each of these contribute a much smaller percentage of TTI than was previously believed."),Object(o.b)("p",null,"The lesson so far has been to ",Object(o.b)("em",{parentName:"p"},"measure, measure, measure!")," Some wins come from moving run-time costs to build time, such as Relay Modern and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/commit/797ca6c219b2a44f88f10c61d91e8cc21e2f306e"},"Lazy NativeModules"),". Other wins come from avoiding work by being smarter about parallelizing code or removing dead code. And some wins come from large architectural changes to React Native, such as cleaning up thread blockages. There is no grand solution to performance, and longer-term performance wins will come from incremental instrumentation and improvements. Do not let cognitive bias influence your decisions. Instead, carefully gather and interpret production data to guide future work."),Object(o.b)("h2",{id:"future-plans"},"Future plans"),Object(o.b)("p",null,"In the long term, we want Marketplace TTI to be comparable to similar products built with Native, and, in general, have React Native performance on par with native performance. Further more, although this half we drastically reduced the bridge startup cost by about 80%, we plan to bring the cost of the React Native bridge close to zero via projects like ",Object(o.b)("a",{parentName:"p",href:"https://prepack.io/"},"Prepack")," and more build time processing."))}u.isMDXComponent=!0}}]);