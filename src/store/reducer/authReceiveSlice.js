import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getLabRentalList,
  getLabReturnList,
  getReceivedRentalList,
  getReturnRentalList,
} from "../../api/api";

export const asyncGetReceived = createAsyncThunk(
  "authReceive/asyncGetReceived",
  async (date) => {
    const response = await getReceivedRentalList(date);

    return response.reservations;
  }
);

export const asyncGetReturned = createAsyncThunk(
  "authReceive/asyncGetReturned",
  async (date) => {
    const response = await getReturnRentalList(date);

    const newArr = response.overdueReservations.reservations.concat(
      response.reservationsByEndDate.reservations
    );

    return newArr;
  }
);

export const asyncGetLabReceived = createAsyncThunk(
  "authReceive/asyncGetLabReceived",
  async (date) => {
    const response = await getLabRentalList(date);
    response.reservations.sort((a, b) => (a.labRoomName === "hanul" ? -1 : 0));

    return response.reservations;
  }
);

export const asyncGetLabReturned = createAsyncThunk(
  "authReceive/asyncGetLabReturned",
  async (date) => {
    const response = await getLabReturnList(date);
    response.reservations.sort((a, b) => (a.labRoomName === "hanul" ? -1 : 0));

    return response.reservations;
  }
);

const handleFulfilled = (state, action) => {
  state.receiveList = {
    byId: {},
    allIds: [],
  };

  state.receiveSpecList = {
    byId: {},
    allIds: [],
  };

  action.payload.forEach(
    ({
      acceptDateTime,
      reservationId,
      memberNumber,
      name,
      reservationSpecs,
      overdueAcceptDateTime,
    }) => {
      state.receiveList.byId[reservationId] = {
        overdueAcceptDateTime,
        acceptDateTime,
        name,
        memberNumber,
        reservationId,
        reservationSpecs: reservationSpecs.map((i) => i.reservationSpecId),
      };
      state.receiveList.allIds.push(reservationId);

      reservationSpecs.forEach((item) => {
        state.receiveSpecList.byId[item.reservationSpecId] = { ...item };
        state.receiveSpecList.allIds.push(item.reservationSpecId);
      });
    }
  );

  const newItems = action.payload.map(
    ({ reservationId, reservationSpecs }) => ({
      reservationId,
      rentalSpecsRequests: reservationSpecs.map(
        ({ reservationSpecId, rentalSpecs }) => ({
          reservationSpecId,
          propertyNumbers: rentalSpecs?.map(
            ({ propertyNumber }) => propertyNumber || []
          ),
        })
      ),
    })
  );

  state.receiveCheckList = newItems;
};

const handleLabFulfilled = (state, action) => {
  state.labReceiveList = action.payload;
};

const initialState = {
  receiveList: {
    byId: {},
    allIds: [],
  },
  receiveSpecList: {
    byId: {},
    allIds: [],
  },
  receiveCheckList: [],
  labReceiveList: [],
};

const authReceiveSlice = createSlice({
  name: "authReceive",
  initialState: initialState,
  reducers: {
    setReserveId: (state, action) => {
      const { length, reservationSpecId, idx, value } = action.payload;

      const modifiedList = state.receiveCheckList.map((item) => {
        const modifiedRequests = item.rentalSpecsRequests.map((request) => {
          if (request.reservationSpecId === reservationSpecId) {
            const modifiedRequest = { ...request };
            modifiedRequest.propertyNumbers =
              modifiedRequest.propertyNumbers || Array(length).fill();

            if (modifiedRequest.propertyNumbers.includes(value))
              alert("자산번호가 중복됩니다.");
            else modifiedRequest.propertyNumbers[idx] = value;

            return modifiedRequest;
          }
          return request;
        });
        return { ...item, rentalSpecsRequests: modifiedRequests };
      });

      state.receiveCheckList = modifiedList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetReceived.fulfilled, handleFulfilled);
    builder.addCase(asyncGetReturned.fulfilled, handleFulfilled);
    builder.addCase(asyncGetLabReceived.fulfilled, handleLabFulfilled);
    builder.addCase(asyncGetLabReturned.fulfilled, handleLabFulfilled);
  },
});

export const { setReceiveList, setReserveLen, setReserveId } =
  authReceiveSlice.actions;

export default authReceiveSlice.reducer;
