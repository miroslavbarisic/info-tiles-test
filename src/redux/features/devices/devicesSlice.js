import { createSlice } from '@reduxjs/toolkit';

import {
  postFunc,
  getFunc,
  putFunc,
  delFunc,
} from '../../../services/mainApiServices.jsx';


const initialState = {
  data: [] ,

};

export const devicesReducer = createSlice({
  initialState,
  name: 'devices',
  reducers: {
    setDevices: (state, action) => {
      state.data = action.payload;
      state.loading = 'succeeded';
    },
        clearDevices: (state) => {
      return {
        ...state,
        data: []

        ,
        loading: 'succeeded',

      };
    },
  },
});

export const getDevices = (body) => async (dispatch) => {
  const response = await postFunc('api/Devices/getDevices', body);
  if (response?.status === 200) {
    dispatch(setDevices(response?.data?.data));

  } else {
    return console.log(response?.data?.message);
  }
};


export const clearDevicesState = () => async (dispatch) => {
  dispatch(clearDevices());
};


export const {
  clearDevices,
  setDevices,
} = devicesReducer.actions;
export const devices = (state) => state.devices;
export default devicesReducer.reducer;
