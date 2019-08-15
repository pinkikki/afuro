import {combineReducers} from "redux";
import * as CoporunList from "../containers/coporun/pages/List";
import * as CoporunDetail from "../containers/coporun/pages/Detail";


export const initialState: State = {
  ...CoporunList.initialState,
  ...CoporunDetail.initialState
};

export const rootReducer = combineReducers<State, Actions>({
  ...CoporunList.pageReducer,
  ...CoporunDetail.pageReducer
});


export type State = CoporunList.PageStateContext & CoporunDetail.PageStateContext

export type Actions = CoporunList.Actions & CoporunDetail.Actions
