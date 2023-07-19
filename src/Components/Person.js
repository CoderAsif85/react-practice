import React from "react";

function Person() {
    return (
        <div>
            <h1>i am your friend  </h1>
        </div>
    );
}

export let Names = (props) => {
    return (
        <div>
            <h3>Name: {props.name} and Age: {props.age} years</h3>
        </div>
    );

}


export default Person;