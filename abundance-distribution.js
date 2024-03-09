const colors = ["#FBB4AE", "#B3CDE3"];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '50%',
    height: '30%',
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['mean abundance', 'prevalence'],
    top: '10%',
    right: '50%',
    orient: 'vertical'
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: [0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95]
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'number of species (log2 fold changed)',
      
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          // color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
  ],
  series: [
    {
      name: 'mean abundance',
      type: 'line',
      data: [11.07, 6.0, 3.81, 2.81, 1.0, 2.58, 0.0, 1.0, 1.58, 2.81]
    },
    {
      name: 'prevalence',
      type: 'line',
      data: [11.12, 3.58, 2.58, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
    },
  ]
};