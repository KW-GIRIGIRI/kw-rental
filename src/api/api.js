import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const getProductList = async () => {
  try {
    const response = await instanceUtil.get("/ProductList");

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};
