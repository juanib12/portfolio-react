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
import { useField } from "formik";

const Formulario = () => {
    
  return (
    <div>
      <TextField
        name="name"
        label="Nombre"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <br></br>
      <TextField
        name="lastname"
        label="Apellido"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <br></br>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        margin="normal"
        fullWidth
      />
      <br></br>
      <TextField
        multiline
        rows={6}
        label="Escribir..."
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" size="large">
        Enviar
      </Button>
      <br></br>
    </div>
  );
};

export default Formulario;
