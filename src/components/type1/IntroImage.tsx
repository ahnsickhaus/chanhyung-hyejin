import { styled } from 'styled-components';
import introImageUrl from '../../assets/images/intro.png';

const ImageContainer = styled.div`
  width: 100%;
  line-height: 0;
  height: 100dvh;

  img {
    width: 100%;
  }
`;

export default function IntroImage() {
  return (
    <ImageContainer>
      <img src={introImageUrl} alt="introImage" />
    </ImageContainer>
  );
}