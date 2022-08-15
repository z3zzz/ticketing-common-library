"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.DOMAIN = exports.COOKIE_KEY = exports.JWT_SECRET_KEY = exports.POSTGRES_URL = exports.PORT = void 0;
exports.PORT = parseInt(process.env.PORT || '5000');
exports.POSTGRES_URL = process.env.POSTGRES_URL ||
    'postgresql://postgres:1234@localhost:5432/instagram';
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.COOKIE_KEY = process.env.COOKIE_KEY;
exports.DOMAIN = process.env.DOMAIN || 'localhost';
exports.NODE_ENV = process.env.NODE_ENV;
