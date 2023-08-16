// 在 echart 官网中使用
// 数据是假的，还需要统计收集到的数据具体是什么情况
// 画的图为metadataDistribution
option = {
  title: {
    text: 'Nr. of available metadata info: age, sex, BMI',
    subtext: 'with clear health status',
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
      radius: [0, '30%'],
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
        { value: 1148, name: 'Health' },
        { value: 934, name: 'Disease' },
        { 
          value: 779, 
          name: 'unknown', 
          selected: true, 
          itemStyle:{
            color: "#E7DAD2"
          }
        }
      ]
    },
    {
      name: 'Nr. of metadata',
      type: 'pie',
      radius: ['45%', '60%'],
      selectedMode: "single",
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 448, name: 'none', selected: true,
          itemStyle:{
            color: "#FBDAE2"
          }
        },
        { value: 1285, name: 'only one' },
        { value: 422, name: 'with two' },
        { value: 1154, name: 'all three' },
        // { value: 2861, name: "total"}
      ]
    }
  ]
};