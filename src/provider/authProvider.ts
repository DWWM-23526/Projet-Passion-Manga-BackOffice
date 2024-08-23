import { AuthProvider, fetchUtils } from "react-admin";
const baseUrl = import.meta.env.VITE_SIMPLE_REST_URL;

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const response = await fetchUtils.fetchJson(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("authToken", response.json.data.token);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    return Promise.resolve();
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("authToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("authToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: async () => {
    const token = localStorage.getItem("authToken");
    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "POST" };

    const responseForIdRole = await fetchUtils.fetchJson(`${baseUrl}/permission`, {
      ...options,
      user,
    });
    const data = responseForIdRole.json.data;
    return data;
  },

  getIdentity: () => {
    const persistedUser = localStorage.getItem("authToken");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;


