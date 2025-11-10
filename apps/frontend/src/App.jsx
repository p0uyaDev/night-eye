import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./shared/util/ScrollToTop";
import { AlertProvider } from "./shared/context/AlertContext";
import { AuthContext } from "./shared/context/AuthContext";
import { AuthProvider } from "./shared/context/AuthProvider";
import UnderMaintenance from "./pages/UnderMaintenance";
import { SettingsContext } from "./shared/context/SettingsContext";
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

function AppRoutes() {
  const { isMaintenance } = useContext(SettingsContext);
  const { isOwner, isAdmin } = useContext(AuthContext);

  return isMaintenance && !isOwner && !isAdmin ? (
    <UnderMaintenance />
  ) : (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
