import './App.css';
import FunkcijskaKomponenta from './components/FunkcijskaKomponenta';
import KlasnaKomponenta from './components/KlasnaKomponenta';
import DrugaFunkcijskaKomponenta from './components/DrugaFunkcijskaKomponenta';

const korisnici = [
  {
    name: 'Ana',
    age: 33
  },
  {
    name: 'Mislav',
    age: 32
  },
  {
    name: 'Sonja',
    age: 31
  },
];

function App() {
  return (
    <div className="App">
      <FunkcijskaKomponenta age={korisnici[0].age} name={korisnici[0].name} />
      <DrugaFunkcijskaKomponenta age={korisnici[1].age} name={korisnici[1].name}>...i još neki tekst</DrugaFunkcijskaKomponenta>
      <KlasnaKomponenta age={korisnici[2].age} name={korisnici[2].name} />
    </div>
  );
}

export default App;
