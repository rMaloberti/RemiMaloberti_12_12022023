import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Nav/Navbar';
import './style/App.css';
import { getComputedUserData } from './utils/UserData';

const App = () => {
  const MOCKED_DATA = true;
  const USER_ID = 12;

  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    setDashboardData(getComputedUserData(MOCKED_DATA, USER_ID));
  }, [MOCKED_DATA, USER_ID]);

  return (
    <div className="app">
      <div className="nav">
        <Navbar location="top" />
        <Navbar location="left" />
      </div>
      <div className="main">
        <Dashboard data={dashboardData} />
      </div>
    </div>
  );
};

export default App;
