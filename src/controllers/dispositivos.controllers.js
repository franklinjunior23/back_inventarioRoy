const { dispositivos, sucursales, empresas } = require("../app/models");

const getDispositivos = async (req, res) => {
  try {
    const data = await dispositivos.findAll({
      include: {
        model: sucursales,
        include: {
          model: empresas,
        },
      },
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};
const createDispositivo = async (req, res) => {
  try {
    const data = await dispositivos.create({});
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getDispositivos, createDispositivo };
