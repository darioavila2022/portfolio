import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import Porfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Porfolio />
      </BrowserRouter>
    </div>
  );
}

export default App;
