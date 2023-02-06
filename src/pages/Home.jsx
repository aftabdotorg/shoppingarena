import React from 'react';
import Ads from '../components/Ads';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = ({ data,  search, setSearch, setFilteredValue }) => {
  return (
    <div>
      <Ads />
      <Navbar setSearch={setSearch} />
      <Slider />
      <Categories />
      <Products
        data={data}
        search={search}
        setFilteredValue={setFilteredValue}
      />
      <Footer />
    </div>
  );
};

export default Home;
