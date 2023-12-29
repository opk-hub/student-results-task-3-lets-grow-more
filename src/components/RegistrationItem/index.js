import React from "react";
import "./index.css";

const RegistrationItem = ({ appointmentDetails, toggleIsStarred }) => {
  const { title, email, gender, website, image, skills } = appointmentDetails;

  return (
    <li className="appointment-item">
      <div className="header-container">
        <h2>Description</h2>
        <div className="hr">
          {" "}
          <hr />
        </div>

        <p className="title">{title}</p>
        <p className="data"> {email}</p>
        <p className="data"> {website}</p>
        <p className="data"> {gender}</p>
        <p className="skills"> {skills.join(", ")}</p>
      </div>

      <div className="img">
        <img
          src={image}
          alt="user"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      </div>
    </li>
  );
};

export default RegistrationItem;
