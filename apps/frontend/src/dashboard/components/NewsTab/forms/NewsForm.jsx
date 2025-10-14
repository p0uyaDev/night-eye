//TODO: need backend to send news data to db
import { useState, useContext } from "react";
import { AuthContext } from "../../../../shared/context/AuthContext";
import { users } from "../../../../shared/dummy"; //TODO: dummy user please add backend
import TipTapEditor from "../../../../shared/components/UIElements/TipTapEditor";

export default function NewsForm({ mode = "create", initData = {}, onSubmit }) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState(initData.title || "");
  const [mainImage, setMainImage] = useState(initData.mainImage || "");
  const [tags, setTags] = useState(initData.tags || []);
  const [badge, setBadge] = useState(initData.badge || "");
  const [auther, setAuther] = useState(initData.author || "");
  const [categories, setCategories] = useState(initData.categories || "");
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    {
      /*onSubmit({})*/
    }
    console.log({ title, tags, badge, auther, categories, content, mainImage }); //TODO: remove this console.log when conntected to backend
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend font-bold">
          {mode === "create" ? "Create New" : "Update"} News
        </legend>

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
          placeholder="News Main Image"
          className="file-input validator"
          value={mainImage}
          onChange={(e) => setMainImage(e.target.value)}
          required
        />
        <p className="validator-hint">Required</p>

        <TipTapEditor
          value={content}
          onChange={(html) => {
            setContent(html); // Update the state only when necessary
          }}
        />

        <label className="label">Tags</label>
        <input
          type="text"
          placeholder="News (comma separated)"
          className="input"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(","))}
        />

        <label className="label">Badge</label>
        <select
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          className="select w-full"
        >
          <option value="">No badge</option>
          <option value="breaking">Breaking</option>
          <option value="featured">Featured</option>
          <option value="analysis">Analysis</option>
        </select>

        <div disabled={user.role === "writer"} className="flex flex-col">
          <label className="label">Author</label>
          <select
            value={auther}
            onChange={(e) => setAuther(e.target.value)}
            className="select w-full"
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

        <label className="label">Categories</label>
        <select
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="select w-full required validator"
          required
        >
          <option value="" disabled={true}>
            Please select one of the categories!
          </option>
          <option value="space">space</option>
          <option value="nasa">nasa</option>
          <option value="tech">tech</option>
        </select>
        <p className="validator-hint">Required</p>

        <button type="submit" className="btn btn-primary">
          {mode === "create" ? "Create" : "Update"``}
        </button>
      </fieldset>
    </form>
  );
}
