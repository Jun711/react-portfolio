"use strict";var precacheConfig=[["/react-portfolio/index.html","bfe4cf2257211fb52d100548803f2703"],["/react-portfolio/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/react-portfolio/static/js/main.0232adf5.js","81de59b120eb640a564c42f76d3d8bba"],["/react-portfolio/static/media/adblocker.8bd89b32.png","8bd89b32e6ef17774c037932a638c8c8"],["/react-portfolio/static/media/axis-cover-1.bfaace45.jpeg","bfaace45d8543a1dd2cbb56174bcde3a"],["/react-portfolio/static/media/axis-cover.059888c0.jpeg","059888c08555758eaa14f9492e9924f6"],["/react-portfolio/static/media/axis.e4f3dee4.jpeg","e4f3dee443b2ac8816f3a27098357064"],["/react-portfolio/static/media/cerebral-cover.d9de8553.jpeg","d9de85538ff2bec37ab1946ddce3bcf3"],["/react-portfolio/static/media/crusher-cover.df5b011b.jpeg","df5b011b2984afe02ec7627aecf3d57b"],["/react-portfolio/static/media/default-cover2.99f75823.jpg","99f75823c3e981ae02ceaa13ea59181b"],["/react-portfolio/static/media/default-proj-img.dea6e166.jpg","dea6e1668b4aeadd787bc1e457b6c2f0"],["/react-portfolio/static/media/default-proj-img2.996f8323.jpeg","996f8323bb0d7d9f4e95d37487e37fbf"],["/react-portfolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/react-portfolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/react-portfolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/react-portfolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/react-portfolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/react-portfolio/static/media/language-cover.68516e87.jpg","68516e87cdc7437076522f02730726c8"],["/react-portfolio/static/media/language-cover.cd4e6be8.png","cd4e6be8056a2550ff74e26df8fc979b"],["/react-portfolio/static/media/language-cover2.2a5db849.jpg","2a5db84912e1855989ff2bf50f6d5101"],["/react-portfolio/static/media/portfolio-cover.628e914c.jpg","628e914c03d5eb513ba4f224e690118d"],["/react-portfolio/static/media/portfolio.af2a3304.jpg","af2a330450fbf994a021190ab27fbe00"],["/react-portfolio/static/media/profile-pic.70767551.jpeg","7076755168bd1086175cd6a940f3f7f8"],["/react-portfolio/static/media/rpc-cover.c7cc5c88.jpg","c7cc5c888ccf8359410e77788f21a290"],["/react-portfolio/static/media/server-cover.2539532b.jpg","2539532b062b3d25645f5abf216ae9c7"],["/react-portfolio/static/media/shopping-cover.5ba30b2d.jpeg","5ba30b2d11a2d581cfb0fa5adb6b1fc9"],["/react-portfolio/static/media/tracking-cover.f652fe3e.jpg","f652fe3ec7c74d27d36ed8c0f050b081"],["/react-portfolio/static/media/tracking.8b2f588d.jpg","8b2f588d7da97341523fb10de38a171f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var c="/react-portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});