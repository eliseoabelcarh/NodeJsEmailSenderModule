
const { crearSender } = require('../modulosPropios/emailSenderSendgrid')


const crearEmailSenderSendgrid = async (config) => {
    return await crearSender(config)
}

module.exports = {
    crearEmailSenderSendgrid
}