"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedError = exports.BadRequestError = void 0;
var _400_bad_request_1 = require("./400-bad-request");
Object.defineProperty(exports, "BadRequestError", { enumerable: true, get: function () { return _400_bad_request_1.BadRequestError; } });
var _401_unauthorized_1 = require("./401-unauthorized");
Object.defineProperty(exports, "UnAuthorizedError", { enumerable: true, get: function () { return _401_unauthorized_1.UnAuthorizedError; } });
