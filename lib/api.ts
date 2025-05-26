import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // CORS cookie gerekiyorsa
});

// (Opsiyonel) JWT ekle
export const setAuthToken = (token?: string) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete api.defaults.headers.common["Authorization"];
};

/* --------- Auth --------- */
export const signUp = (body: {
  email: string;
  password: string;
  name?: string;
}) => api.post("/auth/sign-up", body);

export const signIn = (body: { email: string; password: string }) =>
  api.post("/auth/sign-in", body);

/* --------- Post --------- */
export const fetchPosts = () => api.get("/posts");
export const createPost = (body: {
  name: string;
  level?: number;
  authorId: number;
}) => api.post("/posts", body);
