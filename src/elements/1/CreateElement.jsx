import React, { useState } from 'react';

export default function CreateElement(props){
    const [OldB, NewB] = useState();
    const [OldA, NewA] = useState();
    const [OldURL, NewURL] = useState();

    const changeB = (event) => {
        NewB(event.target.value);
    };
    const changeA = (event) => {
        NewA(event.target.value);
    };
    const changeURL = (event) => {
        NewURL(event.target.value);
    };
    const sub = (event) => {
        event.preventDefault();

        const dane ={
            band: OldB,
            album: OldA,
            url: OldURL
        }

        props.onSaveExpenseData(dane);
        NewB('');
        NewA('');
        NewURL('');
    };


    return(
        <div>
            <form id="Cform" onSubmit={sub}>
                <h1>Create Element</h1>
                <input type="text" placeholder="Band Name" onChange={changeB}/>
                <input type="text" placeholder="Album Name" onChange={changeA}/>
                <input type="url" name="URL" placeholder="URL" onInput={changeURL}/>
                <input type="submit"/>
            </form>
        </div>
    )
}