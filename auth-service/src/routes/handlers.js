import express from 'express';

/**
 * @param {express.Response} res 
*/
function badRequestResponse(res) {
  return res.sendStatus(400).json({
    message: 'Bad request',
  })
}

/**
 * @param {express.Response} res 
*/
function unauthorizedResponse(res) {
  res.statusCode = 401;

  return res.json({
    message: 'Unauthorized',
  })
}

/**
 * @param {express.Response} res 
*/
function notFoundResponse(res) {
  res.statusCode = 404;

  return res.json({
    message: 'Not Found',
  })
}

export {
  badRequestResponse,
  unauthorizedResponse,
  notFoundResponse,
}

