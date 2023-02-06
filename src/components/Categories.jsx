import React from 'react';
import styled from 'styled-components';
// import { fetchAll } from '../api';
import CategoryItem from './CategoryItem';
import { CatThumbs } from '../utils';
import { tablet, mobile } from '../responsive.js';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1rem;
  padding: 20px;
  justify-content: center;
  margin: auto;

  ${tablet({ gridTemplateColumns: 'repeat(1, 1fr)', padding: '0px' })}
  ${mobile({ gridTemplateColumns: 'repeat(1, 1fr)', padding: '0px' })}
`;

const Categories = () => {
  //   const [data, setData] = useState([]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Categories</h1>
      <Container>
        {CatThumbs.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
