import React, { useState } from "react";
import "../../../../styles/pages/sidebar/onBoarding/UsersDefine.css";
import { FaCamera } from "react-icons/fa";

import { profileimg, profile2, profile3 } from "../../../../assets/images"; // Import image assets

const AddUserModal = ({ isOpen, onClose, onAddUser }: any) => {
  const [profilePic, setProfilePic] = useState<string | null>(null); // Update type to string or null for image preview
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Resident");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("Male");
  const [countryCode, setCountryCode] = useState("Male");

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the uploaded image
      setProfilePic(imageURL); // Set the image URL for preview
    }
  };
  const handleSubmit = () => {
    // Handle add user logic here
    const newUser = {
      profilePic,
      name,
      email,
      password,
      userType,
      mobile,
      gender,
    };
    onAddUser(newUser);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modalUD">
          <div className="add-user-headertext">
            <h4>Add New User</h4>
          </div>
          <div className="add-user-profileadd">
            <div
              className="add-card-modalUD"
              onClick={() => document.getElementById("upload")?.click()}
            >
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="uploaded-image"
                />
              ) : (
                <FaCamera />
              )}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="upload"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="amenity-modal-rowUD">
            <div className="form-group-UD">
              <label>Name</label>
              <input
                style={{
                  border: " 1.5px solid #7ec646",
                  padding: "12px",
                }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jhon Doe"
                className="input-fieldUD"
              />
            </div>
            <div className="form-group-UD">
              <label>Email</label>
              <input
                style={{
                  border: " 1.5px solid #7ec646",
                  padding: "12px",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g jhon@gmail.com"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group-UD">
              <label>Password</label>
              <input
                style={{
                  border: " 1.5px solid #7ec646",
                  padding: "12px",
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="input-fieldAC"
              />
            </div>
          </div>
          <div className="amenity-modal-rowUD">
            <div className="form-group-UD">
              <label>Mobile Number</label>
              <div className="phone-field-wrapperUD">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  style={{
                    width: "50%",
                    border: "none",
                  }}
                >
                  <option value="">🇺🇸 +971</option>
                  <option value="+1">🇺🇸 +971</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter phone number"
                  className="phone-numberUD"
                  style={{ border: "none" }}
                />
              </div>
            </div>
            <div className="form-group">
              <label>User Type</label>
              <select
                id="floortype"
                style={{
                  border: " 1.5px solid #7ec646",
                  padding: "12px",
                }}
                className="input-fieldUD"
              >
                <option value="us">Resident</option>
                <option value="ca">Visitor</option>
                <option value="uk">Admin</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                id="floortype"
                style={{
                  border: " 1.5px solid #7ec646",
                  padding: "12px",
                }}
                className="input-fieldUD"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>
          <div className="button-modal-amenity">
            <button onClick={handleSubmit}>Add User</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

const UsersDefine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [users, setUsers] = useState([
    { name: "Darrel Halland", pimage: profileimg, status: "active" },
    { name: "Alexa Morris", pimage: profile2, status: "deactive" },
    { name: "Alice Watson", pimage: profile3, status: "suspend" },
  ]);

  const handleAddUser = (newUser: any) => {
    setUsers([...users, newUser]);
  };
  return (
    <div className="user-define-main">
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginBottom: "1rem",
        }}
      >
        <h3 className="project-heading-floor">Users Define</h3>
      </div>
      <div className="cards-containerUD">
        {/* User Card 1 - Green Border */}
        {users.map((user, index) => (
          <div
            key={index}
            className={`user-card ${
              user.status === "active"
                ? "green-border"
                : user.status === "deactive"
                ? "orange-border"
                : "red-border"
            }`}
          >
            <img src={user.pimage} alt="profile" className="profile-image-ud" />
            <p className="map-user-card-name">{user.name}</p>
          </div>
        ))}
        {/* Add User Card */}
        <div className="user-card add-user-card" onClick={openModal}>
          <div className="profile-icon">+</div>
          <p>Add User</p>
        </div>

        {/* Add User Modal */}
        <AddUserModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddUser={handleAddUser}
        />
      </div>
    </div>
  );
};

export default UsersDefine;
