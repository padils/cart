import React, { useState, useReducer } from 'react';
import Amount from './amount/amount';
import cart from '../../img/cart.png'
import bottle from '../../img/bottle.png'
import fish from '../../img/fish.png'
import { Image } from 'react-bootstrap';
import List from './List';
import style from './addProd.module.css'
import Img from './Img';
import AddProdForm from './addProdForm';
import reducer from '../../parts/reducer';


let AddProd = (props) => {

    const [state, dispatch] = useReducer(reducer, { items: [] });

    let [id, setId] = useState(0);
    let [name, editName] = useState();
    let [price, editPrice] = useState('');
    let [amount, editAmount] = useState(1);
    let [img, editImg] = useState(cart);
    let [editMode, setEditMode] = useState(false);
    let [infoItem, setInfoItem] = useState(false);
    let [nameInfoItem, setNameInfoItem] = useState();

    let setProdName = (items) => dispatch({ type: `ITEM`, items });
    let setAmount = (amount, id) => dispatch({ type: `AMOUNT`, amount, id });
    let deleteItem = (id) => dispatch({ type: `DELETE`, id });

    const addToList = () => {
        setProdName({ name, price, amount, img, id });
        editName('');
        editPrice('');
        editAmount(1);
        editImg(cart);
        setId(i => ++i);
    }

    const nextAmount = () => {
        editAmount(i => i + 1);
    }
    const backAmount = () => {
        editAmount(i => i - 1);
    }
    const info = (bool, id) => {
        setInfoItem(bool);
        setNameInfoItem(id);

    }

    let count = state.items.map(i => i.amount * i.price);
    count = count.reduce((sum, current) => sum + current, 0);

    return (<div className={'container'}>

        <div className='row' >

            <div className='col'>
                <div align='center'>
                    <strong > add product to your cart  listing</strong>
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
                        <Image onClick={() => setEditMode(true)} src={img} roundedCircle />
                    </div>

                    {editMode && 
                    <div className={`${style.img} ${style.all}  rounded`}  >
                        <Img setEditMode={setEditMode} editImg={editImg} img={fish} />
                        <Img setEditMode={setEditMode} editImg={editImg} img={bottle} />
                        <Img setEditMode={setEditMode} editImg={editImg} img={cart} />
                    </div>}

                    <div >
                        <button className='btn btn-dark'
                            disabled={!(name && price)}
                            onClick={addToList}>add to list</button>
                    </div>
                </div>
            </div>

            <div className='col'>
                <List
                    items={state.items}
                    setAmount={setAmount}
                    deleteItem={deleteItem}
                    info={info}
                    nameInfoItem={nameInfoItem}
                    infoItem={infoItem}
                    count={count}
                />
            </div>
        </div>
    </div>

    )
}

export default AddProd
