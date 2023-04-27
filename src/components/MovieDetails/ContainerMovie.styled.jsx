import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  padding: 10px;
  border: 1px solid black;
`;

const Info = styled.div`
  width: 100%;
  margin: 0;

  div {
    margin-top: 20px;
  }
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

const PosterImg = styled.img`
  display: inline-block;
  background-color: #d1cece;
`;

export { Container, Title, PosterImg, Info };
