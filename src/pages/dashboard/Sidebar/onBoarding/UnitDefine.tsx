import React, { useState } from "react";
import "../../../../styles/pages/sidebar/onBoarding/FloorDefine.css";
interface Contact {
  name: string;
  email: string;
  designation: string;
}

const initialContact: Contact = {
  name: "",
  email: "",
  designation: "",
};
const UnitDefine = () => {
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
  return (
    <div className="floor-define-container">
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
        <h3 className="project-heading-floor">Unit Define</h3>
        <div className="buttons-floor">
          <button type="button" className="Download">
            Download Sample
          </button>
          <button type="button" className="Upload">
            Upload in Bulk
          </button>
        </div>
      </div>
      <div className="contact-form-floor">
        {contacts.map((contact, index) => (
          <div className="contact-row" key={index}>
            <div className="form-group">
              <label>Floor Number</label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={contact.designation}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g 234"
                className="input-fieldAC"
              />
            </div>
            <div className="form-group">
              <label>Floor Name</label>
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g Villa Floor"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group">
              <label>Unit Number</label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={contact.designation}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g 234"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group">
              <label>Unit Type</label>
              <select id="country" className="input-fieldPro">
                <option value="us">Bedroomt</option>
                <option value="ca">Play Area</option>
                <option value="uk">Terrace</option>
                {/* Add more countries as needed */}
              </select>
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
    </div>
  );
};

export default UnitDefine;
