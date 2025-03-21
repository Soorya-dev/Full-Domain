import React from 'react'
import { createContext } from 'react'
import {ComponentB} from './ComponentB'


export const  Data=createContext()

const ComponentA = () => {
    let name="soorya"
  return (
    <div>
<Data.Provider value={name}>
    <ComponentB></ComponentB>
</Data.Provider>

    </div>
  )
}

export default ComponentA