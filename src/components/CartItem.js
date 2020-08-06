import React from 'react';
import styled from 'styled-components';

import UnstyledButton from './UnstyledButton';

import { useDispatch } from 'react-redux';
import {deleteItem, updateQuantity} from '../action';

const CartItem = ({stickerName, stickerQuantity, id}) => {
    const dispatch = useDispatch();
    
    const handleNumInput = (ev) => {
        if(/^\d+$/.test(Number(ev.target.value))) {
            dispatch(updateQuantity(id, Number(ev.target.value)));
        } else {
            return null;
        }
    }

    return(
        <Wrapper>
            <Top>
                <span style={{color: "white", fontSize: "1.7em"}}>{stickerName}</span>
                <DeleteBtn onClick={() => dispatch(deleteItem(id))}>X</DeleteBtn>
            </Top>
            <Bottom>
                <span style={{color: "lightgray", fontSize: "1.2em"}}>Quantity: </span>
                <Quantity value={stickerQuantity} onChange={handleNumInput}/>
            </Bottom>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: dashed 2px rgba(191, 191, 191, 0.4);
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

const Top = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

const Bottom = styled.div`
    padding: 15px;
    background-color: rgb(76, 34, 89);
`;

const Quantity = styled.input`
    display: inline-block;
    padding: 5px 10px;
    background-color: white;
    border: 2px solid lightgray;
    font-size: 1.2em;
    font-weight: bold;
    width: 20%;
`;

const DeleteBtn = styled(UnstyledButton)`
    color: white;
    font-size: 1.5em;
`;

export default CartItem;