import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
  res.status(200).json({ message: 'ok', token: '' });
}