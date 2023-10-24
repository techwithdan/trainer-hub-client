import "./styles.scss";
import Pokemon from "./pages/pokemon";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#5db9ff]">
      <NavBar />
      <Pokemon />
    </div>
  );
}

export default App;
