import { DataProvider, fetchUtils } from "react-admin";
import CreateRelationParams from "../interfaces/datProvider/CreateRelationParams";
import { decode } from "html-entities";

const API_URL = import.meta.env.VITE_SIMPLE_REST_URL;

const decodeHtmlEntities = (data: any): any => {
  if (typeof data === 'string') {
    return decode(data);
  }
  if (Array.isArray(data)) {
    return data.map(decodeHtmlEntities);
  }
  if (typeof data === 'object' && data !== null) {
    const decodedObject: any = {};
    Object.keys(data).forEach(key => {
      decodedObject[key] = decodeHtmlEntities(data[key]);
    });
    return decodedObject;
  }
  return data;
}

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    if (!params.pagination) {
      throw new Error("Pagination parameters are required");
    }
    if (!params.sort) {
      throw new Error("Pagination parameters are required");
    }

    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`,
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    return {
      data: decodedData,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  getOne: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    return {
      data: decodedData,
    };
  },

  getMany: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?${params.ids}`,
    );

    const decodedData = decodeHtmlEntities(response.json.data);
    return {
      data: decodedData,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  getManyReference: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.target}/${params.id}`,
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    return {
      data: decodedData,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
    };
  },

  create: async (resource, params) => {
    const data = params.data;
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "POST", body: JSON.stringify(data) };

    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
      ...options,
      user,
    });

    const decodedData = decodeHtmlEntities(response.json.data);

    return { data: decodedData };
  },

  createRelation: async (resource: string, params: CreateRelationParams) => {
    const token = localStorage.getItem("authToken");
    const user = { token: `Bearer ${token}`, authenticated: !!token };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.keyId}/${params.relationId}`,
      {
        method: "POST",
        user,
      },
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

    const decodedData = decodeHtmlEntities(response.json.data);

    return { data: decodedData };
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

    const decodedData = decodeHtmlEntities(response.json.data);

    return { data: decodedData };
  },

  delete: async (resource, params) => {
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "DELETE" };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
      { ...options, user },
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    return {
      data: decodedData,
    };
  },

  deleteMany: async (resource, params) => {
    const token = localStorage.getItem("authToken");

    const user = { token: `Bearer ${token}`, authenticated: !!token };
    const options = { method: "DELETE" };

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.ids}`,
      { ...options, user },
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    return {
      data: decodedData,
    };
  },
};

export { dataProvider };
