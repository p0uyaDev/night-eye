import { useContext } from "react";
import { SettingsContext } from "../../../shared/context/SettingsContext";

export default function PanelWebsiteSettings() {
  const {
    isMaintenance,
    setIsMaintenance,
    isRobotsBlocked,
    setIsRobotsBlocked,
  } = useContext(SettingsContext);

  return (
    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
      <legend className="fieldset-legend">Website Mode Settings</legend>
      <label className="label">
        <input
          type="checkbox"
          className="toggle"
          checked={isMaintenance}
          onChange={() => {
            setIsMaintenance(!isMaintenance);
          }}
        />
        <span className="label-text mr-3">Maintenance Mode</span>

        <input
          type="checkbox"
          className="toggle"
          checked={isRobotsBlocked}
          onChange={() => {
            setIsRobotsBlocked(!isRobotsBlocked);
          }}
        />
        <span className="label-text">Block Google Spider</span>
      </label>
    </fieldset>
  );
}
