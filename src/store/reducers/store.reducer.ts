import { AnyAction } from "redux";
import { StoreDataType } from "../../utils/type";
import { REQUEST, SUCCESS, FAILURE } from "../constant/share-config";

export const STORE_ACTION_TYPES = {
  LOADING: "STORE_ACTION_TYPES/LOADING",
  GET_ALL: "STORE_ACTION_TYPES/GET_ALL",
  ADD_STORE: "STORE_ACTION_TYPES/ADD_STORE",
  UPDATE_STORE: "STORE_ACTION_TYPES/UPDATE_STORE",
  DELETE_STORE: "STORE_ACTION_TYPES/DELETE_STORE",
};

const initialState = {
  storeLoading: false,
  stores: [] as StoreDataType[],
};

export type StoreState = Readonly<typeof initialState>;

/**
 * Action get all stores (async)
 *
 * Using redux-promise-middleware
 * @param state
 * @param action
 * @returns
 */
const storeReducerGetAll = (
  state: StoreState = initialState,
  action: AnyAction
): StoreState | null => {
  switch (action.type) {
    case REQUEST(STORE_ACTION_TYPES.GET_ALL): {
      return {
        ...state,
        storeLoading: true,
      };
    }
    case SUCCESS(STORE_ACTION_TYPES.GET_ALL): {
      return {
        ...state,
        storeLoading: false,
        stores: action.payload.data.stores || [],
      };
    }
    case FAILURE(STORE_ACTION_TYPES.GET_ALL): {
      return {
        ...state,
        storeLoading: false,
      };
    }
    default:
      return null;
  }
};

/**
 * Action add store to list after (async)
 *
 * request create new store api success
 *
 * Using redux-promise-middleware
 * @param state
 * @param action
 * @returns
 */
const storeReducerAddStore = (
  state: StoreState = initialState,
  action: AnyAction
): StoreState | null => {
  switch (action.type) {
    case REQUEST(STORE_ACTION_TYPES.ADD_STORE): {
      return {
        ...state,
        storeLoading: true,
      };
    }
    case SUCCESS(STORE_ACTION_TYPES.ADD_STORE): {
      return {
        ...state,
        storeLoading: false,
        stores: [...state.stores, action.payload],
      };
    }
    case FAILURE(STORE_ACTION_TYPES.ADD_STORE): {
      return {
        ...state,
        storeLoading: false,
      };
    }
    default:
      return null;
  }
};

// Reducer
const storeReducer = (
  state: StoreState = initialState,
  action: AnyAction
): Partial<StoreState> => {
  let updatedState = null as StoreState | null;
  if (!updatedState) updatedState = storeReducerGetAll(state, action);
  if (!updatedState) updatedState = storeReducerAddStore(state, action);
  if (!updatedState) updatedState = state;

  return updatedState;
};

export default storeReducer;
