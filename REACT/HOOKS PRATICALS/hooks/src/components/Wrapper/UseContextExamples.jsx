import ContextProvider from "../../context/AppContext";
import UseContext from "../UseContext";

import React from 'react'

const UseContextExamples = () => {
  return (
    <ContextProvider>
    <UseContext/>
    </ContextProvider>
  )
}

export default UseContextExamples



