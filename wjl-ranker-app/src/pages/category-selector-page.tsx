import React, { useEffect, useState } from "react";
import { CategeoryApi, ICategory } from "../api/category-api";
import { NavLink } from "react-router-dom";

function CategorySelectorPage() {
  const [state, setState] = useState<ICategorySelectorPageState>({
    categoryList: [],
  });

  useEffect(() => {
    async function fetchAllCategories() {
      const categoryList: ICategory[] = await CategeoryApi.getAllCategories();
      setState({ categoryList });
    }
    fetchAllCategories();
  }, []);
  const categoryButtons = (): JSX.Element[] => {
    // use constants later
    return state.categoryList.map((category: ICategory) => {
      return (
        <div key={category.id} className="category-buttons btn m-10">
          <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
        </div>
      );
    });
  };
  return (
    <div>
      <div>{categoryButtons()}</div>
    </div>
  );
}

interface ICategorySelectorPageState {
  readonly categoryList: ICategory[];
}

export default CategorySelectorPage;
