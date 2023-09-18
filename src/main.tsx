import "./index.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.ts";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
