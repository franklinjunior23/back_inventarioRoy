const express = require("express");
const cors = require('cors');
const sequelize = require("./app/db");
const empleado = require("./Routes/Empleado.routes");
require('dotenv').config()
const PORT = process.env.PORT 

app = express();
app.use(cors({
    origin:'*'
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',empleado)


app.listen(PORT , ()=>{
    sequelize.sync({force:true})
    console.log(`esta prendiendo http://localhost:${PORT}`)
})