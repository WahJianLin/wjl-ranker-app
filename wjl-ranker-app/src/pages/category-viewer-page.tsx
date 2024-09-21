import { useParams } from "react-router-dom";
import { CategeoryApi, ICategory } from "../api/category-api";
import { useEffect, useState } from "react";

function CategoryViewerPage() {
  const [state, setState] = useState<ICategoryViewerPageState>({
    category: {} as ICategory,
  })
  const { id } = useParams();

  useEffect(() => {
    async function fetchCategoryDetail() {
      const categoryDetail: ICategory = await CategeoryApi.getCategoryById(
        parseInt(id!, 10)
      );
      setState({ category: categoryDetail });
    }
    fetchCategoryDetail();
  }, []);
  return (
    <div>
      <div>{state.category.id}</div>
      <div>{state.category.name}</div>
      <div>{state.category.description}</div>
    </div>
  );
}

interface ICategoryViewerPageState {
  readonly category: ICategory;
}

export default CategoryViewerPage;
