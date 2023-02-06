import Home from './pages/Home';
import {
  fetchAll,
  fetchElex,
  fetchJewels,
  fetchMens,
  fetchWomens,
} from './api';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredValue, setFilteredValue] = useState('');

  useEffect(() => {
    if (filteredValue === '') {
      fetchAll().then((res) => setData(res));
    } else if (filteredValue === 'jewelery') {
      fetchJewels().then((res) => setData(res));
    } else if (filteredValue === 'electronics') {
      fetchElex().then((res) => setData(res));
    } else if (filteredValue === `men's%20clothing`) {
      fetchMens().then((res) => setData(res));
    } else if (filteredValue === `women's%20clothing`) {
      fetchWomens().then((res) => setData(res));
    } else {
      fetchAll().then((res) => setData(res));
    }
  }, [filteredValue]);

  return (
    <Home
      data={data}
      setSearch={setSearch}
      search={search}
      setFilteredValue={setFilteredValue}
    />
  );
}

export default App;
