import { styled } from "styled-components";
import Gallery from "../common/Gallery";
import Title from "../common/Title";
import image1Url from '../../assets/images/1.jpg';
import image2Url from '../../assets/images/3.jpg';
import image3Url from '../../assets/images/1-53.jpg';
import image4Url from '../../assets/images/1-30.jpg';
import image5Url from '../../assets/images/2.jpg';
import image6Url from '../../assets/images/1-18.jpg';
import image7Url from '../../assets/images/1-23.jpg';
import image8Url from '../../assets/images/1-50.jpg';
import image9Url from '../../assets/images/1-72.jpg';
import image10Url from '../../assets/images/1-61.jpg';
import image11Url from '../../assets/images/1-66.jpg';
import image13Url from '../../assets/images/1-74.jpg';
import image14Url from '../../assets/images/1-104.jpg';
import image15Url from '../../assets/images/6.jpg';
import image16Url from '../../assets/images/10.jpg';
import image17Url from '../../assets/images/1-146.jpg';
import image18Url from '../../assets/images/1-132.jpg';
import image19Url from '../../assets/images/1-115.jpg';
import image20Url from '../../assets/images/1-117.jpg';

export interface Photo {
  src: string;
  width: number;
  height: number;
}

const Container = styled.div`
  background-color: #FDF7E8;
  padding: 30px 20px 60px;
`;

export default function Exhibition() {
  const photos: Photo[] = [
    { src: image4Url, width: 400, height: 600 },
    { src: image5Url, width: 400, height: 600 },
    { src: image6Url, width: 400, height: 600 },
    { src: image1Url, width: 400, height: 600 },
    { src: image2Url, width: 400, height: 600 },
    { src: image3Url, width: 400, height: 600 },
    { src: image7Url, width: 400, height: 600 },
    { src: image8Url, width: 400, height: 600 },
    { src: image9Url, width: 400, height: 600 },
    { src: image13Url, width: 400, height: 600 },
    { src: image10Url, width: 400, height: 600 },
    { src: image11Url, width: 400, height: 600 },
    { src: image14Url, width: 400, height: 600 },
    { src: image15Url, width: 400, height: 600 },
    { src: image16Url, width: 400, height: 600 },
    { src: image17Url, width: 800, height: 600 },
    { src: image18Url, width: 400, height: 600 },
    { src: image19Url, width: 400, height: 600 },
    { src: image20Url, width: 800, height: 600 },
  ];

  return (
    <Container>
      <Title>GALLERY</Title>
      <Gallery photos={photos} targetRowHeight={200} />
    </Container>
  );
}