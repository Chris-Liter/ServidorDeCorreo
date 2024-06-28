const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/persona', (req, res) => {
  const persona = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jorgelituma094@gmail.com', 
      pass: 'pure mgej fvnc acwh'       
    }
  });

  let mailOptions = {
    from: 'jorgelituma094@gmail.com', 
    to: 'jorgelituma096@gmail.com', 
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
