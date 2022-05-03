import { Sequelize } from 'sequelize';
import { isTesting } from './config.js';

const DB_URI = isTesting()
    ? 'sqlite::memory:'
    : 'mysql://luke:secret@localhost:3306/referral_app';

const sequelize = new Sequelize(DB_URI, {
    logging: false,
});

export default sequelize;
