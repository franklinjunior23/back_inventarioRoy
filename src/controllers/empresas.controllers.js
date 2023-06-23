const { empresas, sucursales, empleados } = require("../app/models/");

const getEmpresas = async (req, res) => {
  try {
    const result = await empresas.findAll();
    res.json(result);
  } catch (error) {
    res.status(501).json(error);
  }
};
const createEmpresa = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await empresas.create({ nombre: name });
    res.json(result);
  } catch (error) {
    res.status(501).json(error);
  }
};
const createSucursal = async (req, res) => {
  try {
    const { nombre, empresa } = req.body;
    const id_tabl = await empresas.findOne({
      where: {
        nombre: empresa,
      },
    });
    const codigo_tabla = id_tabl.id;

    const resp = await sucursales.create({
      nombre: nombre,
      id_empresa: codigo_tabla,
    });
    res.json(resp);
  } catch (error) {
    res.json(error);
  }
};

const getSucursalesEmpresa = async (req, res) => {
  try {
    const result = await sucursales.findAll({
      include: {
        model: empresas,
        attributes: ["nombre"],
      },
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const deleteSucursal = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sucursales.destroy({
      where: {
        id,
      },
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const deleteEmpresa = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await empresas.destroy({ where: { id } });
    res.json(result);
  } catch (error) {
    res.status(501).json(error);
  }
};

const createEmpleado = async (req, res) => {
  try {
    // primero buscas por el nombre brindado de la sucursal la id / si en caso que si no se puede por el nombre
    const NombreSucursal = req.params.sucursal;
    const DataSucursal = await sucursales.findOne({
      where: { nombre: NombreSucursal },
    });
    const {
      nombre,
      apellido,
      tipo_usuario,
      nivel_red,
      usuario,
      contraseña,
      anydesk_id,
      anydesk_contraseña,
      email_tipo,
      email_dirrecion,
      email_contraseña,
    } = req.body;
    if (DataSucursal) {
      const data = await empleados.create({
        id_sucusal: DataSucursal.id,
        nombre,
        apellido,
        tipo_usuario,
        nivel_red,
        usuario,
        contraseña,
        anydesk_id,
        anydesk_contraseña,
        email_tipo,
        email_dirrecion,
        email_contraseña,
      });
      res.json(data);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

const getEmpleados = async (req, res) => {
  try {
    const data = await empleados.findAll({
      include: [
        {
          model: sucursales,
          include: {
            model: empresas,
          },
        },
      ],
    });
    res.json(data);
  } catch (error) {
    res.status(501).json(error);
  }
};
const deleteEmpleado = async (req, res) => {
  try {
    const idEmpleado = req.params.id;
    const data = await empleados.destroy({
      where: {
        id: idEmpleado,
      },
    });
    res.json(data);
  } catch (error) {
    res.status(501).json(error);
  }
};

module.exports = {
  getEmpresas,
  createEmpresa,
  createSucursal,
  getSucursalesEmpresa,
  deleteSucursal,
  deleteEmpresa,
  createEmpleado,
  getEmpleados,
  deleteEmpleado,
};
