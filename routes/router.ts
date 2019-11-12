import { Router, Request, Response } from "express";
import Server from "../classes/server";

/**
 * En este archivo se crean los servicioes rest Get y Post
 */

export const router = Router();

router.get('/mensajes', ( rep: Request , res: Response ) => {

    res.json({
        ok:true,
        mensaje: "Todo esta bien!!"
    });
});

/**
 * Leer argumentos por posteo de datos
 */
router.post('/mensajes', ( rep: Request , res: Response ) => {

    const cuerpo = rep.body.cuerpo;
    const de = rep.body.de;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;
    //Envio el mensaje a un id en especifico, mensaje privado
    server.io.emit('mensaje-nuevo', payload);

    res.json({
        ok:true,
        cuerpo,
        de
    });
});

/**
 * Leer argumentos por URL
 */
router.post('/mensajes/:id', ( rep: Request , res: Response ) => {

    const cuerpo = rep.body.cuerpo;
    const de = rep.body.de;
    const id = rep.params.id;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;

    //Envio el mensaje a un id en especifico, mensaje privado
    server.io.in( id ).emit('mensaje-privado', payload);
    
    res.json({
        ok:true,
        cuerpo,
        de,
        id
    });
});