import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import BaseNav from "./BaseNav";

function PanelNav({ links }) {
  const { user, logout } = useContext(AuthContext); //TODO: enhance auth context

  function handleLogout() {
    logout();
    window.location.reload();
    window.location.href = "/";
  }

  return (
    <BaseNav links={links}>
      <div className="dropdown dropdown-end px-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src={user.avatar} alt={`${user.name} avatar`} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <NavLink to="/panel">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </BaseNav>
  );
}

export default PanelNav;
