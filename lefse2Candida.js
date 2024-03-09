option = {
    title: {
        text: 'Candida abicans',
    },
    color: "#FDCDAC",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '55%',
        // bottom: '40%',
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
            data: ['PRJEB42375\n IBS', 'PRJNA678832\n AD', 'PRJCA010668\n AD', 'PRJNA662173\n T2D', 'PRJNA419104\n CDI'],
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
            name: 'Disease enriched',
            type: 'bar',
            barWidth: '80%',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.09)'
            },
            data: [4.7, 4.75, 4.82, 4.9, 5.31]
        }
    ]
};
