import { DataProvider, fetchUtils } from "react-admin";

const API_URL = import.meta.env.VITE_SIMPLE_REST_URL;

const dataProvider: DataProvider = {
  getList: async (resource) => {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`);
    return {
      data: response.json.data,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  getOne: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
    );

    return {
      data: response.json.data,
    };
  },

  getMany: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?${params.ids}`,
    );
    return {
      data: response.json.data,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  getManyReference: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.target}/${params.id}`,
    );

    console.log(params.target);

    return {
      data: response.json.data,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  create: async (resource, params) => {
    const data = params.data;
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "POST", body: JSON.stringify(data) };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}`,
      {...options, user}
    );

    return { data: response.json.data };
  },

  update: async (resource, params) => {
    const { id, ...data } = params.data;
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "PUT", body: JSON.stringify(data) };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${id}`,
      { ...options, user },
    );

    return { data: response.json.data };
  },

  updateMany: async (resource, params) => {
    const { ids, ...data } = params.data;
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "PUT", body: JSON.stringify(data) };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${ids}`,
      { ...options, user },
    );

    return { data: response.json.data };
  },

  delete: async (resource, params) => {
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "DELETE" };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
      { ...options, user }
    );

    return {
      data: response.json.data,
    };
  },

  deleteMany: async (resource, params) => {
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "DELETE" };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.ids}`,
      { ...options, user }
    );

    return {
      data: response.json.data,
    };
  },


};

export { dataProvider };
