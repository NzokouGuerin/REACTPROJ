import React from "react" ;//{useState}, is a library that permit u to use the useState syntax
// import ReactPlayer from "react-player"; //to permit me have access to the lib for running videos and audios 
import All from "./BrowserRout/Recovery";
import New from "./BrowserRout/Other";
// import Count from "./css/countBtn"
// import Sum from "./revision2"
// import SearchBar from "./Search/Searching";
// import Neweprt from "./Search/Newlearning";
// import Homing from "./BrowserRout/Home";
// import About from "./BrowserRout/About";
import { Route, Routes, Link} from "react-router-dom";
// import Dating from "./BrowserRout/ConditionalDate";
const App = () =>{


   return(
    <div>   
      <Link to="/" className="FORM"> FORM </Link>
      <Link to="/Other.js" className="VALID"> VALID </Link>
       <All title="Name:" titleEm = "Email:"  titlePass="Password:" titleLoc ="Location:" />

       
       <Routes>
         <Route path="/" element={<All />} />
         <Route path="/Other.js" element={<New />} />
       </Routes>
    </div>


//     return (
      
//       <div id="all">
//           {/* <SearchBar title="GUERIN IS IN PROPS"/>
//           <Neweprt title="It works nigga"/> */}
//           <nav className="Navtion">
//             <Link to="/" className="nav-item"> Home </Link>
//             <Link to="/About.js" className="nav-item"> About </Link>
//           </nav>

// {/* to install 'RouterBrowse' type: npm i react-router-dom@6*, this will permit you to be able to link different pages */}
//           <Routes>
//             <Route path="/" element={<Homing />} />
//             <Route path="/About.js" element={<About />} />
//           </Routes>
//        {/* <Count incrementBy = {1} buttonColor ={'yellow'}/>
//        <Count incrementBy = {9} buttonColor ={'brown'}/>
//       </div>,

//       <div>
//         <Sum /> */}
//         <Dating />
//       </div>
//        /* // 'div',
// //     //React.createElement('div', null, 'hello guerin')
// //     {id: 'try', className: "fouth"},
// //     [React.createElement('li',null, 'school'), React.createElement('li', null, 'family'),React.createElement('h1', null, "made it"), React.createElement('li', null, 'ben')] }*/
     
//   )
   )
}

export default App;
