import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
  useEffect(() => {
    // Create an instance of ECharts after the component mounts
    const chart = echarts.init(document.getElementById('chart'));

    // Define your chart options
    const options = {
        title: {
            text: 'Requests by Group',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '1rem', // Set the font weight to 'normal' to unbold the text
              },
          },
          tooltip: {
                show: false, // Set tooltip show to false to turn off the pop-up labels
            },
             legend: {
                orient: 'vertical', // Set the orientation of the legend
                x: 'right',
                y: 'center', // Adjust the positioning of the legend
                data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
            },
            series: [
                {
                  name: 'Series 1',
                  type: 'pie', // Change series type to 'pie' for a donut graph
                  radius: '40%', // Adjust the radius to make it a donut shape
                  center: ['25%', '50%'], // Set the center position of the pie chart
                  data: [
                    { value: 30, name: 'Category 1' },
                    { value: 40, name: 'Category 2' },
                    { value: 20, name: 'Category 3' },
                    { value: 50, name: 'Category 4' },
                    { value: 35, name: 'Category 5' },
                  ],
                  label: {
                    show: false,
                    formatter: '{b}: {c} ({d}%)', // Customize label format
                  },
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

  return <div id="chart" style={{ width: '100%', height: '230px', backgroundColor: 'white', borderRadius: '2%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '5%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}/> 
};

export default Chart;
