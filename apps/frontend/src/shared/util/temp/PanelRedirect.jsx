//TODO: temp-panel-redirect: need backend api
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function PanelRedirect() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { replace: true });
    } else {
      switch (user.role) {
        case "owner":
        case "admin":
        case "writer":
          navigate(`/panel/${user.id}`, { replace: true });
          break;
        default:
          navigate("/auth", { replace: true });
      }
    }
  }, [user, navigate]);

  return null;
}
