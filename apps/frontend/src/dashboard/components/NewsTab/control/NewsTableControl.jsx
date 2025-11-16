import NewsTableFilter from "./NewsTableFilter";
import NewsTableSearch from "./NewsTableSearch";

export default function NewsTableControl({ onSearch, filter, setFilters }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <NewsTableFilter filters={filter} setFilters={setFilters} />
      <NewsTableSearch onSearch={onSearch} />
    </div>
  );
}
