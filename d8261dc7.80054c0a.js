(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1176:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(i,".").concat(m)]||p[m]||b[m]||r;return o?n.a.createElement(h,s(s({ref:t},l),{},{components:o})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1258:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/oss-roadmap-hero-3e488e41aaa6ecb2107c16608d5d9392.jpg"},993:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var a=o(3),n=o(8),r=(o(0),o(1176)),i={title:"Open Source Roadmap",author:"H\xe9ctor Ramos",authorTitle:"Engineer at Facebook",authorURL:"https://hectorramos.com/about",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",tags:["announcement"]},s={permalink:"/blog/2018/11/01/oss-roadmap",source:"@site/blog/2018-11-01-oss-roadmap.md",description:"This year, the React Native team has focused on a large scale re-architecture of React Native. As Sophie mentioned in her State of React Native post, we've sketched out a plan to better support the thriving population of React Native users and collaborators outside of Facebook. It's now time to share more details about what we've been working on. Before I do so, I'd like to lay out our long-term vision for React Native in open source.",date:"2018-11-01T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"Open Source Roadmap",readingTime:4.295,truncated:!1,prevItem:{title:"The State of the React Native Community in 2018",permalink:"/blog/2019/01/07/state-of-react-native-community"},nextItem:{title:"Introducing new iOS WebViews",permalink:"/blog/2018/08/27/wkwebview"}},c=[{value:"\u2702\ufe0f Lean Core",id:"\ufe0f-lean-core",children:[]},{value:"\ud83c\udf81 Open Sourcing Internals and \ud83d\udee0Updated Tooling",id:"-open-sourcing-internals-and-updated-tooling",children:[]},{value:"\u2705 Testing Infrastructure",id:"-testing-infrastructure",children:[]},{value:"\ud83d\udcdc Public API",id:"-public-api",children:[]},{value:"\ud83d\udce3 Communication",id:"-communication",children:[]},{value:"Timeline",id:"timeline",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{src:o(1258).default})),Object(r.b)("p",null,"This year, the React Native team has focused on a large scale ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/4"},"re-architecture of React Native"),". As Sophie mentioned in her ",Object(r.b)("a",{parentName:"p",href:"/blog/2018/06/14/state-of-react-native-2018"},"State of React Native post,")," we've sketched out a plan to better support the thriving population of React Native users and collaborators outside of Facebook. It's now time to share more details about what we've been working on. Before I do so, I'd like to lay out our long-term vision for React Native in open source."),Object(r.b)("p",null,"Our vision for React Native is..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"A healthy GitHub repository.")," Issues and pull requests get handled within a reasonable period of time.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Increased test coverage."),Object(r.b)("li",{parentName:"ul"},"Commits that sync out from the Facebook code repository should not break open source tests."),Object(r.b)("li",{parentName:"ul"},"A higher scale of meaningful community contributions."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Stable APIs,")," making it easier to interface with open source dependencies.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Facebook uses the same public API as open source"),Object(r.b)("li",{parentName:"ul"},"React Native releases that follow semantic versioning."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"A vibrant eco-system.")," High quality ViewManagers, native modules, and multiple platform support maintained by the community."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Excellent documentation.")," Focus on helping users create high quality experiences, and up-to-date API reference docs.")),Object(r.b)("p",null,"We have identified the following focus areas to help us achieve this vision."),Object(r.b)("h2",{id:"\ufe0f-lean-core"},"\u2702\ufe0f Lean Core"),Object(r.b)("p",null,"Our goal is to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/6"},"reduce the surface area of React Native")," by removing non-core and unused components. We'll transfer non-core components to the community to allow it to move faster. The reduced surface area will make it easier to manage contributions to React Native."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/blob/master/proposals/0001-webview.md"},Object(r.b)("inlineCode",{parentName:"a"},"WebView"))," is an example of a component that we transferred to the community. We are working on a workflow that will allow internal teams to continue using these components after we remove them from the repository. We have identified ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/6"},"dozens more components")," that we'll give ownership of to the community."),Object(r.b)("h2",{id:"-open-sourcing-internals-and-updated-tooling"},"\ud83c\udf81 Open Sourcing Internals and \ud83d\udee0Updated Tooling"),Object(r.b)("p",null,"The React Native development experience for product teams at Facebook can be quite different from open source. Tools that may be popular in the open source community are not used at Facebook. There may be an internal tool that achieves the same purpose. In some cases, Facebook teams have become used to tools that do not exist outside of Facebook. These disparities can pose challenges when we open source our upcoming architecture work."),Object(r.b)("p",null,"We'll work on releasing some of these internal tools. We'll also improve support for tools popular with the open source community. Here's a non-exhaustive list of projects we'll tackle:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open source JSI and enable the community to bring their own JavaScript VMs, replacing the existing JavaScriptCore from RN's initial release. We'll be covering what JSI is in a future post, in the meantime you can learn more about JSI from ",Object(r.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UcqRXTriUVI"},"Parashuram's talk at React Conf"),"."),Object(r.b)("li",{parentName:"ul"},"Support 64-bit libraries on Android."),Object(r.b)("li",{parentName:"ul"},"Enable debugging under the new architecture."),Object(r.b)("li",{parentName:"ul"},"Improve support for CocoaPods, Gradle, Maven, and new Xcode build system.")),Object(r.b)("h2",{id:"-testing-infrastructure"},"\u2705 Testing Infrastructure"),Object(r.b)("p",null,"When Facebook engineers publish code, it's considered safe to land if it passes all tests. These tests identify whether a change might break one of our own React Native surfaces. Yet, there are differences in how Facebook uses React Native. This has allowed us to unknowingly break React Native in open source."),Object(r.b)("p",null,"We'll shore up our internal tests to ensure they run in an environment that is as close as possible to open source. This will help prevent code that breaks these tests from making it to open source. We will also work on infrastructure to enable better testing of the core repo on GitHub, enabling future pull requests to easily include tests."),Object(r.b)("p",null,"Combined with the reduced surface area, this will allow contributors to merge pull requests quicker, with confidence."),Object(r.b)("h2",{id:"-public-api"},"\ud83d\udcdc Public API"),Object(r.b)("p",null,"Facebook will consume React Native via the public API, the same way open source does, to reduce unintentional breaking changes. We have started converting internal call sites to address this. Our goal is to converge on a stable, public API, leading to the adoption of semantic versioning in version 1.0."),Object(r.b)("h2",{id:"-communication"},"\ud83d\udce3 Communication"),Object(r.b)("p",null,"React Native is one of the ",Object(r.b)("a",{parentName:"p",href:"https://octoverse.github.com/#top-and-trending-projects"},"top open source projects on GitHub")," by contributor count. That makes us really happy, and we'd like to keep it going. We'll continue working on initiatives that lead to involved contributors, such as increased transparency and open discussion. The documentation is one of the first things someone new to React Native will encounter, yet it has not been a priority. We'd like to fix that, starting with bringing back auto-generated API reference docs, creating additional content focused on creating ",Object(r.b)("a",{parentName:"p",href:"/docs/improvingux"},"quality user experiences"),", and improving our ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-releases/issues/47"},"release notes"),"."),Object(r.b)("h2",{id:"timeline"},"Timeline"),Object(r.b)("p",null,"We're planning to land these projects throughout the next year or so. Some of these efforts are already ongoing, such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/compare/e337bcafb0b017311c37f2dbc24e5a757af0a205...8427f64e06456f171f9df0316c6ca40613de7a20"},"JSI which has already landed in open source"),". Others will take a bit longer to complete, such as reducing the surface area. We'll do our best to keep the community up to date with our progress. Please join us in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals"},"Discussions and Proposals")," repository, a initiative from the React Native community that has led to the creation of several of the initiatives discussed in this roadmap."))}u.isMDXComponent=!0}}]);