import { useEffect, useMemo, useState } from "react";
import { Provider } from "@shopify/app-bridge-react";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";

/**
 * A component to configure App Bridge.
 * @desc A thin wrapper around AppBridgeProvider that provides the following capabilities:
 *
 * 1. Ensures that navigating inside the app updates the host URL.
 * 2. Configures the App Bridge Provider, which unlocks functionality provided by the host.
 *
 * See: https://shopify.dev/apps/tools/app-bridge/react-components
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function AppBridgeProvider({
    children,
    host,
}: {
    children: any;
    host: string;
}) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const location = useLocation();
    const navigate = useNavigate();
    const history = useMemo(
        () => ({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            replace: (path) => {
                navigate(path, { replace: true });
            },
        }),
        [navigate],
    );

    const routerConfig = useMemo(
        () => ({ history, location }),
        [history, location],
    );

    // The host may be present initially, but later removed by navigation.
    // By caching this in state, we ensure that the host is never lost.
    // During the lifecycle of an app, these values should never be updated anyway.
    // Using state in this way is preferable to useMemo.
    // See: https://stackoverflow.com/questions/60482318/version-of-usememo-for-caching-a-value-that-will-never-change
    const [appBridgeConfig] = useState(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // const host: string | null = document.getElementById("host").innerHTML;
        return {
            host: host,
            apiKey: "1c911d43bae06712d07ec55887ebd337",
            forceRedirect: true,
        };
    });

    if (!appBridgeConfig.apiKey || !appBridgeConfig.host) {
        const bannerProps = !appBridgeConfig.host
            ? {
                  title: "Missing Shopify API Key",
                  children: (
                      <>
                          Your app is running without the SHOPIFY_API_KEY
                          environment variable. Please ensure that it is set
                          when running or building your React app.
                      </>
                  ),
              }
            : {
                  title: "Missing host query argument",
                  children: (
                      <>
                          Your app can only load if the URL has a <b>host</b>{" "}
                          argument. Please ensure that it is set, or access your
                          app using the Partners Dashboard <b>Test your app</b>{" "}
                          feature
                      </>
                  ),
              };

        return <div>false</div>;
    }

    return (
        <Provider config={appBridgeConfig} router={routerConfig}>
            {children}
        </Provider>
    );
}
