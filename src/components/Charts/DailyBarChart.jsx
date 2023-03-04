import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
import '../../style/components/Charts/DailyBarChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="daily-custom-tooltip">
        {payload.map((pld, index) => (
          <div key={index} className="daily-custom-tooltip__data">
            <p className="daily-custom-tooltip__data__text">
              {pld.value}
              {pld.unit}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const DailyBarChart = ({ data }) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (data) {
      setChartData(data);
    }
  }, [data]);

  return (
    <div className="daily-bar-chart">
      <p className="daily-bar-chart__title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} barSize={10}>
          <XAxis dataKey="day" tickCount={10} tickMargin={15} axisLine={false} tickLine={false} />
          <YAxis
            yAxisId={1}
            dataKey="kg"
            orientation="right"
            tickCount={4}
            tickMargin={40}
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
          <Tooltip
            offset={50}
            wrapperStyle={{ outline: 'none' }}
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Legend align="right" verticalAlign="top" iconSize={8} iconType="cricle" height={85} />
          <Bar
            name="Poids (kg)"
            yAxisId={1}
            dataKey="kg"
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
            unit="kCal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

DailyBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kg: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default DailyBarChart;
