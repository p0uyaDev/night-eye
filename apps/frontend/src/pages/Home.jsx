//TODO: Need loading spinner and Skeleton
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../shared/components/UIElements/Hero/Hero";
import ScrollTabs from "../shared/components/UIElements/Tab/ScrollTabs";
import NewsList from "../news/pages/NewsList";
import { SettingsContext } from "../shared/context/SettingsContext";
import { news } from "../shared/dummy"; //TODO: dummy data
import { Helmet } from "react-helmet-async";

function Home() {
  const categories = ["nasa", "space", "tech"];
  const { siteTitle } = useContext(SettingsContext);
  const heroNews = news.find((n) => n.hero === true);

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <MainLayout>
        <main className="flex flex-col items-center justify-center px-5 mx-auto my-8 w-full max-w-6xl gap-16">
          <section aria-label="Hero featured news">
            <Hero
              {...heroNews}
              description={heroNews.description.slice(0, 100) + "..."}
              image={heroNews.mainImage}
              buttonLink={`/news/${heroNews.slug}`}
              buttonText="Read More"
            />
          </section>

          <section aria-label="News categories navigation">
            <ScrollTabs categories={categories} />
          </section>

          {categories.map((categories) => {
            const badgeNews = news
              .filter((n) => n.category === categories && n.badge)
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 1);

            const normalNews = news
              .filter((n) => n.category === categories && !n.badge)
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3);

            return (
              <section
                id={categories}
                key={categories}
                aria-label={`${categories} news`}
                className="max-w-4xl"
              >
                <header className="flex flex-row items-center justify-between">
                  <h2 className="text-4xl text-secondary font-bold Capitalize hover:underline">
                    <Link to={`/archive/${categories}`}>
                      {categories === "nasa"
                        ? "🚀 Nasa"
                        : categories === "space"
                          ? "🪐 Space"
                          : "🦾 Tech"}
                    </Link>
                  </h2>
                </header>
                <div className="divider divider-primary"></div>
                {badgeNews.length > 0 && (
                  <article aria-label={`${categories} badge news`}>
                    <NewsList
                      category={categories}
                      size="large"
                      newsType="badged"
                    />
                  </article>
                )}

                {normalNews.length > 0 && (
                  <aside
                    aria-label={`${categories} normal news`}
                    className="mt-8"
                  >
                    <NewsList
                      category={categories}
                      size="wrap"
                      pagination={false}
                      newsType="normal"
                    />
                  </aside>
                )}
              </section>
            );
          })}
        </main>
      </MainLayout>
    </>
  );
}

export default Home;
