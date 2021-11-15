import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container} from './styled';

const CheckoutForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: "", name: "", phone: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      if (!values.phone) {
        errors.phone = "Please tell us your phone";
      }
      if (!values.email) {
        errors.email = "We need to know your mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "mmm... this mail is not valid";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit(values);
        setSubmitting(false);
      }, 5000);
    }}
  >
    {({ isSubmitting }) => (
      <Form id="my-form">
        <Field placeholder="Name" type="text" name="name" required/>
        <Field placeholder="Email" type="email" name="email" required/>
        <Field placeholder="Phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="A valid telephone number consist of a 3 digits code area between brackets, a space, the three first digits of the number, a space or hypen (-), and four more digits" required/>
        <Container>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Container>
      </Form>
    )}
  </Formik>
);
export default CheckoutForm;