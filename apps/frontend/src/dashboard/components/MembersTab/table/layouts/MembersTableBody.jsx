//TODO: need backend for get data from database
import MembersTableActions from "../util/MembersTableActions";

export default function MembersTableBody({ membersItem, onEdit }) {
  return (
    <tbody>
      <tr>
        <td>{membersItem.id}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={membersItem.avatar}
                  alt={`${membersItem.name} avatar`}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{membersItem.name}</div>
              <div className="text-sm opacity-50">{membersItem.role}</div>
            </div>
          </div>
        </td>
        <td>{membersItem.email}</td>
        <td>
          <MembersTableActions
            membersItem={membersItem}
            onEdit={onEdit}
            actions={["edit", "delete"]}
          />
        </td>
      </tr>
    </tbody>
  );
}
