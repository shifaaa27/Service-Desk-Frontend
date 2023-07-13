import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {
  useEffect(() => {
    // Create an instance of ECharts after the component mounts
    const chart = echarts.init(document.getElementById('line-chart'));

    // Define your chart options
    const options = {
      title: {
        text: 'Requests This Week',
        textStyle: {
          fontWeight: 'normal',
          fontSize: '1rem', // Set the font weight to 'normal' to unbold the text
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Product A', 'Product B', 'Product C'],
        x: 'right',
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Product A',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110],
        },
        {
          name: 'Product B',
          type: 'line',
          data: [220, 180, 250, 70, 90, 100],
        },
        {
          name: 'Product C',
          type: 'line',
          data: [150, 120, 160, 200, 210, 180],
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
      id="line-chart"
      style={{
        width: '100%',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '2%',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        padding: '2%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '2%',
      }}
    ></div>
  );
};

export default LineChart;
