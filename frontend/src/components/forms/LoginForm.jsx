import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const LoginForm = () => (
  // maybe use react-form-hooks for this
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email" type="email" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" type="password" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default LoginForm;
