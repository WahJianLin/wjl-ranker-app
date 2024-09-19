import { useEffect, useState } from "react";
import { CategeoryApi, ICategory } from "../api/category-api";

function CategoryPage() {
  const [state, setState] = useState<ICategoryPageState>({
    categoryList: [],
  });

  useEffect(() => {
    async function fetchAllCategories() {
      const categoryList: ICategory[] = await CategeoryApi.getAllCategories();
      setState({ categoryList });
    }
    fetchAllCategories();
  }, []);
  const categoryButtons = (): JSX.Element => {
    state.categoryList.map((category: ICategory) => {
      return <div>{category.name}</div>;
    });
    return <div></div>;
  };
  return (
    <div>
      <div>{state.categoryList.toLocaleString()}</div>
    </div>
  );
}

interface ICategoryPageState {
  readonly categoryList: ICategory[];
}

export default CategoryPage;
