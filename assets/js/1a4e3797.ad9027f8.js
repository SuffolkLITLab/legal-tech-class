"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[7920],{8824:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function u(e){return l.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:u(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:u(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),c}var t,n}),[e])}function o(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}},1473:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(4165),a=n(5861),l=n(7294),u=n(2263),c=n(4730),s=n(5742),o=n(9960),i=n(5999),m=n(373),h=n(8824),p=n(143),f=n(6775),d=n(412);var g=function(){var e=(0,f.k6)(),t=(0,f.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},v=n(22),E=n(8202),y=n(2539),S=n(726),w=n(1073),I=n(311),b="searchQueryInput_CFBF",F="searchResultItem_U687",P="searchResultItemPath_uIbk",R="searchResultItemSummary_oZHr",k=n(3926);function Z(){var e=(0,u.Z)().siteConfig.baseUrl,t=(0,p.gA)(),n=e,c=(0,m.J)(null==t?void 0:t.pluginId).preferredVersion;c&&!c.isLast&&(n=c.path+"/");var o=(0,h.c)().selectMessage,f=g(),d=f.searchValue,y=f.updateSearchPath,S=(0,l.useState)(d),w=S[0],F=S[1],P=(0,l.useState)(),R=P[0],k=P[1],Z=(0,l.useState)(),C=Z[0],x=Z[1],q=(0,l.useMemo)((function(){return w?(0,i.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:w}):(0,i.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[w]);(0,l.useEffect)((function(){y(w),R&&(w?R(w,(function(e){x(e)})):x(void 0))}),[w,R]);var T=(0,l.useCallback)((function(e){F(e.target.value)}),[]);return(0,l.useEffect)((function(){d&&d!==w&&F(d)}),[d]),(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.w)(n);case 2:t=e.sent,a=t.wrappedIndexes,l=t.zhDictionary,k((function(){return(0,E.v)(a,l,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),l.createElement(l.Fragment,null,l.createElement(s.Z,null,l.createElement("meta",{property:"robots",content:"noindex, follow"}),l.createElement("title",null,q)),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("h1",null,q),l.createElement("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:T,value:w,autoComplete:"off",autoFocus:!0}),!R&&w&&l.createElement("div",null,l.createElement(I.Z,null)),C&&(C.length>0?l.createElement("p",null,o(C.length,(0,i.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):l.createElement("p",null,(0,i.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),l.createElement("section",null,C&&C.map((function(e){return l.createElement(_,{key:e.document.i,searchResult:e})})))))}function _(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,u=t.tokens,c=t.metadata,s=0===r,i=2===r,m=(s?n.b:a.b).slice(),h=i?n.s:n.t;return s||m.push(a.t),l.createElement("article",{className:F},l.createElement("h2",null,l.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:i?(0,y.C)(h,u):(0,S.o)(h,(0,w.m)(c,"t"),u,100)}})),m.length>0&&l.createElement("p",{className:P},(0,k.e)(m)),i&&l.createElement("p",{className:R,dangerouslySetInnerHTML:{__html:(0,S.o)(n.t,(0,w.m)(c,"t"),u,100)}}))}var C=function(){return l.createElement(c.Z,null,l.createElement(Z,null))}}}]);