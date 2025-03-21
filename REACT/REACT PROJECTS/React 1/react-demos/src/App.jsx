//rafce

import Greet from "./Components/Greet"
import Header from "./Components/Header"
import { Childrenn, Person } from "./Components/Propss";
import {Check} from "./Components/Render"
import Styles from "./Components/Styless"
import ToDoList from "./Components/ToDoList";
import Event from "./Components/event";
import Counter from "./Components/states";
import Profile from "./Components/Profile";
import LearnEffect from "./Components/Useeffect";
// import Counter1 from "./Components/review";
// import {Parent1,Hello,ChangeTitle,
//   FocusInput,ConditionalRender,CompareInputValues,
//   ChangeColor ,CheckLog} from "./Components/review";
import { Parent } from "./Components/Review";
import { Child } from "./Components/Review";



const App= ()=>{
  return (
    <div>
      {/* <Header/>
      <Greet></Greet>
      <Person></Person>
      <Check></Check> */}
      {/* <Styles></Styles>
      <Event></Event> */}
      {/* <Counter/>
      <ToDoList/>
      <Profile/>
      <LearnEffect/> */}
      <Counter1/>
      <Parent/>
      <Parent1/>
      <Hello/>
      <ChangeTitle/>
      <FocusInput/>
      <ConditionalRender/>
      <CompareInputValues/>
      <ChangeColor/>
      <CheckLog/>

    </div>
  )
}
export default App