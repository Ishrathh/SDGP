import React, { useState } from "react";
import '../css/AddictionForm.css';
import NavBar from '../components/NavBar';
import axios from 'axios';

function AddictionForm() {
  const [ formData, setFormData ] = useState({});

  const handleInputChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
    handleAddiction();
    // Navigate('/');
  };

  const handleAddiction = async () => {
    const formDetails = formData;
    console.log("handleAddiction function has been run");

    //Saving new user to the database
    await axios.post("http://localhost:8000/user/addiction", formDetails) 
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            alert('Error occured when registering user');
        })
  }

  return (
    <>
    <NavBar/>
    <div className="form-container">
      <h2>Gaming Addiction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-question">
          <label>
            Have you missed school or work due to gaming?
          </label>
          <div>
            <label>
              <input
                type="radio"
                id="missedSchoolOrWork"
                name="missedSchoolOrWork"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Yes
            </label>
            <label>
            <input
              type="radio"
              id="missedSchoolOrWork"
              name="missedSchoolOrWork"
              value="0"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            No
          </label>
          </div>
        </div>

        <div className="form-question">
          <label>
          Have you ever lied about how much time you spend gaming?
          </label>
          <div>
            <label>
              <input
                type="radio"
                id="liedAboutTime"
                name="liedAboutTime"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Yes
            </label>
            <label>
            <input
              type="radio"
              id="liedAboutTime"
              name="liedAboutTime"
              value="0"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            No
          </label>
          </div>
        </div>

        <div className="form-question">
          <label>
          Have you ever prioritized gaming over personal hygiene or self-care?
          </label>
          <div>
            <label>
              <input
                type="radio"
                id="prioritizedHygiene"
                name="prioritizedHygiene"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Yes
            </label>
            <label>
            <input
              type="radio"
              id="prioritizedHygiene"
              name="prioritizedHygiene"
              value="0"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            No
          </label>
          </div>
        </div>

        <div className="form-question">
          <label>
            Have you ever experienced physical symptoms like headaches or eye strain from gaming?
          </label>
          <div>
            <label>
              <input
                type="radio"
                id="physicalSymptoms"
                name="physicalSymptoms"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Yes
            </label>
            <label>
            <input
              type="radio"
              id="physicalSymptoms"
              name="physicalSymptoms"
              value="0"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            No
          </label>
          </div>
        </div>

        <div className="form-question">
          <label>
            How often do you play video games?
          </label>
          <div>
            <label>
              <input
                type="radio"
                id="playFrequency"
                name="playFrequency"
                value="0"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Never
            </label>

            <label>
            <input
              type="radio"
              id="playFrequency"
              name="playFrequency"
              value="1"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            Rarely
          </label>

          <label>
          <input
              type="radio"
              id="playFrequency"
              name="playFrequency"
              value="2"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            Occasionally
          </label>

          <label>
          <input
              type="radio"
              id="playFrequency"
              name="playFrequency"
              value="3"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            Frequently
          </label>

          <label>
          <input
              type="radio"
              id="playFrequency"
              name="playFrequency"
              value="4"
              required
              onChange={(e) => handleInputChange(e.target.id, e.target.value)}
            />
            Always
          </label>
          </div>
        </div>

      <div className="form-question">
        <label>
          How long do you typically play video games in one sitting? (in hours)
        </label>
        <input
          type="number"
          name="playDuration"
          id = "playDuration"
          min="0.5"
          step="0.5"
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
        />
      </div>

      <div className="form-question">
        <label>
          How much money do you spend on video games per month? (in USD)
        </label>
        <input
          type="number"
          name="spending"
          id = "spending"
          min="0"
          step="10"
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
        />
      </div>

    <div className="form-question">
      <label>
        How often do you think about playing video games when you're not playing?
      </label>
      <div className="form-radio">
        <label className="form-radio-label">
          <label>
          <input
                type="radio"
                id="thinkingFrequency"
                name="thinkingFrequency"
                value="0"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Never
            </label>
            <label>
          <input
                type="radio"
                id="thinkingFrequency"
                name="thinkingFrequency"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Rarely
            </label>
            <label>
          <input
                type="radio"
                id="thinkingFrequency"
                name="thinkingFrequency"
                value="2"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Occasionally
            </label>
            <label>
          <input
                type="radio"
                id="thinkingFrequency"
                name="thinkingFrequency"
                value="3"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Frequently
            </label>
            <label>
            <input
                type="radio"
                id="thinkingFrequency"
                name="thinkingFrequency"
                value="4"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Always
            </label>
          </label>
        </div>
    </div>
  

  <div className="form-question">
    <label>How often do you lose track of time while playing video games?</label>
    <div>
    <label>
          <input
                type="radio"
                id="timeLossFrequency"
                name="timeLossFrequency"
                value="0"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Never
            </label>
            <label>
          <input
                type="radio"
                id="timeLossFrequency"
                name="timeLossFrequency"
                value="1"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Rarely
            </label>
            <label>
          <input
                type="radio"
                id="timeLossFrequency"
                name="timeLossFrequency"
                value="2"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Occasionally
            </label>
            <label>
          <input
                type="radio"
                id="timeLossFrequency"
                name="timeLossFrequency"
                value="3"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Frequently
            </label>
            <label>
            <input
                type="radio"
                id="timeLossFrequency"
                name="timeLossFrequency"
                value="4"
                required
                onChange={(e) => handleInputChange(e.target.id, e.target.value)}
              />
              Always
            </label>
    </div>
  </div>

  <div className="form-question">
    <label>
      Have you ever experienced negative consequences (e.g., strain on
      relationships, financial issues, academic or work problems) as a result
      of your gaming habits?
    </label>
    <div>
    <label>
          <input
            type="radio"
            id="negativeConsequences"
            name="negativeConsequences"
            value="1"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Yes
        </label>
        <label>
        <input
          type="radio"
          id="negativeConsequences"
          name="negativeConsequences"
          value="0"
          required
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
        />
        No
      </label>
    </div>
  </div>

  <div className="form-question">
    <label htmlFor="addictionLevel">Which level of addiction would you assess yourself as?</label>
    <div className="radio-buttons">
    <label>
      <input
            type="radio"
            id="addictionLevel"
            name="addictionLevel"
            value="notAddicted"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Not Addicted
        </label>
        <label>
      <input
            type="radio"
            id="addictionLevel"
            name="addictionLevel"
            value="mildlyAddicted"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Mildly Addicted
        </label>
        <label>
      <input
            type="radio"
            id="addictionLevel"
            name="addictionLevel"
            value="addicted"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Addicted
        </label>
        <label>
      <input
            type="radio"
            id="addictionLevel"
            name="addictionLevel"
            value="moderatelyAddicted"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Moderately Addicted
        </label>
        <label>
        <input
            type="radio"
            id="addictionLevel"
            name="addictionLevel"
            value="severelyAddicted"
            required
            onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          />
          Severely Addicted
        </label>
    </div>
  </div>

<div className="form-question">
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</div>
</form>
</div>
{/* <button onClick={() => handleAddiction()}>Just a button</button> */}
</>
  );
};


export default AddictionForm;