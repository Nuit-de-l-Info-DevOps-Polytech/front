import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { Ref, useEffect, useState } from 'react';
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then(res => res.json());
const PAGE_SIZE = 6;


const useIntersection = <T extends HTMLElement>(): [boolean, Ref<T>] => {
  const [intersecting, setIntersecting] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement>();
  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      setIntersecting(entries[0]?.isIntersecting);
    });
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element]);
  return [intersecting, (el) => el && setElement(el)];
};



const Home: NextPage = () => {
  const repo = "reactjs/react-a11y";

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    index =>
      `https://api.github.com/repos/${repo}/issues?per_page=${PAGE_SIZE}&page=${index +
      1}`,
    fetcher
  );


  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);


  const [intersecting, ref] = useIntersection<HTMLDivElement>();

  useEffect(() => {
    if (intersecting && !isValidating && !isReachingEnd) {
      setSize((size) => size + 1);
    }
  }, [intersecting, isValidating, setSize, isReachingEnd]);


  return (
    <div style={{ fontFamily: "sans-serif" }}>



      <p style={{ position: "sticky" }}>
        showing {size} page(s) of {isLoadingMore ? "..." : issues.length}{" "}
        issue(s){" "}
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue: { id: string, title: string; }) => {
        return (
          <Box key={issue.id} sx={{ height: "50vh" }}>
            - {issue.title}
          </Box>
        );
      })}
      <div ref={ref}>

        <CircularProgress />
        {size}
      </div>
    </div>
  );
};

export default Home;
