import React from 'react';
import { Image } from 'react-bootstrap';
import Item from './Item';
import style from './Item.module.css'

let List = (props) => {

    let listElem = props.items.map((l) => <Item
        key={l.id}
        name={l.name}
        price={l.price}
        img={l.img}
        amount={l.amount}
        setAmount={props.setAmount}
        deleteItem={props.deleteItem}
        info={props.info}
        id={l.id}
    />)


    return (<div>

        {props.infoItem ?
            <InfoItem
                info={props.info}
                items={props.items}
                nameInfoItem={props.nameInfoItem} />

            : <div>

                <div align='center'><strong > product list </strong></div>

                <div>{listElem}</div>

                {listElem.length ?
                    <div>total count: {props.count} $</div> : ''}

            </div>}
    </div>


    )
}


const InfoItem = (props) => {
    let infoItem = props.items.filter(i => i.id === props.nameInfoItem);

    return (
        <div className={`container ${style.div} rounded`}>

            {infoItem.map(i => {
                return (<div key={i.id}>
                    <div>{i.name}</div>
                    <Image src={i.img} roundedCircle />
                    <div>count: {i.amount}</div>
                    <div>Price: {i.price}</div>
                    <div>total: {i.price ? i.price * i.amount : 0} $</div>
                    <button 
                    className="btn btn-dark" 
                    onClick={() => { props.info(false, '') }}>Back to list</button>
                </div>)
            })}
        </div>
    )
}

export default List
