import { CategeoryAPI, ICategory } from "../api/category-api";

function test() {
  const category: ICategory = {
    name: "test",
    description: "test",
  };

  const category2: ICategory = {
    id: 1,
    name: "test",
    description: "test",
  };
  const testEndpoint = async () => {
    const a = await CategeoryAPI.putCategory(category2);
    console.log(a);
  };

  testEndpoint();
  return <h1>Test</h1>;
}

export default test;
