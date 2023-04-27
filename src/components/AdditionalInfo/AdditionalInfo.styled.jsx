import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const WrapContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid black;
`;

const ListAdditions = styled.ul`
  padding: 10px;
`;

const Item = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Title = styled.p`
  margin: 10px 0 0 10px;
`;

const ItemLink = styled(Link)`
  color: #000000;
  font-weight: 500;
  text-decoration: none;

  :hover {
    color: #bd0000;
    text-decoration: underline;
  }
`;
export { WrapContainer, ListAdditions, Item, Title, ItemLink };
