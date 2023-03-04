import PropTypes from 'prop-types';
import '../style/components/Dashboard.css';
import AverageLineChart from './Charts/AverageLineChart';
import DailyBarChart from './Charts/DailyBarChart';
import Nutritional from './Nutritional';
import ObjectifRadialChart from './Charts/ObjectifRadialChart';
import PerformanceRadarChart from './Charts/PerformanceRadarChart';
import { useEffect, useState } from 'react';

const Dashboard = ({ data }) => {
  const [userName, setUserName] = useState();
  const [nutritionalDatas, setNutritionalDatas] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userSessionsLength, setUserSessionsLength] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userObjectives, setUserObjectives] = useState();

  useEffect(() => {
    if (data) {
      setUserName(data.userMainData.userInfos.firstName);
      setNutritionalDatas(data.userMainData.nutritionals);
      setUserSessions(data.userActivity.sessions);
      setUserSessionsLength(data.userAverageSessions.sessions);
      setUserPerformance(data.userPerformance);
      setUserObjectives(data.userMainData.todayScore);
    }
  }, [data]);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__header__greetings">
          Bonjour <span className="dashboard__header__greetings__name">{userName}</span>
        </p>
        <p className="dashboard__header__feedback">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="dashboard__stats">
        <div className="charts">
          <div className="charts-top">
            {userSessions ? <DailyBarChart data={userSessions} /> : null}
          </div>
          <div className="charts-bottom">
            {userSessionsLength ? <AverageLineChart data={userSessionsLength} /> : null}
            {userPerformance ? <PerformanceRadarChart data={userPerformance} /> : null}
            {userObjectives ? <ObjectifRadialChart data={userObjectives} /> : null}
          </div>
        </div>
        <div className="nutritionals">
          {nutritionalDatas
            ? Object.keys(nutritionalDatas).map((dataKey, index) => (
                <Nutritional key={index} data={{ key: dataKey, data: nutritionalDatas[dataKey] }} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  data: PropTypes.shape({
    userMainData: PropTypes.shape({
      userId: PropTypes.number,
      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
      }),
      todayScore: PropTypes.shape({
        score: PropTypes.number,
        percentage: PropTypes.string,
      }),
      nutritionals: PropTypes.shape({
        calories: PropTypes.shape({
          label: PropTypes.string,
          unit: PropTypes.string,
          value: PropTypes.number,
        }),
        carbohydrates: PropTypes.shape({
          label: PropTypes.string,
          unit: PropTypes.string,
          value: PropTypes.number,
        }),
        lipids: PropTypes.shape({
          label: PropTypes.string,
          unit: PropTypes.string,
          value: PropTypes.number,
        }),
        proteins: PropTypes.shape({
          label: PropTypes.string,
          unit: PropTypes.string,
          value: PropTypes.number,
        }),
      }),
    }),
    userActivity: PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          calories: PropTypes.number,
          day: PropTypes.number,
          kg: PropTypes.number,
        })
      ),
    }),
    userAverageSessions: PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          sessionLength: PropTypes.number,
        })
      ),
    }),
    userPerformance: PropTypes.shape({
      userId: PropTypes.number,
      kind: PropTypes.shape({
        1: PropTypes.string,
        2: PropTypes.string,
        3: PropTypes.string,
        4: PropTypes.string,
        5: PropTypes.string,
        6: PropTypes.string,
      }),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number,
          kind: PropTypes.number,
        })
      ),
    }),
  }),
};

export default Dashboard;
