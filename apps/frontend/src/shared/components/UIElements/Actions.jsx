import { Link } from "react-router-dom";

export default function Actions({ item, actions = [], mode = "row" }) {
  return (
    <div
      className={
        mode === "row" ? "flex flex-col gap-2 items-start" : "flex gap-2"
      }
    >
      {actions.map((action) =>
        action.type === "link" ? (
          <Link
            key={action.label}
            to={action.to}
            className={`btn btn-ghost btn-xs ${action.color ?? ""}`}
          >
            {action.icon && <action.icon />} {action.label}
          </Link>
        ) : (
          <button
            key={action.label}
            className={`btn btn-ghost btn-xs ${action.color ?? ""}`}
            onClick={() => action.onClick?.(item)}
          >
            {action.icon && <action.icon />} {action.label}
          </button>
        ),
      )}
    </div>
  );
}
