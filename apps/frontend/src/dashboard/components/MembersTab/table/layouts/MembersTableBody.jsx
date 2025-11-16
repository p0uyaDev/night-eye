//TODO: need backend for get data from database
import { useState, useEffect, useRef } from "react";
import MembersTableActions from "../util/MembersTableActions";

export default function MembersTableBody({
  membersItem,
  onEdit,
  onFullEdit,
  onKick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDate, setEditedDate] = useState(membersItem);
  const rowRef = useRef(null);

  useEffect(() => {
    if (!isEditing) {
      setEditedDate(membersItem);
    }
  }, [membersItem, isEditing]);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedDate((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    //TODO: need backend to save data to db
    console.log("Auto-Saved member: ", editedDate);
    onEdit?.(editedDate);
    setIsEditing(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (rowRef.current && !rowRef.current.contains(event.target)) {
        if (isEditing) handleSave();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, editedDate]);

  return (
    <tr ref={rowRef}>
      <td>{membersItem.id}</td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={editedDate.avatar} alt={`${editedDate.name} avatar`} />
            </div>
          </div>

          <div>
            {isEditing ? (
              <>
                <input
                  name="name"
                  className="input border-none"
                  value={editedDate.name}
                  onChange={handleChange}
                />
                <select
                  name="role"
                  className="select select-sm border-none decoration-none"
                  value={editedDate.role}
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                  <option value="writer">Writer</option>
                </select>
              </>
            ) : (
              <>
                <div className="font-bold" onClick={() => setIsEditing(true)}>
                  {editedDate.name}
                </div>
                <div
                  className="text-sm opacity-50"
                  onClick={() => setIsEditing(true)}
                >
                  {editedDate.role}
                </div>
              </>
            )}
          </div>
        </div>
      </td>

      <td>
        {isEditing ? (
          <input
            name="email"
            className="input input-sm w-full"
            value={editedDate.email}
            onChange={handleChange}
          />
        ) : (
          <div
            className="text-sm opacity-50"
            onClick={() => setIsEditing(true)}
          >
            {editedDate.email}
          </div>
        )}
      </td>

      <td>
        <MembersTableActions
          membersItem={membersItem}
          onKick={onKick}
          onFullEdit={onFullEdit}
          actions={["kick", "edit"]}
        />
      </td>
    </tr>
  );
}
