import React,{useState} from 'react';
import "./Form.css";
// import ReactPlayer from 'react-player';

const All = (props) =>{
    // const gojo = "./gojovid.mp4";
    const [name, ChangeName] = useState("");
    const [email, ChangeEmail] = useState("");
    const [password, ChangePass] = useState("");
    const [location, ChangeLoc] = useState("");
    let message;

    const time = new Date();
    const days = time.toLocaleString("en-us", {weekday : "long"});
    const hours = time.toLocaleString("en-us");

        const SetName = (event) =>{
            ChangeName(event.target.value);
        }

        const SetEm = (event) =>{
            ChangeEmail(event.target.value);
        }
        const SetPass = (event) =>{
            ChangePass(event.target.value);
        }
        const SetLoc = (event) =>{
            ChangeLoc(event.target.value);
        }

        const check = name.length > 0
        const checkEm = email.length > 0
        const checkPass = password.length > 0
        const checkLoc = location.length > 0

    const checkAll = () =>{

    if(!check || !checkEm || !checkPass || !checkLoc){
        alert(message = "Pls enter all the fields");
        ChangeName("");
        ChangeEmail("");
        ChangeLoc("");
        ChangePass("");
    }
    else{
        alert(`You have registerd on the ${days} the ${hours}, thnks for that`);
    }
}

const clearAll = () =>{

    ChangeEmail("")
    ChangeLoc("")
    ChangeName("")
    ChangePass("")
    ChangeLoc("")
}

    return(
        <div >
            <div className='input'>
            <h1> AUTOMATIC FORM INPUT</h1>
            <label>NAME</label>
            <input type='text' className='name' value={name} onChange={SetName}/>
            <label>EMAIL</label>
            <input type='email' className='email' value ={email} onChange={SetEm}/>
            <label>PASSWORD</label>
            <input type='password' className='pass' value={password} onChange={SetPass}/>
            <label>LOCATION</label>
            <input type='text' className={location} onChange={SetLoc}/>
            <button onClick={checkAll}> SUBMIT </button>
            {(check && checkEm && checkPass && checkLoc) && <button  onClick={clearAll}> CLEAR </button>}
            </div>

            <div className='output'>
                <h2> AUTOMATIC FORM OUTPUT </h2>
                <label>{props.title}</label>
                <p>{name}</p>
                <label>{props.titleEm}</label>
                <p>{email}</p>
                <label>{props.titlePass}</label>
                <p>{password}</p>
                <label>{props.titleLoc}</label>
                <p>{location}</p>

            </div>

        {/*For the insertion of a video  <ReactPlayer 
       url={gojo}
       playing={true}
       volume={1}
       /> */}

        </div>

    )
}

export default All;