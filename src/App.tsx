import "./styles.scss";
import Pokemon from "./pages/pokemon";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#5db9ff]">
      <NavBar />
      <div className="h-full relative">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
