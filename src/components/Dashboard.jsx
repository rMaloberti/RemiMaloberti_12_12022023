import '../style/components/Dashboard.css';
import AverageLineChart from './AverageLineChart';
import DailyBarChart from './DailyBarChart';
import Nutritional from './Nutritional';
import ObjectifRadialChart from './ObjectifRadialChart';
import PerformanceRadarChart from './PerformanceRadarChart';

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
          <div className="charts-bottom">
            <AverageLineChart />
            <PerformanceRadarChart />
            <ObjectifRadialChart />
          </div>
        </div>
        <div className="nutritionals">
          <Nutritional dataKey="calories" label="Calories" value={1930} unit="kCal" />
          <Nutritional dataKey="proteins" label="Proteines" value={155} unit="g" />
          <Nutritional dataKey="carbohydrates" label="Glucides" value={290} unit="g" />
          <Nutritional dataKey="lipids" label="Lipides" value={50} unit="g" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
