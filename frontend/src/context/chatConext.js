import React from "react";
import { createContext, useContext } from "react";

const CurrUserContext = createContext({
    currUser: '',
    setUserName: () => {},
    forceRender: '',
    setForceRender: () => {},
})

export const CurrUserDtlProvider = CurrUserContext.Provider;

export function useCurrUserDtl(){
    return useContext(CurrUserContext);
}