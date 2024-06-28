const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/persona', (req, res) => {
  const persona = req.body;

  // Configura el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jorgelituma094@gmail.com', // Cambia esto con tu correo
      pass: 'pure mgej fvnc acwh'        // Cambia esto con tu contraseña
    }
  });

  // Configura el correo
  let mailOptions = {
    from: 'jorgelituma094@gmail.com', // Cambia esto con tu correo
    to: 'jorgelituma096@gmail.com', // Cambia esto con el correo del destinatario
    subject: 'Información de Persona',
    text: `Cédula: ${persona.cedula}\nNombre: ${persona.nombre}\nApellido: ${persona.apellido}\nEdad: ${persona.edad}`
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
