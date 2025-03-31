// Ensure proper container initialization
const chartContainer = document.getElementById('chart-container');
const myChart = echarts.init(chartContainer);

// Add the title element separately outside the graph
const title = document.createElement('div');
title.classList.add('echarts-title');
title.textContent = '24 hour Alcohol Licences';
title.style.position = 'absolute';
title.style.top = '10px';
title.style.left = '50%';
title.style.transform = 'translateX(-50%)'; // Center the title horizontally
title.style.color = '#fff';
chartContainer.appendChild(title);

// Set the chart options
const option = {
  title: {
    text: '',  // We handle the title separately now
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Drinking', 'Shopping', 'Entertainment', 'Total'],
    textStyle: {
      color: '#D3D3D3',
    },
    fontSize: 4, // Adjust this value to increase or decrease font size
    orient: 'horizontal',
    right: '1%', // Move legend more towards the center-right
    top: '20%',   // Moves legend closer to the top
    orient: 'vertical', // Stack legend items vertically
  },

  grid: {
    left: '1%',
    right: '30%',
    top: '13%',
    bottom: '1%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2013', '2014', '2015', '2016', '2017', '2018','2025'],
    axisLabel: {
      color: '#D3D3D3'
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#D3D3D3'
    },
  },
  series: [
    {
      name: 'Drinking',
      type: 'line',
      data: [215, 245, 348, 183, 411, 419, 147],
      itemStyle: {
        color: '#9b4dff'
      }
    },
    {
      name: 'Shopping',
      type: 'line',
      data: [393, 449, 520, 423, 442, 505, 216],
      itemStyle: {
        color: '#f3c847'
      }
    },
    {
      name: 'Entertainment',
      type: 'line',
      data: [83, 235, 227, 118, 186, 161, 92],
      itemStyle: {
        color: '#e72074'
      }
    },
    {
      name: 'Total',
      type: 'line',
      data: [925, 927, 1095, 779, 1040, 1082,455],
      itemStyle: {
        color: '#ffffff'
      }
    }
  ]
};

// Set the chart option
myChart.setOption(option);

// Toggle the graph visibility
function toggleGraph() {
  const chartContainer = document.getElementById('chart-container');
  const button = document.getElementById('toggle-button');

  // Toggle the "collapsed" class on the chart container
  chartContainer.classList.toggle('collapsed');

  // Change the button text when the graph is collapsed
  if (chartContainer.classList.contains('collapsed')) {
    button.textContent = '▼';  // Change to "expand" symbol
  } else {
    button.textContent = '▲';  // Change to "collapse" symbol
  }

  // Optionally, you can resize or refresh the chart when toggling
  myChart.resize(); // Resize the chart when the container is toggled
}
