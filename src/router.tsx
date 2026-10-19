import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

export const getRouter = () => {
  // BASE_URL is set by Vite from the `base` option in vite.config.ts.
  // e.g. "/btm418-assign1/" → basepath "/btm418-assign1"
  // TanStack Router needs this so it can match routes correctly on GitHub Pages.
  const basepath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

// Augment the router context so child routes can use queryClient
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
