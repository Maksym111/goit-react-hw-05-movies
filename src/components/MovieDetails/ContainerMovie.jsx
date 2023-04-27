import PropTypes from 'prop-types';
import { Container, Info, PosterImg, Title } from './ContainerMovie.styled';

const ContainerMovie = ({ data, genres }) => {
  return (
    <>
      <Container>
        <div>
          <PosterImg
            src={`https://api.themoviedb.org/3/movie/640146${data.poster_path}`}
            alt="Poster Movie"
            width="200"
            height="300"
          />
        </div>

        <Info>
          <h1>
            {Object.keys(data).length !== 0 &&
              `${data.original_title} (${data.release_date.split('-', 1)})`}
          </h1>
          <div>User score: {Math.round(data.vote_average * 10)}%</div>
          <div>
            <Title>Overview</Title>
            <span>{data && data.overview}</span>
          </div>
          <div>
            <Title>Genres</Title>
            {genres}
          </div>
        </Info>
      </Container>
    </>
  );
};

ContainerMovie.propTypes = {
  data: PropTypes.object.isRequired,
  genres: PropTypes.string.isRequired,
};

export default ContainerMovie;
