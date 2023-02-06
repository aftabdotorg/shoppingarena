import React from 'react';
import styled from 'styled-components';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  VisibilityOutlined,
} from '@material-ui/icons';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: 70%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Desc = styled.div`
  width: 300px;
  margin: auto;
  text-align: left;
`;

const MainC = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding-bottom: 1rem;
`;

const P = styled.p`
  text-overflow: ellipsis;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
`;

const SingleProduct = ({ item }) => {
  return (
    <MainC>
      <Container>
        <Circle />
        <Image src={item.image} />

        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <VisibilityOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <Desc>
        <P>
          <b> Product: </b> {item.title}
        </P>
        <P>
          <b> Price:</b> $ {item.price}
        </P>
      </Desc>
    </MainC>
  );
};

export default SingleProduct;
