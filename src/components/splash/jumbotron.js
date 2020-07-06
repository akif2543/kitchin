import React from "react";

import RegistrationForm from "./registration_form";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="text container">
      <h1 className="display-4">Kitchin</h1>
      <p className="lead">Meet. Cook. Share an authentic cooking experience.</p>
      <p>
        Find adventures nearby and encounter unique cuisines, techniques, and
        cultures from around the world.
      </p>
      <RegistrationForm />
    </div>
  </div>
);

export default Jumbotron;
