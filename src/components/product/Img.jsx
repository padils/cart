import React from 'react';
import { Image } from 'react-bootstrap';


let Img = (props) => {

    return (
        <Image roundedCircle 
        onClick={() => {
            props.setEditMode(false);
            props.editImg(props.img);
        }}
         src={props.img} />
    )
}

export default Img