const express = require('express')

module.exports = (server)=>{

    //Definir URL base 

    const router = express.Router()
    server.use('/api', router)

    //Rotas do Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}