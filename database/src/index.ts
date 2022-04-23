import {DataSource} from 'typeorm'
import { Config } from './config'
import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions'

const connectionOptions: MysqlConnectionOptions = {
    type: 'mysql',
    host: Config.DB_HOST,
    port: Config.DB_PORT,
    database: Config.DB_NAME,
    username: Config.DB_USERNAME,
    password: Config.DB_PASSWORD,
    migrations: [
        './src/migrations/*.ts',
    ],
};

export default new DataSource(connectionOptions);
