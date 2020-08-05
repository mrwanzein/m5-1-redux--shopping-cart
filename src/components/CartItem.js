import React from 'react';
import styled from 'styled-components';

import UnstyledButton from './UnstyledButton';

const CartItem = () => {
    return(
        <Wrapper>
            <Top>
                <span style={{color: "white", fontSize: "1.7em"}}>Hello World</span>
                <DeleteBtn>X</DeleteBtn>
            </Top>
            <Bottom>
                <span style={{color: "lightgray", fontSize: "1.2em"}}>Quantity: </span><Quantity>1</Quantity>
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

const Quantity = styled.div`
    display: inline-block;
    padding: 5px 10px;
    background-color: white;
    border: 2px solid lightgray;
    font-size: 1.2em;
    font-weight: bold;
`;

const DeleteBtn = styled(UnstyledButton)`
    color: white;
    font-size: 1.5em;
`;

export default CartItem;