function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
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

function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App;
