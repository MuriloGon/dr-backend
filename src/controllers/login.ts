import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const { SECRET = 'controled-secret-never-in-production' } = process.env;


export function login(req: Request, res: Response) {
  const token = jwt.sign({}, SECRET);
  res.status(200).json({ message: 'ok', token });
}
