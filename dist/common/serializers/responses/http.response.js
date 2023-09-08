"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
function successResponse(data, message = "") {
    return {
        code: 200,
        status: 'success',
        message,
        data,
    };
}
exports.successResponse = successResponse;
function errorResponse({ code, message, error }) {
    return {
        code,
        status: 'error',
        error,
        message,
    };
}
exports.errorResponse = errorResponse;
//# sourceMappingURL=http.response.js.map