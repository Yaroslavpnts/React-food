import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { theMealApi } from '../api';

import { Preloader } from '../components/utilities/Preloader';

import { MealList } from '../components/Meals/MealList';

export const Category = () => {
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await theMealApi.getFilteredCategory(name);
      setMeals(data.meals);
    };

    getData();
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};
