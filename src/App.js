import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './layout/AnimatedRoutes';
import ScreenDimensions from './layout/ScreenDimensions';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScreenDimensions>
          <AnimatedRoutes />
        </ScreenDimensions>
      </Router>
    </div>
  );
}

export default App;