import Gallery from "./components/Gallery";
import Greeting from "./components/Greeting";
import Item from "./components/Item";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Gallery>
        <Profile />
        <Profile />
        <Profile />
      </Gallery>
      <section>
        <Greeting
          fromUser={"Sashank"}
          message={"Are you working late tonight?"}
          toUser={"Sashank Dev"}
        />
        <Greeting
          fromUser={"Sashank Dev"}
          message={"Yes learning about react fundamentals?"}
          toUser={"Sashank"}
        />
        <Item label={"Umbrella"} isPacked />
        <Item label={"Toothbrush"} />
      </section>
    </div>
  );
}

export default App;
