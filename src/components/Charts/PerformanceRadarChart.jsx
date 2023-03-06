import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../../style/components/Charts/PerformanceRadarChart.css';

const PerformanceRadarChart = ({ data }) => {
  const [performanceKind, setPerformanceKind] = useState();
  const [performanceData, setPerformanceData] = useState();

  /**
   * Get the right X-axis label from a given kind number.
   * @function computeXAxis
   * @param {number} kind - The kind number associated to a label.
   * 
   * @returns {string} The corresponding label to display on the chart's X-axis.
   */
  const computeXAxis = (kind) => {
    switch (kind) {
      case 1:
        return performanceKind[1];
      case 2:
        return performanceKind[2];
      case 3:
        return performanceKind[3];
      case 4:
        return performanceKind[4];
      case 5:
        return performanceKind[5];
      case 6:
        return performanceKind[6];
      default:
        return null;
    }
  };

  useEffect(() => {
    if (data) {
      setPerformanceKind(data.kind);
      setPerformanceData(data.data);
    }
  }, [data]);

  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart data={performanceData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            type="category"
            tickLine={false}
            stroke="#FFFFFF"
            tickFormatter={computeXAxis}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity="0.7" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceRadarChart.propTypes = {
  data: PropTypes.shape({
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
};

export default PerformanceRadarChart;
