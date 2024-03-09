option = {
    title: {
        text: 'PRJNA306760: Crohn Disease vs. Health'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '3%',
        right: '50%',
        height: "30%",
        // bottom: '30%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
        },
        name: 'LDA score',
        position: 'top',
        boundaryGap: ['1%', '1%']
    },
    yAxis: {
        type: 'category',
        data: ["Fusarium oxysporum", "Pichia cecembensis", "Naganishia albida", "Schizophyllum commune",
            "Chloridium humicola", "Penicillium corylophilum", "Malassezia globosa", "Malassezia restricta",
            "Meyerozyma guilliermondii", "Vishniacozyma victoriae", "Aureobasidium caulivorum", "Penicillium digitatum",
            "Saccharomyces cerevisiae", "Curvularia inaequalis", "Steccherinum bourdotii",
            "Candida metapsilosis", "Gloeophyllum trabeum", "Hyalorbilia oviparasitica"]
    },
    series: [
        {
            name: 'Crohn Disease',
            type: 'bar',
            data: [{ 'value': -4.7519085612042975, 'itemStyle': { 'color': '#B3E2CD' } }, { 'value': -4.252031316759085, 'itemStyle': { 'color': '#B3E2CD' } }, { 'value': -3.7614796390968968, 'itemStyle': { 'color': '#B3E2CD' } }, { 'value': -3.321983835115316, 'itemStyle': { 'color': '#B3E2CD' } }, { 'value': 3.03495085766148, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.1005172623417203, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.175014704262751, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.213719839622016, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.422404061279375, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.626485482105021, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.687135232275972, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.741510840661621, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.749432153575151, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.777102957789, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 3.918300665358754, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 4.061709928019836, 'itemStyle': { 'color': '#FDCDAC' } }, { 'value': 4.099510476115156, 'itemStyle': { 'color': '#FDCDAC' } },
            { 'value': 4.132032697972798, 'itemStyle': { 'color': '#FDCDAC' } }]
        },
    ]
};

