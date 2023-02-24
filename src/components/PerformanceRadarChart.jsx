import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../style/components/PerformanceRadarChart.css';

const PerformanceRadarChart = () => {
  const DATA = [
    {
      value: 80,
      kind: 'Cardio',
    },
    {
      value: 120,
      kind: 'Energie',
    },
    {
      value: 140,
      kind: 'Endurance',
    },
    {
      value: 50,
      kind: 'Force',
    },
    {
      value: 200,
      kind: 'Vitesse',
    },
    {
      value: 90,
      kind: 'Intensité',
    },
  ];

  const reverse = (data) => {
    const reversed = [];
    for (let i = data.length - 1; i >= 0; i--) {
      reversed.push(data[i]);
    }
    return reversed;
  };

  const reversedData = reverse(DATA);

  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart data={reversedData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            type="category"
            tickLine={false}
            stroke="#FFFFFF"
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity="0.7" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChart;
