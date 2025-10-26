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
  const { id: currentUserId, isAdmin, isOwner } = useContext(AuthContext);

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
    .filter(Boolean)
    .filter((a) => typeof a.onClick === "function");

  if (!canModify || actionItems.length === 0) {
    return null;
  }

  return <Actions item={membersItem} actions={actionItems} mode={mode} />;
}
