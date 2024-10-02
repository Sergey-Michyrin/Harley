import "./App.css";
import Menu from "./components/Menu/Menu.jsx";
import Header from "./components/Header/Header.jsx";
import Introduce from "./components/Introduce/Introduce.jsx";
import Equip from "./components/Equip/Equip.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Bikes from "./components/Bikes/Bikes.jsx";
function App() {
  return (
    <>
      <Menu />
      <Header />
      <main className="main">
        <Introduce />
        <Bikes />
        <Equip />
      </main>
      <Footer />
    </>
  );
}

export default App;
