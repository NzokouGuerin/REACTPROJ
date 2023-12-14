import React, {useState} from "react"
import "./all.css"

const Count = (props) => {
    /* It is a HOOK :-useState is use to take the value of a variable and enable it manipulation to be display on the browser 
   -To use the useState you must declare a variable together with a function all in square brackets = useState(initial number of your var)
   */

   console.log(props.incrementBy)
    const [currentItem, changeItem] = useState(12)
    const [currentItem2, mouseenter] = useState(15)

    let change = () =>{
        changeItem(currentItem + props.incrementBy);
    }

    let mousing = () =>{
        mouseenter(currentItem2 - props.incrementBy)
    }
    //Styling, I created a fxn to style
const button = {
    background: props.buttonColor,
    borderRadius: "5px",
}
 

    return( 
/*I call the fxn created to style inside the curly bracks after the style syntax*/
    <div> 
        <button style = {button} onClick={change} onMouseOut={mousing}> +{props.incrementBy} </button>
        <div> {currentItem} </div>
        <div> {currentItem2} </div>
    </div>
    )
}

export default Count