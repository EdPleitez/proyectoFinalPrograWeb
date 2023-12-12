import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const mockUser = {
    usuario: 'admin',
    password: 'admin',
  };



  const callAPMockUsers = (event) => {
    setFormData(mockUser);
    setFormData([...mockUser]);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const urlDelApi = "http://localhost:8080/api/user/login";

  const callAPIAuthenticate = (event) => {
    axios
      .post(`${urlDelApi}?username=${formData.username}&password=${formData.password}`,null,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(function (response) {
        // handle success
        
        console.log("data", response.data.records);

        let user = response.data;

        localStorage.setItem("user", JSON.stringify(user));
        let storedUser = JSON.parse(localStorage.getItem("user"));
        if(storedUser.jwt!=null){
          window.location.href = "../main/";
        }else{
          window.confirm("Usuario no encontrado");
        }
       
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };


  const onClickBtn = () => {
    console.log("click", formData);

    if (
      mockUser.usuario === formData.usuario &&
      mockUser.password === formData.password
    ) {
      console.log("Usuario correcto");

      window.location.href = "../main/"
    } else {
      console.log("Usuario incorrecto");
      alert("Ingrese un usuario y contraseña validos para continuar")
    }

  };

  const reset = () => {
    setFormData({ username: '', password: '' });
  };

  return (
    <div className={styles.Login} data-testid="Login">
      <h1> Bienvenido al Blog de Notas</h1>
      <form>
        <TextField
          required
          id="standard-basic1"
          label="Usuario"
          variant="standard"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="standard-basic2"
          label="Password"
          variant="standard"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" name="btnIngresar" onClick={callAPIAuthenticate}>
          Ingresar
        </Button>
        <Button variant="contained" name="btnCancelar" type="reset" onClick={reset}>
          Cancelar
        </Button>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>
          <p>
            Si no tiene una cuenta, haga <a href="./Registro">click aquí </a>para registrarse.
          </p>
        </h4>
      </form>
      <br></br>
    </div>
  );
};

Login.propTypes = {};

export default Login;
