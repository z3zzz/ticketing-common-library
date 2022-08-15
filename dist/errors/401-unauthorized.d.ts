import { BaseError } from './base';
export declare class UnAuthorizedError extends BaseError {
    statusCode: number;
    constructor(message: string);
}
