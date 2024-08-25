import { ApiHeaders } from "./api-utils";
const MSG_ERROR_NO_CATEGORY = "Category ID is required";
const MSG_ERROR_NO_USER = "User ID is required";
const MSG_ERROR_NO_RANKING_ITEM = "Ranking Item ID is required";
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
    scores: IScore[],
    categoryId: number
  ): Promise<IScore[] | null> {
    if (!categoryId) {
      console.error(MSG_ERROR_NO_CATEGORY);
      return null;
    }
    if (!validateScores(scores)) {
      return null;
    }
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

const validateScores = (scores: IScore[]): boolean => {
  scores.some((score: IScore) => {
    if (!validateScore(score)) {
      console.log("failed");
      return false;
    }
  });
  return true;
};
const validateScore = (score: IScore): boolean => {
  if (!score.scoreValue) {
    console.error(MSG_ERROR_NO_NAME);
    return false;
  }
  if (!score.rankingItemId) {
    console.error(MSG_ERROR_NO_RANKING_ITEM);
    return false;
  }
  if (!score.userAccountId) {
    console.error(MSG_ERROR_NO_USER);
    return false;
  }
  return true;
};

export interface IScore {
  categoryId?: number;
  rankingItemId: number;
  scoreValue: number;
  userAccountId: number;
}
