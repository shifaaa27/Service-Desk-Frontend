import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Bar = () => {
  useEffect(() => {
    // Create an instance of ECharts after the component mounts
    const chart = echarts.init(document.getElementById('progress-bar'));

    // Define your chart options
    const options = {
      series: [
        {
          type: 'bar',
          data: [70], // Set the progress value here
          coordinateSystem: 'polar',
          roundCap: true, // Make the bar ends rounded
          barWidth: 10, // Adjust the width of the progress bar
          itemStyle: {
            color: '#336699', // Customize the color of the progress bar
          },
        },
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false, // Hide the pointer
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            width: 10,
            itemStyle: {
              color: '#f0f0f0', // Customize the color of the progress background
            },
          },
          axisLine: {
            show: false, // Hide the axis line
          },
          splitLine: {
            show: false, // Hide the split lines
          },
          axisLabel: {
            show: false, // Hide the axis labels
          },
          axisTick: {
            show: false, // Hide the axis ticks
          },
          data: [
            {
              value: 100,
            },
          ],
        },
      ],
    };

    // Set the options and render the chart
    chart.setOption(options);

    // Clean up the chart instance when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="progress-bar"
      style={{
        width: '100px',
        height: '100px',
      }}
    ></div>
  );
};

export default Bar;
