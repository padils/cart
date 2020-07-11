import React, { useState } from 'react';
import Amount from './amount/amount';
import { connect } from 'react-redux';
import { setProdName, setAmount, deleteI } from './../../redux/AddProduct_reducer';
import cart from '../../img/cart.png'
import bottle from '../../img/bottle.png'
import fish from '../../img/fish.png'
import { Col, Row, Image } from 'react-bootstrap';
import List from './List';
import style from './addProd.module.css'


let AddProd = (props) => {


    const addToList = () => {
        props.setProdName({ name, price, amount, img, id })
        editName('')
        editPrice('')
        editAmount(1)
        editImg(cart)
        setId(i => ++i)
    }

    const nextAmount = () => {
        editAmount(i => i + 1)
    }
    const backAmount = () => {
        editAmount(i => i - 1)
    }
    const Info = (bool, id) => {
        setInfoItem(bool)
        setNameInfoItem(id)

    }



    let count = props.Items.map(i => i.amount * i.price)
    count = count.reduce((sum, current) =>  sum + current , 0)



    let [id, setId] = useState(0);
    let [name, editName] = useState();
    let [price, editPrice] = useState('');
    let [amount, editAmount] = useState(1);
    let [img, editImg] = useState(cart);
    let [editMode, setEditMode] = useState(false);
    let [infoItem, setInfoItem] = useState(false);
    let [nameInfoItem, setNameInfoItem] = useState();
   


    return (<div className={'container'}>

        <div className='row' >

            <div className={'col'}>
                <div  align='center'>
                   <strong > add product to your cart  list</strong>
                 </div>


                <AddProdForm
                    editName={editName}
                    editPrice={editPrice} 
                    name={name} 
                    price={price} />



                <div className={style.div}>
                    <Amount 
                        amount={amount} 
                        nextAmount={nextAmount}
                        backAmount={backAmount} />

                    <div className={style.img}>

                        <Image onClick={() => setEditMode(true) } src={img} roundedCircle />

                    </div>
                    {editMode && <div className={`${style.img} ${style.all}  rounded`}  >


                        <Image roundedCircle onClick={() => {
                            setEditMode(false)
                            editImg(fish)
                        }} src={fish} />

                        <Image roundedCircle onClick={() => {
                            setEditMode(false)
                            editImg(bottle)
                        }} src={bottle} />

                        <Image roundedCircle onClick={() => {
                            setEditMode(false)
                            editImg(cart)
                        }} src={cart} />

                    </div>}

                    <div >
                        <button className='btn btn-dark'
                            disabled={!(name && price)}
                            onClick={addToList}>add to list</button></div>
               </div>
            </div>


            <div className='col'>
                <List
                    Items={props.Items}
                    setAmount={setAmount}
                    deleteI={deleteI}
                    Info={Info}
                    nameInfoItem={nameInfoItem}
                    infoItem={infoItem}
                    deleteI={props.deleteI}
                    setAmount={props.setAmount}
                    count={count}
                />
            </div>
        </div>
    </div>

    )
}


let AddProdForm = (props) => {

    let setPrice = e => !isNaN(+e)&&props.editPrice(e)

    return (<div  className={style.div}>

       
            <div><input
                onChange={e => props.editName(e.target.value)} 
                placeholder='product name'
                value={props.name} /> 
            </div>

            <div><input 
                onChange={e => setPrice(e.target.value) } 
                placeholder='product price'
                value={props.price} /> 
            </div>


        
    </div>


    )
}







let mapStateToProps = (state) => {


    return {
        Items: state.AddProduct.Items
    }

};

export default connect(mapStateToProps, { setProdName, setAmount, deleteI })(AddProd)