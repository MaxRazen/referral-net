import { createConnection } from 'typeorm';
import connectionOptions from '../../../ormconfig';
import { DATABASE_CONNECTION } from 'src/constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await createConnection(connectionOptions),
  },
];
