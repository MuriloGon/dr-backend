import { Request, Response } from 'express';
import { Ink } from '../entity/Inks';
import * as inkModel from '../models/ink';

export async function getAll(req: Request, res: Response) {
  const data = await inkModel.getAll();
  return res.status(200).json({ message: 'All inks', data });
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await inkModel.getById(id.toString());
  if (!data) {
    return res.status(404).json({ message: 'ink not found' });
  }
  return res.status(200).json({ message: 'ink by id', data });
}

export async function create(req: Request, res: Response) {
  const ink = req.body as Ink;
  const data = await inkModel.create(ink);
  return res.status(201).json({ message: 'ok', data });
}

export async function editById(req: Request, res: Response) {
  const { id } = req.params;
  const ink = req.body as Ink;
  const data = await inkModel.editById(id, ink);
  if (!data) {
    return res.status(404).json({ message: 'ink not found' });
  }
  return res.status(201).json({ message: 'ink by id', data });
}

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await inkModel.deleteById(id);
  return res.status(200).json({ message: 'ink deleted', data });

}
