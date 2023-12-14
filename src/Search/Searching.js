import React, {useState} from "react"
import "./search.css"


const SearchBar = () =>{
const [SearchValue, setSearchValue] = useState("");
const [Searchpassword, SetPassword] = useState("");

const handleInput = (event) => {
    setSearchValue(event.target.value);
}

const clear = () =>{
    setSearchValue("");
}

const changePass = (event) =>{
    SetPassword(event.target.value);
}
const url = "new.jpg";
const displayBtn = SearchValue.length > 0 
const displayToilet = SearchValue < 1

const toilet = [
    "Toothbrush",
    "Toothpaste",
    "Soap",
    "Shower"
]

    return(
        
        <div id="body">
            <img src={url} alt=""></img>
            <div> <h1>hello </h1></div>
            <h1>  FORM VALIDATION </h1>
            <div>
            <label> Name: </label>
            {/* the "onchange" syntax gives an output when the initial value wants to be changed */}
        <input type="text" value={SearchValue} onChange={handleInput} />
        {SearchValue}</div>

        {displayBtn && <button onClick={clear}> Clear </button>} 
        {/* Meaning tht if displayBtn is true btn will appear else it will not appear */}
        {displayToilet && <div>
            {toilet.map(toil => {
                 return <li> {toil} </li>
            })
        }
        </div>}
        {/*This toilet.map(toil),it is just like "forEach()" in js, im asigning the array toilet to a var toil wich shall take each elt of the array as one */}
        <div>
        <label> Email:</label>
        <input type="email" value="Email"></input>
        </div>
        <div>
        <label> Password:</label>
        <input type="password" value={Searchpassword} onChange={changePass}/> {Searchpassword}
        </div>
        <div>
        <input type="submit" value="submit"></input>
        </div>


        </div>
    )
}

export default SearchBar