import dotenv = require("dotenv");

const parsedConfig = dotenv.config().parsed;

type Config = {
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
};

export const Config: Config = {
  DB_HOST: parsedConfig.DB_HOST,
  DB_PORT: Number(parsedConfig.DB_PORT),
  DB_NAME: parsedConfig.DB_NAME,
  DB_USERNAME: parsedConfig.DB_USERNAME,
  DB_PASSWORD: parsedConfig.DB_PASSWORD,
};
