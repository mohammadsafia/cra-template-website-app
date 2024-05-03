import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Router } from "router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "api/core/QueryClient";
import { ToastContainer } from "react-toastify";
import LiferayUtils from "utils/LiferayUtils";

LiferayUtils.init();

class WebComponent extends HTMLElement {
	connectedCallback() {
		ReactDOM.createRoot(this).render(
            <React.StrictMode>
                <QueryClientProvider client={queryClient}>
                    <ToastContainer position="bottom-left" autoClose={4000}/>
                    <Router/>
                </QueryClientProvider>
            </React.StrictMode>
		);
	}
}

const ELEMENT_ID = "website-app";

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}