import { useState } from "react";
import Card from "../../shared/components/UIElements/Card/Card";
import useNewsFilter from "../../shared/hooks/useNewsFilter";
import NewsPagination from "../components/NewsPagination";
import { news } from "../../shared/dummy";

function NewsList({
  size = "large",
  category = "all",
  query,
  pagination = false,
  newsType,
  ...props
}) {
  const published = news.filter((item) => item.status === "published");
  const [paginatedNews, setPaginatedNews] = useState([]);
  const filteredNews = useNewsFilter(published, category, query);

  function finalNewsList() {
    if (newsType === "badged") {
      return filteredNews.filter((item) => item.badge);
    } else if (newsType === "normal") {
      return filteredNews.filter((item) => !item.badge);
    } else {
      return filteredNews;
    }
  }

  const finalNews = finalNewsList();

  return (
    <>
      <div
        className={`${props.flexStyle || "flex flex-wrap"} justify-center gap-5`}
      >
        {(pagination ? paginatedNews : finalNews).map((item) => (
          <Card
            key={item.id}
            type={size === "wrap" ? "card-small" : "card-large"}
            link={`/news/${item.slug}`}
            image={item.mainImage}
            {...item}
          />
        ))}
      </div>
      {(pagination ? paginatedNews : finalNews).length === 0 && (
        <p className="text-warning text-center m-10">
          {query
            ? `No news found for "${query}"`
            : `No news found for "${category}"`}
        </p>
      )}

      {pagination && (
        <NewsPagination news={filteredNews} onPageChange={setPaginatedNews} />
      )}
    </>
  );
}

export default NewsList;
