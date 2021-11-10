import { getMongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Ink } from '../entity/Inks';


export async function getAll() {
  return getMongoRepository(Ink).find();
}

export async function getById(id: string): Promise<Ink | null> {
  let validId: ObjectId | null;
  try {
    validId = ObjectId(id);
  } catch (err) {
    return null;
  }

  const result = await getMongoRepository(Ink).findOne({ where: { _id: ObjectId(validId) } });
  return result ? result : null;
}

export async function create(ink: Ink) {
  const repo = getMongoRepository(Ink);
  const result = repo.create(ink);
  await repo.save(ink);
  return result;
}

export async function editById(id: string, ink: Ink) {
  let validId: ObjectId | null;
  try {
    validId = ObjectId(id);
  } catch (err) {
    return null;
  }

  const repo = getMongoRepository(Ink);
  const result = repo.update(ObjectId(validId), ink);
  await repo.save(ink);

  return result;
}

export async function deleteById(id: string) {
  let validId: ObjectId | null;
  try {
    validId = ObjectId(id);
  } catch (err) {
    return null;
  }
  const ink = await getById(id);
  const repo = getMongoRepository(Ink);
  const result = repo.delete(ObjectId(validId));
  await repo.save(ink);

  return result;
}
