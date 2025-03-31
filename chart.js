// Borough names
const boroughs = [
  "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", "Ealing", "Enfield", 
  "Greenwich", "Hackney", "Hammersmith", "Haringey", "Harrow", "Havering", "Hillingdon", 
  "Hounslow", "Islington", "Kensington", "Kingston", "Lambeth", "Lewisham", "Merton", 
  "Newham", "Redbridge", "Richmond", "Southwark", "Sutton", "Tower Hamlets", 
  "Waltham Forest", "Wandsworth", "Westminster"
];

// Data for each category
const drinkingData = [0, 0, 0, 5, 3, 0, 7, 18, 5, 4, 16, 14, 3, 1, 1, 4, 37, 13, 15, 33, 2, 3, 5, 16, 1, 26, 0, 0, 28, 6, 10, 138];
const shopsData = [3, 0, 4, 28, 11, 0, 1, 6, 6, 58, 7, 20, 6, 47, 9, 6, 16, 20, 39, 8, 5, 86, 33, 16, 8, 6, 0, 2, 13, 21, 8, 0];
const otherData = [0, 0, 0, 13, 0, 0, 9, 0, 14, 0, 7, 0, 4, 0, 0, 0, 0, 3, 0, 3, 0, 0, 2, 0, 0, 0, 0, 1, 18, 0, 6, 81];

// Stacked Bar Chart Configuration
const stackedBarOption = {
  title: {
    text: '24 Hour Access Inequality (2018)',
    left: 'center',
    top: '5px', // Reduced title space
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Poppins'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      let tooltipText = `<b>Borough: ${params[0].name}</b><br/>`; // Full borough name
      params.forEach(item => {
        tooltipText += `${item.marker} ${item.seriesName}: ${item.value}<br/>`;
      });
      return tooltipText;
    }
  },
  legend: {
    data: ['Drinking', 'Shopping', 'Entertainment'],
    right: '1%', // Move legend more towards the center-right
    top: '40%',   // Moves legend closer to the top
    orient: 'vertical', // Stack legend items vertically
    textStyle: {
      color: '#ffffff'
    },
    itemWidth: 9,
    itemHeight: 9
  },
  grid: {
    left: '3%',
    right: '29%', // Adjusted for legend position
    top: '12%', // Move graph higher
    bottom: '%', // Bring it closer to the bottom
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 9, // Adjust this value to increase or decrease font size
    },
    min: 0,  // Set the minimum value of the X-axis
    max: 100,  // Set the maximum value of the X-axis
  },
  yAxis: {
    type: 'category',
    data: boroughs,
    axisLabel: {
      interval: 0,  // Ensures all borough names are visible
      fontSize: 7, // Adjust this value to increase or decrease font size
      color: '#ffffff' // Ensures text is visible against dark background
    }
  }
  ,
  series: [
    {
      name: 'Drinking',
      type: 'bar',
      stack: 'total',
      emphasis: { focus: 'series' },
      itemStyle: { color: '#9b4dff' },
      data: drinkingData
    },
    {
      name: 'Shopping',
      type: 'bar',
      stack: 'total',
      emphasis: { focus: 'series' },
      itemStyle: { color: '#f3c847' },
      data: shopsData
    },
    {
      name: 'Entertainment',
      type: 'bar',
      stack: 'total',
      emphasis: { focus: 'series' },
      itemStyle: { color: '#e72074' },
      data: otherData
    }
  ]
};

// Initialize the chart
const stackedBarChart = echarts.init(document.getElementById('graph-container'));
stackedBarChart.setOption(stackedBarOption);
