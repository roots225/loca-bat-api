export function successResponse(data: any) {
    return {
        code: 200,
        status: 'success',
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