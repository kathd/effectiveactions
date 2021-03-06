import React from "react";
import { Modal } from "semantic-ui-react";

import "../../styles/register.css";

import UserType from "../buttons/UserType";

const JoinWizard = ({ trigger }) => (
  <Modal trigger={trigger}>
    <Modal.Content>
      <p>
        "There are risks and costs to action. But they are far less than the
        long range risks of comfortable inaction."
        <br />
        <br />
        John F. Kennedy
      </p>
      <h4>I am ready to join as (select one):</h4>
    </Modal.Content>
    <Modal.Actions>
      <UserType icon="/images/users/citizen.png" label="Citizen" />
      <UserType icon="/images/users/expert.png" label="Expert" />
    </Modal.Actions>
  </Modal>
);

export default JoinWizard;
