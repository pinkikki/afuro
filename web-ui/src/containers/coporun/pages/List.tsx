import React, {useCallback, useContext, useEffect} from 'react'
import Container, {Direction, Row} from "../../../components/atoms/Layout/Container";
import TextField from "../../../components/atoms/Form/TextField";
import {Color} from "../../../components/atoms/Form/Button";
import Table from "../../../components/atoms/Table/Table";
import TableHeader from "../../../components/atoms/Table/TableHeader";
import TableBody from "../../../components/atoms/Table/TableBody";
import TableRow from "../../../components/atoms/Table/TableRow";
import TableData from "../../../components/atoms/Table/TableData";
import {api} from "../../../api";
import {DispatchContext, usePageState} from "../../../App";
import {Coporun} from "../models/Coporun";
import {Reducer} from "redux";


export interface PageState {
  coporuns: Array<Coporun>
}

const LIST = 'list';

// simple-reducerを使用した場合
// export const list = (coporuns: Array<Coporun>) => ({
//   type: LIST as typeof LIST,
//   payload: {coporunListPageState: coporuns}
// });

// combine-reducersを使用した場合
export const list = (coporuns: Array<Coporun>) => ({
  type: LIST as typeof LIST,
  payload: coporuns,
});


// combine-reducersを使用した場合
export const reducer: Reducer<PageState, Actions> = (
  state: PageState = {coporuns: []},
  action: Actions
) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state
  }
};

export type PageStateContext = {
  coporunListPageState: PageState
}

export type Actions = (
    | ReturnType<typeof list>
    );

export const pageReducer = {
  coporunListPageState: reducer
};

export const initialState = {
  coporunListPageState: {coporuns: []}
};

const List = () => {
  const pageState = usePageState('coporunListPageState')
  const dispatch = useContext(DispatchContext);
  const fetch = useCallback((dispatch) => {
    api<Array<Coporun>>('coporuns')
      .then(data => {
        dispatch(list(data))
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableData value='name'/>
              <TableData value='lvl'/>
              <TableData value='sk-type'/>
            </TableRow>
          </TableHeader>
          <TableBody>

            {/*simple-reduecerを使用した場合*/}
            {/*{pageState.coporunListPage.coporuns.map(row =>*/}

            {/*TODO useMemo化*/}
            {/*combine-reducersを使用した場合*/}
            {pageState.coporuns.map(row =>
              <TableRow>
                <TableData value={row.name}/>
                <TableData value={row.lvl}/>
                <TableData value={row.skType}/>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Row>
    </Container>
  );
};

export default List;