import { useContext } from "react";
import { SquarePen, UserX } from "lucide-react";
import Actions from "../../../../../shared/components/UIElements/Actions";
import { AuthContext } from "../../../../../shared/context/AuthContext";

export default function MembersTableActions({
  membersItem,
  onKick,
  onFullEdit,
  actions = ["edit", "kick"],
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
      label: "Full Edit",
      icon: SquarePen,
      onClick: onFullEdit,
      color: "text-primary",
    },

    kick: {
      label: "Kick",
      icon: UserX,
      onClick: onKick,
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
