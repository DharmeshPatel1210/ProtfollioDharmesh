import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Intro  from './Componets/Intro/Intro';
import Services from './Componets/Services/Services';

function App() {
  return (
   <div className="App">
      <Navbar/>
      <Intro />
      <Services/>
   </div>
  );
}

export default App;
