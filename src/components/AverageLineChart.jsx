import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../style/components/AverageLineChart.css';

const AverageLineChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="average-custom-tooltip">
          {payload.map((pld, index) => (
            <p key={index} className="average-custom-tooltip__text">{`${pld.value} ${pld.unit}`}</p>
          ))}
        </div>
      );
    }

    return null;
  };

  const CustomActiveDot = ({ cx, cy }) => {
    return (
      <g class="recharts-layer recharts-active-dot">
        <circle
          cx={cx}
          cy={cy}
          r="4"
          fill="#ffffff"
          stroke-width="12"
          strokeOpacity={0.25}
          stroke="#ffffff"
          class="recharts-dot"
        ></circle>
      </g>
    );
  };

  const customOnMouseIn = (e) => {
    let chartWrapper = document.querySelector('.average-line-chart');

    if (e.isTooltipActive) {
      let windowWidth = chartWrapper.offsetWidth;
      let mouseXpercent = Math.floor((e.activeCoordinate.x / windowWidth) * 100);

      chartWrapper.style.background = `linear-gradient(90deg, rgb(255, 0, 0) ${mouseXpercent}%, rgb(228, 0, 0) ${mouseXpercent}%, rgb(228, 0, 0) 100%)`;
    } else {
      chartWrapper.style.background = 'rgb(255, 0, 0)';
    }
  };

  const customOnMouseOut = () => {
    let chartWrapper = document.querySelector('.average-line-chart');
    chartWrapper.style.background = 'rgb(255, 0, 0)';
  };

  const DATA = [
    {
      day: 'L',
      sessionLength: 30,
    },
    {
      day: 'M',
      sessionLength: 23,
    },
    {
      day: 'M',
      sessionLength: 45,
    },
    {
      day: 'J',
      sessionLength: 50,
    },
    {
      day: 'V',
      sessionLength: 0,
    },
    {
      day: 'S',
      sessionLength: 0,
    },
    {
      day: 'D',
      sessionLength: 60,
    },
  ];

  return (
    <div className="average-line-chart">
      <p className="average-line-chart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="65%">
        <LineChart
          data={DATA}
          margin={{
            top: 10,
            bottom: 31,
          }}
          onMouseMove={customOnMouseIn}
          onMouseLeave={customOnMouseOut}
        >
          <XAxis
            dataKey="day"
            type="category"
            tickCount={7}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'white' }}
            padding={{ left: 20, right: 20 }}
            tickMargin={25}
            fillOpacity={0.5}
          />
          <YAxis hide={true} domain={['dataMin', 'dataMax']} />
          <Tooltip cursor={false} wrapperStyle={{ outline: 'none' }} content={<CustomTooltip />} />
          <Line
            type="natural"
            dot={false}
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2}
            unit="min"
            activeDot={<CustomActiveDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AverageLineChart;
