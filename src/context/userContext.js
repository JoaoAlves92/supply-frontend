import { createContext } from "react";

export const UserContext = createContext();

export default Provider = ({children}) => {
    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
}