import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type SubmitRequestBody = {
  token: string;
  name: string;
  email: string;
  zip: string;
  notes: string;
  availability: string;
};

type RecaptchaResponse = {
  valid: boolean;
  riskAnalysis: {
    score: number;
  };
};

type ResponseData = {
  error?: string;
};

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
          throw new Error('recaptcha failure');
        } else {
          return recaptchaResponse;
        }
      })
      .then((recaptchaResponse) => recaptchaResponse.json())
      .then(
        (recaptchaResponseJson) => recaptchaResponseJson as RecaptchaResponse
      )
      .then((recaptchaResponse) => {
        if (
          recaptchaResponse.valid ||
          recaptchaResponse.riskAnalysis.score >= 0.5
        ) {
          const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
          const jwt = new google.auth.JWT(
            process.env.SERVICE_ACCOUNT_EMAIL,
            undefined,
            // we need to replace the escaped newline characters
            // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
            process.env.SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            scopes
          );
          const sheets = google.sheets({ version: 'v4', auth: jwt });
          return sheets.spreadsheets.values.append({
            spreadsheetId: '1OqJd30zaq04VIEfeGyrbDIVCRUUttsjBJZOTfRXZtek',
            valueInputOption: 'USER_ENTERED',
            range: `'Signups'!A1:F1`,
            requestBody: {
              values: [
                [
                  getDate(currentDate),
                  getTime(currentDate),
                  submitRequest.name,
                  submitRequest.email,
                  submitRequest.zip,
                  submitRequest.notes,
                  submitRequest.availability,
                ],
              ],
            },
          });
        } else {
          throw new Error('Invalid recaptcha :(');
        }
      })
      .then(() => {
        res.status(200).end();
        resolve();
      })
      .catch((e: Error) => {
        res.status(400).json({ error: e.message });
        resolve();
      });
  });
}

function getDate(currentDate: Date) {
  return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
}

function getTime(currentDate: Date) {
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
