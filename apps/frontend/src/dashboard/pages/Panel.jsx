//TODO: need condition for writers!
import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../shared/context/AuthContext";
import PanelLayout from "../../Layouts/PanelLayout";
import PanelGuard from "../components/util/PanelGuard";
import PanelNewsTable from "../components/NewsTab/PanelNewsTable";
import PanelNewsCreate from "../components/NewsTab/PanelNewsCreate";
import NewsForm from "../components/NewsTab/forms/NewsForm";
import PanelMembersTable from "../components/MembersTab/PanelMembersTable";
import MembersForm from "../components/MembersTab/forms/MembersForm";
import PanelSettingsProfile from "../components/SettingsTab/PanelSettingsProfile";

function Panel() {
  const { isAdmin, isOwner, isWriter } = useContext(AuthContext);

  const [showUpdateTabNews, setShowUpdateTabNews] = useState(false);
  const [showUpdateTabMembers, setShowUpdateTabMembers] = useState(false);
  const [newsToUpdate, setNewsToUpdate] = useState(null);
  const [membersToFullEdit, setMembersToFullEdit] = useState(null);

  const [acitveMembersTab, setActiveMembersTab] = useState("table");
  const [acitveNewsTab, setActiveNewsTab] = useState("table");

  useEffect(() => {
    function handleOpenUpdateTabNews(e) {
      setNewsToUpdate(e.detail);
      setShowUpdateTabNews(true);

      setTimeout(() => {
        const updateTabNews = document.querySelector(
          'input[name="news_tab"][aria-label="🔁 Update News"]',
        );
        if (updateTabNews) updateTabNews.checked = true;
      }, 50);
    }

    window.addEventListener("open-update-tab-news", handleOpenUpdateTabNews);
    return () =>
      window.removeEventListener(
        "open-update-tab-news",
        handleOpenUpdateTabNews,
      );
  });

  useEffect(() => {
    function handleOpenUpdateTabMembers(e) {
      setMembersToFullEdit(e.detail);
      setShowUpdateTabMembers(true);

      setTimeout(() => {
        const updateTabMember = document.querySelector(
          'input[name="members_tab"][aria-label="📝 Update Member"]',
        );
        if (updateTabMember) updateTabMember.checked = true;
      }, 50);
    }

    window.addEventListener(
      "open-update-tab-members",
      handleOpenUpdateTabMembers,
    );
    return () =>
      window.removeEventListener(
        "open-update-tab-members",
        handleOpenUpdateTabMembers,
      );
  });

  return (
    <>
      <Helmet>
        <title>Panel - Night Eye</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PanelLayout>
        <PanelGuard roles={["admin", "owner", "writer"]}>
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
                  <div className="tabs tabs-border">
                    <input
                      type="radio"
                      name="members_tab"
                      className="tab"
                      aria-label="👥 Members Table"
                      checked={acitveMembersTab === "table"}
                      onChange={() => setActiveMembersTab("table")}
                    />
                    <article className="tab-content border-base-300 bg-base-100 p-10">
                      <PanelMembersTable />
                    </article>

                    <input
                      type="radio"
                      name="members_tab"
                      className="tab"
                      aria-label="➕ Create Member"
                      checked={acitveMembersTab === "create"}
                      onChange={() => setActiveMembersTab("create")}
                    />

                    <article className="tab-content border-base-300 bg-base-100 p-10">
                      <MembersForm />
                    </article>
                  </div>

                  {showUpdateTabMembers && (
                    <>
                      <input
                        type="radio"
                        name="members_tab"
                        className="tab"
                        aria-label="📝 Update Member"
                      />
                      <article className="tab-content border-base-300 bg-base-100 p-10">
                        <div className="flex justify-end mb-4">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline btn-error"
                            onClick={() => {
                              setShowUpdateTabMembers(false);
                              setMembersToFullEdit(null);
                              setActiveMembersTab("table");
                            }}
                          >
                            ✕
                          </button>
                        </div>
                        <MembersForm
                          key={
                            membersToFullEdit?._id ||
                            membersToFullEdit?.id ||
                            "member"
                          }
                          mode="update"
                          initData={membersToFullEdit}
                          onUpdate={() => {
                            setShowUpdateTabMembers(false);
                            setMembersToFullEdit(null);
                            setActiveMembersTab("table");
                          }}
                        />
                      </article>
                    </>
                  )}
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
              <div className="tabs tabs-border">
                <input
                  type="radio"
                  name="news_tab"
                  className="tab"
                  aria-label="🗂️ News Table"
                  checked={acitveNewsTab === "table"}
                  onChange={() => setActiveNewsTab("table")}
                />
                <article className="tab-content border-base-300 bg-base-100 p-10">
                  <PanelNewsTable />
                </article>

                <input
                  type="radio"
                  name="news_tab"
                  className="tab"
                  aria-label="✏️ Create News"
                  checked={acitveNewsTab === "create"}
                  onChange={() => setActiveNewsTab("create")}
                />
                <article className="tab-content border-base-300 bg-base-100 p-10">
                  <PanelNewsCreate />
                </article>
              </div>

              {showUpdateTabNews && (
                <>
                  <input
                    type="radio"
                    name="news_tab"
                    className="tab"
                    aria-label="🔁 Update News"
                  />
                  <article className="tab-content border-base-300 bg-base-100 p-10">
                    <div className="flex justify-end mb-4">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => {
                          setShowUpdateTabNews(false);
                          setNewsToUpdate(null);
                          setActiveNewsTab("table");
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    <NewsForm
                      key={newsToUpdate?._id || newsToUpdate?.id || "new"}
                      mode="update"
                      initData={newsToUpdate}
                      onUpdate={() => {
                        setShowUpdateTabNews(false);
                        setNewsToUpdate(null);
                        setActiveNewsTab("table");
                      }}
                    />
                  </article>
                </>
              )}
            </section>

            <input
              type="radio"
              name="panel_tab"
              className="tab text-secondary hover:text-primary transition font-bold"
              aria-label="⚙️ Settings"
            />
            <section className="tab-content bg-base-100 border-base-300 p-6">
              <div className="tabs tabs-border">
                <input
                  type="radio"
                  name="settings_tab"
                  className="tab"
                  aria-label="🪪 Profile Settings"
                  defaultChecked
                />
                <article className="tab-content border-base-300 bg-base-100 p-10">
                  <PanelSettingsProfile />
                </article>

                {(isAdmin || isOwner) && (
                  <>
                    <input
                      type="radio"
                      name="settings_tab"
                      className="tab"
                      aria-label="🌐 Website Settings"
                    />
                    <article className="tab-content border-base-300 bg-base-100 p-10">
                      TODO: some admin features not complete yet!
                    </article>
                  </>
                )}
              </div>
            </section>
          </div>
        </PanelGuard>
      </PanelLayout>
    </>
  );
}

export default Panel;
