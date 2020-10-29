var data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86],
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',

      data: [65, 59, 80, 81, 56],
    },
  ],
};
var pdata = [
  {
    value: 300,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Af-Soomaali',
  },
  {
    value: 50,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'English',
  },
  {
    value: 100,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Math',
  },
];

var DoughData = [
  {
    value: 300,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Female',
  },
  {
    value: 100,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Male',
  },
];

var ctxp = $('#pieChartDemo').get(0).getContext('2d');
var pieChart = new Chart(ctxp).Pie(pdata);
var ctxb = $('#barChartDemo').get(0).getContext('2d');
var barChart = new Chart(ctxb).Bar(data);
var ctxd = $('#doughnutChartDemo').get(0).getContext('2d');
var doughnutChart = new Chart(ctxd).Doughnut(DoughData);
