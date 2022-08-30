import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Preloader } from '../components/utilities/Preloader';

import { theMealApi } from '../api';

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getRecipe = async () => {
      const data = await theMealApi.getMealById(id);
      setRecipe(data.meals[0]);
    };

    getRecipe();
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>tMeasure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map(key => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube && (
            <div className="row">
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
};
