import { DataProvider, fetchUtils } from "react-admin";

const API_URL = import.meta.env.VITE_SIMPLE_REST_URL;

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
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
  update: async (resource, params) => {
    const {id, ...data} = params.data;
    const response = await fetchUtils.fetchJson(
        `${API_URL}/${resource}/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(data)
        }
    );

    return {data: response.json.data}
  },
};

export { dataProvider };
