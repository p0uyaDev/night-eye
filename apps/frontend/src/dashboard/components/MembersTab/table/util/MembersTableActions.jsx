import { SquarePen, Delete } from "lucide-react";
import Actions from "../../../../../shared/components/UIElements/Actions";

export default function MembersTableActions({
  membersItem,
  onEdit,
  onDelete,
  actions = ["edit", "delete"],
  mode = "row",
}) {
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

  return <Actions items={membersItem} actions={actionItems} mode={mode} />;
}
