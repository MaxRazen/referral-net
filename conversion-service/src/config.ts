const {
  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  DATABASE_URL = 'mysql://luke:secret@localhost:3306/referral_app',
} = process.env;

type Config = {
  redis: {
    host: string;
    port: number;
  };
  database: {
    url: string;
  };
};

export const Config: Config = {
  redis: {
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
  },
  database: {
    url: DATABASE_URL,
  },
};
