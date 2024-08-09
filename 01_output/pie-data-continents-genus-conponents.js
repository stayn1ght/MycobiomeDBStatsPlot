option = {
  dataset: [
    {
      source: [
        ["taxon_id","Asia","Europe","North America"],
        ["Pichia", 0.15655864417177914, 0.24674828205128208, 0.0541786], 
        ["Saccharomyces", 0.080883625, 0.2614744814814815, 0.27484715322580644], 
        ["Debaryomyces", 0.1893049357142857, 0.22725202877697842, 0.2526571111111111], 
        ["Aspergillus", 0.1548908824742268, 0.24220439805825242, 0.22563281818181818], 
        ["Penicillium", 0.16994316485900218, 0.4536107464114833, 0.3711349333333333], 
        ["Talaromyces", 0.16755671428571428, 0.20668688235294116, 0.17385677272727273], 
        ["Candida", 0.16700877962577962, 0.22262795999999999, 0.2786346927710844], 
        ["Cladosporium", 0.10638855555555554, 0.135803, 0.2012729120879121], 
        ["Fusarium", 0.13913533139534884, 0.17977702898550724, 0.20376856521739128], 
        ["Rhodotorula", 0.18629413422818794, 0.2000414827586207, 0.20328256944444445], 
        ["Trichosporon", 0.13280845925925924, 0.19957216666666666, 0.3824016666666667], 
        ["Aureobasidium", 0.1335247113402062, 0.12350448387096774, 0.10971], 
        ["Alternaria", 0.13790140740740742, 0.1540419090909091, 0.20906499999999997], 
        ["Metschnikowia", 0.1912403137254902, 0.3944428208955224, 0.5675365], 
        ["Didymella", 0.26949376315789475, 0.465852375, 0.7190173076923077], 
        ["Malassezia", 0.17522620833333333, 0.16674894285714284, 0.16421289361702127], 
        ["Wallemia", 0.1525523370786517, 0.13802546875, 0.20330045454545456], 
        ["Meyerozyma", 0.13499191150442477, 0.16093128571428572, 0.134882], 
        ["Cutaneotrichosporon", 0.1741028686868687, 0.1707360909090909, 0.1782834], 
        ["Vishniacozyma", 0.19062698684210524, 0.15143510638297872, 0.16505640625],
        ["Others", 1.830622803555316, 2.6327355128238796, 2.6754878071393566], 
        ]
    },
  ],
  legend: {
    top: '20%',
    right: '25%',
    orient: 'vertical',
  },
  color: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#F4D9E7", "#FFFF99"],
  title: [
    {
      text: 'Asia',
      left: '50%',
      top: '13%',
      textAlign: 'center'
    },
    {
      text: 'Europe',
      left: '50%',
      top: '38%',
      textAlign: 'center'
    },
    {
      text: 'North America',
      left: '50%',
      top: '63%',
      textAlign: 'center'
    },
  ],
  series: [
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '25%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'Asia'
      }
    },
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'Europe'
      }
    },
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '75%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'North America'
      }
    }
  ],
  // Optional. Only for responsive layout:
  
};option = {
  dataset: [
    {
      source: [
        ["taxon_id","Asia","Europe","North America"],
        ["Pichia", 0.15655864417177914, 0.24674828205128208, 0.0541786], 
        ["Saccharomyces", 0.080883625, 0.2614744814814815, 0.27484715322580644], 
        ["Debaryomyces", 0.1893049357142857, 0.22725202877697842, 0.2526571111111111], 
        ["Aspergillus", 0.1548908824742268, 0.24220439805825242, 0.22563281818181818], 
        ["Penicillium", 0.16994316485900218, 0.4536107464114833, 0.3711349333333333], 
        ["Talaromyces", 0.16755671428571428, 0.20668688235294116, 0.17385677272727273], 
        ["Candida", 0.16700877962577962, 0.22262795999999999, 0.2786346927710844], 
        ["Cladosporium", 0.10638855555555554, 0.135803, 0.2012729120879121], 
        ["Fusarium", 0.13913533139534884, 0.17977702898550724, 0.20376856521739128], 
        ["Rhodotorula", 0.18629413422818794, 0.2000414827586207, 0.20328256944444445], 
        ["Trichosporon", 0.13280845925925924, 0.19957216666666666, 0.3824016666666667], 
        ["Aureobasidium", 0.1335247113402062, 0.12350448387096774, 0.10971], 
        ["Alternaria", 0.13790140740740742, 0.1540419090909091, 0.20906499999999997], 
        ["Metschnikowia", 0.1912403137254902, 0.3944428208955224, 0.5675365], 
        ["Didymella", 0.26949376315789475, 0.465852375, 0.7190173076923077], 
        ["Malassezia", 0.17522620833333333, 0.16674894285714284, 0.16421289361702127], 
        ["Wallemia", 0.1525523370786517, 0.13802546875, 0.20330045454545456], 
        ["Meyerozyma", 0.13499191150442477, 0.16093128571428572, 0.134882], 
        ["Cutaneotrichosporon", 0.1741028686868687, 0.1707360909090909, 0.1782834], 
        ["Vishniacozyma", 0.19062698684210524, 0.15143510638297872, 0.16505640625],
        ["Others", 1.830622803555316, 2.6327355128238796, 2.6754878071393566], 
        ]
    },
  ],
  legend: {
    top: '20%',
    right: '25%',
    orient: 'vertical',
  },
  color: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#F4D9E7", "#FFFF99"],
  title: [
    {
      text: 'Asia',
      left: '50%',
      top: '13%',
      textAlign: 'center'
    },
    {
      text: 'Europe',
      left: '50%',
      top: '38%',
      textAlign: 'center'
    },
    {
      text: 'North America',
      left: '50%',
      top: '63%',
      textAlign: 'center'
    },
  ],
  series: [
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '25%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'Asia'
      }
    },
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'Europe'
      }
    },
    {
      type: 'pie',
      radius: 100,
      center: ['50%', '75%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0.5
      },
      encode: {
        itemName: 'taxon_id',
        value: 'North America'
      }
    }
  ],
  // Optional. Only for responsive layout:
  
};