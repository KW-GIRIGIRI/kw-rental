import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  receiveList: {
    byId: {},
    allIds: [],
  },
  receiveSpecList: {
    byId: [],
    allIds: [],
  },
  receiveCheckList: []
};

const authReceiveSlice = createSlice({
  name: "authReceive",
  initialState: initialState,
  reducers: {
    setReceiveList: (state, action) => {
      state.receiveList = initialState.receiveList;
      state.receiveSpecList = initialState.receiveSpecList;
      
      action.payload.forEach(
        ({
          acceptDateTime,
          reservationId,
          memberNumber,
          name,
          reservationSpecs,
        }) => {
          state.receiveList = {
            byId: {
              ...state.receiveList.byId,
              [reservationId]: {
                acceptDateTime,
                name,
                memberNumber,
                reservationId,
                reservationSpecs: reservationSpecs.map(
                  (i) => i.reservationSpecId
                ),
              },
            },
            allIds: state.receiveList.allIds.concat(reservationId),
          };
          reservationSpecs.map(
            (item) =>
              (state.receiveSpecList = {
                byId: [...state.receiveSpecList.byId, { ...item }],
                allIds: state.receiveSpecList.allIds.concat(
                  item.reservationSpecId
                ),
              })
          );
        }
      );
    },
    setReserveLen: (state, action) => {
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
    },
    setReserveId: (state, action) => {
      const { length, reservationSpecId, idx, value } = action.payload;

      const modifiedList = state.receiveCheckList.map((item) => {
        const modifiedRequests = item.rentalSpecsRequests.map((request) => {
          if (request.reservationSpecId === reservationSpecId) {
            const modifiedRequest = { ...request };
            modifiedRequest.propertyNumbers = modifiedRequest.propertyNumbers || Array(length).fill();

            if (modifiedRequest.propertyNumbers.includes(value)) alert("자산번호가 중복됩니다.");
            else modifiedRequest.propertyNumbers[idx] = value;

            return modifiedRequest;

          }
          return request;
        })
        return { ...item, rentalSpecsRequests: modifiedRequests };
      });

      state.receiveCheckList = modifiedList;
    },
  },
});

export const { setReceiveList, setReserveLen, setReserveId } =
  authReceiveSlice.actions;

export default authReceiveSlice.reducer;