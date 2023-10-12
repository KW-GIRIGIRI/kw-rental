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

instanceUtil.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("로그인이 만료되었습니다. 다시 로그인 후, 시도해주세요.");
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

// 기자재 관련
export const getProductList = async (url) => {
  try {
    const response = await instanceUtil.get(`/equipments?${url}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await instanceUtil.get(`/equipments/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

export const addEquipment = async (data) => {
  try {
    const response = await instanceUtil.post(`/admin/equipments`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.response);
    return err.response.data;
  }
};

export const deleteEquipment = async (id) => {
  try {
    const response = await instanceUtil.delete(`/admin/equipments/${id}`);

    return response.status;
  } catch (err) {
    console.error(err.response);
    return err.response;
  }
};

export const modifyEquipment = async (id, data) => {
  try {
    const response = await instanceUtil.put(`/admin/equipments/${id}`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.response);
  }
};

export const postImage = async (formData) => {
  try {
    const response = await instancForm.post(
      `/admin/equipments/images`,
      formData
    );

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.response);
  }
};

// 기자재 날짜 별 대여 가능 갯수 조회
export const getProductAmountFromDate = async (id, from, to) => {
  try {
    const response = await instanceUtil.get(
      `/admin/equipments/${id}/remainQuantities?from=${from}&to=${to}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 담은 기자재 관련
export const addCartEquip = async (data) => {
  try {
    const response = await instanceUtil.post(`/inventories`, data);

    return response.headers.get("Location");
  } catch (err) {
    console.error(err.response);
  }
};

export const getCartEquip = async () => {
  try {
    const response = await instanceUtil.get(`/inventories`);

    return response.data.inventories;
  } catch (err) {
    console.error(err.response);
  }
};

export const deleteAllCartEquip = async () => {
  try {
    const response = await instanceUtil.delete(`/inventories`);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

export const deleteCartEquip = async (id) => {
  try {
    const response = await instanceUtil.delete(`/inventories/${id}`);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

export const modifyCartEquip = async (id, data) => {
  try {
    const response = await instanceUtil.patch(`/inventories/${id}`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 품목 관련
export const getItemList = async (id) => {
  try {
    const response = await instanceUtil.get(`/items?equipmentId=${id}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

export const getItem = async (id) => {
  try {
    const response = await instanceUtil.get(`/items/${id}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
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
    console.error(err.response);
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
    console.error(err.response);
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
    console.error(err.response);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await instanceUtil.delete(`/admin/items/${id}`);

    return response.status;
  } catch (err) {
    console.error(err.response);
    return err.response;
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
    console.error(err.response);
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
    console.error(err.response);
  }
};

// 특정 날짜 기간의 품목 사용 이력 조회
export const getItemUsageHistory = async (
  propertyNumber,
  startDate,
  endDate
) => {
  try {
    const response = await instanceUtil.get(
      `/admin/rentals/returns?propertyNumber=${propertyNumber}&startDate=${startDate}&endDate=${endDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 대여 관련

// 대여 예약
export const postReservation = async (data) => {
  try {
    const response = await instanceUtil.post(`/reservations`, data);

    return response.status;
  } catch (err) {
    return err.response;
  }
};

// 대여 생성
export const createRental = async (data) => {
  try {
    const response = await instanceUtil.post(`/admin/rentals`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 대여 취소
export const cancelRentalSpec = async (id, data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/reservations/specs/${id}`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 날짜에 대여 수령되어야 할 대여 예약들을 대여 상세와 함께 조회
// acceptDateTime 과 rentalSpecs 가 null 이면 아직 수령되지 않음(즉 대여되지 않음)을 의미.
export const getReceivedRentalList = async (date) => {
  try {
    const response = await instanceUtil.get(`/admin/rentals?startDate=${date}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 날짜에 반납되어야 할 대여 예약과 연체된 대여 예약을 대여 상세와 함께 조회 API
// overdueReservations 는 연체된 예약을 의미한다. reservationsByEndDate 는 반납되어야 할 예정인 대여 예약을 의미한다.
export const getReturnRentalList = async (date) => {
  try {
    const response = await instanceUtil.get(`/admin/rentals?endDate=${date}`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 대여 반납
export const returnRental = async (data) => {
  try {
    const response = await instanceUtil.patch(`/admin/rentals/returns`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 대여 목적 조회
export const getRentalPurpose = async (id) => {
  try {
    const response = await instanceUtil.get(
      `/admin/reservations/${id}/purpose`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 현재 내 대여 상태 조회
export const getCurrentRental = async () => {
  try {
    const response = await instanceUtil.get(`/reservations?terminated=false`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 사용자 기자재 대여 이력
export const getUserRentalHistory = async (fromDate, toDate) => {
  try {
    const response = await instanceUtil.get(
      `/rentals?from=${fromDate}&to=${toDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 기자재 히스토리 조회
export const getAdminEquipHistory = async (url) => {
  try {
    const response = await instanceUtil.get(
      `/admin/items/histories?size=15&${url}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// auth 관련
export const getClassNum = async (data) => {
  try {
    const response = await axios.post(classNum, data, {
      withCredentials: false,
    });

    return response.data[0];
  } catch (err) {
    console.error(err.response);
  }
};

export const userSignup = async (data) => {
  try {
    const response = await instanceUtil.post(`/members`, data);

    return response.status;
  } catch (err) {
    return err.response;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await instanceUtil.post(`/members/login`, data);

    return response.status;
  } catch (err) {
    alert(err.response.data);
  }
};

export const userLogout = async () => {
  try {
    const response = await instanceUtil.post(`/members/logout`);

    return response.status;
  } catch (err) {
    alert(err.response.data);
  }
};

// 회원정보 조회
export const getUserInfo = async (date) => {
  try {
    const response = await instanceUtil.get(`/members`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 회원 학번 조회
export const getUserClassNum = async (date) => {
  try {
    const response = await instanceUtil.get(`/members/memberNumber`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 회원 비밀번호 확인
export const ConfirmPassword = async (data) => {
  try {
    const response = await instanceUtil.post(`/members/password`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 사용자 정보 수정
export const setUserAccountInfo = async (data) => {
  try {
    const response = await instanceUtil.patch(`/members`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 정보 수정
export const setAdminAccountInfo = async (data) => {
  try {
    const response = await instanceUtil.patch(`/admin`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 비밀번호 초기화
export const setInitializePw = async (data) => {
  try {
    const response = await instanceUtil.patch(`/members/password`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 관련

// 랩실의 날짜별 남은 자리 조회 API - hanul
export const getLabRemainQuantities = async (lab, startDate, endDate) => {
  try {
    const response = await instanceUtil.get(
      `/admin/labRooms/${lab}/remainQuantities?from=${startDate}&to=${endDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실의 날짜별 남은 자리 조회 API - hwado
export const getHwadoLabRemainCounts = async (lab, startDate, endDate) => {
  try {
    const response = await instanceUtil.get(
      `/admin/labRooms/${lab}/remainReservationCounts?from=${startDate}&to=${endDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 일이 사용일인 랩실 대여 조회 API
export const getLabRentalList = async (startDate) => {
  try {
    const response = await instanceUtil.get(
      `/admin/reservations/labRooms?startDate=${startDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 일이 퇴실일인 랩실 대여 조회 API
export const getLabReturnList = async (endDate) => {
  try {
    const response = await instanceUtil.get(
      `/admin/reservations/labRooms?endDate=${endDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 대여 예약 API
export const postLabRental = async (data) => {
  try {
    const response = await instanceUtil.post(`/reservations/labRooms`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
    return err.response;
  }
};

// 랩실 대여 사용 처리 API
export const setLabUsingConfirm = async (data) => {
  try {
    const response = await instanceUtil.post(`/admin/rentals/labRooms`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 대여 퇴실 처리 API
export const setLabReturnConfirm = async (data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/rentals/labRooms/returns`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 날짜의 랩실 대여 기록 조회 API
export const getSpecificDateLabRental = async (lab, date) => {
  try {
    const response = await instanceUtil.get(
      `/admin/rentals/labRooms/${lab}?date=${date}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 사용자 현재 내 랩실 대여 예약 조회 API
export const getCurrentLabReservation = async () => {
  try {
    const response = await instanceUtil.get(
      `/reservations/labRooms?terminated=false`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 사용자 랩실 대여 이력 API
export const getUserLabRentalHistory = async (fromDate, toDate) => {
  try {
    const response = await instanceUtil.get(
      `/rentals/labRooms?from=${fromDate}&to=${toDate}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 기간 랩실 사용 불가 처리
export const setLabAvailablePeriod = async (lab, data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/labRooms/${lab}/available`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 랩실 히스토리 조회
export const getAdminLabHistory = async (labRoom, url) => {
  try {
    const response = await instanceUtil.get(
      `/admin/rentals/labRooms/${labRoom}/history?${url}&size=15`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 랩실 히스토리 통계 조회
export const getAdminLabStatistics = async (url) => {
  try {
    const response = await instanceUtil.get(
      `/admin/reservations/histories/stat?name=${url}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 전체 기간 랩실 운영 여부 조회
export const getLabAvailableEntirePeriod = async (lab) => {
  try {
    const response = await instanceUtil.get(`/labRooms/${lab}/available`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 공지사항 조회
export const getLabNotice = async (labRoom) => {
  try {
    const response = await instanceUtil.get(
      `/admin/labRooms/${labRoom}/notice`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 기간 랩실 운영 여부 조회
export const getLabAvailableParticularPeriod = async (lab, date) => {
  try {
    const response = await instanceUtil.get(
      `/labRooms/${lab}/available?date=${date}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 공지사항 수정
export const editLabNotice = async (labRoom, data) => {
  try {
    const response = await instanceUtil.put(
      `/admin/labRooms/${labRoom}/notice`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 같은 날짜에 같은 랩실 대여하는 대여 정보 조회
export const getLabRentalOnSameDate = async (id) => {
  try {
    const response = await instanceUtil.get(`/reservations/${id}?related=true`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 운영 요일 조회
export const checkLabOperation = async (id) => {
  try {
    const response = await instanceUtil.get(`/admin/operations/schedules`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 운영 요일 설정
export const setLabOperation = async (data) => {
  try {
    const response = await instanceUtil.put(
      `/api/admin/operations/schedules`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 전체 운영 설정
export const shutdownLab = async (data) => {
  try {
    const response = await instanceUtil.put(`/admin/operations`, {
      isRunning: data,
    });

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 랩실 전체 운영 조회
export const getLabStatus = async () => {
  try {
    const response = await instanceUtil.get(`/admin/operations`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 페널티 관련 API

// 특정 회원의 페널티 이력 조회
export const getMyPenalty = async () => {
  try {
    const response = await instanceUtil.get(`/penalties`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 특정 회원의 페널티 현재 상태 조회
export const getMyPenaltyStatus = async () => {
  try {
    const response = await instanceUtil.get(`/penalties/status`);

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 페널티 히스토리 조회
export const getPenaltyHistory = async (size, page) => {
  try {
    const response = await instanceUtil.get(
      `/admin/penalties/histories?size=${size}&page=${page}`
    );

    return response.data;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 패널티 상태 변경
export const modifyPenaltyStatus = async (id, data) => {
  try {
    const response = await instanceUtil.patch(`/admin/penalties/${id}`, data);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 패널티 삭제
export const deleteAdminPenalty = async (id) => {
  try {
    const response = await instanceUtil.delete(`/admin/penalties/${id}`);

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};

// 관리자 랩실 대여 상세 상태 변경 (랩실 대여 패널티 사유 변경)
export const modifyLabPenaltyStatus = async (data) => {
  try {
    const response = await instanceUtil.patch(
      `/admin/rentals/labRooms/status`,
      data
    );

    return response.status;
  } catch (err) {
    console.error(err.response);
  }
};
