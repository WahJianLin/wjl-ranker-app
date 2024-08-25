import { ApiHeaders } from "./api-utils";
const MSG_ERROR_NO_ID = "Ranking Item ID is required";
const MSG_ERROR_NO_NAME = "Ranking Item Name is required";

export const RankingItemApi = {
  async getAllRankingItems(): Promise<IRankingItem[]> {
    const url: string = `http://localhost:8080/api/v1/ranking-item`;
    const response: IRankingItem[] = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
  async getRankingItemById(rankingItemId: number): Promise<IRankingItem> {
    const url: string = `http://localhost:8080/api/v1/ranking-item/${rankingItemId}`;
    const response: IRankingItem = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async postRankingItem(
    rankingItem: IRankingItem
  ): Promise<IRankingItem | null> {
    if (!rankingItem.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    if (!rankingItem.categoryTypeId) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }

    const url: string = `http://localhost:8080/api/v1/ranking-item`;
    const response: IRankingItem = await fetch(url, {
      method: "POST",
      body: JSON.stringify(rankingItem),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async putRankingItem(rankingItem: IRankingItem): Promise<IRankingItem | null> {
    if (!rankingItem.id) {
      console.error(MSG_ERROR_NO_ID);
      return null;
    }
    if (!rankingItem.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    if (!rankingItem.categoryTypeId) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }

    const url: string = `http://localhost:8080/api/v1/ranking-item`;
    const response: IRankingItem = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(rankingItem),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
};

export interface IRankingItem {
  id?: number;
  name: string;
  categoryTypeId: number;
}
