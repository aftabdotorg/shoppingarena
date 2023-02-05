import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: #880e4f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
`;



const Ads = () => {
  return <Container>Super Deal!! Free Shipping on orders Over ₹ 1500</Container>;
};

export default Ads;
