import React,  { Component, useEffect, useState } from 'react';
import axios from 'axios';

function Index(){

    const [dogs , setDogs] = useState([]);

    useEffect(async () => {

        const result = await axios(
            "http://127.0.0.1:8000/api/dogs"
        );

        setDogs(result.data);
    },[]);

    return (
        <>
        <h1>Index 2 </h1>
            <ul>
            {
                dogs.map(dog => <li key={dog.id}>{dog.name}</li>)
            }
            </ul>
        </>
    );
}

export default Index;
