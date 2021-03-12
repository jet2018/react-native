(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),h=n,u=s["".concat(i,".").concat(h)]||s[h]||p[h]||l;return a?r.a.createElement(u,b(b({ref:t},c),{},{components:a})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},326:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(1176)),i={id:"listview",title:"ListView"},b={unversionedId:"listview",id:"version-0.60/listview",isDocsHomePage:!1,title:"ListView",description:"DEPRECATED - use one of the new list components, such as FlatList or SectionList for bounded memory use, fewer bugs, better performance, an easier to use API, and more features. Check out this blog post for more details.",source:"@site/versioned_docs/version-0.60/listview.md",slug:"/listview",permalink:"/docs/0.60/listview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/listview.md",version:"0.60",lastUpdatedAt:1615576460},o=[{value:"Props",id:"props",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Props",id:"props-1",children:[{value:"<code>dataSource</code>",id:"datasource",children:[]},{value:"<code>initialListSize</code>",id:"initiallistsize",children:[]},{value:"<code>onEndReachedThreshold</code>",id:"onendreachedthreshold",children:[]},{value:"<code>pageSize</code>",id:"pagesize",children:[]},{value:"<code>renderRow</code>",id:"renderrow",children:[]},{value:"<code>renderScrollComponent</code>",id:"renderscrollcomponent",children:[]},{value:"<code>scrollRenderAheadDistance</code>",id:"scrollrenderaheaddistance",children:[]},{value:"<code>stickyHeaderIndices</code>",id:"stickyheaderindices",children:[]},{value:"<code>enableEmptySections</code>",id:"enableemptysections",children:[]},{value:"<code>renderHeader</code>",id:"renderheader",children:[]},{value:"<code>onEndReached</code>",id:"onendreached",children:[]},{value:"<code>stickySectionHeadersEnabled</code>",id:"stickysectionheadersenabled",children:[]},{value:"<code>renderSectionHeader</code>",id:"rendersectionheader",children:[]},{value:"<code>renderSeparator</code>",id:"renderseparator",children:[]},{value:"<code>onChangeVisibleRows</code>",id:"onchangevisiblerows",children:[]},{value:"<code>removeClippedSubviews</code>",id:"removeclippedsubviews",children:[]},{value:"<code>renderFooter</code>",id:"renderfooter",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>getMetrics()</code>",id:"getmetrics",children:[]},{value:"<code>scrollTo()</code>",id:"scrollto",children:[]},{value:"<code>scrollToEnd()</code>",id:"scrolltoend",children:[]},{value:"<code>flashScrollIndicators()</code>",id:"flashscrollindicators",children:[]}]}],c={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"DEPRECATED - use one of the new list components, such as ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/flatlist"},Object(l.b)("inlineCode",{parentName:"a"},"FlatList"))," or ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/sectionlist"},Object(l.b)("inlineCode",{parentName:"a"},"SectionList"))," for bounded memory use, fewer bugs, better performance, an easier to use API, and more features. Check out this ",Object(l.b)("a",{parentName:"p",href:"/blog/2017/03/13/better-list-views"},"blog post")," for more details."),Object(l.b)("p",null,"ListView - A core component designed for efficient display of vertically scrolling lists of changing data. The minimal API is to create a ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/listviewdatasource"},Object(l.b)("inlineCode",{parentName:"a"},"ListView.DataSource")),", populate it with a flat array of data blobs, and instantiate a ",Object(l.b)("inlineCode",{parentName:"p"},"ListView")," component with that data source and a ",Object(l.b)("inlineCode",{parentName:"p"},"renderRow")," callback which takes a blob from the data array and returns a renderable component."),Object(l.b)("p",null,"Minimal example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends Component {\n  constructor() {\n    super();\n    const ds = new ListView.DataSource({\n      rowHasChanged: (r1, r2) => r1 !== r2\n    });\n    this.state = {\n      dataSource: ds.cloneWithRows(['row 1', 'row 2'])\n    };\n  }\n\n  render() {\n    return (\n      <ListView\n        dataSource={this.state.dataSource}\n        renderRow={(rowData) => <Text>{rowData}</Text>}\n      />\n    );\n  }\n}\n")),Object(l.b)("p",null,"ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (",Object(l.b)("inlineCode",{parentName:"p"},"onEndReached"),") and on the set of rows that are visible in the device viewport change (",Object(l.b)("inlineCode",{parentName:"p"},"onChangeVisibleRows"),"), and several performance optimizations."),Object(l.b)("p",null,"There are a few performance operations designed to make ListView scroll smoothly while dynamically loading potentially very large (or conceptually infinite) data sets:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Only re-render changed rows - the rowHasChanged function provided to the data source tells the ListView if it needs to re-render a row because the source data has changed - see ListViewDataSource for more details.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Rate-limited row rendering - By default, only one row is rendered per event-loop (customizable with the ",Object(l.b)("inlineCode",{parentName:"p"},"pageSize")," prop). This breaks up the work into smaller chunks to reduce the chance of dropping frames while rendering rows."))),Object(l.b)("h3",{id:"props"},"Props"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/scrollview#props"},"ScrollView props..."))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#datasource"},Object(l.b)("inlineCode",{parentName:"a"},"dataSource"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#initiallistsize"},Object(l.b)("inlineCode",{parentName:"a"},"initialListSize"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#onendreachedthreshold"},Object(l.b)("inlineCode",{parentName:"a"},"onEndReachedThreshold"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#pagesize"},Object(l.b)("inlineCode",{parentName:"a"},"pageSize"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#renderrow"},Object(l.b)("inlineCode",{parentName:"a"},"renderRow"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#renderscrollcomponent"},Object(l.b)("inlineCode",{parentName:"a"},"renderScrollComponent"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#scrollrenderaheaddistance"},Object(l.b)("inlineCode",{parentName:"a"},"scrollRenderAheadDistance"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#stickyheaderindices"},Object(l.b)("inlineCode",{parentName:"a"},"stickyHeaderIndices"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#enableemptysections"},Object(l.b)("inlineCode",{parentName:"a"},"enableEmptySections"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#renderheader"},Object(l.b)("inlineCode",{parentName:"a"},"renderHeader"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#onendreached"},Object(l.b)("inlineCode",{parentName:"a"},"onEndReached"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#stickysectionheadersenabled"},Object(l.b)("inlineCode",{parentName:"a"},"stickySectionHeadersEnabled"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#rendersectionheader"},Object(l.b)("inlineCode",{parentName:"a"},"renderSectionHeader"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#renderseparator"},Object(l.b)("inlineCode",{parentName:"a"},"renderSeparator"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#onchangevisiblerows"},Object(l.b)("inlineCode",{parentName:"a"},"onChangeVisibleRows"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#removeclippedsubviews"},Object(l.b)("inlineCode",{parentName:"a"},"removeClippedSubviews"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#renderfooter"},Object(l.b)("inlineCode",{parentName:"a"},"renderFooter")))),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#getmetrics"},Object(l.b)("inlineCode",{parentName:"a"},"getMetrics"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#scrollto"},Object(l.b)("inlineCode",{parentName:"a"},"scrollTo"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#scrolltoend"},Object(l.b)("inlineCode",{parentName:"a"},"scrollToEnd"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/0.60/listview#flashscrollindicators"},Object(l.b)("inlineCode",{parentName:"a"},"flashScrollIndicators")))),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props-1"},"Props"),Object(l.b)("h3",{id:"datasource"},Object(l.b)("inlineCode",{parentName:"h3"},"dataSource")),Object(l.b)("p",null,"An instance of ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/listviewdatasource"},"ListView.DataSource")," to use"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ListViewDataSource"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"initiallistsize"},Object(l.b)("inlineCode",{parentName:"h3"},"initialListSize")),Object(l.b)("p",null,"How many rows to render on initial component mount. Use this to make it so that the first screen worth of data appears at one time instead of over the course of multiple frames."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onendreachedthreshold"},Object(l.b)("inlineCode",{parentName:"h3"},"onEndReachedThreshold")),Object(l.b)("p",null,"Threshold in pixels (virtual, not physical) for calling onEndReached."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pagesize"},Object(l.b)("inlineCode",{parentName:"h3"},"pageSize")),Object(l.b)("p",null,"Number of rows to render per event loop. Note: if your 'rows' are actually cells, i.e. they don't span the full width of your view (as in the ListViewGridLayoutExample), you should set the pageSize to be a multiple of the number of cells per row, otherwise you're likely to see gaps at the edge of the ListView as new pages are loaded."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"renderrow"},Object(l.b)("inlineCode",{parentName:"h3"},"renderRow")),Object(l.b)("p",null,"(rowData, sectionID, rowID, highlightRow) => renderable"),Object(l.b)("p",null,"Takes a data entry from the data source and its ids and should return a renderable component to be rendered as the row. By default the data is exactly what was put into the data source, but it's also possible to provide custom extractors. ListView can be notified when a row is being highlighted by calling ",Object(l.b)("inlineCode",{parentName:"p"},"highlightRow(sectionID, rowID)"),". This sets a boolean value of adjacentRowHighlighted in renderSeparator, allowing you to control the separators above and below the highlighted row. The highlighted state of a row can be reset by calling highlightRow(null)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"renderscrollcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"renderScrollComponent")),Object(l.b)("p",null,"(props) => renderable"),Object(l.b)("p",null,"A function that returns the scrollable component in which the list rows are rendered. Defaults to returning a ScrollView with the given props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scrollrenderaheaddistance"},Object(l.b)("inlineCode",{parentName:"h3"},"scrollRenderAheadDistance")),Object(l.b)("p",null,"How early to start rendering rows before they come on screen, in pixels."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stickyheaderindices"},Object(l.b)("inlineCode",{parentName:"h3"},"stickyHeaderIndices")),Object(l.b)("p",null,"An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing ",Object(l.b)("inlineCode",{parentName:"p"},"stickyHeaderIndices={[0]}")," will cause the first child to be fixed to the top of the scroll view. This property is not supported in conjunction with ",Object(l.b)("inlineCode",{parentName:"p"},"horizontal={true}"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"array of number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"enableemptysections"},Object(l.b)("inlineCode",{parentName:"h3"},"enableEmptySections")),Object(l.b)("p",null,"Flag indicating whether empty section headers should be rendered. In the future release empty section headers will be rendered by default, and the flag will be deprecated. If empty sections are not desired to be rendered their indices should be excluded from sectionID object."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"renderheader"},Object(l.b)("inlineCode",{parentName:"h3"},"renderHeader")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onendreached"},Object(l.b)("inlineCode",{parentName:"h3"},"onEndReached")),Object(l.b)("p",null,"Called when all rows have been rendered and the list has been scrolled to within onEndReachedThreshold of the bottom. The native scroll event is provided."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stickysectionheadersenabled"},Object(l.b)("inlineCode",{parentName:"h3"},"stickySectionHeadersEnabled")),Object(l.b)("p",null,"Makes the sections headers sticky. The sticky behavior means that it will scroll with the content at the top of the section until it reaches the top of the screen, at which point it will stick to the top until it is pushed off the screen by the next section header. This property is not supported in conjunction with ",Object(l.b)("inlineCode",{parentName:"p"},"horizontal={true}"),". Only enabled by default on iOS because of typical platform standards."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"rendersectionheader"},Object(l.b)("inlineCode",{parentName:"h3"},"renderSectionHeader")),Object(l.b)("p",null,"(sectionData, sectionID) => renderable"),Object(l.b)("p",null,"If provided, a header is rendered for this section."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"renderseparator"},Object(l.b)("inlineCode",{parentName:"h3"},"renderSeparator")),Object(l.b)("p",null,"(sectionID, rowID, adjacentRowHighlighted) => renderable"),Object(l.b)("p",null,"If provided, a renderable component to be rendered as the separator below each row but not the last row if there is a section header below. Take a sectionID and rowID of the row above and whether its adjacent row is highlighted."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onchangevisiblerows"},Object(l.b)("inlineCode",{parentName:"h3"},"onChangeVisibleRows")),Object(l.b)("p",null,"(visibleRows, changedRows) => void"),Object(l.b)("p",null,"Called when the set of visible rows changes. ",Object(l.b)("inlineCode",{parentName:"p"},"visibleRows")," maps { sectionID: { rowID: true }} for all the visible rows, and ",Object(l.b)("inlineCode",{parentName:"p"},"changedRows")," maps { sectionID: { rowID: true | false }} for the rows that have changed their visibility, with true indicating visible, and false indicating the view has moved out of view."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeclippedsubviews"},Object(l.b)("inlineCode",{parentName:"h3"},"removeClippedSubviews")),Object(l.b)("p",null,"A performance optimization for improving scroll perf of large lists, used in conjunction with overflow: 'hidden' on the row containers. This is enabled by default."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"renderfooter"},Object(l.b)("inlineCode",{parentName:"h3"},"renderFooter")),Object(l.b)("p",null,"() => renderable"),Object(l.b)("p",null,"The header and footer are always rendered (if these props are provided) on every render pass. If they are expensive to re-render, wrap them in StaticContainer or other mechanism as appropriate. Footer is always at the bottom of the list, and header at the top, on every render pass. In a horizontal ListView, the header is rendered on the left and the footer on the right."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h2",{id:"methods-1"},"Methods"),Object(l.b)("h3",{id:"getmetrics"},Object(l.b)("inlineCode",{parentName:"h3"},"getMetrics()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getMetrics();\n")),Object(l.b)("p",null,"Exports some data, e.g. for perf investigations or analytics."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scrollto"},Object(l.b)("inlineCode",{parentName:"h3"},"scrollTo()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"scrollTo((...args: Array));\n")),Object(l.b)("p",null,"Scrolls to a given x, y offset, either immediately or with a smooth animation."),Object(l.b)("p",null,"See ",Object(l.b)("inlineCode",{parentName:"p"},"ScrollView#scrollTo"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scrolltoend"},Object(l.b)("inlineCode",{parentName:"h3"},"scrollToEnd()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"scrollToEnd(([options]: object));\n")),Object(l.b)("p",null,"If this is a vertical ListView scrolls to the bottom. If this is a horizontal ListView scrolls to the right."),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"scrollToEnd({animated: true})")," for smooth animated scrolling, ",Object(l.b)("inlineCode",{parentName:"p"},"scrollToEnd({animated: false})")," for immediate scrolling. If no options are passed, ",Object(l.b)("inlineCode",{parentName:"p"},"animated")," defaults to true."),Object(l.b)("p",null,"See ",Object(l.b)("inlineCode",{parentName:"p"},"ScrollView#scrollToEnd"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flashscrollindicators"},Object(l.b)("inlineCode",{parentName:"h3"},"flashScrollIndicators()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"flashScrollIndicators();\n")),Object(l.b)("p",null,"Displays the scroll indicators momentarily."))}d.isMDXComponent=!0}}]);