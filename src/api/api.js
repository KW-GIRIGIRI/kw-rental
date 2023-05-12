import axios from "axios";

const baseURL = process.env.REACT_APP_URL;
const classNum = process.env.REACT_APP_CLASSNUM_URL;
axios.defaults.withCredentials = true; 

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

// 기자재 관련 
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

export const modifyEquipment = async (id, data) => {
  try {
    const response = await instanceUtil.put(`/admin/equipments/${id}`, data);

    return response.headers.get("Location");
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

// 담은 기자재 관련 
export const addCartEquip = async (data) => {
  try {
    const response = await instanceUtil.post(`/inventories`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const getCartEquip = async () => {
  try {
    const response = await instanceUtil.get(`/inventories`);

    return response.data.inventories;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const deleteAllCartEquip = async () => {
try {
  const response = await instanceUtil.delete(`/inventories`);

  return response.status;
} catch (err) {
  console.error(err.message);
  return err;
}
};

export const deleteCartEquip = async (id) => {
  try {
    const response = await instanceUtil.delete(`/inventories/${id}`);

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const modifyCartEquip = async (id, data) => {
  try {
    const response = await instanceUtil.patch(`/inventories/${id}`, data);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 품목 관련
export const getItemList = async (id) => {
  try {
    const response = await instanceUtil.get(`/items?equipmentId=${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const getItem = async (id) => {
  try {
    const response = await instanceUtil.get(`/items/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const changeItemState = async (id, data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/items/${id}/rentalAvailable`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const changePropertyNum = async (id, data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/items/${id}/propertyNumber`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const changeItems = async (id, data) => {
  try {
    const response = await instanceUtil.put(
      `/admin/items?equipmentId=${id}`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};


export const deleteItem = async (id) => {
  try {
    const response = await instanceUtil.delete(
      `/admin/items/${id}`,
    );

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 현 시점 수령 가능한 품목 조회
export const getRentAvailabilityItemList = async (id) => {
  try {
    const response = await instanceUtil.get(
      `/admin/items/rentalAvailability?equipmentId=${id}`
    );

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 관리자 특정 기자재 품목 대여 현황
export const getEquipRentStatus = async (id, month) => {
  try {
    const response = await instanceUtil.get(
      `/admin/reservations?equipmentId=${id}&yearMonth=${month}`
    );

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 대여 관련

// 대여 예약
export const postReservation = async (data) => {
  try {
    const response = await instanceUtil.post(`/reservations`, data);

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 대여 생성
export const createRental = async (data) => {
  try {
    const response = await instanceUtil.post(`/admin/rentals`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 특정 날짜에 대여 수령되어야 할 대여 예약들을 대여 상세와 함께 조회
// acceptDateTime 과 rentalSpecs 가 null 이면 아직 수령되지 않음(즉 대여되지 않음)을 의미.
export const getReceivedRentalList = async (date) => {
  try {
    const response = await instanceUtil.get(`/admin/rentals?startDate=${date}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 특정 날짜에 반납되어야 할 대여 예약과 연체된 대여 예약을 대여 상세와 함께 조회 API
// overdueReservations 는 연체된 예약을 의미한다. reservationsByEndDate 는 반납되어야 할 예정인 대여 예약을 의미한다.
export const getReturnRentalList = async (date) => {
  try {
    const response = await instanceUtil.get(`/admin/rentals?endDate=${date}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

/** 대여 반납- status 는 반납이 어떤 상태인지 의미한다.
 * 
 * RETURND : 정상 반납 (만약 반납 당시가 반납일보다 늦은 경우 자동으로 연체 반납 처리됨)
 * LOST : 분실
 * BROKEN : 파손
 * OVERDUE_RENTED : 연체 (연체가 시작됨을 의미. 아직 반납되지 않음)
 */
export const returnRental = async (data) => {
  try {
    const response = await instanceUtil.patch(`/admin/rentals/returns`, data);

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// auth 관련
export const getClassNum = async (data) => {
  try {
    const response = await axios.post(classNum, data);
    
    return response.data[0];
  } catch (err) {
    console.error(err.message);
    return err;
  }
}

export const Signup = async data => {
  try {
    const response = await instanceUtil.post(`/members`, data);

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
}

export const UserLogin = async (data) => {
  try {
    const response = await instanceUtil.post(`/members/login`, data);

    return response.status;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 회원정보 조회 
export const getUserInfo = async (date) => {
  try {
    const response = await instanceUtil.get(`/members`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 회원 학번 조회 
export const getUserClassNum = async (date) => {
  try {
    const response = await instanceUtil.get(`/members/memberNumber`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

// 현재 내 대여 상태 조회
export const getCurrentRental = async () => {
  try {
    const response = await instanceUtil.get(`/reservations?terminated=false`);

    return response.data;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};
