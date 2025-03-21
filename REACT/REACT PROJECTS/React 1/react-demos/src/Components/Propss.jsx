

// const Parent = () => {
//   return (
//     <Child name="Sooryadev"/>
//   )
// }
// const Child=(props)=>{
//     console.log(props)
//     return (
//         <div>
//             <h1>name:{props.name}</h1>
//         </div>
//     )
// }
// export default Parent;
// export  {Child};


//!Code with Destructured Props
// const Parent = () => {
//   return (
//       <Child 
//           name="Sooryadev" 
//           age={25} 
//           location="Kerala" 
//       />
//   );
// };

// const Child = ({ name, age, location }) => {
//   return (
//       <div>
//           <h1>Name: {name}</h1>
//           <h2>Age: {age}</h2>
//           <h3>Location: {location}</h3>
//       </div>
//   );
// };

// export default Parent;



const Person = () => {
  return (
   <Childrenn name="Testing PRops" age={19}/>
  )
}

export {Person};



const Childrenn = (props) => {
  console.log(props.age)
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
    </div>
    
  );
};


export  { Childrenn }
