import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { tablet, mobile } from '../responsive.js';

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${tablet({ height: '55px' })}
  ${mobile({ height: '50px' })}
`;

const Wrappper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet({ padding: '10px 0px' })}
  ${mobile({ padding: '10px 0px' })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${tablet({ display: 'none' })}
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-weight: bold;
  letter-spacing: 2px;
  ${tablet({ width: '70px' })}
  ${mobile({ width: '50px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

  ${tablet({ fontSize: '17px' })}
  ${mobile({ fontSize: '12px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ justfyContent: 'center' })}
  ${mobile({ justfyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({ fontSize: '12px', marginLeft: '20px' })}
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = ({ setSearch }) => {
  return (
    <Container>
      <Wrappper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPPING ARENA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrappper>
    </Container>
  );
};

export default Navbar;
