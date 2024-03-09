// 使用 echarts 作图
option = {
  title: {
    text: 'Basic Graph'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      name: 'disease network',
      layout: 'force',
      roam: true,
      label: {
          position: 'right',
          formatter: '{b}',
      },
      zoom: 5,
      labelLayout: {
          hideOverlap: true, // 隐藏重叠的标签
      },
      data: [
        {
          id: 0,
          name: 'Candida',
          draggable: true,
            label: {
                // show: showLable[i],
                fontWeight:  'normal',
                fontSize: 13,
                show: true,
                position: 'middle',
                formatter: '{b}',
            },
            symbolSize: 8,
            symbol: 'circle',
        },
        {
          id: 1,
          name: 'Irritable Bowel Syndrome',
          draggable: true,
            label: {
                // show: showLable[i],
                fontWeight:  'bold',
                fontSize: 15,
                show: true,
                position: 'middle',
                formatter: '{b}',
            },
            symbolSize: 8,
            symbol: 'pin',
        },
        {
          id: 2,
          name: 'Tausonia',
          draggable: true,
            label: {
                // show: showLable[i],
                fontWeight:  'normal',
                fontSize: 13,
                show: true,
                position: 'middle',
                formatter: '{b}',
            },
            symbolSize: 8,
            symbol: 'circle',
        },
        {
          id: 3,
          name: 'Alzheimer Disease',
          draggable: true,
            label: {
                // show: showLable[i],
                fontWeight:  'bold',
                fontSize: 15,
                show: true,
                position: 'middle',
                formatter: '{b}',
            },
            symbolSize: 8,
            symbol: 'pin',
        },
        {
          id: 4,
          name: 'COVID-19',
          draggable: true,
            label: {
                // show: showLable[i],
                fontWeight:  'bold',
                fontSize: 15,
                show: true,
                position: 'middle',
                formatter: '{b}',
            },
            symbolSize: 8,
            symbol: 'pin'
        },
        {
          id: 5,
          name: 'Malassezia',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        },
        {
          id: 6,
          name: 'Moesziomyces',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        },
        {
          id: 7,
          name: 'Trametes',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        },
        {
          id: 8,
          name: 'Kurtzmaniella',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        },
        {
          id: 9,
          name: 'Saccharomycopsis',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        },
        {
          id: 10,
          name: 'Mucor',
          draggable: true,
          label: {
              // show: showLable[i],
              fontWeight:  'normal',
              fontSize: 13,
              show: true,
              position: 'middle',
              formatter: '{b}',
          },
          symbolSize: 8,
          symbol: 'circle',
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          value: 1,
          lineStyle: {
                color:  'red',
                curveness: 0,
                width: 1,
            },
            emphasis: {
                focus: 'adjacency',
            }
        },
        {
          source: 2,
          target: 1,
          value: 1,
          lineStyle: {
                color:  'blue',
                curveness: 0,
                width: 1,
            },
            emphasis: {
                focus: 'adjacency',
            }
        },
        {
          source: 0,
          target: 3,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 0,
          target: 4,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 1,
          target: 5,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 6,
          target: 1,
          value: 1,
          lineStyle: {
              color:  'blue',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 6,
          target: 4,
          value: 1,
          lineStyle: {
              color:  'blue',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 7,
          target: 3,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          }
        },
        {
          source: 7,
          target: 1,
          value: 1,
          lineStyle: {
              color:  'blue',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          },
        },
        {
          source: 8,
          target: 3,
          value: 1,
          lineStyle: {
              color:  'blue',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          },
        },
        {
          source: 8,
          target: 4,
          value: 1,
          lineStyle: {
              color:  'blue',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          },
        },
        {
          source: 9,
          target: 4,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          },
        },
        {
          source: 10,
          target: 4,
          value: 1,
          lineStyle: {
              color:  'red',
              curveness: 0,
              width: 1,
          },
          emphasis: {
              focus: 'adjacency',
          },
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        
      }
    }
  ]
};