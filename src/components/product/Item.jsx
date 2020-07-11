import React from 'react';
import Amount from './amount/amount';
import DeleteIcon from '../../parts/deleteIcon';
import InfoIcon from '../../parts/infoIcon';
import { Image } from 'react-bootstrap';
import style from './Item.module.css'



let Item = (props) => {


    const nextAmount = () => {
        props.setAmount(props.amount + 1, props.id)
    }
    const backAmount = () => {
        props.setAmount(props.amount - 1, props.id)
    }
    const deleteItem = () => {
        props.deleteI(props.id)

    }


    return (<div className={`container ${style.div} rounded`} >
        <div className='row'>

            <div className={'col'}>
                name: {props.name}
                <div>price: {props.price}</div>
            </div>

            <div >


                <div className={'col ' + style.total}>
                    <Image src={props.img} roundedCircle />
                </div>

                <div className={'col'}>

                    <Amount amount={props.amount} nextAmount={nextAmount} backAmount={backAmount} />

                </div>

            </div>
            <div className={'col ' + style.icon}>

                <DeleteIcon deleteItem={deleteItem}  />


                <InfoIcon Info={props.Info}  id={props.id} />


            </div>
        </div>



        <div className={'col ' + style.total}>total {props.price ? props.price * props.amount : 0} $</div>


    </div>)
}








export default Item