// import React, { useState, useEffect, useRef } from 'react'

import { useState } from "react"

// //counter app using useState
// const Counter1 = () => {
//     const [count, setCount] = useState(0)
//     function updateIncrement() {
//         setCount(count + 1)
//     }
//     function updateDecrement() {
//         setCount(count - 1)
//     }
//     return (
//         <>
//             <h1>Counter App :-{count}</h1>
//             <p> {count}</p>
//             <button onClick={updateIncrement}> Increment</button>
//             <button onClick={updateDecrement}> Decrement</button>

//         </>
//     )
// }





// //!Passing Props ( Parent to Child)



const Parent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <Child message="hello from parent" />
        </div>
    )
}

const Child = ({ message }) => {
    return (
        <>
            <h2>{message}</h2>

        </>
    )
}


// //!Passing Props (  Child to Parent)


// const Parent1 = () => {
//     const [message, setMessage] = useState("")
//     return (
//         <> 
//             <Child1 sendData={(data) => setMessage(data)} />
//             <h1>{message}</h1>
//         </>
//     )
// }


// const Child1 = ({ sendData }) => {
//     return (
//         <div>
//             <button onClick={() => sendData("hello from child")}>
//                 Send Data
//             </button>
//         </div>
//     )
// }


// //! input field set name


// const Hello = () => {
//     const [name, setName] = useState("guest")
//     return (
//         <>
//             <div>hello {name}</div>
//             <input type='text'
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder='Enter name'></input>

//         </>
//     )
// }

// //!sample useEffect title change

// const ChangeTitle = () => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         document.title = `clicked ${count} times`
//     }, [count])
//     return (
//         <>
//             <h1>count {count}</h1>
//             <button onClick={() => setCount(count + 1)}> click me</button>
//         </>
//     )
// }


// //!useRef
// const FocusInput = () => {
//     const inputRef = useRef(null); // Creating a ref to hold the DOM element

//     const handleFocus = () => {
//         inputRef.current.focus(); // Accessing the input element and focusing it
//     };

//     return (
//         <div>
//             <input ref={inputRef} type="text" placeholder="Click the button to focus" />
//             <button onClick={handleFocus}>Focus Input</button>
//         </div>
//     );
// };



// //!Lifecycle Method in useEffect 
// const ComponentDidMountExample = () => {
//     useEffect(() => {
//         console.log("Component mounted!"); // Mimics componentDidMount

//         return () => {
//             console.log("Component unmounted!"); // Mimics componentWillUnmount
//         };
//     }, []); // Empty dependency array -> runs once

//     return <h1>Check the console!</h1>;
// };




// //!Conditional Rendering (Login & Logout)

// const ConditionalRender = () => {
//     const [isLoggined, setIsLoggined] = useState(false)
//     return (
//         <>
//             {isLoggined ? (
//                 <>
//                     <h1>Welcome Back</h1>
//                     <button onClick={() => setIsLoggined(false)} >Log out

//                     </button>
//                 </>

//             ) : (
//                 <>
//                     <h1>please loggin</h1>
//                     <button onClick={() => setIsLoggined(true)}>Log in

//                     </button>
//                 </>
//             )
//             }
//         </>
//     )
// }

// //!Check if two input fields have the same value



// const CompareInputValues = () => {
//     const [value1,setValue1] = useState('')
//     const [value2,setValue2] = useState('')
//     const [message, setMessage] = useState('');
//     function handleValues(){
//         if (value1 === value2) {
//             setMessage("Values are the same!");
//           } else {
//             setMessage("Values are different.");
//           }
//     }
//   return (

//     <div>
// <input 
// type="text" 
// value={value1}
// onChange={(e)=>setValue1(e.target.value)}
// placeholder='Enter value 1'/>
// <input 
// type="text"
// value={value2}
//  onChange={(e)=>setValue2(e.target.value)}
//  placeholder='Enter value 2'
//  />
//  <button onClick={handleValues}>Check Values</button>
//  <p>{message}</p>

//     </div>
//   )
// }




// //!Change the color of a heading when clicking a button




// const ChangeColor = () => {
//     const [color,setColor]= useState('black')
//     const handleClick=()=>{
//         setColor(color ==='black'?'red':'black')

//     }
//   return (
//     <div>
//         <h1 style={{color}}>heading</h1>
//         <button onClick={handleClick}>click to change color</button>
//     </div>
//   )
// }


// //!Login button toggles to Logout and changes text


// const CheckLog = () => {
//     const [isLoggedIn,setIsLoggedIn]=useState(false)
//     const handleLogin=()=>{
//         setIsLoggedIn(!isLoggedIn)
//     }
//   return (
//     <div>
//        <h1>{isLoggedIn?"Welcome":"please Login"}</h1>
//         <button onClick={handleLogin}>
//             {isLoggedIn?"logout":"Login"}
//         </button>
//     </div>
//   )
// }



// const  Parent = () => {
//     const [count,setCount]=useState(0)
  
//   return (
//     <>
//     <Child count={setCount(count)}/>
//     <div>review</div>
//     </>
    
//   )
// }



// const  Child= ({count}) => {
    
//     function handleChange(){
//             setCount(count+1)
//     }
//   return (
//     <div>
//         <input type="number" 
//         onChange={handleChange}
//         />
//     </div>
//   )
// }









// export { Parent, Parent1, Hello, ChangeTitle,
//      FocusInput, ConditionalRender,CompareInputValues
//     ,ChangeColor ,CheckLog}
export {Parent,Child}
// export default Counter1b                      