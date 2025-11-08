//TODO: panel profile settings need backend
import { useState, useContext } from "react";
import { AuthContext } from "../../../shared/context/AuthContext";

export default function PanelSettingsProfile({ onSubmit }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState(user.password || "");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(user.avatar || "");

  //TODO: need secure hashed password from backend

  function handleSubmit(e) {
    e.preventDefault();

    {
      /*onSubmit({})*/
    }

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      name,
      email,
      password,
      avatar, //TODO: add default avatar to send database
    };

    if (avatar instanceof File) {
      payload.avatar = avatar;
    } else if (avatar) {
      payload.avatar = avatar;
    }

    console.log(payload); //TODO: remove this console.log when conntected to backend

    onSubmit?.(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset flex flex-row space-x-5 justify-center">
        <div className="flex flex-col">
          <label className="label">Name</label>
          <input
            type="text"
            className="input validator"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="validator-hint">Required</p>

          <label className="label">Email</label>
          <input
            type="email"
            className="input validator"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="validator-hint">Required</p>

          <label className="label">Password</label>
          <input
            type="password"
            className="input validator"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="validator-hint">Required</p>

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className={`input validator ${
              confirmPassword && confirmPassword !== password
                ? "border-error"
                : ""
            }`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <p
            className={`validator-hint ${confirmPassword && confirmPassword !== password ? "text-error" : ""}`}
          >
            {confirmPassword && confirmPassword !== password
              ? "Password does not match"
              : "Required"}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="label">Avatar</label>
          <input
            type="file"
            accept="image/*"
            placeholder="Member Avatar"
            className="file-input"
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
          />

          {avatar && (
            <div className="relative w-32">
              <img
                className="w-32 h-32 rounded-lg object-cover border"
                src={
                  avatar instanceof File ? URL.createObjectURL(avatar) : avatar
                }
                alt="Preview Member Avatar"
              />
              <button type="button" onClick={() => setAvatar(null)}>
                ✕
              </button>
            </div>
          )}
        </div>
      </fieldset>

      <div className="flex flex-col mt-4 justify-center items-center">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
}
