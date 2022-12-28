
const VERSION = 1;

const CACHE_NAME =  "card-capture-v" + VERSION;

const APP_SHELL_FILES = [
	"./",
	"./card-capture.webmanifest",
	"./index.css",
	"./index.html",
	"./index.js",
	"./fonts/card-capture.woff2",
	"./icons/bgg-primary-logo-reverse.svg",
	"./icons/cc-icon.png",
	"./icons/favicon.ico",
	"./icons/home-svgrepo-com.svg",
	"./icons/info-svgrepo-com.svg",
	"./icons/menu-svgrepo-com.svg",
	"./icons/play-button-svgrepo-com.svg"
];

self.addEventListener(
	"install",
	( evt ) => {
		console.log( "[Service Worker] Install: v" + VERSION );
		evt.waitUntil(
			(
				async () => {
					const cache = await caches.open( CACHE_NAME );
					console.log( "[Service Worker] Caching app shell" );
					await cache.addAll( APP_SHELL_FILES );
				}
			)()
		);
	}
);

self.addEventListener(
	"activate",
	( evt ) => {
		console.log( "[Service Worker] Activate: v" + VERSION);
	}
);

self.addEventListener(
	"fetch",
	( evt ) => {
		evt.respondWith(
			(
				async () => {
					console.log( "[Service Worker] Fetching: " + evt.request.url );
					const RESPONSE_CACHE = await caches.match( evt.request );
					if ( RESPONSE_CACHE ) {
						return RESPONSE_CACHE;
					}
					
					console.warn(
						"[Service Worker] Fetching: " + evt.request.url
					);
					
					const RESPONSE_NET = await fetch( evt.request );
					const CACHE = await caches.open( CACHE_NAME );
					console.warn(
						"[Service Worker] Caching: " + evt.request.url
					);
					CACHE.put( evt.request, RESPONSE_NET.clone() );
					return RESPONSE_NET;
				}
			)()
		);
	}
);
