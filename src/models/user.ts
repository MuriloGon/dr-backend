import { getMongoRepository } from 'typeorm';
import { User } from '../entity/User';


export async function findUser(email: string, password: string) {
  const repo = getMongoRepository(User);
  const user = await repo.findOne({ where: { email, password } });

  if (!user) return null;

  return user;
}
