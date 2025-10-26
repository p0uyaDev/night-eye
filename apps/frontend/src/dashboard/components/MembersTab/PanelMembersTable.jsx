import { useContext } from "react";
import MembersTableBody from "./table/layouts/MembersTableBody";
import MembersTableHeader from "./table/layouts/MembersTableHeader";
import { AuthContext } from "../../../shared/context/AuthContext";
import { users } from "../../../shared/dummy";

export default function PanelMembersTable() {
  const { id: currentUserId, isAdmin, isOwner } = useContext(AuthContext);

  let filteredMembers = users.filter(
    (u) => u.id !== currentUserId && u.role !== "owner",
  );

  if (!isAdmin && !isOwner) {
    filteredMembers = filteredMembers.filter((u) => u.role !== "writer");
  }

  function handleDelete() {
    //TODO: temp function
    console.log("User with id", u.id, "deleted", u.id);
  }

  function handleEdit(id) {
    console.log("User with id", u.id, "edited", u.id);
  }

  return (
    <table className="table w-3/5">
      <MembersTableHeader />
      {filteredMembers.map((u) => {
        return (
          <MembersTableBody
            key={u.id}
            membersItem={u}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      })}
    </table>
  );
}
