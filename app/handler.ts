import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const sample = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const method = event.httpMethod;
  let param;
  if (method === "GET") {
    param = event.queryStringParameters
  } else {
    param = event.body
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        param,
      },
      null,
      2
    ),
  };
};
