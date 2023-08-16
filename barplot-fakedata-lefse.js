// 使用echarts官网画图
// 数据假
const labelRight = {
  position: 'right'
};
option = {
  title: {
    text: 'Bar Chart with Negative Value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      "Vishniacozyma",
      "Pichia",
      "Aspergillus",
      "Penicillium",
      "Schwanniomyces",
      "Trametes",
      "Tausonia",
      "Mrakia",
      "Epicoccum",
      "Moesziomyces",
      "Candida",
      "Malassezia",
      "Coprinopsis",
      "Sarocladium",
      "Acremonium",
      "Candida",
      "Penicillium",
      "Cystobasidium",
      "Barnettozyma",
      "Occultifur"
    ]
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: -0.07, label: labelRight },
        { value: -0.09, label: labelRight },
        { value: -0.17, label: labelRight },
        { value: -0.23, label: labelRight },
        { value: -0.36, label: labelRight },
        0.08,
        0.18,
        0.2,
        0.44,
        0.47
      ]
    }
  ]
};