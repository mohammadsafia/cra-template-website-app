import "react-toastify/dist/ReactToastify.css";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "api/core/QueryClient";

type LayoutWrapper = PropsWithChildren & {}

function LayoutWrapper({ children }: LayoutWrapper) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} client={queryClient} position="bottom" buttonPosition="bottom-right"/>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </QueryClientProvider>
    </>
  );
}

export default LayoutWrapper