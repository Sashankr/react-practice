import Gallery from "./components/Gallery";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Gallery>
        <Profile />
        <Profile />
        <Profile />
      </Gallery>
    </div>
  );
}

export default App;
