import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const getProductList = async ({ size, page }) => {
  try {
    const response = await instanceUtil.get(
      `/equipments?size=${size}&page=${page}&sort=id,DESC`
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
    console.log(response.data)

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
}