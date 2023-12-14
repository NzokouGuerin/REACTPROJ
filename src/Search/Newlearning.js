import React,{useState} from "react";


const Neweprt = (props) =>{
    const [values, setValue] = useState("ChangeMe");

const changing = () => {
    setValue(values);
}

const clear = () => {
    setValue("");
}
const length = values.length > 0;
const allStyle = {
    width : "250px",
    height : "250px",
    backgroundColor: "blue",
    borderRadius: "5px",
    textAlign: "center"
}
    return(
        <div id="all" style={allStyle}>
            <input onBeforeInput={changing}> {values} </input>
            {length && <div> <h1>{props.title}</h1></div>}
            {!length && clear}
        </div>
    )
}

export default Neweprt;