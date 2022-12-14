import './App.css';
import Carrusel from './components/Carrusel';
import NavBar from './components/NavBar';
import Info from './components/info';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Info />
        <div className="carrusel-container">
          <Carrusel />
        </div>
      </main>
    </div>
  );
}

export default App;
