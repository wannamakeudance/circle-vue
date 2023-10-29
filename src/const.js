export const API_HOST =
  process.env.NODE_ENV === "dev" ? "http://3.106.230.22:4000/" : "/api/";

export const API_GET_BOOKS = `${API_HOST}books`;
