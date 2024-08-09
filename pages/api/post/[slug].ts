import { createClient } from 'contentful';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return new Promise<void>((resolve) => {
    client
      .getEntries({
        content_type: 'post',
        limit: 1,
        'fields.slug': slug,
      })
      .then((entryCollection) => {
        if (entryCollection.errors && entryCollection.errors.length > 0) {
          throw new Error();
        }
        if (entryCollection.items.length === 0) {
          res.status(404).end();
        }
        res.status(200).json(entryCollection.items[0]);
      })
      .catch(() => {
        res.status(400).end();
      })
      .finally(() => {
        resolve();
      });
  });
}
