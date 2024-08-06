import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import { EntrySkeletonType } from 'contentful';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  return (
    <DefaultLayout>
      <Section>
        <BlogPost />
      </Section>
    </DefaultLayout>
  );
}

function BlogPost() {
  const router = useRouter();
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [postData, setPostData] = useState<EntrySkeletonType | undefined>(
    undefined
  );
  const abortController = useRef(new AbortController());

  useEffect(() => {
    const abortSignal = abortController.current;
    return () => abortSignal.abort();
  }, []);

  useEffect(() => {
    if (router.query.slug) {
      fetch(`/api/post/${router.query.slug}`, {
        signal: abortController.current.signal,
      })
        .then((response) => {
          setStatus(response.status);
          if (response.ok) {
            return response.json();
          }
          throw new Error();
        })
        .then((response) => {
          console.log(response);
          setPostData(response);
        })
        .catch(() => {});
    }
  }, [router.query.slug]);

  if (status === undefined) {
    return <>Loading</>;
  }

  if (status === 404) {
    return <>Not found</>;
  }

  if (status === 400 || postData === undefined) {
    return <>Something went wrong</>;
  }

  return <>{postData.fields.title}</>;
}
