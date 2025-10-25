import { useContext } from "react";
import MembersTableBody from "./table/layouts/MembersTableBody";
import { AuthContext } from "../../../shared/context/AuthContext";
import { users } from "../../../shared/dummy";

export default function PanelMembersTable() {
  const { id: currentUserId, isAdmin, IsOwner } = useContext(AuthContext);

  let filteredMembers = users.filter(
    (u) => u.id !== currentUserId && u.role !== "owner",
  );

  if (!isAdmin && !IsOwner) {
    filteredMembers = filteredMembers.filter((u) => u.role !== "writer");
  }

  return (
    <table className="table w-3/5">
      {filteredMembers.map((u) => {
        return <MembersTableBody key={u.id} membersItem={u} />;
      })}
    </table>
  );
}
