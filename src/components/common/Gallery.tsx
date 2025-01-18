import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Photo } from "../type1/Exhibition";

interface GalleryProps {
  photos: Photo[];
  targetRowHeight: number;
}

const Gallery = ({ photos, targetRowHeight }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Photo Album */}
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={targetRowHeight}
        onClick={({ index }) => openLightbox(index)}
      />

      {/* Lightbox */}
      {isOpen && (
        <Overlay>
          <LightboxContainer>
            <CloseButton onClick={closeLightbox}>
              <IoCloseOutline size={32} />
            </CloseButton>
            <StyledSwiper
              initialSlide={startIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="lightbox-swiper"
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <Image src={photo.src} />
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </LightboxContainer>
        </Overlay>
      )}
    </div>
  );
};

export default Gallery;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  background: none;
  padding: 0;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  top: -10%;
  right: 0;
  opacity: 0.8;
`;

/* Swiper 스타일링 */
const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    width: 48px;
    height: 48px;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24px;
    opacity: 0.8;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }
`;