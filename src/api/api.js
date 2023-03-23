import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

// mockAPI
export const getProduct = async () => {
  try {
    const response = await instanceUtil.get("/ProductList");

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// date 설정 예정
export const getProductList = async ({ size, keyword, category, page, date }) => {
  try {
    const response = await instanceUtil.get(
      `/equipments?size=${size}&keyword=${keyword}&category=${category}&page=${page}`
    );

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await instanceUtil.get(`/equipments/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
}