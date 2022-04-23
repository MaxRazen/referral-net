const fs = require('fs');
const dotenv = require('dotenv');

const configReader = dotenv.parse(fs.readFileSync('.env', 'utf8'));

type Config = {
    DB_HOST: string
    DB_PORT: number
    DB_NAME: string
    DB_USERNAME: string
    DB_PASSWORD: string
};

export const Config: Config = {
    DB_HOST: configReader.DB_HOST,
    DB_PORT: configReader.DB_PORT,
    DB_NAME: configReader.DB_NAME,
    DB_USERNAME: configReader.DB_USERNAME,
    DB_PASSWORD: configReader.DB_PASSWORD,
}
