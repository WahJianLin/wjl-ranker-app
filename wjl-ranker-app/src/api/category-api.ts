import { ApiHeaders } from "./api-utils";
const MSG_ERROR_NO_ID = "Category ID is required";
const MSG_ERROR_NO_NAME = "Category Name is required";

export const CategeoryAPI = {
  async getAllCategories(): Promise<ICategory[]> {
    const url: string = `http://localhost:8080/api/v1/category`;
    const response: ICategory[] = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
  async getCategoryById(categoryId: number): Promise<ICategory> {
    const url: string = `http://localhost:8080/api/v1/category/${categoryId}`;
    const response: ICategory = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async postCategory(category: ICategory): Promise<ICategory | null> {
    if (!category.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    const url: string = `http://localhost:8080/api/v1/category`;
    const response: ICategory = await fetch(url, {
      method: "POST",
      body: JSON.stringify(category),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async putCategory(category: ICategory): Promise<ICategory | null> {
    if (!category.id) {
      console.error(MSG_ERROR_NO_ID);
      return null;
    }
    if (!category.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    const url: string = `http://localhost:8080/api/v1/category`;
    const response: ICategory = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(category),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
};

export interface ICategory {
  id?: number;
  name: string;
  description: string;
}
