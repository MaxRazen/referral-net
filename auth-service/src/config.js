import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 8888,
    JWT_PUBLIC_SALT: process.env.JWT_PUBLIC_SALT || 'public',
    JWT_SYSTEM_SALT: process.env.JWT_SYSTEM_SALT || 'system',
    JWT_PUBLIC_TTL: process.env.JWT_PUBLIC_TTL || 3600,
    JWT_SYSTEM_TTL: process.env.JWT_SYSTEM_TTL || 3600,
};

export const constants = {
    JWT_ALGORITHM: 'HS256',
    JWT_SYSTEM_AUDIENCE: 'users-api',
    JWT_PUBLIC_AUDIENCE: 'partners-api',
};

export function isTesting() {
    return process.env.NODE_ENV === 'test'
}