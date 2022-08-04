import React from "react";

const User = ({ users }) => {
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{users.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{users.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{users.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <button className="text-indigo-600 hover:text-indigo-800 px-4">
          Edit
        </button>
        <button className="text-red-600 hover:text-red-800">Delete</button>
      </td>
    </tr>
  );
};

export default User;
