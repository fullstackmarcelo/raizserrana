var express = require('express');
var router = express.Router();
var hierbasModel = require('./../models/hierbasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.post('/sendmail', async (req, res) => {
    const mail = {
    to: 'mgrodriguez0408@gmail.com',
    subject: 'Contacto Web',
    html: `${req.body.nombre}, se contacto a traves de la Web y requiere más informacion sobre hierbas
    a este correo: ${req.body.email}. <br> Además realizo el siguiente comentario: ${req.body.mensaje}. <br>
    su telefono es: ${req.body.telefono}` 
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }

    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
        
    });
});

router.get('/hierbas', async function(req, res, next){
    let hierbas = await hierbasModel.getHierbas();
    hierbas = hierbas.map( hierba => {
        if(hierba.picture){
            const picture = cloudinary.url(hierba.picture, {
                width: 920,
                height: 400,
                crop: 'fill'
            });
            hierba.picture = picture
            return hierba
        }else{
            return hierba
        }
    });



    res.json(hierbas);
});

module.exports = router;