import React from "react";
import "../../../../styles/pages/sidebar/onBoarding/ProjectDefine.css";
const ProjectDefine = () => {
  return (
    <div className="form-container">
      <div
        style={{
          width: "20%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h3 className="project-heading">Project Creation</h3>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g Treppan Living"
          />
        </div>
        <div className="form-group">
          <label>Project Code</label>
          <input
            type="number"
            className="form-input"
            placeholder="e.g 4355334"
          />
        </div>
        <div className="form-group">
          <label>Project Area</label>
          <input type="text" className="form-input" placeholder="e.g Fujura" />
        </div>
      </div>

      {/* Row 2: Country, City, Community, Property Type */}
      <div className="form-row">
        <div className="form-group">
          <label>Country</label>
          <select id="country" className="input-fieldPro">
            <option value="us">🇺🇸 United Arab Emmirates</option>
            <option value="ca">🇨🇦 Canada</option>
            <option value="uk">🇬🇧 United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>City</label>
          <select id="country" className="input-fieldPro">
            <option value="us">Sharjah</option>
            <option value="ca">Al Amin</option>
            <option value="uk">Abu Dhabi</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Community</label>

          <select id="community" className="input-fieldPro">
            <option value="us">Club</option>
            <option value="ca">kids Area</option>
            <option value="uk">Treppan</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select id="community" className="input-fieldPro">
            <option value="us">Bedroom</option>
            <option value="ca">Appartment</option>
            <option value="uk">Gym</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>

      {/* Row 3: Project Address */}
      <div className="form-row full-width">
        <div className="form-group">
          <label>Project Address</label>
          <textarea
            className="form-textarea"
            placeholder="e.g e.g Street #6 ,sharjah , Dubai"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProjectDefine;
