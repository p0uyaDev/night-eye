import { useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext";

export default function SettingsProvider({ children }) {
  const [isMaintenance, setIsMaintenance] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isMaintenance") === "true";
    setIsMaintenance(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("isMaintenance", isMaintenance);
  }, [isMaintenance]);

  return (
    <SettingsContext.Provider value={{ isMaintenance, setIsMaintenance }}>
      {children}
    </SettingsContext.Provider>
  );
}
