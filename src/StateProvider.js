import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Wraping the whole app in the StateProvider, it provides the data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to pull something from the data layer we use this useStateValue hook
export const useStateValue = () => useContext(StateContext);
