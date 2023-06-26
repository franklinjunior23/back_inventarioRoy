const { LoginAuth } = require("../controllers/LoginAuth.controllers")
const { getEmpresas } = require("../controllers/empresas.controllers")
const VerifyToken = require("../middlewares/Auth.middleware")

const Login = require("express").Router()

Login.post('/login',LoginAuth)
Login.get('/Private', VerifyToken, getEmpresas)

module.exports=Login