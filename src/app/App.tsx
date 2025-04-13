import { AppProvider } from "./providers/AppProvider";
import { Router } from "./routing/router";

export const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};
