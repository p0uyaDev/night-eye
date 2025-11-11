import { createContext } from "react";

export const SettingsContext = createContext({
  isMaintenance: false,
  setIsMaintenance: () => {},
  isRobotsBlocked: false,
  setIsRobotsBlocked: () => {},
});
