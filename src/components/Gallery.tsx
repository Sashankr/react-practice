export function Profile() {
  const srcUrl = "https://react.dev/images/docs/scientists/MK3eW3As.jpg";
  const name = "Katherine Johnson";

  function displayName() {
    return "Katherine Johnson";
  }

  return (
    <>
      <h2>{displayName()}</h2>
      <img src={srcUrl} alt={name} />
    </>
  );
}

function Gallery() {
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

export default Gallery;
