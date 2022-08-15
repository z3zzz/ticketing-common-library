import { BaseError } from './base';
export declare class BadRequestError extends BaseError {
    statusCode: number;
    constructor(message: string);
}
