function ImgMenu({ img, alt }) {
  return (
    <div className="xl:w-96 xl:row-span-2">
      <img className="rounded-xl" src={img} alt={alt} />
    </div>
  );
}

export default ImgMenu;
