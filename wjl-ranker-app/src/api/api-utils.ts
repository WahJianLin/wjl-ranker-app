export const ApiHeaders = {
  basicPostHeader(): HeadersInit {
    return {
      "Content-Type": "application/json; charset=utf-8",
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    };
  },
};
