import { createContext } from "react";

export const CarrinhoContext = createContext();

export default Provider = ({children}) => {
    return(
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    );
}