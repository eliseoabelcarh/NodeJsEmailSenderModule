# Server with Node Js 

## Tests with Mocha

-express
-mocha
-nyc
-axios

## SERVICIOS DISPONIBLES:
### SENDGRID Y NODEMAILER

### requisitos: APIKEY - registrándose en Sendgrid
### email de remitente debe ser el mismo de la cuenta de Sendgrid


#### ejemplo de objeto config:

`const config = { apiKey: 'SG.SENDGRID_API_KEY' }`

#### ejemplo de objeto email válido:


#### ejemplo de objeto con attachments:

`const arrayConPathDeArchivos = ['test/assets/ejemplo.pdf']`

#### ejemplo de enviar email: 

`const sender = await crearEmailSender(config)
const respuesta1 = await sender.sendEmail(from, to, subject, html,arrayConPathDeArchivos)`