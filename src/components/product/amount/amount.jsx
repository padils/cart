import React from 'react';

let Amount = (props) => {

    return (<div>

        <div>
            <button
            style={{
                width:'40px'
            }}
            className='btn btn-dark'
            disabled={props.amount === 1} 
            onClick={props.backAmount}>-</button>

        <span>{props.amount}</span>

            <button
             style={{
                width:'40px'
            }}
            className='btn btn-dark' 
            onClick={props.nextAmount}>+</button>
        </div>


    </div>
    )
}

export default Amount
