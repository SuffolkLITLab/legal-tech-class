"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[7920],{8824:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function u(e){return l.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:u(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:u(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),c}var t,n}),[e])}function o(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}},1473:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(7855),a=n(4165),l=n(5861),u=n(7294),c=n(2263),s=n(8765),o=n(5742),i=n(9960),m=n(5999),h=n(8824),f=n(6775),p=n(412);var g=function(){var e=(0,f.k6)(),t=(0,f.TH)(),n=(0,c.Z)().siteConfig.baseUrl,r=p.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==r?void 0:r.get("q"))||"",l=(null==r?void 0:r.get("ctx"))||"",u=(null==r?void 0:r.get("version"))||"",s=function(e){var n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:a,searchContext:l,searchVersion:u,updateSearchPath:function(t){var n=s(t);e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=s(e);return n+"search?"+t.toString()}}},d=n(22),v=n(8202),E=n(2539),y=n(726),S=n(1073),w=n(311),b=n(3926),I=n(1029),P="searchQueryInput_CFBF",x="searchResultItem_U687",F="searchResultItemPath_uIbk",R="searchResultItemSummary_oZHr";function Z(){var e=(0,c.Z)().siteConfig.baseUrl,t=(0,h.c)().selectMessage,n=g(),r=n.searchValue,s=n.searchContext,i=n.searchVersion,f=n.updateSearchPath,p=(0,u.useState)(r),E=p[0],y=p[1],S=(0,u.useState)(),b=S[0],I=S[1],x=(0,u.useState)(),F=x[0],R=x[1],Z=""+e+i,k=(0,u.useMemo)((function(){return E?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[E]);(0,u.useEffect)((function(){f(E),b&&(E?b(E,(function(e){R(e)})):R(void 0))}),[E,b]);var C=(0,u.useCallback)((function(e){y(e.target.value)}),[]);return(0,u.useEffect)((function(){r&&r!==E&&y(r)}),[r]),(0,u.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.w)(Z,s);case 2:t=e.sent,n=t.wrappedIndexes,r=t.zhDictionary,I((function(){return(0,v.v)(n,r,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,Z]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,k)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,k),u.createElement("input",{type:"search",name:"q",className:P,"aria-label":"Search",onChange:C,value:E,autoComplete:"off",autoFocus:!0}),!b&&E&&u.createElement("div",null,u.createElement(w.Z,null)),F&&(F.length>0?u.createElement("p",null,t(F.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:F.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,F&&F.map((function(e){return u.createElement(_,{key:e.document.i,searchResult:e})})))))}function _(e){var t=e.searchResult,n=t.document,a=t.type,l=t.page,c=t.tokens,s=t.metadata,o=0===a,m=2===a,h=(o?n.b:l.b).slice(),f=m?n.s:n.t;o||h.push(l.t);var p="";if(I.vc&&c.length>0){for(var g,d=new URLSearchParams,v=(0,r.Z)(c);!(g=v()).done;){var w=g.value;d.append("_highlight",w)}p="?"+d.toString()}return u.createElement("article",{className:x},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+p+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,E.C)(f,c):(0,y.o)(f,(0,S.m)(s,"t"),c,100)}})),h.length>0&&u.createElement("p",{className:F},(0,b.e)(h)),m&&u.createElement("p",{className:R,dangerouslySetInnerHTML:{__html:(0,y.o)(n.t,(0,S.m)(s,"t"),c,100)}}))}var k=function(){return u.createElement(s.Z,null,u.createElement(Z,null))}}}]);