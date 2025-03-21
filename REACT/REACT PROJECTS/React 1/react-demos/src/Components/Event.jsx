const Event =()=>{
    function moveHandler(){
        alert("mouse moving over text")
    }
    return (
        <p onMouseMove={moveHandler}>when
         hovering abve these text</p>
    )
}
export default Event