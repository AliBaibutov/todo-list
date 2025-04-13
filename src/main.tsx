import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./app/shared/ui/provider.tsx";
import { App } from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
