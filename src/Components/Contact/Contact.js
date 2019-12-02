import React from "react";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Input, ParaInput, StyledForm, Label, ErrorText, Button, Col, Row, Icon} from './Contact.styled';
import {StyledSVGTitle} from '../About/About.styled'
import SvgContactMeTitle from "../../Shared_Styles/SVGs/ContactMeTitle";
import { Paragraph } from "../../Shared_Styles/TextStyles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Contact = ({errors, touched}) => {

  let icons = [1,1,1,1,1,1,1,1,1,1,1]
  let count = -1

  return (
    <StyledForm action="https://formspree.io/xyyyzzwl" method="POST">
      <StyledSVGTitle>
        <SvgContactMeTitle />
      </StyledSVGTitle>
      <Paragraph>
        Want to get in touch? Send me a message with the details.
      </Paragraph>
      <br/>
      <br/>
      <Row center>
        {icons.map((icon, i) => <Icon icon={faChevronDown} key={i} order={count++} />)}
      </Row>
      <br/>
      <br/>

      <Row>
        <Col>
          <Label htmlFor="name">Your name</Label>
            <Input
                type="text"
                name="name"
                placeholder="Who are you?"
                id="name" />
          {touched.name && errors.name && <ErrorText className="error-text">{errors.name}</ErrorText>}
        </Col>
        <Col>
          <Label htmlFor="email">Your email</Label>
            <Input
                type="email"
                name="email"
                placeholder="Where to contact you?"
                id="email" />
          {touched.email && errors.email && <ErrorText className="error-text">{errors.email}</ErrorText>}
        </Col>
      </Row>

      <Label htmlFor="message">Message</Label>
        <ParaInput
            component="textarea"
            name="message"
            placeholder="What would you like to talk about?"
            id="message" />
      {touched.message && errors.message && <ErrorText className="error-text">{errors.message}</ErrorText>}
      <Icon icon={faChevronDown} order={count++} />
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

