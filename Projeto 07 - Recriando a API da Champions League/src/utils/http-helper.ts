import { HttpResponse } from "../models/http-response-model"

// 2xx Success
export const ok = async (data: any): Promise<HttpResponse> => ({
    statusCode: 200,
    body: data
});

export const created = async (data: any): Promise<HttpResponse> => ({
    statusCode: 201,
    body: data
});

export const accepted = async (): Promise<HttpResponse> => ({
    statusCode: 202,
    body: null
});

export const noContent = async (): Promise<HttpResponse> => ({
    statusCode: 204,
    body: null
});

// 3xx Redirection
export const movedPermanently = async (location: string): Promise<HttpResponse> => ({
    statusCode: 301,
    body: { location }
});

export const found = async (location: string): Promise<HttpResponse> => ({
    statusCode: 302,
    body: { location }
});

export const notModified = async (): Promise<HttpResponse> => ({
    statusCode: 304,
    body: null
});

// 4xx Client Errors
export const badRequest = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 400,
    body: message ?? null
});

export const unauthorized = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 401,
    body: message ?? null
});

export const forbidden = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 403,
    body: message ?? null
});

export const notFound = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 404,
    body: message ?? null
});

export const conflict = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 409,
    body: message ?? null
});

export const tooManyRequests = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 429,
    body: message ?? null
});

// 5xx Server Errors
export const internalServerError = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 500,
    body: message ?? null
});

export const notImplemented = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 501,
    body: message ?? null
});

export const badGateway = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 502,
    body: message ?? null
});

export const serviceUnavailable = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 503,
    body: message ?? null
});

export const gatewayTimeout = async (message?: string): Promise<HttpResponse> => ({
    statusCode: 504,
    body: message ?? null
});