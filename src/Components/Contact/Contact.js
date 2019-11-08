import React from "react";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { PageTitle} from '../../Shared_Styles/TextStyles';
import {Input, ParaInput, StyledForm, Label, Error, Button} from './Contact.styled'

const Contact = ({errors, touched, values, handleSubmit, status}) => {
  return (
    <StyledForm action="https://formspree.io/xyyyzzwl" method="POST">
    <PageTitle>Contact me</PageTitle>
      <Label htmlFor="name">Your name</Label>
        <Input
            type="text"
            name="name"
            placeholder="Who are you?"
            id="name" />
      {touched.name && errors.name && <Error className="error-text">{errors.name}</Error>}

      <Label htmlFor="name">Your email</Label>
        <Input
            type="email"
            name="email"
            placeholder="Where to contact you?"
            id="email" />
      {touched.email && errors.email && <Error className="error-text">{errors.email}</Error>}

      <Label htmlFor="name">Message</Label>
        <ParaInput
            component="textarea"
            name="message"
            placeholder="What would you like to talk about?"
            id="message" />
      {touched.message && errors.message && <Error className="error-text">{errors.message}</Error>}
  
      <Button type="submit" value="Send">SUBMIT</Button>
    </StyledForm>
  );
};

const FormikContact = withFormik({
  mapPropsToValues({name, email, message}) {
      return {
          name: name || '',
          email: email || '',
          message: message || ''
      };
  },

  validationSchema: Yup.object().shape({
      name: Yup.string().required("Whoops, forgot your name!").label(),
      email: Yup.string().email("Hmm, that's not a valid email.").required("Enter an email address, please."),
      message: Yup.string().required("What did you want to talk about?")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
      axios
          .post('https://formspree.io/xyyyzzwl', values)
          .then(res => {
              setStatus(res.data);
              console.log(res.data)
              resetForm();
          })
          .catch(err => console.log(err.response));
  }

})(Contact);

export default FormikContact;

