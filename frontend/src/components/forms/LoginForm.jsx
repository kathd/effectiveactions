import React from "react";
import { Form } from "semantic-ui-react";

const LoginForm = () => (
  <Form>
    <Form.Input
      error={{ content: "Please enter your email", pointing: "below" }}
      fluid
      label="Email"
      placeholder="Email"
      id="form-input-email"
    />
    <Form.Input
      error="Please enter your password"
      fluid
      label="Password"
      placeholder="Password"
    />
    <Form.Checkbox
      label="I agree to the Terms and Conditions"
      error={{
        content: "You must agree to the terms and conditions",
        pointing: "left",
      }}
    />
  </Form>
);

export default LoginForm;
