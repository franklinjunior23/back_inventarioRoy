const { getDispositivos, createDispositivo } = require("../controllers/dispositivos.controlles")


const dispositivos = require("express").Router()

dispositivos.get('/dispositivos',getDispositivos)
dispositivos.post('/dispositivos',createDispositivo)

module.exports=dispositivos