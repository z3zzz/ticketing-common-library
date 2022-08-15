"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookie = exports.cookieOpt = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const constants_1 = require("../constants");
exports.cookieOpt = {
    domain: constants_1.DOMAIN,
    path: '/',
    secure: constants_1.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: constants_1.NODE_ENV === 'production',
    signed: true, // encrypt cookie,
};
exports.cookie = (0, fastify_plugin_1.default)((fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.register(cookie_1.default, {
        secret: constants_1.COOKIE_KEY,
    });
}));
