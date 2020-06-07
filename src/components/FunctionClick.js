import React, { Component } from 'react'

 function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked');
    }

        return (
            <div>
                {/* //not a  function call */}
                <button onClick={ clickHandler}>Click</button>
            </div>
        )
}

export default FunctionClick
