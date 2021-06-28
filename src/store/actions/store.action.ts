import axios from "axios";
import { Dispatch } from "react";
import { NewStoreDataType } from "../../utils/type";
import { STORE_ACTION_TYPES } from "../reducers/store.reducer";
import { apiUrl } from "../constant/share-config";
import _ from "lodash";

/**
 * `Fetch data store`
 *
 * Fetch data when fist time load stores page.
 *
 * Using redux-promise-middleware
 * @param dispatch
 * @returns
 */
export const getAllStore = () => async (dispatch: Dispatch<any>) => {
  await dispatch({
    type: STORE_ACTION_TYPES.GET_ALL,
    payload: axios.get(`${apiUrl}/store`),
  });
};

/**
 * `Add new store action`
 *
 * Call api manually.
 * If success, update state redux.
 * @param dispatch
 * @param newStore submmit form
 * @returns
 */
export const addNewStore = async (
  dispatch: Dispatch<any>,
  newStore: NewStoreDataType
) => {
  try {
    const response = await dispatch({
      type: STORE_ACTION_TYPES.GET_ALL,
      payload: axios.post(`${apiUrl}/store`, newStore),
    });

    // return status success to show alert or toast message
    const data = _.get(response, ["action", "payload"]);
    if (_.get(data, ["success"], false)) {
      return data;
    }
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, message: "Server error" };
  }
};
