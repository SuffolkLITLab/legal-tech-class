!function(){"use strict";var e,f,a,c,d,b={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=b,n.c=t,e=[],n.O=function(f,a,c,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=c();void 0!==o&&(f=o)}}return f}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,c,d]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){b[f]=function(){return e[f]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({21:"ba355476",53:"935f2afb",75:"1fd928d7",86:"d6be4a3f",163:"3dac7f3d",253:"c19ad0f8",279:"0b783d63",382:"330edd4d",451:"de1a62e3",485:"f3a0b64d",538:"67859a1f",614:"14b21348",666:"86e2b02b",767:"7ae63dc9",835:"d370bb32",851:"2c4d9fb7",1097:"4ef7c6fb",1202:"d9918adf",1304:"463d83aa",1449:"af172acd",1527:"d053895b",1641:"138e7f70",1782:"1c0204fd",2193:"eca892b5",2298:"934bf2a8",2435:"c157e17b",2535:"814f3328",2585:"7c5d6534",2626:"a655bd5f",2810:"f6de5d30",3015:"2a5fa7d6",3089:"a6aa9e1f",3234:"adca06f7",3385:"a481c930",3437:"e18f8c1f",3541:"0c9996db",3608:"9e4087bc",3635:"0e2b96b2",3643:"84bf7954",3650:"ce3e42ad",3692:"49be9a09",3707:"3570154c",3738:"8dd6bbd6",3796:"09359d69",3826:"ef40f40c",4013:"01a85c17",4035:"8e9f0a8a",4061:"2868cdab",4099:"caa56456",4162:"c3b6d75a",4195:"c4f5d8e4",4201:"c14f6217",4213:"c19445cb",4433:"d1a28d95",4545:"0dc60785",4606:"4cc4ba4e",4640:"482040e8",4644:"477ff92d",4694:"bdd709f1",4755:"7f801ad2",4803:"fa19f70d",4874:"4db8806d",4888:"d60c676c",5098:"65a9333a",5152:"447bebe8",5168:"522b8369",5236:"2df15fb4",5309:"6e672c24",5351:"38ea9556",5541:"1b20a6c5",5547:"3c2f5a7e",5586:"66f0a358",5592:"8b732630",5670:"c820c8ad",5697:"18db73e7",5737:"c79ed30f",6077:"82dfeea8",6103:"ccc49370",6169:"9c1b6069",6176:"d610846f",6179:"a5e0d661",6233:"ac78577a",6305:"ea664b61",6391:"5b383efb",6448:"65e93860",6553:"0b6f9217",6759:"e24df0c9",6812:"7176daff",6872:"d70a662e",6914:"3763c0fa",6979:"d929b70f",7048:"ecafc66b",7231:"254fa39b",7388:"4c8d5ea0",7587:"71362f59",7700:"3ee45f2c",7709:"f88df170",7775:"b0feac50",7918:"17896441",7920:"1a4e3797",8034:"94a26551",8303:"9db144f9",8372:"2978e8a1",8610:"6875c492",8656:"24e59b71",8675:"a6aa0660",8791:"ce31df14",8808:"cc9d53f2",8880:"67dcae2a",9206:"f1bb8ee6",9208:"163515af",9248:"70d73145",9265:"05bfe21a",9276:"1e236072",9286:"92862f57",9303:"0efc4928",9325:"215c24a1",9514:"1be78505",9541:"1a79d689",9567:"e1262149",9653:"3db04665",9813:"60cf3408",9814:"174da294",9870:"efc25dd0"}[e]||e)+"."+{21:"0bf06556",53:"9ef7c3f0",75:"49ba97d7",86:"32da131b",163:"a5972a26",253:"7e628b48",279:"f50de282",382:"589e711b",451:"76f58e33",485:"a15fdf6a",538:"06bc9324",614:"618e13e9",666:"52a0e745",767:"44f749a0",835:"acc011ca",851:"dac65bdf",1097:"46396691",1202:"e02bc752",1304:"dfa0a3e7",1449:"2278f697",1527:"3ec66edf",1641:"eddf6b64",1782:"ee46659c",2193:"c36c0802",2298:"b769e3a5",2435:"88960430",2535:"26f323e7",2585:"641b77db",2626:"fcf5474f",2810:"2b8fc203",3015:"cc0be73d",3089:"19d5f021",3234:"3c31d4b6",3385:"24f3bb0f",3437:"b05e2ec3",3541:"b2660c6d",3608:"b49ba0e0",3635:"8231d62e",3643:"83ba0563",3650:"dcc2ebc4",3692:"d2c9c6ee",3707:"4ea227ed",3738:"05797ea1",3796:"47725e79",3826:"960cae1b",4013:"ce62400b",4035:"2aaac61e",4061:"8ca8b6ff",4099:"3734396d",4162:"a9fead9a",4195:"a28f571c",4201:"adda6dd1",4213:"061d3e25",4433:"cb5e564c",4545:"36b62e08",4606:"46cf0ca7",4640:"a7920030",4644:"e22f519a",4694:"4b7f02b4",4755:"f069c8d7",4803:"79fe888f",4874:"d2035904",4888:"70b1ec68",4972:"6a6cbbaa",5098:"a1c800ec",5152:"fa563dad",5168:"1a16ca6c",5236:"906ae54e",5309:"019a5690",5351:"c75abbb3",5525:"d4417c03",5541:"7f1e88ab",5547:"49a6cc0a",5586:"a2f3b273",5592:"72c5d268",5670:"f07f24cd",5697:"88608d3b",5737:"269395c5",6048:"78ceaaf1",6077:"88ed0fc8",6103:"86d48009",6169:"1752d213",6176:"1a563ce1",6179:"50c54f1d",6233:"7ad8d77e",6305:"b2ba67f2",6391:"67d6a0a4",6448:"b0d5b7b5",6553:"2e7ac968",6759:"948a5ce0",6812:"1b44ea13",6872:"817809e0",6914:"be5d2df8",6979:"cf06f66a",7048:"e6a58650",7231:"243c6402",7388:"7520180c",7587:"35d8b2ab",7700:"aa80344d",7709:"4f3c9f41",7775:"662bfcf7",7918:"53d39855",7920:"64be62c4",8034:"cb42adfe",8105:"17c62e33",8303:"fe633084",8372:"671b09b2",8443:"3e47785b",8610:"bbc4b2b2",8656:"53723d98",8675:"0e34a19c",8791:"415f24b9",8808:"6d4f7497",8880:"aa832cdb",9206:"3c3b5567",9208:"79393e0b",9248:"f7b38f69",9265:"81db78ce",9276:"2d997d14",9286:"9e19086b",9303:"1da0cbd2",9325:"a3d49452",9514:"6e74e483",9541:"8af67bdc",9567:"084128d6",9653:"3df0efd7",9813:"1bfb4679",9814:"b9bb3f00",9870:"56cee067"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},d="open-class:",n.l=function(e,f,a,b){if(c[e])c[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),c[e]=[f];var l=function(f,a){t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/legal-tech-class/",n.gca=function(e){return e={17896441:"7918",ba355476:"21","935f2afb":"53","1fd928d7":"75",d6be4a3f:"86","3dac7f3d":"163",c19ad0f8:"253","0b783d63":"279","330edd4d":"382",de1a62e3:"451",f3a0b64d:"485","67859a1f":"538","14b21348":"614","86e2b02b":"666","7ae63dc9":"767",d370bb32:"835","2c4d9fb7":"851","4ef7c6fb":"1097",d9918adf:"1202","463d83aa":"1304",af172acd:"1449",d053895b:"1527","138e7f70":"1641","1c0204fd":"1782",eca892b5:"2193","934bf2a8":"2298",c157e17b:"2435","814f3328":"2535","7c5d6534":"2585",a655bd5f:"2626",f6de5d30:"2810","2a5fa7d6":"3015",a6aa9e1f:"3089",adca06f7:"3234",a481c930:"3385",e18f8c1f:"3437","0c9996db":"3541","9e4087bc":"3608","0e2b96b2":"3635","84bf7954":"3643",ce3e42ad:"3650","49be9a09":"3692","3570154c":"3707","8dd6bbd6":"3738","09359d69":"3796",ef40f40c:"3826","01a85c17":"4013","8e9f0a8a":"4035","2868cdab":"4061",caa56456:"4099",c3b6d75a:"4162",c4f5d8e4:"4195",c14f6217:"4201",c19445cb:"4213",d1a28d95:"4433","0dc60785":"4545","4cc4ba4e":"4606","482040e8":"4640","477ff92d":"4644",bdd709f1:"4694","7f801ad2":"4755",fa19f70d:"4803","4db8806d":"4874",d60c676c:"4888","65a9333a":"5098","447bebe8":"5152","522b8369":"5168","2df15fb4":"5236","6e672c24":"5309","38ea9556":"5351","1b20a6c5":"5541","3c2f5a7e":"5547","66f0a358":"5586","8b732630":"5592",c820c8ad:"5670","18db73e7":"5697",c79ed30f:"5737","82dfeea8":"6077",ccc49370:"6103","9c1b6069":"6169",d610846f:"6176",a5e0d661:"6179",ac78577a:"6233",ea664b61:"6305","5b383efb":"6391","65e93860":"6448","0b6f9217":"6553",e24df0c9:"6759","7176daff":"6812",d70a662e:"6872","3763c0fa":"6914",d929b70f:"6979",ecafc66b:"7048","254fa39b":"7231","4c8d5ea0":"7388","71362f59":"7587","3ee45f2c":"7700",f88df170:"7709",b0feac50:"7775","1a4e3797":"7920","94a26551":"8034","9db144f9":"8303","2978e8a1":"8372","6875c492":"8610","24e59b71":"8656",a6aa0660:"8675",ce31df14:"8791",cc9d53f2:"8808","67dcae2a":"8880",f1bb8ee6:"9206","163515af":"9208","70d73145":"9248","05bfe21a":"9265","1e236072":"9276","92862f57":"9286","0efc4928":"9303","215c24a1":"9325","1be78505":"9514","1a79d689":"9541",e1262149:"9567","3db04665":"9653","60cf3408":"9813","174da294":"9814",efc25dd0:"9870"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise((function(a,d){c=e[f]=[a,d]}));a.push(c[2]=d);var b=n.p+n.u(f),t=new Error;n.l(b,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(f){return 0!==e[f]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(f&&f(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},a=self.webpackChunkopen_class=self.webpackChunkopen_class||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();