//Modulo para Twilio SendGrid
const sgMail = require('@sendgrid/mail');
const { crearErrorAlEnviarEmail } = require('../errors/errors')
const { crearEmailConTextoPlano,
    crearEmailConTextoPlanoYHtml,
    crearEmailConTextoPlanoYHtmlYAttachmentConFiles
} = require('../models/email')
//require('dotenv').config()


const crearEmailSender = async function (config) {
    if (!config) {
        throw new Error('se necesita objeto config')
    }
    if (!config.apiKey /*&& !process.env.SENDGRID_API_KEY*/) {
        throw new Error('se necesita la apiKey')
    }

    sgMail.setApiKey(/*process.env.SENDGRID_API_KEY ||*/ config.apiKey);

    let respuestaExitosa = false
    return {
        sendEmailConTextoPlano: async (email) => {
            try {
                const emailValido = crearEmailConTextoPlano(email)
                respuestaExitosa = await enviarEmail(emailValido)
                return respuestaExitosa
            } catch (error) {
                throw error
            }

        },
        sendEmailConTextoPlanoYHtml: async (email) => {
            try {
                const emailValido = crearEmailConTextoPlanoYHtml(email)
                respuestaExitosa = await enviarEmail(emailValido)
                return respuestaExitosa
            } catch (error) {
                throw error
            }

        },
        sendEmailConTextoPlanoYHtmlYArchivosAdjuntos: async (email, arrayConPathDeArchivos) => {
            try {
                const emailValido = crearEmailConTextoPlanoYHtmlYAttachmentConFiles(email, arrayConPathDeArchivos)
                respuestaExitosa = await enviarEmail(emailValido)
                return respuestaExitosa
            } catch (error) {
                throw error
            }

        }
    }


}


async function enviarEmail(email) {
    try {
        await sgMail.send(email)
        return true
    } catch (errorNuevo) {
        throw crearErrorAlEnviarEmail('Envío de Email')
    }
}

/* 
function handlerErrors(error) {
    if (error.type === 'INVALID_ARGS') {
        return error
    } else if (error.type === 'INTERNAL_ERROR') {
        return crearErrorAlEnviarEmail('Envío de Email')
    } else {
        return new Error('INDEFINIDO: ' + error.message)
    }
}
 */




module.exports = { crearEmailSender }