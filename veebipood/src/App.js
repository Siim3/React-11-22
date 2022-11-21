import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Ostukorv from './pages/Ostukorv';



function App() {
  return (
    <div className="app">

      <Link to="/">
      <img className="pilt" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
      </Link>

<Link to="/ostukorv">
        <button type="">ostukorv</button>
        </Link>

        <Link to="lisatoode">
        <button type="">kuva</button>
        </Link>
        <Routes>
          <Route path="" element={<Avaleht/>}/>
          <Route path="lisatoode" element={<Lisatoode/>}/>
          <Route path="ostukorv" element={<Ostukorv/>}/>
        </Routes>
    </div>
  );
}

export default App;

//kahte liiki vead
//esimene: Kompileerimise vead(koodi kokku pakkimine ja üle vaatamine)
//neid on näha cmds(seal kus töötab npm start)

//left läheb tumeda taustaga ja tuleb kiri, mis on valesti
//2. run-time(vead brauseris)
//neid on nähe brauseris pannes m2->inspect->console
//leht on valge ja midagi pole näha 
//need on hästi guugeldatavad
