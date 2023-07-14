

function ImageCard() {
  return (
    <div>
      <figure className="relative max-w-2xl mx-auto transition-all duration-300 cursor-pointerhover:grayscale-0">
        <a href="#">
          <img
            className="rounded-lg"
            src="https://picsum.photos/2000/800"
            alt="image description"
          />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>
            Do you want to buy this?
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImageCard