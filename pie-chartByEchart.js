// 在 echart 官网中使用
// 使用的数据不是从收集的项目中统计得到的
option = {
  title: {
    show: false,
    text: 'phenotype distribution',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Heath status',
      type: 'pie',
      selectedMode: 'single',
      radius: '70%',
      data: [
        { 
          value: 1048, name: 'unknown',
          selected: true,
          itemStyle: {
            color: "#CFEAF1"
          }
        },
        { value: 735, name: 'Alzheimer Disease' },
        { value: 580, name: 'Type 2 Diabetes ' },
        { value: 648, name: "Ulcerative Colitis" },
        { value: 480, name: "COVID-19" }
      ],
      label:{
        formatter: '{b}\n\n{d}%',
        fontSize: 16,
        // position: "inner"
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

