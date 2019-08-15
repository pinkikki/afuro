import React, {Dispatch, useContext, useReducer} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import List from "./containers/coporun/pages/List";
import Home from "./containers/home/pages/Home";
import styles from './App.module.scss'
import Header from "./containers/Header";
// combine-reducersを使用した場合
import {initialState, rootReducer, State} from "./reducers/combine-reducers";
// simple-reduecerを使用した場合
// import {initialState, State} from "./reducers/simple-reducer";
// import {reducer} from "./reducers/simple-reducer";
import Detail from "./containers/coporun/pages/Detail";
// combine-reducersを使用した場合

export const StateContext = React.createContext<State>(null as any);
export const DispatchContext = React.createContext<Dispatch<any>>(null as any);


const App = () => {
  // combine-reducersを使用した場合
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // simple-reduecerを使用した場合
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className={`App ${styles.content}`}>
          <BrowserRouter>
            <div>
              <Header/>
              <Switch>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/coporuns"} component={List}/>
                <Route path={"/coporuns/1"} component={Detail}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const usePageState = <K extends keyof State>(props: K) => {
  const context = useContext(StateContext);
  return context[props]
};


export default App;
