import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import Cart from './Cart';

const App = () => {
  return (
    <BigWrapper>
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>

        <GlobalStyles />
      </Wrapper>

      <CartWrapper>
        <Cart />
      </CartWrapper>
    </BigWrapper>
  );
};

const BigWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  position: relative;
  width: 75%;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  flex: 1;
`;

export default App;
