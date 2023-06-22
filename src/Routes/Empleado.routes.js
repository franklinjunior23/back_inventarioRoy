const {
  getEmpresas,
  createEmpresa,
  createSucursal,
  getSucursalesEmpresa,
  deleteSucursal,
  deleteEmpresa,
} = require("../controllers/empresas.controllers");

const empleado = require("express").Router();
empleado.get("/sucursales", getSucursalesEmpresa);
empleado.get("/Empresas", getEmpresas);
empleado.post("/Empresas", createEmpresa);
empleado.post("/sucursales", createSucursal);
empleado.delete('/sucursales/:id',deleteSucursal)
empleado.delete('/Empresas/:id',deleteEmpresa)
empleado.get("/");

empleado.post('')

module.exports = empleado;
