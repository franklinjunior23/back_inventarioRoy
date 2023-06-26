const { getDispositivos, createDispositivo } = require("../controllers/dispositivos.controllers")


const dispositivos = require("express").Router()

dispositivos.get('/dispositivos',getDispositivos)
dispositivos.post('/dispositivos',createDispositivo)

module.exports=dispositivos