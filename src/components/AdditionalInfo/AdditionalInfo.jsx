import {
  WrapContainer,
  Title,
  Item,
  ItemLink,
  ListAdditions,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <WrapContainer>
      <Title>Additional information</Title>
      <ListAdditions>
        <Item>
          <ItemLink to="cast">Cast</ItemLink>
        </Item>
        <Item>
          <ItemLink to="reviews">Reviews</ItemLink>
        </Item>
      </ListAdditions>
    </WrapContainer>
  );
};

export default AdditionalInfo;
