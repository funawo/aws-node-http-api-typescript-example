import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

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
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST"
    },
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
