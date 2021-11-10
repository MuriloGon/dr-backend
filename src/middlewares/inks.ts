import { NextFunction, Request, Response } from 'express';
import { Ink } from '../entity/Inks';
import { validateInkBody } from '../schemas/ink';

export const validateBodyObj = (req: Request, res: Response, next: NextFunction) => {
  const ink = req.body as Ink;
  const { error, details } = validateInkBody(ink);

  if (error) {
    return res.status(401).json({ message: 'validation error', data: details });
  }

  next();
};
