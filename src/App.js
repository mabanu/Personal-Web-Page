import './App.css';
import Carrusel from './components/Carrusel';
import NavBar from './components/NavBar';
import Info from './components/info';
import Colmena from './components/Colmena';
import ShadowGallery from './components/Shadow-gallery';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Info />
        <div className="colmena-gallery-container">
          <Colmena />
        </div>
        <ShadowGallery />
        <div className="carrusel-container">
          <Carrusel />
        </div>
      </main>
    </div>
  );
}

export default App;
