import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Preloader } from '../components/utilities/Preloader';
import { CategoriesList } from '../components/Categories/CategoriesList';
import { Search } from '../components/Search';

import { theMealApi } from '../api';

export const Home = () => {
  const [catalog, setCatalog] = useState([]);

  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();

  const navigate = useNavigate();

  const handleSearch = str => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    navigate(pathname + `?search=${str}`);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await theMealApi.getAllCategories();
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter(item =>
              item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    };
    getData();
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoriesList catalog={filteredCatalog} />}
    </>
  );
};
