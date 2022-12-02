import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { ClientProvider } from "@mantine/remix";

function hydrate() {
    hydrateRoot(
        document,
        <ClientProvider>
            <RemixBrowser />
        </ClientProvider>,
    );
}

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout(hydrate, 1);
}
