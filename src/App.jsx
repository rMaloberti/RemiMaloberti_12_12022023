import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Nav/Navbar';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data/mockedData';
import './style/App.css';
import DataComputer from './utils/DataComputer';

const App = () => {
  const userId = 12;

  const [isMockedData, setIsMockedData] = useState(true);

  useEffect(() => {
    if (isMockedData) {
      console.log(
        DataComputer.computeUserPerformance(
          USER_PERFORMANCE.find((data) => data.userId === userId)
        )
      );
    } else {
      console.log('Static');
    }
  }, [isMockedData]);

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
