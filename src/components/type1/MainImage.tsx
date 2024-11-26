import { styled } from 'styled-components';
import mainImageUrl from '../../assets/images/main.png';

const ImageContainer = styled.div`
  width: 100%;
  line-height: 0;
  margin-bottom: 60px;

  img {
    width: 100%;
  }
`;

export default function MainImage() {
  return (
    <ImageContainer>
      <img src={mainImageUrl} alt="mainImage" />
    </ImageContainer>
  );
}