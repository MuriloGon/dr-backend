import { NextFunction, Request, Response } from 'express';
import { validateUserLoginBody } from '../schemas/user';

import * as userModel from '../models/user';
import { User } from '../entity/User';

export const validateBodyObj = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body as User;

  const { error, details } = validateUserLoginBody(body);

  if (error) {
    return res.status(404).json({ message: 'validation error', data: details });
  }

  const user = await userModel.findUser(body.email, body.password);
  if (!user) {
    return res.status(404).json({ message: 'user not found', data: {} });
  }

  return next();
};
