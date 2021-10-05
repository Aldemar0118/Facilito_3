const Producto = ('../models/Producto');

module.exports = class ProductoAPI{
    static async getAll(req,res){
        try{
            const productos= await Producto.find();
            res.status(200).json(productos);
        }catch(err){
            res.status(404).json({ message: err.message });

        }
    }
    static async getByCode(req,res){
        try{
            const code= req.params.code;
            const producto= await Producto.findOne({"code":code });
            if(producto==null){
                res.status(404).json({message: 'No encontrado'});
            }else{
                res.status(200).json(producto);  
            }
            res.status(200).json(producto);
        }catch(err){
            res.status(404).json({ message: err.message });

        }
    }
    static async create(req,res){
        try{
            let producto =req.body;
            producto = await Producto.create(producto);
            res.status(200).json(producto);

        }catch(err){
            res.status(404).json({ message: err.message });

        }
    }
    static async update(req,res){
        try{
        const code = req.params.code;
        const producto= req.body;
        await Producto.updateOne({code:code}, producto);
            res.status(200).json();
        }catch(err){
            res.status(404).json({ message: err.message });

        }
    }
    static async delete(req,res){
        try{
            const code = req.params.code;
            await Producto.deleteOne({code:code});
            res.status(200).json();

        }catch(err){
            res.status(404).json({ message: err.message });

        }
    }
}