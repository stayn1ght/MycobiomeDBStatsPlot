// prettier-ignore
const species = [
    'Aspergillus flavus', 'Filobasidium uniguttulatum', 'Schizophyllum commune', 'Candida albicans', 'Candida tropicalis', 'Penicillium digitatum', 'Aspergillus penicillioides', 'Aspergillus versicolor', 'Pichia cephalocereana', 'Malassezia furfur', 'Aspergillus piperis', 'Papiliotrema terrestris', 'Candida hyderabadensis', 'Cutaneotrichosporon cyanovorans', 'Vishniacozyma victoriae'
  ];
  // prettier-ignore
  const project = [
       'PRJCA010668','PRJNA306760','PRJNA419104','PRJNA662173','PRJNA678832','PRJNA861876','PRJNA914487'
  ];
  // prettier-ignore
  
  const data = [[0, 0, -4.43], [0, 3, -2.42], [0, 5, -4.7], [0, 6, -2.9], [1, 0, 3.05], [1, 5, -3.88], [2, 1, -3.32], [2, 4, 3.95], [2, 6, -2.99], [3, 0, 4.82], [3, 2, 5.31], [3, 3, 4.9], [3, 4, 4.75], [4, 2, 4.63], [4, 4, 4.25], [4, 5, 4.2], [5, 1, 3.74], [5, 4, 3.57], [5, 5, -3.26], [6, 0, -3.03], [6, 2, -4.86], [7, 0, -4.03], [7, 2, -4.04], [7, 3, 3.6], [7, 6, 3.8], [8, 0, -3.35], [8, 5, -3.17], [8, 6, -3.11], [9, 3, 3.54], [9, 5, -2.73], [9, 6, -4.19], [10, 0, -4.02], [10, 4, -3.46], [10, 5, -3.08], [11, 5, -2.94], [11, 6, -2.37], [12, 1, -2.96], [12, 3, 4.11], [12, 6, 4.58], [13, 0, 4.12], [13, 5, 4.15], [13, 6, -3.5], [14, 1, 3.63], [14, 2, 3.15], [14, 6, -3.23]]
  ;
  option = {
    title:{
      text: 'Marker species across projects',
      subtext: 'LDA score',
    },
    color: "#ffffff",
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '33%',
      right: '30%',
      top: '5%'
    },
    xAxis: {
      type: 'category',
      data: species,
      axisLabel: {
        rotate: 45
      }, 
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: project,
      splitArea: {
        show: true
      }
    },
    visualMap: [
      {
        
        // range: [-5, 5],
        // calculable: true,
        pieces: [
          { max: -4, label: '< -4' },
          { min: -4, max: -3, label: '-4~-3' },
          { min: -3, max: -2, label: '-3~-2' },
          // { min: -2, max: -1, label: '-4~-3' },
          // { min: -1, max: -0, label: '-4~-3' },
          // { min: 0, max: 1, label: '-4~-3' },
          // { min: 1, max: 2, label: '-4~-3' },
          { min: 2, max: 3, label: '2~3' },
          { min: 3, max: 4, label: '3~4' },
          { min: 4, label: '> 4' },
        ],
        inRange: {
          color: ['#31A354', '#ffffff', '#FDCDAC' ] 
        },
        text: ['Disease enriched', 'Health enriched'],
        orient: 'horizontal',
        bottom: '45%',
        left: '25%'
      },
      
      ], 
    series: [
      {
        name: 'lda',
        type: 'heatmap',
        data: data,
        
        label: {
          show: true
        },
        itemStyle: {
          borderColor: "#ffffff",
          borderWidth: 5,
          
        },
        
        
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };