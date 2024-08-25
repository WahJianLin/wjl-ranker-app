import { ApiHeaders } from "./api-utils";
const MSG_ERROR_NO_ID = "Score ID is required";
const MSG_ERROR_NO_NAME = "Category Name is required";

export const ScoreApi = {
  async getAllScores(): Promise<IScore[]> {
    const url: string = `http://localhost:8080/api/v1/score`;
    const response: IScore[] = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
  async getScoreByCategoryId(categoryId: number): Promise<IScore[]> {
    const url: string = `http://localhost:8080/api/v1/score/category/${categoryId}`;
    const response: IScore[] = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async putScores(
    categoryId: number,
    scores: IScore[]
  ): Promise<IScore[] | null> {
    // Add in validation
    const url: string = `http://localhost:8080/api/v1/score/category/${categoryId}`;
    const response: IScore[] = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(scores),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
};

export interface IScore {
  categoryId: number;
  rankingItemId: number;
  scoreValue: number;
  userAccountId: number;
}
