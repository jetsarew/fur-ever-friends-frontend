export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const SERVER_PORT = process.env.NEXT_PUBLIC_SERVER_PORT;
export const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;
export const SERVER_URL = `http://${SERVER_HOST}:${SERVER_PORT}`;
export const API_URL = `${SERVER_URL}/api`;