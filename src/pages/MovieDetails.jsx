import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';

import ContainerMovie from '../components/MovieDetails/ContainerMovie';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('');
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const URL = `https://api.themoviedb.org/3/movie/${id}`;

  useEffect(() => {
    // const controller = new AbortController();

    async function fetchData() {
      const currentMovie = await fetchMovies(
        URL
        // {
        // signal: controller.signal,
        // }
      );
      setData(currentMovie);
      setGenres(() => {
        if (!currentMovie?.genres) {
          return '';
        }
        const genresStr = currentMovie.genres.reduce((acum, genre) => {
          return currentMovie.genres.indexOf(genre) ===
            currentMovie.genres.length - 1
            ? (acum = `${acum} ${genre.name}`)
            : (acum = `${acum} ${genre.name},`);
        }, '');
        return genresStr;
      });
      // console.log(currentMovie);
      return currentMovie;
    }

    fetchData();

    return () => {
      // controller.abort();
    };
  }, [URL]);

  return (
    <>
      <Link to={backLinkHref.current}>Go back</Link>
      <ContainerMovie data={data} genres={genres} />
      <AdditionalInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
