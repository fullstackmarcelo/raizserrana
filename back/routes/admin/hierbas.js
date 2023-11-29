var express = require('express');
var hierbasModel = require('./../../models/hierbasModel');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req, res, next){
    var hierbas = await hierbasModel.getHierbas();
    
    hierbas = hierbas.map( hierba => {
        if(hierba.picture){
            const picture = cloudinary.image(hierba.picture, {
                width: 60,
                height: 60,
                crop: 'fill'
            });
            hierba.picture = picture
            return hierba
        }else{
            return hierba
        }
    });

    res.render('admin/hierbas', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        hierbas
    })
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });

});

router.post('/agregar', async (req, res, next) => {
    var img_id = '';
    try{
        if (req.files && Object.keys(req.files).length > 0){
            imagen = req.files.picture;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (req.body.nombre != "" && req.body.descripcion != ""){
            let obj = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                picture: img_id
            }
            await hierbasModel.insertHierba(obj);
            res.redirect('/admin/hierbas')
        }else{
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son necesarios'
            });

        }
    } catch(error){
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargaron los Datos'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    let hierba = await hierbasModel.getHierbasById(id);
    if(hierba.picture){
        await (destroy(hierba.picture))
    }
    await hierbasModel.deleteHierbaById(id);
    res.redirect('/admin/hierbas')
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let hierba = await hierbasModel.getHierbasById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        hierba
    });
});

router.post('/modificar', async (req, res, next) => {
    try{
        console.log(req.files);
        let img_id = req.body.picture_original;
        let borrar_imagen_vieja = false;
        if (req.body.picture_delete === '1'){
            console.log("Entro en delete picture");
            img_id = '';
            borrar_imagen_vieja = true;
        }else{
            if (req.files && Object.keys(req.files).length > 0){
                console.log("Entro en file upload");
                imagen = req.files.picture;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_imagen_vieja = true;
            }
        }

        if(borrar_imagen_vieja && req.body.picture_original){
            await (destroy(req.body.picture_original))
        }

        let obj = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            picture: img_id
        }
        await hierbasModel.modificarHierbaById(obj, req.body.id);
        res.redirect('/admin/hierbas')
        
    } catch(error){
        console.log(error)
        res.render('admin/modifica', {
            layout: 'admin/layout',
            error: true, message: 'No se modificaron los Datos'
        });
    }
});



module.exports = router;