// 在 echart 官网中使用
// 数据是假的，还需要统计收集到的数据具体是什么情况
// 画的图为metadataDistribution
option = {
  title: {
    text: 'Nr. of available health status',
    left: "center"
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    // show: false,
    data: [],
    
  },
  series: [
    {
      name: 'Nr. of metadata',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '50%'],
      label: {
        // show: false,
        position: 'inner',
        fontSize: 14,
        formatter: '{b}\n\n{d}%'
      },
      labelLine: {
        show: false
      },
      data: [
        { 
          value: 444, name: 'Health',
          itemStyle:{
            color: "#008000"
          } 
        },
        { 
          value: 515, name: 'Disease',
          itemStyle:{
            color: "#B22222"
          }
        },
        { 
          value: 397, 
          name: 'unknown', 
          selected: true, 
          itemStyle:{
            color: "#C0C0C0"
          }
        }
      ]
    },
    
  ]
};