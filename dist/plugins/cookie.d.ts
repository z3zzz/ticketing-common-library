/// <reference types="node" />
import type { FastifyPluginAsync } from 'fastify';
import { CookieSerializeOptions } from '@fastify/cookie';
export declare const cookieOpt: CookieSerializeOptions;
export declare const cookie: FastifyPluginAsync<unknown, import("http").Server, import("fastify").FastifyTypeProviderDefault>;
