const {
  getEmpresas,
  createEmpresa,
  createSucursal,
  getSucursalesEmpresa,
  deleteSucursal,
  deleteEmpresa,
  getEmpleados,
  createEmpleado,
} = require("../controllers/empresas.controllers");

const empleado = require("express").Router();

// empresas endopoint para empresas / get y post y delete
empleado.get("/Empresas", getEmpresas);
empleado.post("/Empresas", createEmpresa);
empleado.delete('/Empresas/:id', deleteEmpresa)

// sucursales de una empresa , delete post  y get
empleado.get("/sucursales", getSucursalesEmpresa);
empleado.post("/sucursales", createSucursal);
empleado.delete('/sucursales/:id', deleteSucursal)

// empledos de una sucursal creacion y get de los empleados con atributo o modelo de la sucursal
empleado.get("/empleados", getEmpleados);
empleado.post('/:sucursal/empleados', createEmpleado)
empleado.delete('/empleados/:id')


module.exports = empleado;
