import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

import {
  notFoundResponse,
  unauthorizedResponse,
} from '../handlers.js';

import {
  config,
  constants,
} from '../../config.js';

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {express.Response}
 */
const handler = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const model = await User.findOne({
    where: {
      email
    }
  });

  if (!model) {
    return notFoundResponse(res);
  }

  const isMatched = await bcrypt.compare(password, model.password);

  if (!isMatched) {
      return unauthorizedResponse(res);
  }

  const payload = {
      sub: model.id,
      exp: config.JWT_SYSTEM_TTL,
      aud: constants.JWT_SYSTEM_AUDIENCE,
  };

  const token = jwt.sign(payload, config.JWT_SYSTEM_SALT, {
    algorithm: constants.JWT_ALGORITHM,
  });

  res.send({
      type: 'Bearer',
      jwt: token,
      exp: parseInt((new Date()) / 1000) + config.JWT_SYSTEM_TTL,
  });
}

export default handler;
