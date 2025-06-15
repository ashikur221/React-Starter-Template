import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./providers/AuthProvider";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </PrimeReactProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
