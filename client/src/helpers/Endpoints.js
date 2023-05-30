import axios from 'axios';


axios.get('http://localhost:3002/usuarios')
  .then(response => {
    // Manejar la respuesta exitosa
    console.log(response.data);
  })
  .catch(error => {
    // Manejar el error
    console.error(error);
  });