//TODO: need backend and database to save settings context!
import { useState } from "react";
import { SettingsContext } from "./SettingsContext";

export default function SettingsProvider({ children }) {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isRobotsBlocked, setIsRobotsBlocked] = useState(false);
  const [siteTitle, setSiteTitle] = useState("Night Eye — Sci-Fi News");
  const [siteDescription, setSiteDescription] = useState(
    "Explore the unknown with Night Eye — your portal to futuristic news.",
  );

  return (
    <SettingsContext.Provider
      value={{
        isMaintenance,
        setIsMaintenance,
        isRobotsBlocked,
        setIsRobotsBlocked,
        siteTitle,
        setSiteTitle,
        siteDescription,
        setSiteDescription,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
