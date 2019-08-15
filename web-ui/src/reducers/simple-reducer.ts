import * as CoporunList from "../containers/coporun/pages/List";
import * as CoporunDetail from "../containers/coporun/pages/Detail";

export const reducer = (
  state: State = initialState,
  action: Action,
) => {
  if (action.payload) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

interface Action {
  type: string
  payload: any;
}


export const initialState: State = {
  ...CoporunList.initialState,
  ...CoporunDetail.initialState
};

export type State = CoporunList.PageStateContext & CoporunDetail.PageStateContext


