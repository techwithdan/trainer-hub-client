import logo from "./logo.svg";
import "./styles.scss";
import Pokemon from "./pages/pokemon";
import Nav_Bar from "./components/navbar";

function App() {
  return (
    <>
      <Nav_Bar />
      <Pokemon />
    </>
  );
}

export default App;
