import { Request, Response } from 'express';
import { CreateUserCard } from '../functions/userCardGenerator';

export default class Controller { 

    static async getCards(req:Request, res:Response) { 
        try {
            const buffer = await CreateUserCard();
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer);
        }catch(err) {
            console.log(err);
        }
    }
}