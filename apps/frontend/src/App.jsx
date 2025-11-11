import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./shared/util/ScrollToTop";
import { AlertProvider } from "./shared/context/AlertContext";
import { AuthProvider } from "./shared/context/AuthProvider";
import SettingsProvider from "./shared/context/SettingsProvider";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <SettingsProvider>
          <AlertProvider>
            <ScrollToTop />
            <AppRoutes />
          </AlertProvider>
        </SettingsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
