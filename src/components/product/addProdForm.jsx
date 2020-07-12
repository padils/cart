import React from 'react';
import style from './addProd.module.css'

let AddProdForm = (props) => {

    let setPrice = e => !isNaN(+e) && props.editPrice(e)

    return (<div className={style.div}>


        <div><input
            onChange={e => props.editName(e.target.value)}
            placeholder='product name'
            value={props.name} />
        </div>

        <div><input
            onChange={e => setPrice(e.target.value)}
            placeholder='product price'
            value={props.price} />
        </div>
    </div>


    )
}
export default AddProdForm