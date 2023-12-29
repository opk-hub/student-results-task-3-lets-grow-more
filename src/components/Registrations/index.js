import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RegistrationItem from "../RegistrationItem";
import "./index.css";

const Registrations = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [genderInput, setGenderInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  const [fileInput, setFileInput] = useState("");
  const [skillsInput, setSkillsInput] = useState({
    html: false,
    css: false,
    js: false,
    python: false,
  });
  const [isFilterActive] = useState(false);

  const toggleIsStarred = (id) => {
    setAppointmentsList((prevAppointmentsList) =>
      prevAppointmentsList.map((eachAppointment) =>
        id === eachAppointment.id
          ? { ...eachAppointment, isStarred: !eachAppointment.isStarred }
          : eachAppointment
      )
    );
  };

  const onChangeSkillsInput = (skill) => {
    setSkillsInput((prevSkillsInput) => ({
      ...prevSkillsInput,
      [skill]: !prevSkillsInput[skill],
    }));
  };
  const onChangeGenderInput = (event) => {
    setGenderInput(event.target.value);
  };
  const onChangeEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  const onChangeTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  const onChangeWebsiteInput = (event) => {
    setWebsiteInput(event.target.value);
  };

  const onChangeFileInput = (event) => {
    setFileInput(event.target.value);
  };

  const onAddAppointment = (event) => {
    event.preventDefault();

    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      email: emailInput,
      gender: genderInput,
      website: websiteInput,
      image: fileInput,
      skills: Object.keys(skillsInput).filter((skill) => skillsInput[skill]),
      isStarred: false,
    };

    setAppointmentsList((prevAppointmentsList) => [
      ...prevAppointmentsList,
      newAppointment,
    ]);
  };

  const getFilteredAppointmentsList = () => {
    if (isFilterActive) {
      return appointmentsList.filter(
        (eachAppointment) => eachAppointment.isStarred === true
      );
    }
    return appointmentsList;
  };

  const onClearFields = () => {
    setTitleInput("");
    setEmailInput("");
    setWebsiteInput("");
    setFileInput("");
    setGenderInput("");
    setSkillsInput({
      html: false,
      css: false,
      js: false,
      python: false,
    });
  };

  const filteredAppointmentsList = getFilteredAppointmentsList();

  return (
    <div className="card">
      <h1 className="add-appointment-heading">Student Enrool Form</h1>
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form" onSubmit={onAddAppointment}>
                <label htmlFor="title" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={titleInput}
                  onChange={onChangeTitleInput}
                  className="input"
                  placeholder="Title"
                />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={emailInput}
                  onChange={onChangeEmailInput}
                  className="input"
                />
                <div className="gender">
                  <label htmlFor="gender" className="label">
                    Gender
                  </label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={genderInput === "Male"}
                        onChange={onChangeGenderInput}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={genderInput === "Female"}
                        onChange={onChangeGenderInput}
                      />
                      Female
                    </label>
                  </div>
                </div>
                <label htmlFor="website" className="label">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  value={websiteInput}
                  onChange={onChangeWebsiteInput}
                  className="input"
                />
                <label htmlFor="image" className="label">
                  Image Link
                </label>
                <input
                  type="file"
                  id="image"
                  value={fileInput}
                  onChange={onChangeFileInput}
                  className="input"
                />

                <div className="skills">
                  <label htmlFor="skills" className="label">
                    Skills
                  </label>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        id="html"
                        checked={skillsInput.html}
                        onChange={() => onChangeSkillsInput("html")}
                      />
                      HTML
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        id="css"
                        checked={skillsInput.css}
                        onChange={() => onChangeSkillsInput("css")}
                      />
                      CSS
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        id="js"
                        checked={skillsInput.js}
                        onChange={() => onChangeSkillsInput("js")}
                      />
                      JavaScript
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        id="python"
                        checked={skillsInput.python}
                        onChange={() => onChangeSkillsInput("python")}
                      />
                      Python
                    </label>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="add-button">
                    Enrool Student
                  </button>
                  <button
                    type="button"
                    className="clear-button"
                    onClick={onClearFields}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
            {/* Vertical Line */}
            <div className="vertical-line"></div>

            {/* List of Appointments Section */}
            <ul className="appointments-list">
              {filteredAppointmentsList.map((eachAppointment) => (
                <RegistrationItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                  toggleIsStarred={toggleIsStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
