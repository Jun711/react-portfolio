"use strict";var precacheConfig=[["/react-portfolio/index.html","53ff106b5a85d32b3a62b91a1ca96684"],["/react-portfolio/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/react-portfolio/static/js/main.fe3517e1.js","1db7ede832de2595e261d88cee1c5ba1"],["/react-portfolio/static/media/adblocker.8bd89b32.png","8bd89b32e6ef17774c037932a638c8c8"],["/react-portfolio/static/media/axis-cover-1.bfaace45.jpeg","bfaace45d8543a1dd2cbb56174bcde3a"],["/react-portfolio/static/media/axis-cover.059888c0.jpeg","059888c08555758eaa14f9492e9924f6"],["/react-portfolio/static/media/axis.b885f760.jpeg","b885f7606d8de6cd6ea81473f9dfa28f"],["/react-portfolio/static/media/cerebral-cover.d9de8553.jpeg","d9de85538ff2bec37ab1946ddce3bcf3"],["/react-portfolio/static/media/default-cover.9abc9971.png","9abc9971e4498067fe3016a0e36d68b1"],["/react-portfolio/static/media/default-cover2.108a30e2.png","108a30e24164cb4c807051a9c61949d6"],["/react-portfolio/static/media/default-proj-img.f53bd2e8.png","f53bd2e82b796b19b9a495063a0bd6fe"],["/react-portfolio/static/media/default-proj-img2.996f8323.jpeg","996f8323bb0d7d9f4e95d37487e37fbf"],["/react-portfolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/react-portfolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/react-portfolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/react-portfolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/react-portfolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/react-portfolio/static/media/language-cover.096df21e.png","096df21eae8cd22fdbf8146c70f4eeb4"],["/react-portfolio/static/media/portfolio-cover.42e9bf17.png","42e9bf17ae7d56d4aa43e56862e05bde"],["/react-portfolio/static/media/portfolio.dee5132d.png","dee5132dae63c524bcce8a260dd85f33"],["/react-portfolio/static/media/rpc-cover.5e319cbc.png","5e319cbcfc459df95e97b7a9b90e8e27"],["/react-portfolio/static/media/server-cover.11ab119b.jpg","11ab119b94e69726480e0c15636ea16d"],["/react-portfolio/static/media/tracking-cover.8675f67c.png","8675f67c70a2ebc118fad7061a42f5a6"],["/react-portfolio/static/media/tracking.2fccdf34.png","2fccdf3469342cd256efeff0c18fb204"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var c="/react-portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});