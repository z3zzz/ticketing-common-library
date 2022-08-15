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
exports.jwt = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const constants_1 = require("../constants");
const errors_1 = require("../errors");
exports.jwt = (0, fastify_plugin_1.default)((fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.register(jwt_1.default, {
        secret: constants_1.JWT_SECRET_KEY,
        cookie: {
            cookieName: 'token',
            signed: true,
        },
    });
    fastify.decorate('authenticate', (req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield req.jwtVerify();
        }
        catch (_a) {
            throw new errors_1.UnAuthorizedError('getUser: Invalid crendial token');
        }
    }));
}));
