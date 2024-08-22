
import { DataProvider, fetchUtils } from "react-admin";

const API_URL = import.meta.env.VITE_SIMPLE_REST_URL;
const token = localStorage.getItem("authToken");

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`);
    console.log(token);
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
    console.log(token);
    const response = await fetchUtils.fetchJson(
        `${API_URL}/${resource}/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(data),
            headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': `Bearer ${token}`, 
          }),
        }
    );

    
    return {data: response.json.data}
  },
};

export { dataProvider };
