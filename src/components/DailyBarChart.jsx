import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../style/components/DailyBarChart.css';

const DailyBarChart = () => {
  const DATA = [
    {
      day: '1',
      kilogram: 80,
      calories: 240,
    },
    {
      day: '2',
      kilogram: 80,
      calories: 220,
    },
    {
      day: '3',
      kilogram: 81,
      calories: 280,
    },
    {
      day: '4',
      kilogram: 81,
      calories: 290,
    },
    {
      day: '5',
      kilogram: 80,
      calories: 160,
    },
    {
      day: '6',
      kilogram: 78,
      calories: 162,
    },
    {
      day: '7',
      kilogram: 76,
      calories: 390,
    },
  ];
  return (
    <div className="daily-bar-chart">
      <p className="daily-bar-chart__title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={DATA} barSize={10}>
          <XAxis dataKey="day" tickCount={10} tickMargin={15} axisLine={false} tickLine={false} />
          <YAxis
            type="number"
            yAxisId={1}
            dataKey="kilogram"
            orientation="right"
            tickCount={4}
            tickMargin={35}
            domain={['dataMin - 5', 'dataMax + 5']}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId={2}
            hide={true}
            dataKey="calories"
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <CartesianGrid vertical={false} stroke="#DEDEDE" strokeDasharray="2" />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconSize={8} iconType="cricle" height={100} />
          <Bar
            name="Poids (kg)"
            yAxisId={1}
            dataKey="kilogram"
            radius={[5, 5, 0, 0]}
            fill="#282D30"
            unit="kg"
          />
          <Bar
            name="Calories brûlées (kCal)"
            yAxisId={2}
            dataKey="calories"
            radius={[5, 5, 0, 0]}
            fill="#E60000"
            unit="Kcal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyBarChart;
