export declare function successResponse(data: any, message?: string): {
    code: number;
    status: string;
    message: string;
    data: any;
};
export declare function errorResponse({ code, message, error }: {
    code: any;
    message: string;
    error: string;
}): {
    code: any;
    status: string;
    error: string;
    message: string;
};
