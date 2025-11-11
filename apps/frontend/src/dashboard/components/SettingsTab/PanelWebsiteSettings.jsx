import { useContext } from "react";
import { SettingsContext } from "../../../shared/context/SettingsContext";

export default function PanelWebsiteSettings() {
  const {
    isMaintenance,
    setIsMaintenance,
    isRobotsBlocked,
    setIsRobotsBlocked,
    siteTitle,
    setSiteTitle,
    siteDescription,
    setSiteDescription,
  } = useContext(SettingsContext);

  function handleSubmit(e) {
    e.preventDefault();

    {
      /*onSubmit({})*/
    }

    console.log(siteTitle, siteDescription);
  }

  return (
    <div className="flex flex-row space-x-5 justify-center">
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 gap-5 h-full">
        <legend className="fieldset-legend">Website Mode</legend>
        <label className="label">
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={isMaintenance}
            onChange={() => {
              setIsMaintenance(!isMaintenance);
            }}
          />
          <span className="label-text cursor-pointer hover:text-primary">
            Maintenance Mode
          </span>
        </label>

        <label className="label">
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={isRobotsBlocked}
            onChange={() => {
              setIsRobotsBlocked(!isRobotsBlocked);
            }}
          />
          <span className="label-text cursor-pointer hover:text-primary">
            Block Google Spider
          </span>
        </label>
      </fieldset>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border w-100 p-4">
          <legend className="fieldset-legend">Website Details</legend>

          <span className="label-text">Title</span>
          <input
            type="text"
            placeholder={siteTitle.slice(0, 30) + "..."}
            className="input"
          />

          <span className="label-text">Description</span>
          <textarea
            className="textarea h-24"
            placeholder={siteDescription.slice(0, 30) + "..."}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Update Details
          </button>
        </fieldset>
      </form>
    </div>
  );
}
