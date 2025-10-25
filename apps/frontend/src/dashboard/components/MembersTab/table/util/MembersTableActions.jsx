import { useContext } from "react";
import { SquarePen, Delete } from "lucide-react";
import Actions from "../../../../../shared/components/UIElements/Actions";
import { AuthContext } from "../../../../../shared/context/AuthContext";

export default function MembersTableActions({
  membersItem,
  onEdit,
  onDelete,
  actions = ["edit", "delete"],
  mode = "row",
}) {
  const { isAdmin, isOwner, id: currentUserId } = useContext(AuthContext);
  const canModify =
    (isOwner && membersItem.id !== currentUserId) ||
    (isAdmin &&
      !isOwner &&
      membersItem.role === "writer" &&
      membersItem.id !== currentUserId);

  const actionMap = {
    edit: {
      label: "Edit",
      icon: SquarePen,
      onClick: onEdit,
      color: "text-info",
    },
    delete: {
      label: "Delete",
      icon: Delete,
      onClick: onDelete,
      color: "text-error",
    },
  };

  const actionItems = actions
    .map((action) => actionMap[action])
    .filter(Boolean);

  return (
    <div disabled={!canModify}>
      <Actions items={membersItem} actions={actionItems} mode={mode} />
    </div>
  );
}
