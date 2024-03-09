// 在 echart 官网中使用
// 数据是假的，还需要统计收集到的数据具体是什么情况
// 画的图为metadataDistribution
option = {
    title: {
      text: 'Sample Composition: Health, Disease, and Unknown Status',
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
            name: 'Sample Composition: Health, Disease, and Unknown Status',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
            label: {
                // show: false,
                position: 'inner',
                fontSize: 14,
                // 显示name，百分比和值
                formatter: '{b}\n\n{d}% ({c})',
            },
            labelLine: {
                show: false
            },
            data: [
                { 
                    value: 2066, name: 'Health',
                    itemStyle:{
                    color: "#008000"
                    } 
                },
                { 
                    value: 1875, name: 'Disease',
                    itemStyle:{
                    color: "#B22222"
                    }
                },
                { 
                    value: 949, 
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