const { empresas , sucursales } = require('../app/models/')


const getEmpresas = async(req,res) =>{
    try {
        const result = await empresas.findAll()
        res.json(result)
    } catch (error) {
        res.status(501).json(error)
    }
   

}
const createEmpresa = async(req, res)=>{
    const {name} = req.body
    try {
        const result = await empresas.create({nombre:name})
        res.json(result)
    } catch (error) {
        res.status(501).json(error)
    }
}
const createSucursal = async(req,res)=>{
    
    try {
        const { nombre,empresa }= req.body;
        const id_tabl = await empresas.findOne({
            where:{
                nombre:empresa
            }
        })
        const codigo_tabla = id_tabl.id
        
        const resp =  await sucursales.create({
            nombre:nombre,
            id_empresa:codigo_tabla
        })
        res.json(resp)
    } catch (error) {
        res.json(error)
    }
}

const getSucursalesEmpresa = async(req,res)=>{
    try {
        const result = await sucursales.findAll({
            include:{
                model:empresas,
                attributes:['nombre']
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

const deleteSucursal = async (req,res)=>{
    try {
        const id= req.params.id
        const result = await sucursales.destroy({
            where:{
                id
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

const deleteEmpresa = async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const result = await empresas.destroy({where:{id}})
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}


module.exports={getEmpresas ,createEmpresa , createSucursal,getSucursalesEmpresa,deleteSucursal,deleteEmpresa}