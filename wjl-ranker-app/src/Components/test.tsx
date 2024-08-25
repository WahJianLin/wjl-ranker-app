import { IRankingItem, RankingItemApi } from "../api/ranking-item";
import { IScore, ScoreApi } from "../api/score-api";

function test() {
  const rankingItem: IRankingItem = {
    id: 1,
    name: "Test",
    categoryTypeId: 1,
  };

  const scores: IScore[] = [
    { categoryId: 1, rankingItemId: 1, scoreValue: 5, userAccountId: 1 },
    // {categoryId: 2, rankingItemId: 2, scoreValue: 11, userAccountId: 1},
    // {categoryId: 2, rankingItemId: 3, scoreValue: 166, userAccountId: 1},
  ];
  const testEndpoint = async () => {
    await ScoreApi.getAllScores();
    const a = await ScoreApi.putScores(1, scores);
    console.log(a);
  };

  testEndpoint();
  return <h1>Test</h1>;
}

export default test;
