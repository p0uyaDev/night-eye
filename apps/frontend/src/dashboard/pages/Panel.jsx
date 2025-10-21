//TODO: need condition for writers!
import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../shared/context/AuthContext";
import PanelLayout from "../../Layouts/PanelLayout";
import PanelGuard from "../components/util/PanelGuard";
import PanelNewsTable from "../components/NewsTab/PanelNewsTable";
import PanelNewsCreate from "../components/NewsTab/PanelNewsCreate";
import NewsForm from "../components/NewsTab/forms/NewsForm";

function Panel() {
  const { isAdmin, isOwner, isWriter } = useContext(AuthContext);

  const [showUpdateTab, setShowUpdateTab] = useState(false);
  const [newsToUpdate, setNewsToUpdate] = useState(null);

  useEffect(() => {
    function handleOpenUpdateTab(e) {
      setNewsToUpdate(e.detail);
      setShowUpdateTab(true);

      setTimeout(() => {
        const updateTab = document.querySelector(
          'input[name="news_tab"][aria-label="🔁 Update News"]',
        );
        if (updateTab) updateTab.checked = true;
      }, 50);
    }

    window.addEventListener("open-update-tab", handleOpenUpdateTab);
    return () =>
      window.removeEventListener("open-update-tab", handleOpenUpdateTab);
  });

  return (
    <>
      <Helmet>
        <title>Panel - Night Eye</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PanelLayout>
        <div className="tabs tabs-lift mb-4 p-4">
          {(isAdmin || isOwner) && (
            <>
              <input
                type="radio"
                name="panel_tab"
                className="tab text-secondary hover:text-primary transition font-bold"
                aria-label="🛡️ Dashboard"
                defaultChecked
              />
              <section className="tab-content bg-base-100 border-base-300 p-6">
                {/* TODO: WIP tab feature! */}
                Admin and Owner Dashboard for SEO, Analytics and more (WIP)
              </section>

              <input
                type="radio"
                name="panel_tab"
                className="tab text-secondary hover:text-primary transition font-bold"
                aria-label="👤 Members"
              />
              <section className="tab-content bg-base-100 border-base-300 p-6">
                Table of all registered users
                {/* TODO: WIP tab feature! */}
              </section>
            </>
          )}

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="📰 News"
            defaultChecked={isWriter}
          />
          <section className="tab-content bg-base-100 border-base-300 p-6">
            <PanelGuard roles={["admin", "owner", "writer"]}>
              <div className="tabs tabs-border">
                <input
                  type="radio"
                  name="news_tab"
                  className="tab"
                  aria-label="🗂️ News Table"
                  defaultChecked
                />
                <article className="tab-content border-base-300 bg-base-100 p-10">
                  <PanelNewsTable />
                </article>

                <input
                  type="radio"
                  name="news_tab"
                  className="tab"
                  aria-label="✏️ Create News"
                />
                <article className="tab-content border-base-300 bg-base-100 p-10">
                  <PanelNewsCreate />
                </article>
              </div>

              {showUpdateTab && (
                <>
                  <input
                    type="radio"
                    name="news_tab"
                    className="tab"
                    aria-label="🔁 Update News"
                  />
                  <article className="tab-content border-base-300 bg-base-100 p-10">
                    <NewsForm
                      key={newsToUpdate?._id || newsToUpdate?.id || "new"}
                      mode="update"
                      initData={newsToUpdate}
                    />
                  </article>
                </>
              )}
            </PanelGuard>
          </section>

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="⚙️ Settings"
          />
          <section className="tab-content bg-base-100 border-base-300 p-6">
            User Settings
            {/* TODO: WIP tab feature! */}
          </section>
        </div>
      </PanelLayout>
    </>
  );
}

export default Panel;
