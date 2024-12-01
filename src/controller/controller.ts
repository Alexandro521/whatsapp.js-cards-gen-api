import { Request, Response } from 'express';
import { CreateUserCard } from '../functions/userCardGenerator';

export default class Controller { 

    static async getCards(req:Request, res:Response) { 
        try {
            const { picture, kickname, exp, lvl, rank, status } = req.query;
            const obj = {
                picture: String(picture) ,
                kickname: String(kickname),
                exp: Number(exp),
                lvl: Number(lvl),
                rank: Number(rank),
                status: String(status),
            } 
            const buffer = await CreateUserCard(obj);
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer);
        }catch(err) {
            console.log(err);
        }
    }
}

