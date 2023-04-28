import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';
import { ActorImg, LiItem, ListCards } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchMovies(URL);
      if (res === undefined) {
        return;
      }
      // console.log(res);
      setActors(() => {
        return res.cast
          .filter(
            ({ known_for_department }) => known_for_department === 'Acting'
          )
          .map(({ name, character, profile_path }) => {
            return {
              name,
              character,
              profile_path,
            };
          });
      });
      return res.cast;
    }
    fetchData();
  }, [URL]);

  return (
    <>
      <div>
        {actors.length > 0 && (
          <ListCards>
            {actors.map(({ name, character, profile_path }) => {
              return (
                <LiItem key={name}>
                  <div>
                    <ActorImg
                      src={profile_path && `${IMG_URL}${profile_path}`}
                      alt="Actor's pic"
                      width="100"
                      height="120"
                    />
                  </div>

                  <p>{name}</p>
                  <p>Character: {character}</p>
                </LiItem>
              );
            })}
          </ListCards>
        )}
        {actors.length === 0 && (
          <div>No data, maybe something went wrong...(</div>
        )}
      </div>
    </>
  );
};

export default Cast;
