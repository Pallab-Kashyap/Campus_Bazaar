import { createContext, useContext } from 'react'

const UserContext = createContext({
    user: null,
    setUser: () => {},
})

const UserContextProvider = UserContext.Provider;

const useUserContext = () => {
    return useContext(UserContext);
}

export {
    UserContextProvider,
    useUserContext
}