const { usuarios_administradores } = require("../app/models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const LoginAuth = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    if (usuario && contraseña) {
      const busqueda = await usuarios_administradores.findOne({
        where: {
          usuario: {
            [Op.eq]: usuario,
          },
        },
      });
      if (busqueda !== null) {
        const token = jwt.sign(
          { user_id: busqueda.id, nombre: busqueda.nombre, rol: busqueda.rol },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.cookie("token", token).json({ token: token });
      } else {
        res.json({ msg: "falta contraseña" });
      }
    } else {
      res.json({ msg: "falta contraseña" });
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const AuthLoged = async (req, res) => {};

module.exports = { LoginAuth };
