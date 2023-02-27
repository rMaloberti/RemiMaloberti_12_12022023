import Dashboard from './components/Dashboard';
import Navbar from './components/Nav/Navbar';
import './style/App.css';

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <Navbar location="top" />
        <Navbar location="left" />
      </div>
      <div className="main">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
