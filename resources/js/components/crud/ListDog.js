import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


export default props => {

    const [dogs, setDogs] = useState([]);
    const [alt, setalt] = useState(0);


    async function deletePost(idDelete) {
    // const deletePost = (idDelete) => async => {
        await axios.delete('http://127.0.0.1:8000/api/dog/'+idDelete);
        // setDogs(['rodolfo']);
        setalt(1);
    }

    useEffect(async () => {
        const result = await axios(
            "http://127.0.0.1:8000/api/dogs"
        );

        setDogs(result.data);
    }, [alt]);

    return (
       <>
          <table>
                <tbody>
               {
                dogs.map(dog => <tr key={dog.id}>
                <td> {dog.name} </td>
                <td><input type="button" value="deletar" onClick={() => deletePost(dog.id)} /> </td>
                </tr>)
                }
                </tbody>
           </table>
       </>
    )
}
