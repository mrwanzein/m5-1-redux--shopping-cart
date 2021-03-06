import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import CartItem from './CartItem';
import Button from './Button';

import {getStoreItemArray} from '../reducers/';


const Cart = () => {
    const state = useSelector(state => {
        return getStoreItemArray(state);
});

const getTotal = () => {
    let arr = Object.values(state);
    let total = 0;
    
    if(arr.length) {
        arr.forEach(sticker => {
            let sum = sticker.price * sticker.quantity;
            total += sum;
        })

        return total / 100;
    } else {
        return total;
    }
}

    return(
        <CartWrapper>
            <CartInfo>
                <Header>
                    <span style={{fontSize: "2em", color: "white", fontWeight: "bold"}}>Your Cart</span>
                    <span style={{color: "lightgray"}}>{state.length ? `${state.length} Items` : 'Please select a sticker'}</span>
                </Header>
                <div>
                    {
                        state.map(sticker => {
                            return <CartItem key={sticker.id} stickerName={sticker.title} stickerQuantity={sticker.quantity} id={sticker.id}/>
                        })
                    }
                </div>
            
                <Total>
                    <div>
                        <span style={{fontSize: "1.6em", color: "white"}}>Total: ${getTotal()}</span>
                    </div>
                    
                    <div>
                        <Button style={{padding: '10px 50px'}}>Purchase</Button>
                    </div>
                </Total>
            </CartInfo>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    background-color: rgb(100, 46, 117);
    height: 100%;
    overflow: auto;
`;

const CartInfo = styled.div`
    padding: 35px 15px;
    height: 75%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    margin-bottom: 20px;
`;

const Total = styled.div`
    margin: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Cart;