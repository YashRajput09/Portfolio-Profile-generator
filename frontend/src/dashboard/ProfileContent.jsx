import React, { useState } from "react";
import { Edit, Save, X, Linkedin, Github } from "lucide-react";

const ProfileContent = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 relative">
      {/* Profile Picture Section */}
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <img
            src={editedUser.profilePicture}
            alt={`Profile picture of ${editedUser.name}`}
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          {isEditing && (
            <button
              className="absolute bottom-0 right-0 bg-indigo-500 rounded-full p-2 border-2 border-white"
              onClick={() => alert("Profile picture update functionality coming soon!")}
            >
              <Edit size={16} className="text-white" />
            </button>
          )}
        </div>
        <div>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="text-lg font-semibold border border-gray-300 px-2 py-1 rounded"
            />
          ) : (
            <h2 className="text-lg font-semibold">{user.name}</h2>
          )}
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        {user.social.linkedin && (
          <a
            href={`https://${user.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500"
          >
            <Linkedin size={20} />
          </a>
        )}
        {user.social.github && (
          <a
            href={`https://${user.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500"
          >
            <Github size={20} />
          </a>
        )}
      </div>

      {/* Skills */}
      <div className="mt-4">
        <h3 className="text-md font-semibold">Skills</h3>
        {isEditing ? (
          <input
            type="text"
            name="skills"
            value={editedUser.skills}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-1 rounded w-full"
          />
        ) : (
          <p className="text-gray-600">{user.skills}</p>
        )}
      </div>

      {/* Edit / Save Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded flex items-center space-x-1"
            >
              <Save size={16} /> <span>Save</span>
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white px-3 py-1 rounded flex items-center space-x-1"
            >
              <X size={16} /> <span>Cancel</span>
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-indigo-500 text-white px-3 py-1 rounded flex items-center space-x-1"
          >
            <Edit size={16} /> <span>Edit</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
