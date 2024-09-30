import React, { useState } from "react";
import "../../../../styles/pages/sidebar/onBoarding/AmenitiesDefine.css";

// images
import gym from "../../../../assets/images/gym.png";
import badminton from "../../../../assets/images/badminton.png";
import kidsplay from "../../../../assets/images/kidsplay.png";
import garden from "../../../../assets/images/garden.png";
import pool from "../../../../assets/images/pool.png";

const AmenitiesDefine = () => {
  const [amenities, setAmenities] = useState([
    { id: 1, name: "Gym", image: gym },
    { id: 2, name: "Badminton", image: badminton },
    { id: 3, name: "Swimming Pool", image: pool },
    { id: 4, name: "Kids Play Area", image: kidsplay },
    { id: 5, name: "Garden", image: garden },
    { id: 6, name: "Swimming Pool", image: pool },
  ]);
  const [newAmenity, setNewAmenity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files?.[0];
    if (newImage && images.length < 5) {
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("upload")?.click();
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const addAmenity = () => {
    if (newAmenity.trim() !== "") {
      setAmenities([
        ...amenities,
        {
          id: amenities.length + 1,
          name: newAmenity,
          image: "https://via.placeholder.com/100", // Placeholder for image; can replace with actual input later
        },
      ]);
      setNewAmenity(""); // Clear the input field after adding
      closeModal(); // Close the modal
    }
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
        <h3 className="project-heading-floor">Amenities Define</h3>
      </div>
      <div className="cards-container">
        {/* Map through amenities and render cards */}
        {amenities.map((amenity) => (
          <div className="card" key={amenity.id}>
            <img src={amenity.image} alt={amenity.name} />
            <p>{amenity.name}</p>
          </div>
        ))}

        {/* Plus Card to Add New Amenity */}
        <div className="card add-card" onClick={openModal}>
          <div className="plus-icon">+</div>
          <p>Add New Amenity</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlayAD">
          <div className="modalAD">
            <div className="modalAD-header">
              <h4>New Amenity Creation</h4>
            </div>
            <div className="image-ameity-container">
              {/* Row for images */}
              <div className="image-row">
                {/* Display the uploaded images */}
                {images.map((image, index) => (
                  <div className="card-image-am" key={index}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Amenity ${index}`}
                    />
                    <button
                      className="remove-image-btn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Plus card to trigger the image upload */}
              {images.length < 5 && (
                <div className="add-card-modal" onClick={triggerFileUpload}>
                  <div className="plus-icon">+</div>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload"
                    onChange={handleImageUpload}
                  />
                </div>
              )}
            </div>
            {/* Text field */}
            <div className="amenity-modal-row">
              <div className="form-group">
                <label>Floor Name</label>
                <input
                  style={{
                    border: " 1.5px solid #7ec646",
                    padding: "12px",
                    marginRight: "15rem",
                  }}
                  type="text"
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  placeholder="Enter Amenity Name"
                />
              </div>
              {/* First dropdown */}
              <div className="form-group">
                <label>Timing</label>
                <select id="floortype" className="input-fieldPro">
                  <option value="us">Straight</option>
                  <option value="ca">Shift</option>
                  <option value="uk">Slot</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Second dropdown */}
              <div className="form-group">
                <label>Timing Circle</label>
                <select id="floortype" className="input-fieldPro">
                  <option value="us">10:00AM--04:00PM</option>
                  <option value="ca">08:00AM--03:00PM</option>
                  <option value="uk">10:00AM--04:00PM</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>

            {/* Next row with three dropdowns */}
            <div className="amenity-modal-row">
              <div className="form-group">
                <label>Area Name</label>
                <input
                  style={{
                    border: " 1.5px solid #7ec646",
                    padding: "12px",
                  }}
                  type="text"
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  placeholder="TWT-Tower"
                />
              </div>
              {/* First dropdown */}
              <div className="form-group">
                <label>Break Type</label>
                <select id="floortype" className="input-fieldPro">
                  <option value="us">Lunch</option>
                  <option value="ca">Emergency</option>
                  <option value="uk">Urget</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Second dropdown */}
              <div className="form-group">
                <label>Break Time</label>
                <select id="floortype" className="input-fieldPro">
                  <option value="us">10:00AM--04:00PM</option>
                  <option value="ca">08:00AM--03:00PM</option>
                  <option value="uk">10:00AM--04:00PM</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div className="checkbox-modal">
              <input type="checkbox" id="checkboxId" />
              <label htmlFor="checkboxId">Maintenance Flag</label>
            </div>

            {/* Two date/time pickers */}

            <div className="modal-datepicker">
              <div className="start-date">
                <label htmlFor="startDate">Start Date:</label>
                <input type="datetime-local" id="startDate" />
              </div>
              <div className="start-date">
                <label htmlFor="endDate">End Date:</label>
                <input type="datetime-local" id="endDate" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="button-modal-amenity">
              <button onClick={addAmenity}>Add</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmenitiesDefine;
