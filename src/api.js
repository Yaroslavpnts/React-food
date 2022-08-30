import { API_URL } from './config';

// export const getMealById = async mealId => {
//   const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

//   return await response.json();
// };

// export const getAllCategories = async () => {
//   const response = await fetch(API_URL + 'categories.php');

//   return await response.json();
// };

let responseClone;

export const theMealApi = {
  async getMealById(mealId) {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

    return await response.json();
  },

  async getAllCategories() {
    const response = await fetch(API_URL + 'categories.php');
    // responseClone = response.clone();
    // console.log(response);
    return response.json();
  },

  async getFilteredCategory(catName) {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);

    return await response.json();
  },
};
