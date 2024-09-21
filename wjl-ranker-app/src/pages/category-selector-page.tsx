import { useEffect, useState } from "react";
import { CategeoryApi, ICategory } from "../api/category-api";
import { NavLink } from "react-router-dom";
import { NAVBAR_LINKS } from "../supplimentary/constants";

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
    return state.categoryList.map((category: ICategory) => {
      return (
        <div key={category.id} className="category-buttons btn m-10">
          <NavLink to={`/${NAVBAR_LINKS.CATEGORY}/${category.id}`}>
            {category.name}
          </NavLink>
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
