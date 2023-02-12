import Navbar from './components/Navbar';
import './style/App.css';

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <Navbar location="top" />
        <Navbar location="left" />
      </div>
      <div className="main app__main"></div>
    </div>
  );
};

export default App;
