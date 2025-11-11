//TODO: need backend and database to save settings context!
import { useState } from "react";
import { SettingsContext } from "./SettingsContext";

export default function SettingsProvider({ children }) {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isRobotsBlocked, setIsRobotsBlocked] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        isMaintenance,
        setIsMaintenance,
        isRobotsBlocked,
        setIsRobotsBlocked,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
