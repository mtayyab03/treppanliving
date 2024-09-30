import React, { useState } from "react";
import "../../../../../styles/pages/sidebar/onBoarding/FloorDefine.css";
interface Contact {
  name: string;
  category: string;
  weightage: number; // Added weightage field
  type: string;
}

const initialContact: Contact = {
  name: "",
  category: "",
  weightage: 100, // Default 100% for the first row
  type: "Apartment",
};

const RewardWeightage = () => {
  const [contacts, setContacts] = useState<Contact[]>([initialContact]);

  // Function to handle input changes for name, category, or manual weightage
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const updatedContacts = [...contacts];
    updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    setContacts(updatedContacts);
  };

  // Function to handle weightage input change
  const handleWeightageChange = (index: number, value: number) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].weightage = value;
    setContacts(updatedContacts);
    adjustWeightage(index, value);
  };

  // Function to automatically adjust the weightage
  const adjustWeightage = (changedIndex: number, newWeightage: number) => {
    const updatedContacts = [...contacts];
    let remainingWeightage = 100 - newWeightage;

    const otherRows = updatedContacts.filter(
      (_, index) => index !== changedIndex
    );
    const distributedWeightage = remainingWeightage / otherRows.length;

    updatedContacts.forEach((contact, index) => {
      if (index !== changedIndex) {
        contact.weightage = distributedWeightage;
      }
    });

    setContacts(updatedContacts);
  };

  const handleAddRow = () => {
    const newRow: Contact = { ...initialContact, weightage: 0 };
    setContacts([...contacts, newRow]);

    const remainingWeightage = 100 / (contacts.length + 1);
    const updatedContacts = contacts.map((contact) => ({
      ...contact,
      weightage: remainingWeightage,
    }));

    setContacts([...updatedContacts, newRow]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);

    const remainingWeightage = 100 / updatedContacts.length;
    setContacts(
      updatedContacts.map((contact) => ({
        ...contact,
        weightage: remainingWeightage,
      }))
    );
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
        <h3 className="project-heading-floor">Reward Weightage</h3>
      </div>
      <div className="contact-form-floor">
        {contacts.map((contact, index) => (
          <div className="contact-row" key={index}>
            <div
              className="form-groupRW"
              style={{ width: "15%", marginTop: "0.5rem", marginRight: "1rem" }}
            >
              <label>Sr#</label>
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g 123"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={contact.category}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g Sharing & Caring"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group">
              <label>Weightage Percentage</label>
              <input
                type="number"
                name="weightage"
                value={contact.weightage}
                onChange={(e) =>
                  handleWeightageChange(index, Number(e.target.value))
                }
                className="input-fieldAC"
                min={0}
                max={100}
                step={1}
              />
            </div>

            <div className="reward-btnn">
              {/* Button to open the modal */}
              <label>Activities</label>
              <button className="open-modal-btn">Add/Edit</button>
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

export default RewardWeightage;
