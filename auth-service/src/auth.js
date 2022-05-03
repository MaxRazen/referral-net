import jwt from 'jsonwebtoken';
import { config, constants } from './config.js';

const wrapPayload = (id, audience) => {
  return {
    sub: id,
    audience: audience,
    iat: parseInt(new Date() / 1000),
  }
}

const generatePublicToken = async (payload) => {
    return await jwt.sign(payload, config.JWT_PUBLIC_SALT, {
      audience: constants.JWT_PUBLIC_AUDIENCE,
      expiresIn: config.JWT_TOKEN_TTL,
      algorithm: constants.JWT_ALGORITHM,
    });
}

const generateSystemToken = async (payload) => {
    return await jwt.sign(payload, config.JWT_SYSTEM_SALT, {
      audience: constants.JWT_SYSTEM_AUDIENCE,
      expiresIn: config.JWT_TOKEN_TTL,
      algorithm: constants.JWT_ALGORITHM,
    });
}

export {
  wrapPayload,
  generatePublicToken,
  generateSystemToken,
}
