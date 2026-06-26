const STATIC_CACHE = "lap-static-v15";
const RUNTIME_CACHE = "lap-runtime-v15";
const APP_SHELL = [
	"./",
	"./index.html",
	"./elements.html",
	"./left-sidebar.html",
	"./right-sidebar.html",
	"./no-sidebar.html",
	"./LICENSE.txt",
	"./manifest.webmanifest",
	"./assets/css/main.css",
	"./assets/css/index-custom.css",
	"./assets/css/noscript.css",
	"./assets/css/fontawesome-all.min.css",
	"./assets/css/images/arrow.svg",
	"./assets/css/images/overlay.png",
	"./assets/js/jquery.min.js",
	"./assets/js/jquery.scrolly.min.js",
	"./assets/js/jquery.dropotron.min.js",
	"./assets/js/jquery.scrollex.min.js",
	"./assets/js/browser.min.js",
	"./assets/js/breakpoints.min.js",
	"./assets/js/util.js",
	"./assets/js/main.js",
	"./assets/js/i18n.js",
	"./assets/js/hero-roster-data.js",
	"./assets/js/hero-roster.js",
	"./assets/js/events-data.js",
	"./assets/js/events.js",
	"./assets/js/building-calculator-data.js",
	"./assets/js/building-requirements-data.js",
	"./assets/js/building-calculator.js",
	"./assets/pwa/apple-touch-icon.png",
	"./assets/pwa/icon-192.png",
	"./assets/pwa/icon-512.png",
	"./assets/ally/TAra_logo.png",
	"./assets/webfonts/fa-brands-400.woff",
	"./assets/webfonts/fa-brands-400.woff2",
	"./assets/webfonts/fa-regular-400.woff",
	"./assets/webfonts/fa-regular-400.woff2",
	"./assets/webfonts/fa-solid-900.woff",
	"./assets/webfonts/fa-solid-900.woff2",
	"./images/alliance.png",
	"./images/arthur-image.webp",
	"./images/banner.jpg",
	"./images/bonus1.png",
	"./images/bonus2.png",
	"./images/card1.jpg",
	"./images/cheese_trap.png",
	"./images/cyntya.png",
	"./images/elixirscra.png",
	"./images/event_canyon_1.png",
	"./images/event_canyon_2.png",
	"./images/event_canyon_3.png",
	"./images/event_canyon_post.png",
	"./images/event_canyon_post2.png",
	"./images/event_cheeseTrap_post.png",
	"./images/events.png",
	"./images/hero.png",
	"./images/hero_card1.png",
	"./images/huntbattle.png",
	"./images/pic01.jpg",
	"./images/pic02.jpg",
	"./images/pic03.jpg",
	"./images/pic04.jpg",
	"./images/pic05.jpg",
	"./images/pic06.jpg",
	"./images/pic07.jpg",
	"./images/pic08.jpg",
	"./images/RESEARCH.jpeg",
	"./images/raven.png",
	"./images/tank.png",
	"./images/train_soldier.png",
	"./images/train_soldier_event.jpeg",
	"./images/warrior.png"
];

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(STATIC_CACHE).then(function (cache) {
			return cache.addAll(APP_SHELL);
		}).then(function () {
			return self.skipWaiting();
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then(function (keys) {
			return Promise.all(
				keys.filter(function (key) {
					return key !== STATIC_CACHE && key !== RUNTIME_CACHE;
				}).map(function (key) {
					return caches.delete(key);
				})
			);
		}).then(function () {
			return self.clients.claim();
		})
	);
});

function putInCache(cacheName, request, response) {
	if (!response || response.status >= 400) {
		return response;
	}

	return caches.open(cacheName).then(function (cache) {
		cache.put(request, response.clone());
		return response;
	});
}

function isSameOrigin(url) {
	return url.origin === self.location.origin;
}

self.addEventListener("fetch", function (event) {
	var request = event.request;
	var url = new URL(request.url);

	if (request.method !== "GET") {
		return;
	}

	if (url.pathname.endsWith("/tara.php")) {
		return;
	}

	if (request.mode === "navigate") {
		event.respondWith(
			fetch(request).then(function (response) {
				return putInCache(RUNTIME_CACHE, request, response);
			}).catch(function () {
				return caches.match(request).then(function (cachedPage) {
					return cachedPage || caches.match("./index.html");
				});
			})
		);
		return;
	}

	if (isSameOrigin(url)) {
		event.respondWith(
			caches.match(request).then(function (cachedResponse) {
				if (cachedResponse) {
					return cachedResponse;
				}

				return fetch(request).then(function (response) {
					return putInCache(RUNTIME_CACHE, request, response);
				});
			})
		);
		return;
	}

	if (/^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn-www\.bluestacks\.com|lastasylumplague\.com)\//.test(url.href)) {
		event.respondWith(
			caches.match(request).then(function (cachedResponse) {
				if (cachedResponse) {
					return cachedResponse;
				}

				return fetch(request).then(function (response) {
					return putInCache(RUNTIME_CACHE, request, response);
				}).catch(function () {
					return cachedResponse;
				});
			})
		);
	}
});
