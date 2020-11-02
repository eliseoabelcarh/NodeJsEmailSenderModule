

require('dotenv').config()
const assert = require('assert')
const { crearEmailSender } = require('../../src/module')


describe('---- PARA NODEMAILER', () => {
    describe('envío mail', () => {
        it('recibo respuesta exitosa', async () => {
            //reemplace variables de entorno creando un archivo .env
            const config = {
                user: process.env.GMAIL_FOR_NODEMAILER_USER,
                pass: process.env.GMAIL_PASSWORD_FOR_NODEMAILER,
                service: 'nodemailer'
            }
            const emailSender = await crearEmailSender(config)
            const mail = {
                from: config.user,
                to: 'eliseoabelcarh3@gmail.com',
                subject: 'Hola Desde Acá',
                text: 'helloooo moto!',
                attachmentsPaths: ['./test/assets/ejemplo.pdf']
            }
            const recibido = await emailSender.sendEmail(mail)
            const esperado = true
            assert.deepStrictEqual(recibido, esperado)
        })
    })
})



describe('---- PARA SENDGRID', () => {
    it('envío de email con campos mínimos y archivo adjunto opcionales', async () => {
        //regístrate en la página de Sendgrid/Twilio para obtener una Apikey
        //reemplace variables de entorno creando un archivo .env
        const config = {
            apiKey: process.env.SENDGRID_API_KEY,
            service: 'sendgrid'
        }
        const email = {
            from: process.env.SENDGRID_EMAIL, // debe ser el mismo email registrado en sendgrid
            to: 'eliseoabelcarh2@gmail.com',
            subject: 'Hi!!',
            html: '<strong>Esto es un mensaje</strong>'
        }
        const arrayConPathDeArchivos = ['./test/assets/ejemplo.pdf']
        const esperado = true
        const sender = await crearEmailSender(config)
        const respuesta1 = await sender.sendEmail(email.from, email.to, email.subject, email.html, arrayConPathDeArchivos)
        assert.deepStrictEqual(respuesta1, esperado)
    })
})


