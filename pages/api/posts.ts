import { createClient, EntryCollection, EntrySkeletonType } from 'contentful';
import { NextApiRequest, NextApiResponse } from 'next';

// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/skip/query-entries/console

type BlogPostsRequestBody = {
  limit: number | undefined;
  skip: number | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestBody = JSON.parse(req.body) as BlogPostsRequestBody;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  client
    .getEntries({
      content_type: 'postcard',
      limit: requestBody.limit,
      skip: requestBody.skip,
    })
    .then((entryCollection: EntryCollection<EntrySkeletonType>) => {
      if (entryCollection.errors && entryCollection.errors.length > 0) {
        throw new Error();
      }
      res.status(200).json(entryCollection);
    })
    .catch(() => {
      res.status(400).end();
    });
}
