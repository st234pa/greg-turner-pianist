export const runtime = 'edge';

import type { NextRequest } from 'next/server';

type SubmitRequestBody = {
  token: string;
  name: string;
  email: string;
  zip: string;
  availability: string;
};

type RecaptchaResponse = {
  valid: boolean;
  riskAnalysis: {
    score: number;
  };
};

export default async function handler(req: NextRequest) {
  const submitRequest = (await req.json()) as SubmitRequestBody;
  const currentDate = new Date();
  return fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/gregturnerpianis-1719090524884/assessments?key=`,
    {
      method: 'POST',
      body: JSON.stringify({
        event: {
          token: submitRequest.token,
          siteKey: '6LcClgQqAAAAACAEkhusFmItV5nv66CPXVXGncqg',
        },
      }),
    }
  )
    .then((recaptchaResponse) => {
      if (!recaptchaResponse.ok) {
        throw new Error();
      } else {
        return recaptchaResponse;
      }
    })
    .then((recaptchaResponse) => recaptchaResponse.json())
    .then((recaptchaResponse) => recaptchaResponse as RecaptchaResponse)
    .then((recaptchaResponse) => {
      console.log(recaptchaResponse);
      if (
        recaptchaResponse.valid ||
        recaptchaResponse.riskAnalysis.score > 0.5
      ) {
        return fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/1OqJd30zaq04VIEfeGyrbDIVCRUUttsjBJZOTfRXZtek/values/'Signups'!A1:F1:append?valueInputOption=USER_ENTERED`,
          {
            method: 'POST',
            body: JSON.stringify({
              range: `'Signups'!A1:F1`,
              majorDimension: 'ROWS',
              values: [
                [
                  getDate(currentDate),
                  getTime(currentDate),
                  submitRequest.name,
                  submitRequest.email,
                  submitRequest.zip,
                  submitRequest.availability,
                ],
              ],
            }),
          }
        );
      } else {
        throw new Error();
      }
    })
    .then((sheetsResponse) => {
      //   if (!sheetsResponse.ok) {
      //     throw new Error();
      //   }
      return sheetsResponse;
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((response) => {
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      });
    })
    .catch((e) => {
      console.log('error: ', e);
      return new Response(JSON.stringify({}), {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      });
    });
}

function getDate(currentDate: Date) {
  return `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
}

function getTime(currentDate: Date) {
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
