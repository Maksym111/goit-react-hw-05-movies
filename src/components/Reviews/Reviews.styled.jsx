import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 30px;
`;

const ListReviews = styled.ul`
  margin: 0;
  border: 1px solid #cacaca;
`;

const Item = styled.li`
  list-style: none;

  :nth-of-type(odd) {
    background-color: #dadada;
  }

  padding: 10px;

  /* :not(:last-child) {
    margin-bottom: 20px;
  } */
`;

const AuthorWrap = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

const Author = styled.span`
  font-weight: 500;
`;

export { Container, ListReviews, Item, AuthorWrap, Author };
