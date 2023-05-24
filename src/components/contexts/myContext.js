import React, { createContext } from "react";

export const MyContext = createContext({});

function ApiProvider({children}) {
    return(
        <MyContext.Provider value={{limitPoke: 10, offsetPoke: 0}}>
            {children}
        </MyContext.Provider>
    )
}

export default ApiProvider