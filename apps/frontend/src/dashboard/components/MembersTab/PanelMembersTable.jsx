import MembersTableBody from "./table/layouts/MembersTableBody";
import { users } from "../../../shared/dummy";

export default function PanelMembersTable() {
  return (
    <table className="table w-3/5">
      {users.map((u) => {
        return <MembersTableBody key={u.id} membersItem={u} />;
      })}
    </table>
  );
}
