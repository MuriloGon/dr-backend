import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const { SECRET = 'controled-secret-never-in-production' } = process.env;

export const validateBodyObj = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    jwt.verify(authorization, SECRET);
  } catch (err) {
    return res.status(401).json(
      { message: 'unauthorized', data: err },
    );
  }
  next();
};
