import React, {createContext, useReducer} from "react";
 import {initialstate, UserReducer } from '../../src/reducers/UserReducer'

export const userContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialstate);

    return (
        <userContext.Provider value={{state, dispatch}}>
            {children}
        </userContext.Provider>
    );
}