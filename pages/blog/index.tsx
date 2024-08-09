import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import { EntrySkeletonType } from 'contentful';
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section>
        <Blog />
      </Section>
    </DefaultLayout>
  );
}

function Blog() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { postBlurbs, status } = usePostBlurbs(loaderRef);

  return (
    <div>
      <div></div>
      <div ref={loaderRef}></div>
    </div>
  );
}

function usePostBlurbs(loaderRef: RefObject<HTMLDivElement>) {
  const [postBlurbs, setPostBlurbs] = useState<EntrySkeletonType[]>([]);
  const [status, setStatus] = useState<string | undefined>(undefined);

  const [skip, setSkip] = useState(0);
  const limit = 9;
  const [total, setTotal] = useState(Infinity);

  const abortController = useRef(new AbortController());

  useEffect(() => {
    const abortSignal = abortController.current;
    return () => abortSignal.abort();
  }, []);

  useEffect(() => {
    if (postBlurbs.length < total && status === 'loading') {
      abortController.current.abort();
      abortController.current = new AbortController();
      const url =
        skip > 0 || total === Infinity
          ? `/api/posts?limit=${limit}`
          : `/api/posts?skip=${skip}&limit=${Math.min(limit, total - postBlurbs.length)}`;
      fetch(url, {
        signal: abortController.current.signal,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error();
        })
        .then((response) => {
          setStatus('success');
          console.log(response);
          setPostBlurbs((prev) => [...prev, ...response.items]);
          setTotal(response.total);
          setSkip(skip + limit);
        })
        .catch(() => {
          setStatus('error');
        });
    }
  }, [postBlurbs.length, skip, status, total]);

  useEffect(() => {
    const loader = loaderRef.current;
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setStatus('loading');
      }
    });

    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [loaderRef]);

  return { postBlurbs, status };
}
