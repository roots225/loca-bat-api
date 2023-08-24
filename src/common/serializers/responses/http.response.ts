export function successResponse(data: any, message: string = "") {
    return {
        code: 200,
        status: 'success',
        message,
        data,
    }
}

export function errorResponse({code, message, error}: {code, message: string; error: string;}) {
    return {
        code,
        status: 'error',
        error,
        message,
    }
}