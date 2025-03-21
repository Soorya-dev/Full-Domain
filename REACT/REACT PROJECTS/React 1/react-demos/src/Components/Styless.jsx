import React from 'react'

const Styles = () => {
    const myStyle={color:"black",backgroundColor:"teal",padding:"2rem"}
  return (
  <div>
     <h1 style={{color:"white",backgroundColor:"teal",padding:"2rem"}}>this is styles</h1>
     <h2 style={myStyle}>this is from above</h2>
  </div>

 
)
}

export default Styles