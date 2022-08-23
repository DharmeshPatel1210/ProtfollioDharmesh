import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Intro  from './Componets/Intro/Intro';
import Services from './Componets/Services/Services';
import Experience from './Componets/Experience/Experience';
import Works from './Componets/Works/Works';
import Protfolio from './Componets/Protfolio/Protfolio';
import Testimonials from './Componets/Testimonials/Testimonials';

function App() {
  return (
   <div className="App">
      <Navbar/>
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Protfolio/>
      <Testimonials/>
   </div>
  );
}

export default App;
