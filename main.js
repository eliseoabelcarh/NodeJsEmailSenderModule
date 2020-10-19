
require('dotenv').config()

const fs = require('fs')
const path = require('path');
const mime = require('mime');


console.log('en Env ',
    process.env.API_KEY
)

console.log(process.env.SENDGRID_API_KEY, 'KETYYYYYY')
/*
function generateFileObjectFromPath(rutaDeArchivo) {

    let fileObject = {}

    // let pathToAttachment = rutaDeArchivo;
   //  attachment = fs.readFileSync(pathToAttachment).toString("base64");
  //   fileObject.content = attachment

    const filename = path.basename(rutaDeArchivo)
    fileObject.filename = filename

    const tipo = mime.getType(rutaDeArchivo);
    fileObject.type = tipo

    fileObject.disposition = 'attachment'
    console.log('object ', fileObject)
    return fileObject
}
let pathToAttachment = '../images/ejemplo.pdf';
let some = generateFileObjectFromPath(pathToAttachment)
 */