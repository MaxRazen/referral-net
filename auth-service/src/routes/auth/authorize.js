import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PartnerCredential } from '../../models/index.js';

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
    client_id: clientId,
    client_secret: clientSecret,
  } = req.body;

  const model = await PartnerCredential.findOne({
    where: {
      key: clientId
    }
  });

  if (!model) {
    return notFoundResponse(res);
  }

  const isMatched = await bcrypt.compare(clientSecret, model.secret);

  if (!isMatched) {
    return unauthorizedResponse(res);
  }

  const payload = {
    sub: model.id,
    exp: config.JWT_PUBLIC_TTL,
    aud: constants.JWT_PUBLIC_AUDIENCE,
  };

  const token = jwt.sign(payload, config.JWT_PUBLIC_SALT, {
    algorithm: constants.JWT_ALGORITHM,
  });

  res.send({
      type: 'Bearer',
      jwt: token,
      exp: parseInt((new Date()) / 1000) + config.JWT_PUBLIC_TTL,
  });
};

export default handler;
