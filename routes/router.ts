import { Router, Request, Response } from "express";


export const router = Router();

router.get('/mensajes', ( rep: Request , res: Response ) => {

    res.json({
        ok:true,
        mensaje: "Todo esta bien!!"
    });
});

router.post('/mensajes', ( rep: Request , res: Response ) => {

    const cuerpo = rep.body.cuerpo;
    const de = rep.body.de;

    res.json({
        ok:true,
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', ( rep: Request , res: Response ) => {

    const cuerpo = rep.body.cuerpo;
    const de = rep.body.de;
    const id = rep.params.id;

    console.log(id);
    

    res.json({
        ok:true,
        cuerpo,
        de,
        id
    });
});