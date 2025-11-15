import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

export default function NewsTableHeader({
  toggleAll,
  checked,
  dateSort,
  setDateSort,
  readCountSort,
  setReadCountSort,
}) {
  function toggleDateSort() {
    setDateSort((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return "asc";
      return "desc";
    });
    setReadCountSort(null);
  }

  function toggleReadCountSort() {
    setReadCountSort((prev) => (prev === "asc" ? "desc" : "asc"));
    setDateSort(null);
  }

  return (
    <thead>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onChange={toggleAll}
              checked={checked}
            />
          </label>
        </th>
        <th>
          <label
            onClick={toggleDateSort}
            className="cursor-pointer hover:underline flex flex-row select-none"
          >
            {dateSort === "asc" ? <ChevronUp /> : <ChevronDown />} Date
          </label>
        </th>
        <th>Category</th>
        <th>News</th>
        <th>Status</th>
        <th>Tags</th>
        <th>
          <label
            onClick={toggleReadCountSort}
            className="cursor-pointer hover:underline flex flex-row select-none"
          >
            {(() => {
              switch (readCountSort) {
                case "asc":
                  return <ChevronUp />;
                case "desc":
                  return <ChevronDown />;
                default:
                  return <ChevronRight />;
              }
            })()}
            Read Count
          </label>
        </th>
        <th>Description</th>
      </tr>
    </thead>
  );
}
