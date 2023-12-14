import React from "react";

const New = () =>{
    return(
        <div>
            <h1> You are in another page form</h1>

            <img src={require("./whisky.jpg")} height={800} width={1450} alt="WHISKY"></img>
            {/*- method of declaring images by inserting the path inside the require brackets 
            - By inserting the image name directly inside the curly brackets*/}
        </div>
    )
}

export default New;