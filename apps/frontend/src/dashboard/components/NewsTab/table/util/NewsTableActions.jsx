import { Eye, SquarePen, Delete, Archive } from "lucide-react";
import Actions from "../../../../../shared/components/UIElements/Actions";

export default function NewsTableActions({
  newsItem,
  onEdit,
  onDelete,
  onArchive,
  actions = ["view", "edit", "delete", "archive"],
  mode = "row",
}) {
  const actionMap = {
    view: {
      label: "View",
      icon: Eye,
      type: "link",
      to: `/news/${newsItem?.slug ?? "#"}`,
      color: "text-secondary",
    },
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
    archive: {
      label: "Archive",
      icon: Archive,
      onClick: onArchive,
      color: "text-warning",
    },
  };

  const actionItems = actions
    .map((action) => actionMap[action])
    .filter(Boolean);

  return <Actions item={newsItem} actions={actionItems} mode={mode} />;
}
