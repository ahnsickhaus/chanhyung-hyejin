import Gallery from "../common/Gallery";
import Title from "../common/Title";
import { Tabs } from "antd";

export interface Photo {
  src: string;
  width: number;
  height: number;
}

export default function Exhibition() {
  const archivePhotos: Photo[] = [
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
  ];

  const peoplePhotos: {
    src: string;
    width: number;
    height: number;
  }[] = [
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
    { src: '', width: 400, height: 600 },
  ];

  const GALLERY_ITEMS = [
    {
      label : 'Archive',
      children: <Gallery photos={archivePhotos} targetRowHeight={200} />
    }, 
    {
      label: 'People',
      children: <Gallery photos={peoplePhotos} targetRowHeight={200} />
    },
    {
      label: 'Object',
      children: '준비중...'
    }
  ];

  return (
    <div>
      <Title>EXHIBITION</Title>
      <Tabs
        type="card"
        centered
        items={GALLERY_ITEMS.map((item, i) => {
          const id = String(i + 1);
          return {
            label: item.label,
            key: id,
            children: item.children,
          };
        })}
      />
    </div>
  );
}