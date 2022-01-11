var options = {
    series: [44, 55, 13],
    chart: {
    type: 'pie',
    width: 500
  },
  labels: ['Lorem', 'Ipsum', 'Dolum'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pieChart"), options);
  chart.render();