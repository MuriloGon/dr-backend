import joi from 'joi';
import { User } from '../entity/User';

export const validateUserLoginBody = (ink: User) => {
  const schema = joi.object<User>({
    email: joi.string().required(),
    password: joi.string().required(),
  }).required();
  const { error } = schema.validate(ink, { abortEarly: false });
  if (!error) return { error: false };
  return { error: true, details: error.details.map(({ message }) => message) };
};
