import {
  Button,
  Checkbox,
  Container,
  Input,
  Radio,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import "./Contact.css";
import { Formik, Form } from "formik";
import Formulario from "./Formulario";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  return errors;
};

const Contact = () => {
  return (
    <div>
        <div className="container-contact">
          <h1 className="title-contact">CONTACTAME</h1>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
          >
            <Form className="form">
              <Formulario />
            </Form>
          </Formik>
        </div>
    </div>
  );
};

export default Contact;
