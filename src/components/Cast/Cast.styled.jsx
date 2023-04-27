import styled from '@emotion/styled';

const ListCards = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  /* flex-basis: calc(100% / 4 - 4 * 15px); */
`;

const ActorImg = styled.img`
  background-color: #d1d0d0;
`;

const LiItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc((100% - 10 * 15px) / 5);

  div,
  p {
    margin-top: 10px;
    text-align: center;
  }
`;
export { ListCards, ActorImg, LiItem };
