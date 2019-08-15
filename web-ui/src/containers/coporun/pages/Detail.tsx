import React, {useCallback, useContext, useEffect} from 'react'
import Container, {Direction, Row} from "../../../components/atoms/Layout/Container";
import TextField from "../../../components/atoms/Form/TextField";
import {Color} from "../../../components/atoms/Form/Button";
import {api} from "../../../api";
import {DispatchContext, usePageState} from "../../../App";
import {Coporun} from "../models/Coporun";
import {Reducer} from "redux";


export interface PageState {
  coporun: Coporun
}

const ONE = 'one';

export const one = (coporun: Coporun) => ({
  type: ONE as typeof ONE,
  payload: coporun
});

// combine-reducersを使用した場合
export const reducer: Reducer<PageState, Actions> = (
  state: PageState = {coporun: {name: "", lvl: "", skType: ""}},
  action: Actions
) => {
  switch (action.type) {
    case ONE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state

  }
};

export type PageStateContext = {
  coporunDetailPageState: PageState
}

export type Actions = (
    | ReturnType<typeof one>
    );

export const pageReducer = {
  coporunDetailPageState: reducer
};

export const initialState = {
  coporunDetailPageState: {coporun: {name: "", lvl: "", skType: ""}}
};


const Detail = () => {
  const pageState = usePageState('coporunDetailPageState')
  const dispatch = useContext(DispatchContext);
  const fetch = useCallback((dispatch) => {
    // todo coporunIdを指定
    api<Coporun>('coporuns/1')
      .then(data => {
        dispatch(one(data))
      })
  }, []);

  useEffect(() => {
    fetch(dispatch)
  }, []);

  return (
    <Container direction={Direction.column}>
      <Row>
        <div>
          {/* TODO エラー出てる */}
          <TextField value='test' color={Color.error}/>
          <button onClick={_ => {
            fetch(dispatch)
          }}>test
          </button>
        </div>
      </Row>
      <Row>
        <span>{pageState.coporun.name}</span>
      </Row>
    </Container>
  );
};

export default Detail;