import { combineReducers } from "redux";
import demoReducer, { DemoState } from "./demo.reducer";
import storeReducer, { StoreState } from "./store.reducer";

export interface IRootState {
  readonly demoState: DemoState;
  readonly storeState: StoreState;
}

const rootReducer = combineReducers({
  demoState: demoReducer,
  storeState: storeReducer,
});

export default rootReducer;
