import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Intro  from './Componets/Intro/Intro';
import Services from './Componets/Services/Services';
import Experience from './Componets/Experience/Experience';
import Works from './Componets/Works/Works';

function App() {
  return (
   <div className="App">
      <Navbar/>
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
   </div>
  );
}

export default App;
