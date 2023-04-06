import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const instancForm = axios.create({
  baseURL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});


export const getProductList = async (url) => {
  try {
    const response = await instanceUtil.get(`/equipments?${url}`);

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

export const addEquipment = async (data) => {
  try {
    const response = await instanceUtil.post(`/admin/equipments`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const deleteEquipment = async (id) => {
  try {
    const response = await instanceUtil.delete(`/admin/equipments/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const modifyEquipment = async (id) => {
  try {
    const response = await instanceUtil.put(`/admin/equipments/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const getItemList = async (id) => {
  try {
    const response = await instanceUtil.get(`/items?equipmentId=${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const postImage = async (formData) => {
  try {
    const response = await instancForm.post(`/admin/equipments/images`, formData);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const addCartEquip = async (data) => {
  try {
    const response = await instanceUtil.post(`/inventories`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.message);
    return err;
  }
};
