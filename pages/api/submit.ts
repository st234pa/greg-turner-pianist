import { NextApiRequest, NextApiResponse } from 'next';

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

type ResponseData = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const submitRequest = JSON.parse(req.body) as SubmitRequestBody;
  const currentDate = new Date();
  return new Promise<void>((resolve, _) => {
    fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/gregturnerpianis-1719090524884/assessments?key=${process.env.RECAPTCHA_KEY}`,
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
        console.log(sheetsResponse);
        if (!sheetsResponse.ok) {
          throw new Error();
        }
        return sheetsResponse;
      })
      .then(() => {
        res.status(200).end();
        resolve();
      })
      .catch((e) => {
        res.status(400).end();
        resolve();
      });
  });
}

function getDate(currentDate: Date) {
  return `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
}

function getTime(currentDate: Date) {
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
