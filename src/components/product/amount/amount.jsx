import React from 'react';

let Amount = (props) => {






    return (<div>

        <div>

            <button width='50px' className='btn btn-dark' disabled={props.amount === 1} onClick={props.backAmount}>-</button>

            {props.amount}


            <button className='btn btn-dark' onClick={props.nextAmount}>+</button>
        </div>


    </div>
    )
}

export default Amount