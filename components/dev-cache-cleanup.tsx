"use client";

import { useEffect } from "react";

export default function DevCacheCleanup() {
    useEffect(() => {
        const isLocalHost =
            typeof window !== "undefined" && /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

        if (process.env.NODE_ENV !== "development" || !isLocalHost) {
            return;
        }

        const storageKey = "navo-dev-cache-cleanup-complete";

        if (sessionStorage.getItem(storageKey)) {
            return;
        }

        let cancelled = false;

        const clearStaleState = async () => {
            try {
                const serviceWorker = navigator.serviceWorker;
                const registrations = serviceWorker ? await serviceWorker.getRegistrations() : [];
                const hadServiceWorker = registrations.length > 0 || Boolean(serviceWorker?.controller);

                await Promise.all(registrations.map((registration) => registration.unregister()));

                if ("caches" in window) {
                    const cacheKeys = await caches.keys();
                    await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
                }

                sessionStorage.setItem(storageKey, "1");

                if (hadServiceWorker && !cancelled) {
                    window.location.reload();
                }
            } catch {
                sessionStorage.setItem(storageKey, "1");
            }
        };

        void clearStaleState();

        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}