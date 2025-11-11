import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../Layouts/MainLayout";
import Breadcrumb from "../../shared/components/Navigation/Breadcrumbs";
import NotFound from "../../pages/NotFound";
import AuthorCard from "../components/AuthorCard";
import MetaInfo from "../components/MetaInfo";
import Tag from "../../shared/components/UIElements/Tag";
import RelatedNews from "../components/RelatedNews";
import { news, users } from "../../shared/dummy"; //TODO: Replace with backend call later
import { SettingsContext } from "../../shared/context/SettingsContext";

function NewsItem() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);
  const { siteTitle } = useContext(SettingsContext);

  if (!item) {
    return <NotFound />;
  }

  const author = users.find((u) => u.id === item.writerId);

  const links = [
    { label: "Home", path: "/" },
    { label: "Archive", path: "/archive" },
    { label: item.category, path: `/archive/${item.category}` },
    { label: item.title, path: `/news/${item.slug}` },
  ];

  useEffect(() => {
    document.title = `${item.title} - Night Eye`;
  }, [item.title]);

  return (
    <MainLayout>
      <Helmet>
        <title>
          {item.title} - {siteTitle.slice(0, 10)}
        </title>
      </Helmet>
      <div className="mx-2 py-2">
        <Breadcrumb links={links} />
      </div>

      <main className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <article className="max-w-2xl">
          <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold lg:leading-none tracking-tight text-secondary">
            {item.title}
          </h2>
          <MetaInfo
            badge={item.badge}
            date={item.date}
            readCount={item.readCount}
          />
          <img
            className="mb-8 rounded-4xl"
            src={item.mainImage}
            alt={`Main image for: ${item.title}`}
          />
          <p className="mb-4 text-lg">{item.description}</p>
          <div className="flex flex-row gap-2 justify-baseline">
            <Tag tags={item.tags} />
          </div>
        </article>

        <AuthorCard {...author} />

        <RelatedNews
          currentSlug={slug}
          tags={item.tags}
          category={item.category}
        />
      </main>
    </MainLayout>
  );
}

export default NewsItem;
