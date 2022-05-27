import Joi from 'joi';

export const createTalkerSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'O campo "name" é obrigatório',
    'string.min': 'O "name" deve ter pelo menos 3 caracteres',
  }),
  age: Joi.number().min(18).required().messages({
    'any.required': 'O campo "age" é obrigatório',
    'number.min': 'A pessoa palestrante deve ser maior de idade',
  }),
  talk: Joi.object({
    watchedAt: Joi.string()
      .pattern(
        new RegExp(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
        )
      )
      .required()
      .messages({
        'string.pattern.base':
          'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        'any.required':
          'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      }),
    rate: Joi.number().min(1).max(5).required().messages({
      'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
      'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
      'any.required':
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
  })
    .required()
    .messages({
      'any.required':
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
});
