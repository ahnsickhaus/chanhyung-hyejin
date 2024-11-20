import Title from "../common/Title";

export default function Gallery() {
  return (
    <div>
      <Title>EXHIBITION</Title>
      {/* <Tabs
        // onChange={onChange}
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
      /> */}
    </div>
  );
}