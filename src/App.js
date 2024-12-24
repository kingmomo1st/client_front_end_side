import AllCharacters from "./Components1/AllCharacters";
import CreateOneCharacter from "./Components1/CreateOneCharacter"
import {Routes, Route , Link} from 'react-router-dom'
import OneCharacter from "./Components1/OneCharacter";

function App() {
  return (

    <div>

      <h1> See what year each hero debuted ! </h1>

      <ul>

        <li> <Link to ="/"> Home </Link> </li>
        <li> <Link to="/mcu"> All debuts </Link></li>
        <li> <Link to ="/create"> Create a Character </Link></li>



      </ul>

      <Routes>
        <Route path="/mcu" element= {<AllCharacters/>} />
        <Route path="/create" element={<CreateOneCharacter/>} />
        <Route path="/" element={<h3> Click "All debuts" to see more</h3>} />
        <Route path="/mcu/:name" element={< OneCharacter/>} />

      </Routes>

    </div>
  )

   
}

export default App;
