let { crearErrorArgumentosInvalidos } = require('../errors/errors')
const { generateFileObjectFromPath } = require('./fileObject')



function crearEmailBase(objeto) {
    let email = {}
    if (!objeto.from) {
        throw crearErrorArgumentosInvalidos('from', 'campo requerido')
    } else {
        email.from = objeto.from
    }
    if (!objeto.to) {
        throw crearErrorArgumentosInvalidos('to', 'campo requerido')
    } else {
        email.to = objeto.to
    }
    if (!objeto.subject) {
        throw crearErrorArgumentosInvalidos('subject', 'campo requerido')
    } else {
        email.subject = objeto.subject
    }
    return email
}



function crearEmailConTextoPlano(objeto) {

    let email = {}
    const base = crearEmailBase(objeto)
    if (!objeto.text) {
        throw crearErrorArgumentosInvalidos('text', 'campo requerido')
    } else {
        email.text = objeto.text
    }
    email = { ...base, ...email }

    return email
}


function crearEmailConTextoPlanoYHtml(objeto) {
    let email = {}
    const base = crearEmailConTextoPlano(objeto)
    if (!objeto.html) {
        throw crearErrorArgumentosInvalidos('html', 'campo requerido')
    } else {
        email.html = objeto.html
    }
    email = { ...base, ...email }
    return email
}

function crearEmailConTextoPlanoYHtmlYAttachmentVacio(objeto) {
    let email = {}
    const base = crearEmailConTextoPlanoYHtml(objeto)
    if (!objeto.attachments) {
        throw crearErrorArgumentosInvalidos('attachments', 'campo requerido')
    }
    /*  if (!objeto.attachments.length) {
         throw crearErrorArgumentosInvalidos('fileObject', 'campo requerido')
     } */
    else {
        email.attachments = objeto.attachments
    }
    email = { ...base, ...email }
    return email
}


function crearEmailConTextoPlanoYHtmlYAttachmentConFiles(objeto, arrayConPathDeArchivos) {

    let email = {}
    email.attachments = []
    const base = crearEmailConTextoPlanoYHtmlYAttachmentVacio(objeto)
    if (!arrayConPathDeArchivos.length) {
        throw crearErrorArgumentosInvalidos('fileObject', 'campo requerido')
    }
    else {
        for (let i = 0; i < arrayConPathDeArchivos.length; i++) {
            const rutaElemento = arrayConPathDeArchivos[i];
            let fileObject = generateFileObjectFromPath(rutaElemento)
            email.attachments.push(fileObject)
        }
    }
    email = { ...base, ...email }
    return email
}




/* function crearFileObject(objeto) {
    let file = {}
    if (!objeto.content) {
        throw crearErrorArgumentosInvalidos('content', 'campo requerido')
    } else {
        file.content = objeto.content
    }
    if (!objeto.filename) {
        throw crearErrorArgumentosInvalidos('filename', 'campo requerido')
    } else {
        file.filename = objeto.filename
    }

    if (!objeto.type) {
        throw crearErrorArgumentosInvalidos('type', 'campo requerido')
    } else {
        file.type = objeto.type
    }
    if (!objeto.disposition) {
        throw crearErrorArgumentosInvalidos('disposition', 'campo requerido')
    } else {
        file.disposition = objeto.disposition
    }
    return file
}
 */



module.exports = {
    crearEmailConTextoPlano,
    crearEmailConTextoPlanoYHtml,
    crearEmailConTextoPlanoYHtmlYAttachmentVacio,
    crearEmailConTextoPlanoYHtmlYAttachmentConFiles,
    //crearFileObject
}