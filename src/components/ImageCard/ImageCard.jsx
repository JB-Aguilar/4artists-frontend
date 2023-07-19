

// eslint-disable-next-line react/prop-types
function ImageCard({ img }) {
  return (
    <div>
      <figure className="relative max-w-2xl mx-auto transition-all duration-300 cursor-pointerhover:grayscale-0">
          <img
            className="rounded-lg"
            src={img}
            alt="image description"
          />
      </figure>
    </div>
  );
}

export default ImageCard