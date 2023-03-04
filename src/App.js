import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
        <Cards />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
