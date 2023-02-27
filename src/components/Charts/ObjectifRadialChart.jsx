import { useEffect, useState } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../../style/components/Charts/ObjectifRadialChart.css';

const ObjectifRadialChart = ({ data }) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (data) {
      setChartData(data);
    }
  }, [data]);

  return (
    <div className="objectif-radial-chart">
      <p className="objectif-radial-chart__title">Score</p>
      {chartData ? (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            data={[chartData.score]}
            startAngle={180}
            endAngle={-180}
          >
            <RadialBar
              minAngle={15}
              dataKey="score"
              fill="#FF0000"
              cornerRadius={25}
              barSize={10}
            />
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          </RadialBarChart>
        </ResponsiveContainer>
      ) : null}
      <div className="objectif-radial-chart__score">
        <p className="objectif-radial-chart__score__score-result">
          {chartData ? chartData.percentage : null}
        </p>
        <p className="objectif-radial-chart__score__score-text">de votre objectif</p>
      </div>
    </div>
  );
};

export default ObjectifRadialChart;
