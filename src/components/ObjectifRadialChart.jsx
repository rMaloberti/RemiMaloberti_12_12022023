import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../style/components/ObjectifRadialChart.css';

const ObjectifRadialChart = () => {
  const DATA = {
    todayScore: 0.5,
  };

  return (
    <div className="objectif-radial-chart">
      <p className="objectif-radial-chart__title">Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          data={[DATA]}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            dataKey="todayScore"
            fill="#FF0000"
            cornerRadius={25}
            barSize={10}
          />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="objectif-radial-chart__score">
        <p className="objectif-radial-chart__score__score-result">{Math.round(DATA.todayScore * 100)}%</p>
        <p className="objectif-radial-chart__score__score-text">de votre objectif</p>
      </div>
    </div>
  );
};

export default ObjectifRadialChart;
