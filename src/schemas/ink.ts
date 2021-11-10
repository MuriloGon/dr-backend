import joi from 'joi';
import { Ink, Wall } from '../entity/Inks';

const wallWithoutId = {
  doors: joi.number().required(),
  height: joi.number().required(),
  width: joi.number().required(),
  windows: joi.number().required(),
};

export const validateInkBody = (ink: Ink) => {
  const schema = joi.object<Ink>({
    createdAt: joi.number().required(),
    canSize: joi.number().required(),
    'wall-a': joi.object<Wall>(wallWithoutId).required(),
    'wall-b': joi.object<Wall>(wallWithoutId).required(),
    'wall-c': joi.object<Wall>(wallWithoutId).required(),
    'wall-d': joi.object<Wall>(wallWithoutId).required(),
  }).required();
  const { error } = schema.validate(ink, { abortEarly: false });
  if (!error) return { error: false };
  return { error: true, details: error.details.map(({ message }) => message) };
};
