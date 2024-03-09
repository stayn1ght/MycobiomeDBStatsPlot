option = {
    title: {
        text: 'Aspergillus flavus',
    },
    color: "#B3E2CD",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '60%',
        //   bottom: '40%',
        height: "30%",
        containLabel: true
    },
    legend: {
        show: true,
        top: '1%',
        right: '60%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['PRJNA662173\n T2D', 'PRJNA914487\n BC', 'PRJCA010668\n AD', 'PRJNA861876\n CD'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'LDA score',

        }
    ],
    series: [
        {
            name: 'Health enriched',
            type: 'bar',
            barWidth: '80%',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.09)'
            },
            data: [2.42, 2.9, 4.43, 4.7]
        }
    ]
};
