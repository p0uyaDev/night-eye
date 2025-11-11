import { createContext } from "react";

export const SettingsContext = createContext({
  isMaintenance: false,
  setIsMaintenance: () => {},
  isRobotsBlocked: false,
  setIsRobotsBlocked: () => {},
  siteTitle: "Night Eye — Sci-Fi News",
  setSiteTitle: () => {},
  siteDescription:
    "Explore the unknown with Night Eye — your portal to futuristic news.",
  setSiteDescription: () => {},
});
