import '../style/components/Dashboard.css';
import DailyBarChart from './DailyBarChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__header__greetings">
          Bonjour <span className="dashboard__header__greetings__name">Thomas</span>
        </p>
        <p className="dashboard__header__feedback">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="dashboard__stats">
        <div className="charts">
          <div className="charts-top">
            <DailyBarChart />
          </div>
          <div className="charts-bottom"></div>
        </div>
        <div className="nutritionals"></div>
      </div>
    </div>
  );
};

export default Dashboard;
