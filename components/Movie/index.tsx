import Image from 'next/image';
import React from 'react';
import { ImovieResults } from '../../types/movie';
import * as S from './styles';

const MovieComponent = ({ results }: { results: ImovieResults[] }) => {
  if (results.length === 0) return <div>There is no movies about text</div>;

  return (
    <S.MovieWrap>
      {results.map((movie) => (
        <div key={movie.id} className='movie_container'>
          <span className='title'>{movie.title}</span>

          <div className='image-wrap'>
            <Image
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : `https://freesvg.org/img/1645699345cat.png`
              }
              layout='fill'
              objectFit='contain'
              alt={movie.title}
            />
          </div>
        </div>
      ))}
    </S.MovieWrap>
  );
};

export default MovieComponent;
