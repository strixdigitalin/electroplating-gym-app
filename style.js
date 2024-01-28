document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var filterModal = document.getElementById("filterModal");
    var closeModalBtn = document.getElementById("closeModalBtn");

    openModalBtn.addEventListener("click", function() {
        filterModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        filterModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == filterModal) {
            filterModal.style.display = "none";
        }
    });

    // Update range values dynamically
    var range1 = document.getElementById("range1");
    var range1Value = document.getElementById("range1Value");
    range1.addEventListener("input", function() {
        range1Value.textContent = range1.value;
    });

    var range2 = document.getElementById("range2");
    var range2Value = document.getElementById("range2Value");
    range2.addEventListener("input", function() {
        range2Value.textContent = range2.value;
    });
});



var gaugeOptions = {
    chart: {
      type: 'solidgauge'
    },
  
    title: null,
  
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
  
    exporting: {
      enabled: false
    },
  
    tooltip: {
      enabled: false
    },
  
    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  };
  
  // The speed gauge
  var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 200,
      title: {
      
      }
    },
  
    credits: {
      enabled: false
    },
  
    series: [{
      name: 'Speed',
      data: [80],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">12 </span><br/>' +
          '<span style="font-size:12px;opacity:0.4">Total Slots</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: ' 12 Total Slots'
      }
    }]
  
  }));
  
  // The RPM gauge
  var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 5,
      title: {
        text: 'RPM'
      }
    },
  
    series: [{
      name: 'RPM',
      data: [1],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y:.1f}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">' +
          '* 1000 / min' +
          '</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: ' revolutions/min'
      }
    }]
  
  }));
  
  // Bring life to the dials
  setInterval(function () {
    // Speed
    var point,
      newVal,
      inc;
  
    if (chartSpeed) {
      point = chartSpeed.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;
  
      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }
  
      point.update(newVal);
    }
  
    // RPM
    if (chartRpm) {
      point = chartRpm.series[0].points[0];
      inc = Math.random() - 0.5;
      newVal = point.y + inc;
  
      if (newVal < 0 || newVal > 5) {
        newVal = point.y - inc;
      }
  
      point.update(newVal);
    }
  }, 2000);
  