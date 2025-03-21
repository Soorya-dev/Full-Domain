import { createContext } from "react";



export const AppContext =createContext();

export const ContextProvider = (props) => {
    const age="18"
  return (
   <AppContext.Provider value={age}>
    {props.children}
   </AppContext.Provider>
  )
}
export default ContextProvider