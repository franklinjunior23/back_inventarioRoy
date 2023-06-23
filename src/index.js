const express = require("express");
const cors = require('cors');
const sequelize = require("./app/db");
const empleado = require("./Routes/Empleado.routes");
const dispositivos = require("./Routes/Dispositivos.routes");
require('dotenv').config()
const PORT = process.env.PORT 

app = express();
app.use(cors({
    origin:'*'
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',empleado)
app.use('/api',dispositivos)

app.listen(PORT , ()=>{
    sequelize.sync()
    console.log(`esta prendiendo http://localhost:${PORT}`)
})