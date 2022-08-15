"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedError = void 0;
const base_1 = require("./base");
class UnAuthorizedError extends base_1.BaseError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}
exports.UnAuthorizedError = UnAuthorizedError;
