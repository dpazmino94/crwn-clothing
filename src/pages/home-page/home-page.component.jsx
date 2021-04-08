import React from "react";
import { Directory } from "../../components/directory/directory.component";

export const HomePage = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <Directory />
            <button onClick={() => {props.history.push('/')}}>Home</button>
            <button onClick={() => {props.history.push('/shop/hats') }}>Hat</button>
        </div>
    )
}