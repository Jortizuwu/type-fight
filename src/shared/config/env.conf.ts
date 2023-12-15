export const ENV_CONFIG = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const postgresConnectionUri = `postgres://${ENV_CONFIG.username}:${ENV_CONFIG.password}@${ENV_CONFIG.host}/${ENV_CONFIG.database}`;
