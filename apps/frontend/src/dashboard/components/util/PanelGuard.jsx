import { useEffect, useState, useContext } from "react";
import Alert from "../../../shared/components/UIElements/Alert";
import { AuthContext } from "../../../shared/context/AuthContext";

export default function PanelGuard({ children, roles = [] }) {
  const [isMobile, setIsMobile] = useState(false);
  const { isLoggedIn, role } = useContext(AuthContext);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 1024);
    }

    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <Alert type="warning" message="Panel is not available on mobile view!" />
    );
  }

  if (!isLoggedIn) {
    return <Alert type="error" message="Access Denied! Please login!" />;
  }

  if (roles.length > 0 && !roles.includes(role)) {
    return (
      <Alert
        type="warning"
        message="You do not have permission to view this section"
      />
    );
  }

  return children;
}
