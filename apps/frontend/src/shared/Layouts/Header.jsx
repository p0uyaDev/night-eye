import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MainNav from "../components/Navigation/MainNav";
import PanelNav from "../components/Navigation/PanelNav";
import { mainNavLinks } from "../../routes";

function Header({ type = "main" }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header>
      {type === "main" && !isLoggedIn ? (
        <MainNav links={mainNavLinks} />
      ) : (
        <PanelNav links={mainNavLinks} />
      )}
    </header>
  );
}

export default Header;
