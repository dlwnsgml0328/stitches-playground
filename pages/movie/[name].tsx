import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

import { ParsedUrlQuery } from 'querystring';
import React, { useRef, useState } from 'react';
import MovieComponent from '../../components/Movie';
import { ImovieData } from '../../types/movie';

const Movie = ({
  errorCode,
  data,
  params,
}: {
  errorCode: number | boolean;
  data: ImovieData;
  params: ParsedUrlQuery | undefined;
}) => {
  const pageRef = useRef(2);
  const [movies, setMovies] = useState(data.results);

  if (errorCode !== false) return <h1>{errorCode}</h1>;

  const loadMore = async () => {
    try {
      const {
        data: { results },
      } = await axios.get<ImovieData>(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&language=en-US&query=${params?.name}&page=${pageRef.current}`
      );
      pageRef.current++;

      setMovies((prev) => [...prev, ...results]);
    } catch (error) {
      console.error('error occurred in loadMore Method!', error);
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>{params?.name}</h1>

      <button type='button' onClick={() => (location.href = '/')} style={{ marginRight: 5 }}>
        Home
      </button>
      <button type='button' onClick={loadMore}>
        loadMore
      </button>

      <MovieComponent results={movies} />
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&language=en-US&query=${context.params?.name}&page=1`
  );

  const errorCode = res.ok ? false : res.status;

  const { params } = context;

  if (errorCode) return { props: { errorCode, params } };

  const data: ImovieData = await res.json();

  return {
    props: {
      errorCode,
      data,
      params,
    },
  };
}
