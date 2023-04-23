import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ListContainer from "./components/ListContainer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <>
      <Nav
        selectedMode={darkMode}
        onClickModeBtn={() => setDarkMode((darkMode) => !darkMode)}
      />
      <Carousel />
      <ListContainer />
      <Footer selectedMode={darkMode} />
    </>
  );
}

export default App;
