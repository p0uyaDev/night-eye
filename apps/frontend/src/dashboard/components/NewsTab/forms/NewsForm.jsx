//TODO: need backend to send news data to db
import { useState, useContext, useMemo } from "react";
import { AuthContext } from "../../../../shared/context/AuthContext";
import { users } from "../../../../shared/dummy"; //TODO: dummy user please add backend
import TipTapEditor from "../../../../shared/components/UIElements/TipTapEditor";

export default function NewsForm({ mode = "create", initData = {}, onSubmit }) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState(initData.title || "");
  const [mainImage, setMainImage] = useState(initData.mainImage || "");
  const [description, setDescription] = useState(initData.description || "");
  const [tags, setTags] = useState(initData.tags || []);
  const [badge, setBadge] = useState(initData.badge || "");
  const [authorId, setAuthorId] = useState(initData.writerId || user.id); //TODO: need Auth and backend
  const [categories, setCategories] = useState(initData.categories || "");
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    {
      /*onSubmit({})*/
    }

    if (!content || content.trim() === "") {
      //TODO: temp error handler need backend for try and catch
      alert("please write some content before submit");
      return;
    }

    const selectedAuthor = useMemo(
      () => users.find((u) => u.id == authorId),
      [authorId],
    );

    console.log({
      title,
      tags,
      badge,
      authorId,
      authorName: selectedAuthor ? selectedAuthor.name : "Unknown",
      categories,
      content,
      mainImage,
      description,
    }); //TODO: remove this console.log when conntected to backend
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend font-bold">
          {mode === "create" ? "Create New" : "Update"} News
        </legend>

        <div className="mb-4 space-y-4 flex flex-row gap-2 items-center">
          <label className="label">Title</label>
          <input
            type="text"
            placeholder="News Title"
            className="input validator"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p className="validator-hint">Required</p>

          <label className="label">Main Image</label>
          <input
            type="file"
            accept="image/*"
            placeholder="News Main Image"
            className="file-input validator"
            onChange={(e) => setMainImage(e.target.files?.[0] || null)}
            required
          />
          <p className="validator-hint">Required</p>

          <label className="label">Categories</label>
          <select
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="select w-full required validator max-w-50"
            required
          >
            <option value="" disabled={true}>
              --- Select ---
            </option>
            <option value="space">space</option>
            <option value="nasa">nasa</option>
            <option value="tech">tech</option>
          </select>
          <p className="validator-hint">Required</p>
        </div>

        <div className="flex flex-row gap-2 mb-4">
          <label className="label">News Summary</label>
          <textarea
            className="textarea w-md validator"
            placeholder="Space comes closer to Earth as we move further away!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <p className="validator-hint">Required</p>

          {mainImage && (
            <img
              className="w-32 h-32 rounded-lg object-cover border"
              src={URL.createObjectURL(mainImage)}
              alt="Preview News Image"
            />
          )}
        </div>

        <div className="flex flex-row w-4/5">
          <TipTapEditor
            value={content}
            onChange={(html) => {
              setContent(html); // Update the state only when necessary
            }}
          />
        </div>

        <div className="flex flex-row gap-2 m-2">
          <label className="label">Tags</label>
          <input
            type="text"
            placeholder="Add tags (press Enter)"
            className="input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                e.preventDefault();
                setTags([...tags, e.target.value.trim()]);
                e.target.value = "";
              }
            }}
          />

          <div className="flex flex-row gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="badge badge-neutral cursor-pointer bg-secondary text-base-100"
                onClick={() => setTags(tags.filter((_, idx) => idx !== i))}
              >
                {tag} ✕
              </span>
            ))}
          </div>

          <label className="label">Badge</label>
          <select
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            className="select"
          >
            <option value="">No badge</option>
            <option value="breaking">Breaking</option>
            <option value="featured">Featured</option>
            <option value="analysis">Analysis</option>
          </select>

          <div className="flex flex-row gap-2">
            <label className="label">Author</label>
            <select
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              className="select"
              disabled={user.role === "writer"}
            >
              <option value={`${user.id}`}>{user.name}</option>
              {users
                .filter((u) => u.name !== user.name)
                .map((u) => (
                  <option key={u.id} value={`${u.id}`}>
                    {u.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          {mode === "create" ? "Create" : "Update"}
        </button>
      </fieldset>
    </form>
  );
}
