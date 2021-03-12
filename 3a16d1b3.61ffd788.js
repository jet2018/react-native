(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(1176)),i={id:"upgrading",title:"Upgrading to new React Native versions"},c={unversionedId:"upgrading",id:"version-0.61/upgrading",isDocsHomePage:!1,title:"Upgrading to new React Native versions",description:"Upgrading to new versions of React Native will give you access to more APIs, views, developer tools and other goodies. Upgrading requires a small amount of effort, but we try to make it straightforward for you.",source:"@site/versioned_docs/version-0.61/upgrading.md",slug:"/upgrading",permalink:"/docs/0.61/upgrading",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/upgrading.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Running On Device",permalink:"/docs/0.61/running-on-device"},next:{title:"Troubleshooting",permalink:"/docs/0.61/troubleshooting"}},p=[{value:"Expo projects",id:"expo-projects",children:[]},{value:"React Native projects",id:"react-native-projects",children:[{value:"React Native CLI",id:"react-native-cli",children:[]},{value:"Upgrade Helper",id:"upgrade-helper",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Upgrading to new versions of React Native will give you access to more APIs, views, developer tools and other goodies. Upgrading requires a small amount of effort, but we try to make it straightforward for you."),Object(o.b)("h2",{id:"expo-projects"},"Expo projects"),Object(o.b)("p",null,"Upgrading your Expo project to a new version of React Native requires updating the ",Object(o.b)("inlineCode",{parentName:"p"},"react-native"),", ",Object(o.b)("inlineCode",{parentName:"p"},"react"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"expo")," package versions in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file. Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/#sdk-version"},"this list")," to find out what versions are supported. You will also need to set the correct ",Object(o.b)("inlineCode",{parentName:"p"},"sdkVersion")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file."),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough"},"Upgrading Expo SDK Walkthrough")," for up-to-date information about upgrading your project."),Object(o.b)("h2",{id:"react-native-projects"},"React Native projects"),Object(o.b)("p",null,"Because typical React Native projects are essentially made up of an Android project, an iOS project, and a JavaScript project, upgrading can be rather tricky. There's currently two ways for upgrading your React Native project: by using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," or manually with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/upgrade-helper"},"Upgrade Helper"),"."),Object(o.b)("h3",{id:"react-native-cli"},"React Native CLI"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," comes with ",Object(o.b)("inlineCode",{parentName:"p"},"upgrade")," command that provides a one-step operation to upgrade the source files with a minimum of conflicts, it internally uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/rn-diff-purge"},"rn-diff-purge")," project to find out which files need to be created, removed or modified."),Object(o.b)("h4",{id:"1-run-the-upgrade-command"},"1. Run the ",Object(o.b)("inlineCode",{parentName:"h4"},"upgrade")," command"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"upgrade")," command works on top of Git by using ",Object(o.b)("inlineCode",{parentName:"p"},"git apply")," with 3-way merge, therefore it's required to use Git in order for this to work, if you don't use Git but still want to use this solution then you can check out how to do it in the ",Object(o.b)("a",{parentName:"p",href:"#i-want-to-upgrade-with-react-native-cli-but-i-don-t-use-git"},"Troubleshooting")," section.")),Object(o.b)("p",null,"Run the following command to start the process of upgrading to the latest version:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"react-native upgrade\n")),Object(o.b)("p",null,"You may specify a React Native version by passing an argument, e.g. to upgrade to ",Object(o.b)("inlineCode",{parentName:"p"},"0.61.0-rc.0")," run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"react-native upgrade 0.61.0-rc.0\n")),Object(o.b)("p",null,"The project is upgraded using ",Object(o.b)("inlineCode",{parentName:"p"},"git apply")," with 3-way merge, it may happen that you'll need to resolve a few conflicts after it's finished."),Object(o.b)("h4",{id:"2-resolve-the-conflicts"},"2. Resolve the conflicts"),Object(o.b)("p",null,"Conflicted files include delimiters which make very clear where the changes come from. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'13B07F951A680F5B00A75B9A /* Release */ = {\n  isa = XCBuildConfiguration;\n  buildSettings = {\n    ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n<<<<<<< ours\n    CODE_SIGN_IDENTITY = "iPhone Developer";\n    FRAMEWORK_SEARCH_PATHS = (\n      "$(inherited)",\n      "$(PROJECT_DIR)/HockeySDK.embeddedframework",\n      "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",\n    );\n=======\n    CURRENT_PROJECT_VERSION = 1;\n>>>>>>> theirs\n    HEADER_SEARCH_PATHS = (\n      "$(inherited)",\n      /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,\n      "$(SRCROOT)/../node_modules/react-native/React/**",\n      "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",\n    );\n')),Object(o.b)("p",null,'You can think of "ours" as "your team" and "theirs" as "the React Native development team".'),Object(o.b)("h3",{id:"upgrade-helper"},"Upgrade Helper"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://react-native-community.github.io/upgrade-helper/"},"Upgrade Helper")," is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed."),Object(o.b)("h4",{id:"1-select-the-versions"},"1. Select the versions"),Object(o.b)("p",null,'You first need to select from and to which version you wish to upgrade, by default the latest major versions are selected. After selecting you can click the button "Show me how to upgrade".'),Object(o.b)("p",null,'\ud83d\udca1 Major updates will show an "useful content" section on the top with links to help you out when upgrading.'),Object(o.b)("h4",{id:"2-upgrade-dependencies"},"2. Upgrade dependencies"),Object(o.b)("p",null,"The first file that is shown is the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", it's good to update the dependencies that are showing in there. For example, if ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," and ",Object(o.b)("inlineCode",{parentName:"p"},"react")," appears as changes then you can install it in your project by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff\nyarn add react-native@{{VERSION}}\nyarn add react@{{REACT_VERSION}}\n")),Object(o.b)("h4",{id:"3-upgrade-your-project-files"},"3. Upgrade your project files"),Object(o.b)("p",null,"The new release may contain updates to other files that are generated when you run ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init"),", those files are listed after the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in the Upgrade Helper page. If there aren't other changes then you can rebuild the project and continue developing."),Object(o.b)("p",null,"In case there are changes then you can either update them manually by copying and pasting from the changes in the page or you can do it with the React Native CLI upgrade command by running:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"react-native upgrade\n")),Object(o.b)("p",null,"This will check your files against the latest template and perform the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If there is a new file in the template, it is created."),Object(o.b)("li",{parentName:"ul"},"If a file in the template is identical to your file, it is skipped."),Object(o.b)("li",{parentName:"ul"},"If a file is different in your project than the template, you will be prompted; you have options to keep your file or overwrite it with the template version.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Some upgrades won't be done automatically with the React Native CLI and require manual work, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"0.28")," to ",Object(o.b)("inlineCode",{parentName:"p"},"0.29"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"0.56")," to ",Object(o.b)("inlineCode",{parentName:"p"},"0.57"),". Make sure to check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/releases"},"release notes")," when upgrading so that you can identify any manual changes your particular project may require.")),Object(o.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h4",{id:"i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git"},"I want to upgrade with React Native CLI but I don't use Git"),Object(o.b)("p",null,"While your project does not have to be handled by the Git versioning system -- you can use Mercurial, SVN, or nothing -- you will still need to ",Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"install Git")," on your system in order to use ",Object(o.b)("inlineCode",{parentName:"p"},"react-native upgrade"),". Git will also need to be available in the ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),". If your project doesn't use Git, initialize it and commit:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'git init # Initialize a Git repository\ngit add . # Stage all the current files\ngit commit -m "Upgrade react-native" # Save the current files in a commit\n')),Object(o.b)("p",null,"After you finish upgrading you may remove the ",Object(o.b)("inlineCode",{parentName:"p"},".git")," directory."),Object(o.b)("h4",{id:"i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version"},"I have done all the changes but my app is still using an old version"),Object(o.b)("p",null,"These sort of errors are usually related to caching, it's recommended to install ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pmadruga/react-native-clean-project"},"react-native-clean-project")," to clear all your project's cache and then you can run it again."))}s.isMDXComponent=!0}}]);