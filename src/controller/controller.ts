import { Request, Response } from 'express';
import { CreateUserCard } from '../services/userCardGenerator';
import { userCardSchema } from '../schemas/zodSchema';
export default class Controller { 

    static async getCards(req:Request, res:Response) { 
        try {
            const { data, error, success } = userCardSchema.safeParse(req.body);
            if (!success) {
                res.status(400).json({ error: error.message });
                return
            }
            const buffer = await CreateUserCard(data);
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer);
        } catch (err) {
            res.status(500).json({ error: err});
            console.log(err);
        }
        
    }
}

