import React, { useState } from "react";
import * as XLSX from "xlsx";
import "../../../../styles/pages/sidebar/onBoarding/FloorDefine.css";
interface Contact {
  name: string;
  floornumber: string; // Updated to floornumber
  type: string;
}

const initialContact: Contact = {
  name: "",
  floornumber: "", // Updated to floornumber
  type: "Apartment", // Default type value
};
const FloorDefine = () => {
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

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Parse Excel data to JSON with explicit typing
      const jsonData: Array<any[]> = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
      });
      const bulkContacts = jsonData.slice(1).map((row: any[]) => ({
        name: row[0] || "",
        floornumber: row[1] || "", // Updated to floornumber
        type: row[2] || "Apartment",
      }));

      setContacts([...contacts, ...bulkContacts]);
    };
    reader.readAsArrayBuffer(file);
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
        <h3 className="project-heading-floor">Floor Define</h3>
        <div className="buttons-floor">
          <button type="button" className="Download">
            Download Sample
          </button>
          <button type="button" className="Upload">
            Upload in Bulk
            <input
              type="file"
              accept=".xlsx, .xls"
              style={{ display: "none" }}
              onChange={handleBulkUpload}
            />
          </button>
        </div>
      </div>
      <div className="contact-form-floor">
        {contacts.map((contact, index) => (
          <div className="contact-row" key={index}>
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
              <label>Floor Number</label>
              <input
                type="text"
                id={`designation-${index}`}
                name="designation"
                value={contact.floornumber}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g 234"
                className="input-fieldAC"
              />
            </div>

            <div className="form-group">
              <label>Floor Type</label>
              <select id="floortype" className="input-fieldPro">
                <option value="us">Apartment</option>
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

export default FloorDefine;
