import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

let   Amount =(props) =>{





    return(<div>

        <div>
       
            <Button className='btn btn-dark' onClick={props.nextAmount}>+</Button>

                {props.amount}

            <Button className='btn btn-dark' disabled={props.amount===1} onClick={props.backAmount}>-</Button>
        </div>

      
    </div>
    )
}

export default Amount