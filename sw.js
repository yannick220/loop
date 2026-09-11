const CACHE='loop-v5-hierarchy-history-20260911';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
'./assets/photo_0.jpg','./assets/photo_1.jpg','./assets/photo_2.jpg','./assets/photo_3.jpg','./assets/photo_4.jpg','./assets/photo_5.jpg',
'./assets/loop_0.png','./assets/loop_1.png','./assets/loop_2.png','./assets/loop_3.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
