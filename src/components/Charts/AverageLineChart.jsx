import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../../style/components/Charts/AverageLineChart.css';

/**
 * Render the custom chart tooltip.
 * @function CustomTooltip
 * @param {object} param - The tooltip data.
 *  
 * @returns {(JSX.Element | null)} The custom tooltip to render.
 */
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

/**
 * Render the custom chart active dot.
 * @function CustomActiveDot
 * @param {object} param - The active dot data.
 * 
 * @returns  {JSX.Element} The custom active dot to render.
 */
const CustomActiveDot = ({ cx, cy }) => {
  return (
    <g className="recharts-layer recharts-active-dot">
      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="#ffffff"
        strokeWidth="12"
        strokeOpacity={0.25}
        stroke="#ffffff"
        className="recharts-dot"
      ></circle>
    </g>
  );
};

const AverageLineChart = ({ data }) => {
  /**
   * Render a dark background on the right side of the cursor when the user hover the chart.
   * @function customOnMouseIn
   * @param {event} e - The mouse in event that triggers the function. 
   */
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

  /**
   * Hide the dark background when the user stops hoverring the chart.
   * @function customOnMouseOut
   */
  const customOnMouseOut = () => {
    let chartWrapper = document.querySelector('.average-line-chart');
    chartWrapper.style.background = 'rgb(255, 0, 0)';
  };

  const [chartData, setChartData] = useState();

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <div className="average-line-chart">
      <p className="average-line-chart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="65%">
        <LineChart
          data={chartData}
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
          <YAxis hide={true} domain={['dataMin - 1', 'dataMax + 1']} />
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

AverageLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
};

export default AverageLineChart;
