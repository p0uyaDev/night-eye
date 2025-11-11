import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./shared/util/ScrollToTop";
import { AlertProvider } from "./shared/context/AlertContext";
import { AuthProvider } from "./shared/context/AuthProvider";
import SettingsProvider from "./shared/context/SettingsProvider";
import { SettingsContext } from "./shared/context/SettingsContext";

import "./App.css";

function App() {
  const { siteDescription } = useContext(SettingsContext);
  return (
    <>
      <Helmet>
        <meta property="og:description" content={siteDescription} />
      </Helmet>
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
    </>
  );
}

export default App;
