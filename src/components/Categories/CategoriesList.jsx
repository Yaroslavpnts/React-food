import { CategoryItem } from './CategoryItem';

export const CategoriesList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map(el => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};
