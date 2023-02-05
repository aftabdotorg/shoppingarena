import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchAll } from '../api';
import SingleProduct from './SingleProduct';

const Container = styled.div`
  padding: 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  /* justify-content: space-between; */
`;

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll().then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center", padding:"1rem"}} >Products Arena</h1>
      <Container>
        {data.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
