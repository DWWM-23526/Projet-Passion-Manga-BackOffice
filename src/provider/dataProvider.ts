import { DataProvider, fetchUtils } from "react-admin";
import CreateRelationParams from "../interfaces/datProvider/CreateRelationParams";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";

const API_URL = import.meta.env.VITE_SIMPLE_REST_URL;
const API_URL_IMAGES = import.meta.env.VITE_IMAGES_API_URL;

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

    console.log(decodedData);

    return {
      data: decodedData,
    };
  },

  getMany: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?${params.ids}`,
    );

    const decodedData = decodeHtmlEntities(response.json.data);

    console.log(decodedData);

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

  uploadImage: async (imageData: FormData) => {
    const token = localStorage.getItem("authToken");
    const user = { token: `Bearer ${token}`, authenticated: !!token };

    const options = {
      method: "POST",
      body: imageData,
    };

    const response = await fetchUtils.fetchJson(`${API_URL_IMAGES}`, {
      ...options,
      user,
    });    


    return response.json.data;
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
