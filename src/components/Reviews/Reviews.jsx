import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';
import {
  Author,
  AuthorWrap,
  Container,
  Item,
  ListReviews,
} from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchMovies(URL);
      // console.log(res.results);
      setReviews(() => {
        return res.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
      });
      return res.cast;
    }
    fetchData();
  }, [URL]);

  return (
    <Container>
      {reviews.length > 0 ? (
        <ListReviews>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <>
                <AuthorWrap>
                  <Author>Author</Author>: {author}
                </AuthorWrap>
                <p>'{content}'</p>
              </>
            </Item>
          ))}
        </ListReviews>
      ) : (
        <p>We don't have any review for this movie</p>
      )}
    </Container>
  );
};

export default Reviews;
