import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { trepdash } from "../../../assets/images"; // Import image assets
import "../../../styles/pages/sidebar/AccountCreation.css";
import { FaUpload } from "react-icons/fa"; // Import the upload icon

// componenets
import Modal from "../../common/Modal";

interface Contact {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  designation: string;
}

const initialContact: Contact = {
  name: "",
  email: "",
  phone: "",
  countryCode: "",
  designation: "",
};
const AccountCreation: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [selectedTradeLicense, setSelectedTradeLicense] = useState<File | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const [selectedContract, setSelectedContract] = useState<File | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]); // Set the selected file
    }
  };
  const breadcrumbItems = [
    { label: "Account Management", path: "/account-management", active: false },
    { label: "Account Listing", path: "/accountlisting", active: false },
    { label: "Account Creation", path: "/account-creation", active: true },
  ];

  const [contacts, setContacts] = useState<Contact[]>([initialContact]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const updatedContacts = [...contacts];
    updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    setContacts(updatedContacts);
  };

  const handleAddRow = () => {
    setContacts([...contacts, initialContact]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSave = () => {
    setIsModalOpen(true); // Open modal when save is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal when button is clicked
    navigate("/"); // Navigate to the login screen
  };
  return (
    <div className="account-creation-main">
      <div className="account-creation-header">
        <img src={trepdash} alt="modalimage" className="trepdash-creation" />
        <h1>Accounnt Registartion Process </h1>
      </div>

      <p className="legat-text">Legal Information (المعلومات القانونية)</p>

      <form className="company-form">
        {/* Company Name and VAT% */}
        <div className="form-row">
          <div className="form-field" style={{ width: "65%" }}>
            <label htmlFor="companyName">Company Name *</label>
            <input
              type="text"
              id="companyName"
              className="input-fieldAC"
              placeholder="e.g Treppan"
            />
          </div>
          <div className="form-field" style={{ width: "33%" }}>
            <label htmlFor="vat">TRN (VAT#) *</label>
            <input
              type="text"
              id="vat"
              className="input-fieldAC"
              placeholder="e.g 3497986692734"
            />
          </div>
        </div>

        {/* Address Field and Country Dropdown */}
        <div className="form-row">
          <div className="form-field" style={{ width: "49%" }}>
            <label htmlFor="address">Address (عنوان) *</label>
            <textarea
              id="address"
              className="input-fieldAC"
              rows={5}
              placeholder="e.g Street no 6,Sharjah"
            />
          </div>
          <div style={{ width: "49%" }}>
            <div className="form-field">
              <label htmlFor="country">Country (دولة) *</label>
              <select id="country" className="input-fieldAC">
                <option value="us">🇺🇸 United Arab Emmirates</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="city">City (مدينة) *</label>
              <select id="city" className="input-fieldAC">
                <option value="new-york">Sharjah</option>
                <option value="toronto">Toronto</option>
                <option value="london">London</option>
                {/* Add more cities as needed */}
              </select>
            </div>
          </div>
        </div>
      </form>

      <hr className="custom-line" />

      {/* contact information */}
      <p className="legat-text">Contact Information (معلومات الاتصال)</p>
      <div className="contact-form">
        {contacts.map((contact, index) => (
          <div className="contact-row" key={index}>
            <div className="form-field" style={{ width: "23%" }}>
              <label htmlFor={`name-${index}`}>
                Contact Person Name (اسم جهة الاتصال) *
              </label>
              <input
                type="text"
                id={`name-${index}`}
                name="name"
                value={contact.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter name"
                className="input-fieldAC"
              />
            </div>
            <div className="form-field" style={{ width: "23%" }}>
              <label htmlFor={`email-${index}`}>
                Email Address (عنوان البريد الإلكتروني) *
              </label>
              <input
                type="email"
                id={`email-${index}`}
                name="email"
                value={contact.email}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter email"
                className="input-fieldAC"
              />
            </div>
            <div className="form-field" style={{ width: "23%" }}>
              <label htmlFor={`designation-${index}`}>
                Designation (المسمى الوظيفي) *
              </label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={contact.designation}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter designation"
                className="input-fieldAC"
              />
            </div>
            <div className="form-field phone-field" style={{ width: "23%" }}>
              <label htmlFor={`phone-${index}`}>
                Mobile Number (رقم الجوال) *
              </label>
              <div className="phone-field-wrapper">
                <select
                  id={`countryCode-${index}`}
                  name="countryCode"
                  value={contact.countryCode}
                  onChange={(e) => handleInputChange(index, e)}
                  className="country-code-dropdown"
                >
                  <option value="">🇺🇸 +971</option>
                  <option value="+1">🇺🇸 +971</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  id={`phone-${index}`}
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Enter phone number"
                  className="phone-number"
                />
              </div>
            </div>
            <button
              type="button"
              className="plus-button"
              onClick={handleAddRow}
            >
              +
            </button>
            {contacts.length > 1 && (
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemoveRow(index)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>

      <hr className="custom-line" />

      {/* contact information */}
      <p className="legat-text">Documents (وثائق)</p>

      {/* Upload Sections */}
      <div className="upload-section-main">
        <div className="upload-section">
          <div>
            <p>Trade Licence (رخصة تجارية) *</p>
            <div className="upload-container">
              <label htmlFor="tradeLicense" className="custom-file-upload">
                <FaUpload className="upload-icon" size={30} />
                <span>Click to upload</span>
              </label>
              <input
                type="file"
                id="tradeLicense"
                onChange={(e) => handleFileChange(e, setSelectedTradeLicense)}
                style={{ display: "none" }}
              />
              {selectedTradeLicense && (
                <div className="file-info">{selectedTradeLicense.name}</div>
              )}
            </div>
          </div>

          {/* Contract Section */}
          <div>
            <p>Contract (عقد) *</p>
            <div className="upload-container">
              <label htmlFor="contract" className="custom-file-upload">
                <FaUpload className="upload-icon" size={30} />
                <span>Click to upload</span>
              </label>
              <input
                type="file"
                id="contract"
                onChange={(e) => handleFileChange(e, setSelectedContract)}
                style={{ display: "none" }}
              />
              {selectedContract && (
                <div className="file-info">{selectedContract.name}</div>
              )}
            </div>
          </div>

          {/* Company Logo Section */}
          <div>
            <p>Company Logo (شعار الشركة) *</p>
            <div className="upload-container">
              <label htmlFor="logo" className="custom-file-upload">
                <FaUpload className="upload-icon" size={30} />
                <span>Click to upload</span>
              </label>
              <input
                type="file"
                id="logo"
                onChange={(e) => handleFileChange(e, setSelectedLogo)}
                style={{ display: "none" }}
              />
              {selectedLogo && (
                <div className="file-info">{selectedLogo.name}</div>
              )}
            </div>
          </div>
        </div>

        <div className="remark-container">
          <label htmlFor="generalRemarks">General Remarks (ملاحظات عامة)</label>
          <textarea
            id="generalRemarks"
            className="general-remarks"
            placeholder="Enter any general remarks here..."
          />
        </div>
      </div>

      <div className="button-container">
        <button type="button" className="save-button" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="cancel-button">
          Cancel
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message="Your Request has been sent to admin for approval process. You will be notified when request accepted."
      />
    </div>
  );
};

export default AccountCreation;
