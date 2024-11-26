import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Photo } from "../type1/Exhibition";

interface GalleryProps {
  photos: Photo[];
  targetRowHeight: number;
}

const Gallery = ({ photos, targetRowHeight }: GalleryProps) => {
  const [index, setIndex] = useState(-1);

    return (
      <div>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          targetRowHeight={targetRowHeight}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          render={{
            iconPrev: () => <GoChevronLeft size={32} />,
            iconNext: () => <GoChevronRight size={32} />,
            iconClose: () => <IoCloseOutline size={32} />,
          }}
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          />
      </div>
    );
}

export default Gallery;