import '../style/components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__header__greetings">
          Bonjour <span className="dashboard__header__greetings__name">Thomas</span>
        </p>
        <p className="dashbord__header__feedback">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </div>
  );
};

export default Dashboard;
