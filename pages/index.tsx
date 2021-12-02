import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import React from 'react';
import Footer from '../components/Footer';
import { Box, typography } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';
import useSWR from 'swr';


import SWRInfiniteResponse from 'swr/infinite';

type Props<T> = {
  swr: SWRInfiniteResponse;
  children: React.ReactChild | ((item: T) => React.ReactNode);
  loadingIndicator?: React.ReactNode;
  endingIndicator?: React.ReactNode;
  isReachingEnd: boolean | ((swr: SWRInfiniteResponse<T>) => boolean);
  offset?: number;
};

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

const InfiniteScroll = <T,>(props: Props<T>): React.ReactElement<Props<T>> => {
  const {
    swr,
    swr: { setSize, data, isValidating },
    children,
    loadingIndicator,
    endingIndicator,
    isReachingEnd,
    offset = 0,
  } = props;

  const [intersecting, ref] = useIntersection<HTMLDivElement>();

  const ending = typeof isReachingEnd === 'function' ? isReachingEnd(swr) : isReachingEnd;

  useEffect(() => {
    if (intersecting && !isValidating && !ending) {
      setSize((size) => size + 1);
    }
  }, [intersecting, isValidating, setSize, ending]);

  return (
    <>
      {typeof children === 'function' ? data?.map((item) => children(item)) : children}
      <div style={{ position: 'relative' }}>
        <div ref={ref} style={{ position: 'absolute', top: offset }}></div>
        {ending ? endingIndicator : loadingIndicator}
      </div>
    </>
  );
};



const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());




const Home: NextPage = () => {

  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );



  if (error) {
    return (<Typography>Error loading data</Typography>);
  }
  if (!data) {
    return <CircularProgress />;
  }


  return (
    <Box>
      <Typography variant="h6" component="h2" >Nouveautés</Typography>



    </Box>

  );
};

export default Home;
