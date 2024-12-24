import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function OneCharacter (){
    const {name}= useParams();
    const navigate= useNavigate();
    const [isEditingChar, setIsEditingChar]= useState(false); // to update characters
    const[character, setCharacter]= useState({
        name:"",
        debutFilm:"",
        debutYear:"",
    })


async function handleDelete(){
    await axios.delete(`${process.env.REACT_APP_API_URL}/deleteCharacter/${name}`)
    navigate("/mcu")

}

async function handleSave(){
    await axios.put(`${process.env.REACT_APP_API_URL}/updateCharacter/${character._id}`, 
    character
    )
    setIsEditingChar(!isEditingChar)
}

function updateCharacter (event){
    const {name,value}= event.target;
    setCharacter((previousState)=>({
        ...previousState,
        [name]: value,

    }))



}

    useEffect(()=>{
        async function getOneCharacter(){
            const response= await axios(`${process.env.REACT_APP_API_URL}/OneCharacter/${name}`);
            setCharacter(response.data);

        }
        getOneCharacter();

    },[])


    return (
        <div>
            <div>
            {isEditingChar
            ?<input type="text" name="name" value={character.name} onChange={updateCharacter} />
            : <h1> {character.name}</h1> }
            </div>
            
            <div>
            {isEditingChar
            ?<input type="text" name="debutFilm" value={character.debutFilm} onChange={updateCharacter} />
            :  <h5> Debuted in : {character.debutFilm}</h5> }
            </div>

            <div>
            {isEditingChar
            ? <input type="text" name="debutYear" value={character.debutYear} onChange={updateCharacter} />
            : <h5> Released in: {character.debutYear}</h5> }
            </div>
           

            <button onClick={handleSave}>
              {isEditingChar ?"Save changes": "Edit this character"}  </button>
              <div>
            <button onClick={handleDelete}> Delete </button>
            </div>
        </div>

    )


}


export default OneCharacter;