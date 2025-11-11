import { Helmet } from "react-helmet-async";

export default function UnderMaintenance() {
  return (
    <>
      <Helmet>
        <title>Under Maintenance - 503</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="The Night Eye website is currently under maintenance."
        />
      </Helmet>

      <main className="flex items-center justify-center min-h-screen bg-base-100 text-center p-8">
        <section className="max-w-md">
          <h1 className="text-9xl font-extrabold text-error mb-6">503</h1>
          <h2 className="text-3xl font-semibold mb-4">We’ll be back soon</h2>
          <p className="text-accent mb-10">
            Our website is currently undergoing scheduled maintenance.
            <br />
            We’re working hard to improve your experience.
          </p>
          <button
            disabled
            className="px-6 py-3 text-sm font-medium rounded-2xl bg-neutral/30 text-neutral-content cursor-not-allowed"
          >
            Please check back later
          </button>
        </section>
      </main>
    </>
  );
}
