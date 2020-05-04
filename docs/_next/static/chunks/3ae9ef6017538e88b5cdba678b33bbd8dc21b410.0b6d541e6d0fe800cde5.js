/*! For license information please see 3ae9ef6017538e88b5cdba678b33bbd8dc21b410.0b6d541e6d0fe800cde5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=r(n("Xuae")),o=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var c=d[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=a.props[c],f=r[c]||new Set;f.has(l)?i=!1:(f.add(l),r[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var m=i.default();function h(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(m,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}h.rewind=m.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),i=n("vUxr"),o=(n("TSYQ"),n("YSmr"));a.a.createElement;var u=a.a.createElement;function s(){return u("footer",{className:"bg-accent-1 border-t border-accent-2"},u(i.a,null,u("div",{className:"py-28 flex flex-col lg:flex-row items-center"},u("h3",{className:"text-4xl lg:text-5xl font-bold text-black tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"},"Built with \u2764\ufe0f in \ud83c\udfd4."),u("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"},u("a",{href:"https://rishi.js.org",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"},"~rishi"),u("a",{href:"https://github.com/rishiosaur/mlnma",className:"mx-3 font-bold hover:underline text-black"},"View on GitHub")))))}var c=n("8Kt/"),l=n.n(c),d=a.a.createElement;function f(){return d(l.a,null,d("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),d("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),d("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),d("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),d("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),d("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),d("meta",{name:"msapplication-TileColor",content:"#000000"}),d("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),d("meta",{name:"theme-color",content:"#000"}),d("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),d("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(o.a,".")}),d("meta",{property:"og:image",content:o.c}))}var m=a.a.createElement;function h(e){e.preview;var t=e.children;return m(a.a.Fragment,null,m(f,null),m("div",{className:"min-h-screen"},m("main",null,t)),m(s,null))}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return M})),n.d(t,"default",(function(){return D})),n.d(t,"server",(function(){return k}));var r=n("q1tI"),a=n.n(r),i=n("vUxr"),o=n("i2FJ"),u=n("m662"),s=n("zK7a"),c=n("YFqc"),l=n.n(c),d=a.a.createElement;function f(e){var t=e.title,n=e.coverImage,r=e.date,a=e.excerpt,i=e.author,c=e.slug;return d("div",null,d("div",{className:"mb-5"},d(s.a,{slug:c,title:t,src:n})),d("h3",{className:"text-3xl mb-3 leading-snug"},d(l.a,{as:"/posts/".concat(c),href:"/posts/[slug]"},d("a",{className:"hover:underline"},t))),d("div",{className:"text-lg mb-4"},d(u.a,{dateString:r})),d("p",{className:"text-lg leading-relaxed mb-4"},a),d(o.a,{name:i.name,picture:i.picture}))}var m=a.a.createElement;function h(e){var t=e.posts;return m("section",null,m("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"},"More Stories"),m("div",{className:"grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32"},t.map((function(e){return m(f,{key:e.slug,title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt})}))))}var g=a.a.createElement;function v(e){var t=e.title,n=e.coverImage,r=e.date,a=e.excerpt,i=e.author,c=e.slug;return g("section",null,g("div",{className:"mb-8 md:mb-16"},g(s.a,{title:t,src:n,slug:c})),g("div",{className:"md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28"},g("div",null,g("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight"},g(l.a,{as:"/posts/".concat(c),href:"/posts/[slug]"},g("a",{className:"hover:underline"},t))),g("div",{className:"mb-4 md:mb-0 text-lg"},g(u.a,{dateString:r}))),g("div",null,g("p",{className:"text-lg leading-relaxed mb-4"},a),g(o.a,{name:i.name,picture:i.picture}))))}var p=n("YSmr"),w=a.a.createElement;function b(){return w("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"},w("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"},w("strike",null,"MLNMA")),w("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8"},"A blog about machine learning and math."))}var y=n("CafY"),x=n("8Kt/"),T=n.n(x),C=a.a.createElement,M=!0;function D(e){var t=e.allPosts,n=t[0],r=t.slice(1);return C(a.a.Fragment,null,C(y.a,null,C(T.a,null,C("title",null,"Next.js Blog Example with ",p.a)),C(i.a,null,C(b,null),n&&C(v,{title:n.title,coverImage:n.coverImage,date:n.date,author:n.author,slug:n.slug,excerpt:n.excerpt}),r.length>0&&C(h,{posts:r}))))}var k="https://mlnma.now.sh"},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),i=n("W8MJ"),o=n("7W2i"),u=n("a1gu"),s=n("Nsbk"),c=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){o(c,u);var s=l(c);function c(e){var i;return r(this,c),i=s.call(this,e),f&&(t.add(a(i)),n(a(i))),i}return i(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(d.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},YSmr:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r="blog-starter",a="Markdown",i="https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var d,f=l(n("q1tI")),m=n("QmWs"),h=n("g/15"),g=c(n("nOHt")),v=n("elyg");function p(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,b=window.IntersectionObserver,y={};function x(){return d||(b?d=new b((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var T=function(e){i(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}((function(e,t){return{href:(0,v.addBasePath)(p(e)),as:t?(0,v.addBasePath)(p(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,u=i.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=(0,m.resolve)(s,o),u=u?(0,m.resolve)(s,u):o,e.preventDefault();var c=a.props.scroll;null==c&&(c=u.indexOf("#")<0),g.default[a.props.replace?"replace":"push"](o,u,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,m.resolve)(e,n);return[a,r?(0,m.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),f.default.cloneElement(i,o)}}]),n}(f.Component);t.default=T},i2FJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r).a.createElement;function i(e){var t=e.name,n=e.picture;return a("div",{className:"flex items-center"},a("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),a("div",{className:"text-xl font-bold"},t))}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},m662:function(e,t,n){"use strict";n.d(t,"a",(function(){return de}));var r=n("q1tI"),a=n.n(r);function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var o=6e4;function u(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=t.getTime()%o;return n*o+r}function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}var c=36e5,l=6e4,d=2,f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},m=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,h=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,g=/^([+-])(\d{2})(?::?(\d{2}))?$/;function v(e,t){s(1,arguments);var n=t||{},r=null==n.additionalDigits?d:i(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=function(e){var t,n={},r=e.split(f.dateTimeDelimiter);/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],f.timeZoneDelimiter.test(n.date)&&(n.date=e.split(f.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length)));if(t){var a=f.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(o.date){var v=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(o.date,r);a=function(e,t){if(null===t)return null;var n=e.match(m);if(!n)return null;var r=!!n[4],a=p(n[1]),i=p(n[2])-1,o=p(n[3]),u=p(n[4]),s=p(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(b[t]||(y(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(y(e)?366:365)}(t,a)?(c.setUTCFullYear(t,i,Math.max(a,o)),c):new Date(NaN)}(v.restDateString,v.year)}if(isNaN(a)||!a)return new Date(NaN);var x,T=a.getTime(),C=0;if(o.time&&(C=function(e){var t=e.match(h);if(!t)return null;var n=w(t[1]),r=w(t[2]),a=w(t[3]);if(!function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a))return NaN;return n*c+r*l+1e3*a}(o.time),isNaN(C)||null===C))return new Date(NaN);if(o.timezone){if(x=function(e){if("Z"===e)return 0;var t=e.match(g);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,a))return NaN;return n*(r*c+a*l)}(o.timezone),isNaN(x))return new Date(NaN)}else{var M=T+C,D=new Date(M);x=u(D);var k=new Date(M);x>0?k.setDate(D.getDate()+1):k.setDate(D.getDate()-1);var N=u(k)-x;N>0&&(x+=N)}return new Date(T+C+x)}function p(e){return e?parseInt(e):1}function w(e){return e&&parseFloat(e.replace(",","."))||0}var b=[31,null,31,30,31,30,31,31,30,31,30,31];function y(e){return e%400===0||e%4===0&&e%100}function x(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var T={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function C(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var M={date:C({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:C({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:C({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function N(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var S,P={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof T[e]?T[e]:1===t?T[e].one:T[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:M,formatRelative:function(e,t,n,r){return D[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(S.matchPattern);if(!a)return null;var i=a[0],o=n.match(S.parsePattern);if(!o)return null;var u=S.valueCallback?S.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:N({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:N({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:N({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:N({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function U(e,t){return s(2,arguments),function(e,t){s(2,arguments);var n=x(e).getTime(),r=i(t);return new Date(n+r)}(e,-i(t))}function E(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var O={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return E("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):E(n+1,2)},d:function(e,t){return E(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return E(e.getUTCHours()%12||12,t.length)},H:function(e,t){return E(e.getUTCHours(),t.length)},m:function(e,t){return E(e.getUTCMinutes(),t.length)},s:function(e,t){return E(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return E(Math.floor(r*Math.pow(10,n-3)),t.length)}},Y=864e5;function W(e){s(1,arguments);var t=x(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function q(e){s(1,arguments);var t=x(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=W(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=W(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}var j=6048e5;function F(e){s(1,arguments);var t=x(e),n=W(t).getTime()-function(e){s(1,arguments);var t=q(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),W(n)}(t).getTime();return Math.round(n/j)+1}function A(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:i(a),u=null==n.weekStartsOn?o:i(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=x(e),l=c.getUTCDay(),d=(l<u?7:0)+l-u;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function I(e,t){s(1,arguments);var n=x(e,t),r=n.getUTCFullYear(),a=t||{},o=a.locale,u=o&&o.options&&o.options.firstWeekContainsDate,c=null==u?1:i(u),l=null==a.firstWeekContainsDate?c:i(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,l),d.setUTCHours(0,0,0,0);var f=A(d,t),m=new Date(0);m.setUTCFullYear(r,0,l),m.setUTCHours(0,0,0,0);var h=A(m,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}var z=6048e5;function H(e,t){s(1,arguments);var n=x(e),r=A(n,t).getTime()-function(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:i(a),u=null==n.firstWeekContainsDate?o:i(n.firstWeekContainsDate),c=I(e,t),l=new Date(0);return l.setUTCFullYear(c,0,u),l.setUTCHours(0,0,0,0),A(l,t)}(n,t).getTime();return Math.round(r/z)+1}var R="midnight",_="noon",L="morning",Q="afternoon",B="evening",X="night";function G(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+E(i,2)}function J(e,t){return e%60===0?(e>0?"-":"+")+E(Math.abs(e)/60,2):K(e,t)}function K(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+E(Math.floor(a/60),2)+n+E(a%60,2)}var $={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return O.y(e,t)},Y:function(e,t,n,r){var a=I(e,r),i=a>0?a:1-a;return"YY"===t?E(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):E(i,t.length)},R:function(e,t){return E(q(e),t.length)},u:function(e,t){return E(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return O.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=H(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):E(a,t.length)},I:function(e,t,n){var r=F(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):E(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):O.d(e,t)},D:function(e,t,n){var r=function(e){s(1,arguments);var t=x(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/Y)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):E(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return E(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return E(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return E(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?_:0===a?R:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?B:a>=12?Q:a>=4?L:X,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):O.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):E(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):O.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):O.s(e,t)},S:function(e,t){return O.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return J(a);case"XXXX":case"XX":return K(a);case"XXXXX":case"XXX":default:return K(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return J(a);case"xxxx":case"xx":return K(a);case"xxxxx":case"xxx":default:return K(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+G(a,":");case"OOOO":default:return"GMT"+K(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+G(a,":");case"zzzz":default:return"GMT"+K(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return E(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return E((r._originalDate||e).getTime(),t.length)}};function Z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function V(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var ee={p:V,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return Z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,t)).replace("{{time}}",V(i,t))}},te=["D","DD"],ne=["YY","YYYY"];function re(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var ae=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oe=/^'([^]*?)'?$/,ue=/''/g,se=/[a-zA-Z]/;function ce(e,t,n){s(2,arguments);var r=String(t),a=n||{},o=a.locale||P,c=o.options&&o.options.firstWeekContainsDate,l=null==c?1:i(c),d=null==a.firstWeekContainsDate?l:i(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=o.options&&o.options.weekStartsOn,m=null==f?0:i(f),h=null==a.weekStartsOn?m:i(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=x(e);if(!function(e){s(1,arguments);var t=x(e);return!isNaN(t)}(g))throw new RangeError("Invalid time value");var v=U(g,u(g)),p={firstWeekContainsDate:d,weekStartsOn:h,locale:o,_originalDate:g};return r.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ee[t])(e,o.formatLong,p):e})).join("").match(ae).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(oe)[1].replace(ue,"'");var n,r=$[t];if(r)return a.useAdditionalWeekYearTokens||(n=e,-1===ne.indexOf(n))||re(e),!a.useAdditionalDayOfYearTokens&&function(e){return-1!==te.indexOf(e)}(e)&&re(e),r(v,e,o.localize,p);if(t.match(se))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}var le=a.a.createElement;function de(e){var t=e.dateString,n=v(t);return le("time",{dateTime:t},ce(n,"LLLL\td, yyyy"))}},vUxr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r).a.createElement;function i(e){var t=e.children;return a("div",{className:"container mx-auto px-5"},t)}},zK7a:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),o=n.n(i),u=n("YFqc"),s=n.n(u),c=a.a.createElement;function l(e){var t=e.title,n=e.src,r=e.slug,a=c("img",{src:n,alt:"Cover Image for ".concat(t),className:o()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":r})});return c("div",{className:"-mx-5 sm:mx-0"},r?c(s.a,{as:"/posts/".concat(r),href:"/posts/[slug]"},c("a",{"aria-label":t},a)):a)}}}]);