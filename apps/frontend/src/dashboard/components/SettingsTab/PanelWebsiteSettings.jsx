import { useContext } from "react";
import { SettingsContext } from "../../../shared/context/SettingsContext";

export default function PanelWebsiteSettings() {
  const { isMaintenance, setIsMaintenance } = useContext(SettingsContext);

  return (
    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
      <legend className="fieldset-legend">Website Mode Settings</legend>
      <label className="label">
        <input
          type="checkbox"
          className="toggle"
          checked={isMaintenance}
          onChange={() => {
            console.log("Toggling Maintenance Mode:", !isMaintenance);
            setIsMaintenance(!isMaintenance);
          }}
        />
        <span className="label-text">Maintenance Mode</span>
      </label>
    </fieldset>
  );
}
