import { createContext, useContext } from "react";


const homeContext = createContext({
    sideNavDisplay: 'hidden',
    setSideNavDisplay: () => {},
})

 const HomeContextProvider = homeContext.Provider

 const useHomeContext = () => {
    return useContext(homeContext);
}

export{
    HomeContextProvider,
    useHomeContext
}
