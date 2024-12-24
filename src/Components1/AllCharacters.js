import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AllCharacters () {

    const [serverData, setServerData]= useState ([]);

    useEffect(()=>{

      async function getAllCharacters (){
        console.log(process.env)
        const response= await axios(`${process.env.REACT_APP_API_URL}/allCharacters`)
        setServerData(response.data);

      }

        getAllCharacters();
    },[])

  return (
    <div className="App">
     
     <ul>
      {serverData.map((debut)=> (
        <li key= {debut._id}> 
        <Link to={`/mcu/${debut.name}`}> {debut.name}</Link></li>
      ))}


     </ul>


    </div>
  );


}





export default AllCharacters