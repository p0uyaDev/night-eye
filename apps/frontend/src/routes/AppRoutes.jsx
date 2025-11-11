import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import routes from ".";
import { AuthContext } from "../shared/context/AuthContext";
import { SettingsContext } from "../shared/context/SettingsContext";

export default function AppRoutes() {
  const { isMaintenance, isRobotsBlocked } = useContext(SettingsContext);
  const { isOwner, isAdmin } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        {isRobotsBlocked && (
          <>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="googlebot" content="noindex, nofollow" />
            <meta name="bingbot" content="noindex, nofollow" />
          </>
        )}
      </Helmet>
      {isMaintenance && !isOwner && !isAdmin ? (
        <UnderMaintenance />
      ) : (
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      )}
    </>
  );
}
