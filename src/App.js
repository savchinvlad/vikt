import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/home">
          <span className="StartButton">Button</span>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
