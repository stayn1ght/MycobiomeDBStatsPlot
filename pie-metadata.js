// 在 echart 官网中使用
// 数据是假的，还需要统计收集到的数据具体是什么情况
// 画的图为metadataDistribution
option = {
  title: {
    text: 'Sample Metadata Completeness: Sex, Age, BMI',
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
        radius: ['0%', '50%'],
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
        { 
          value: 2507, name: 'none', selected: true,
          itemStyle:{
            color: "#C0C0C0"
          }
        },
        { 
          value: 377, name: 'only one',
          itemStyle:{
            color: "#00FF66"
          }
        },
        { 
          value: 819, name: 'two',
          itemStyle:{
            color: "#00802B"
          }
        },
        {
            value: 1187, name: 'all',
            itemStyle:{
                color: "#004014"
            }
        }
      ]
    },
  ]
}