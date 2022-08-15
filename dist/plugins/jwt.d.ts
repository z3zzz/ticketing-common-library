/// <reference types="node" />
declare module 'fastify' {
    interface FastifyInstance {
        authenticate: () => Promise<void>;
    }
}
export declare const jwt: import("fastify").FastifyPluginAsync<unknown, import("http").Server, import("fastify").FastifyTypeProviderDefault>;
