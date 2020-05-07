import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"

export default () => (
  <PrimaryLayout column="col-10">
    <div>
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  </PrimaryLayout>
)
