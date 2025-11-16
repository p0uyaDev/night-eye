import NewsTableActions from "./NewsTableActions";

export default function NewsTableBulk({ selectedIds, onDelete, onArchive }) {
  return (
    <div className="flex flex-row mb-5">
      <label className="label">
        <span className="label-text font-bold">Bulk Actions: </span>
      </label>{" "}
      {/*TODO: add bulk actions*/}
      <NewsTableActions
        onDelete={onDelete}
        onArchive={onArchive}
        actions={["delete", "archive"]}
        mode="global"
      />
      <div className="justify-end ml-auto">
        <label className="label">
          <span className="label-text font-bold">
            {selectedIds.length > 0 && "Selected: " + selectedIds.length}
          </span>
        </label>
      </div>
    </div>
  );
}
