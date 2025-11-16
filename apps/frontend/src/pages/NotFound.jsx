import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="The page you are looking for does not exist on Night Eye."
        />
      </Helmet>
      <MainLayout>
        <main className="flex items-center h-full p-16">
          <section className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <article className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-error">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 text-accent">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                to="/"
                className="px-8 py-3 font-semibold rounded dark:bg-secondary dark:text-base-100"
              >
                Back to homepage
              </Link>
            </article>
          </section>
        </main>
      </MainLayout>
    </>
  );
}

export default NotFound;
