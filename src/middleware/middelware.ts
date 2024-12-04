import { Request, Response, NextFunction } from 'express';

export const validateQuery = (req: Request, res: Response, next: NextFunction) => {
    const { picture, kickname, exp, lvl, rank, status } = req.query;
    console.log(picture);
    if(picture && kickname && exp && lvl && rank && status) {
      next();
    } else {
      res.status(400).json({
        message: 'Bad Request',
        error: 'Missing required parameters',
        params: ['picture', 'kickname', 'exp', 'lvl', 'rank', 'status'],
        status: 400,
      });
    }
  }