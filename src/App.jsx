import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImagesComponent from "./ImagesComponent";

// Setting ReactQuery to cache and set fetched data as fresh until user manually requests new data to prevent unintentional auto refetch from API on window refocus
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>cyberconvoy.dev</h1>
        <ImagesComponent />
      </div>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
