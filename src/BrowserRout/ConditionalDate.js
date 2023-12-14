import React from 'react';

const Dating = () =>{
    const time = new Date();
    const day = time.toLocaleString("en-us", { weekday : "long"});
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

    if(day.toLowerCase() === "monday"){
        dayMessage = `Happy ${day} `;
    }
    else if (day.toLowerCase() === "tuesday"){
        dayMessage =  `four days to go`;
    }
    else if (day.toLowerCase() === "wednsday"){
        dayMessage =  `3 days to go`;
    }
    else if (day.toLowerCase() === "thursday"){
        dayMessage = `2 days to go`;
    }
    else if (day.toLowerCase() === "friday"){
        dayMessage =  `1 days to go`;
    }
    else if (day.toLowerCase() === "saturday"){
        dayMessage =  `It is weekend`;
    }
    else if (day.toLowerCase() === "sunday"){
        dayMessage =  `Still weekend`;
    }

    else{
        dayMessage = "Contunue having fun";
    }

    return(
        <div>
            <h1> {dayMessage} </h1>
            {morning ? <h2>Take your beakfast </h2> : ""}
        </div>
    )
}

export default Dating;