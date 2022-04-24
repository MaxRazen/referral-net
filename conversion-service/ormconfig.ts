import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { Config } from './src/config'

const options: MysqlConnectionOptions = {
    name: 'default',
    type: 'mysql',
    url: Config.database.url,
    synchronize: false,
    logging: true,
    entities: [
        'dist/src/**/*.entity{.ts,.js}',
    ],
}

export default options
