import React from 'react';
import styled from 'styled-components';
import { tablet, mobile } from '../responsive.js';

import SingleProduct from './SingleProduct';

const Container = styled.div`
  padding: 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  /* justify-content: space-between; */

  ${tablet({ gridTemplateColumns: 'repeat(2, 1fr)' })}
  ${mobile({ gridTemplateColumns: 'repeat(1, 1fr)' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  outline: none;
  font-size: 17px;
  color: black;
  font-weight: bold;
  ${mobile({ fontSize: '12px', padding: '5px' })}
  ${tablet({ fontSize: '12px', padding: '5px' })}
`;

const Option = styled.option`
  padding: 10px;
  font-weight: 600;
  ${mobile({ padding: '5px' })}
  ${tablet({ padding: '5px' })}
`;

const Products = ({ data, search, setFilteredValue }) => {
  const handleFilterChange = (e) => {
    // console.log(e.target.value);
    setFilteredValue(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Products Arena</h1>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select onChange={handleFilterChange}>
            <Option defaultValue>Categories</Option>
            <Option value="all">All</Option>
            <Option value="jewelery">Jewelery</Option>
            <Option value="electronics">Electronics</Option>
            <Option value="men's%20clothing">Men's Wear</Option>
            <Option value="women's%20clothing">Women's Fashion</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Container>
        {data
          .filter((value) => {
            if (search === '') {
              return value;
            } else if (
              value.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
            return false; // return false if none condition matches
          })
          .map((item) => (
            <SingleProduct item={item} key={item.id} />
          ))}
      </Container>
    </div>
  );
};

export default Products;
