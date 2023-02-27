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
  const MOCKED_DATA = true;
  const USER_ID = 18;

  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    if (MOCKED_DATA) {
      setDashboardData({
        userMainData: DataComputer.computeUserMainData(
          USER_MAIN_DATA.find((data) => data.id === USER_ID)
        ),
        userActivity: DataComputer.computeUserActivity(
          USER_ACTIVITY.find((data) => data.userId === USER_ID)
        ),
        userAverageSessions: DataComputer.computeUserAverageSessions(
          USER_AVERAGE_SESSIONS.find((data) => data.userId === USER_ID)
        ),
        userPerformance: DataComputer.computeUserPerformance(
          USER_PERFORMANCE.find((data) => data.userId === USER_ID)
        ),
      });
    } else {
      console.log('Static');
    }
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
