import React, {useState} from "react"

const Sum = () =>{
    //Use of useState
    let [num1, out] = useState(12)
    let [num2] = useState(24)

    const add = () =>{
        out(num1 += num2)
    }

    const form = {
        display: "block",
        background: "purple",
        position: "absolute",
        borderRadius: "5px",
        border: "3px solid blue",
    }

    const output = {
        background: "blue",
        borderRadius: "10px",
        fontSize : "15px",
        padding: "10px",
        color: "white",
    }

    const input = {
        padding: "3px",
        fontSize: "15px",
        borderRadius: "5px",
        margin: "10px",
    }

    return (
        <div style={form}>
            <button onClick={add} style={output}> add </button>
            <input style={input} type="text"></input>
                <div> {num1} </div>
        </div>
    )
}

export default Sum