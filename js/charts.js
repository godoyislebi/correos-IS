

var chart = AmCharts.makeChart("nivel-ind-chart", {
  "type": "serial",
  "theme": "light",
  "language":"es",
  "dataDateFormat": "DD-MM-YYYY",
  "precision": 0,

  "valueAxes": [{
    "stackType": "regular",
    "axisAlpha": 0.3,
    "gridAlpha": 0,
    //"title": "Total",
    //"totalText": "[[total]]",


    "labelFunction": function(value) {
      return "" + Math.round(value) + "";
    }
  }, {
    "id": "v2",
    //"title": "Nivel de servicio",
    "gridAlpha": 0,
    "position": "right",
    "autoGridCount": false,
        "labelFunction": function(value) {
      return "" + Math.round(value) + "%";
    }

  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#438f9e",
    "fillColors": "#438f9e",
    "fillAlphas": 1,
    "type": "column",
    "title": "No entregados",
    "valueField": "noEntregados",
    "clustered": false,
    "columnWidth": 0.4,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 120%'>[[value]]</b>"
  }, {
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#8f3846",
    "fillColors": "#8f3846",
    "fillAlphas": 1,
    "type": "column",
    "title": "Entregados",
    "valueField": "entregados",
    "clustered": false,
    "columnWidth": 0.4,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 120%'>[[value]]</b>"
  }, {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#757575",
    "bulletSize": 8,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#212121",
/*    "type": "smoothedLine",*/
    "title": "Nivel de servicio",
    "useLineColorForBulletBorder": true,
    "valueField": "servicio",
    "balloonText": "[[title]]<br /><b style='font-size: 120%'>[[value]]%</b>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true,

/*    "autoGridCount": false,
    "gridCount":2,
    "labelFrequency":2,*/
    
    "dateFormats":[{period:'fff',format:'JJ:NN:SS'},
    {period:'ss',format:'JJ:NN:SS'},
    {period:'mm',format:'JJ:NN'},
    {period:'hh',format:'JJ:NN'},
    {period:'DD',format:'DD / MM'},
    {period:'WW',format:'DD / MM'},
    {period:'MM',format:'MMM'},
    {period:'YYYY',format:'YYYY'}],

  },
  "legend": {
    "useGraphSettings": true,
    "position": "top",
    "align":"left",
    "marginRight":200,
    "right":50,
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
   "enabled": true
  },
  "dataProvider": [{
    "date": "01-03-2017",
    "servicio": 71,
    "entregados": 5,
    "noEntregados": 8
  }, {
    "date": "02-03-2017",
    "servicio": 74,
    "entregados": 4,
    "noEntregados": 6
  }, {
    "date": "03-03-2017",
    "servicio": 78,
    "entregados": 5,
    "noEntregados": 2
  }, {
    "date": "04-03-2017",
    "servicio": 85,
    "entregados": 8,
    "noEntregados": 9
  }, {
    "date": "05-03-2017",
    "servicio": 82,
    "entregados": 9,
    "noEntregados": 6
  }, {
    "date": "06-03-2017",
    "servicio": 83,
    "entregados": 3,
    "noEntregados": 5
  }, {
    "date": "07-03-2017",
    "servicio": 88,
    "entregados": 5,
    "noEntregados": 7
  }, {
    "date": "08-03-2017",
    "servicio": 85,
    "entregados": 7,
    "noEntregados": 6
  }, {
    "date": "09-03-2017",
    "servicio": 85,
    "entregados": 9,
    "noEntregados": 5
  }, {
    "date": "10-03-2017",
    "servicio": 80,
    "entregados": 5,
    "noEntregados": 8
  }]
});







var chart = AmCharts.makeChart("incidencias-ind-chart", {
  "type": "serial",
  "theme": "light",
  "language":"es",
  "dataDateFormat": "DD-MM-YYYY",
  "precision": 0,

  "valueAxes": [{
    "id": "v1",
    "title": "Cantidad",
    "position": "left",
    "autoGridCount": false,
    "labelFunction": function(value) {
      return "" + Math.round(value) + "";
    }
  }],
  "graphs": [{
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#438f9e",
    "fillColors": "#438f9e",
    "fillAlphas": 1,
    "type": "column",
    "title": "Total de envios",
    "valueField": "totalEnvios",
    "clustered": false,
    "columnWidth": 0.3,
    "legendValueText": "[[value]]",
    "balloonText": "[[title]]<br /><b style='font-size: 120%'>[[value]]</b>"
  }, {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#757575",
    "bulletSize": 8,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#212121",
/*    "type": "smoothedLine",*/
    "title": "Incidencias",
    "useLineColorForBulletBorder": true,
    "valueField": "incidencias",
    "balloonText": "[[title]]<br /><b style='font-size: 120%'>[[value]]</b>"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true,

/*    "autoGridCount": false,
    "gridCount":2,
    "labelFrequency":2,*/
    
    "dateFormats":[{period:'fff',format:'JJ:NN:SS'},
    {period:'ss',format:'JJ:NN:SS'},
    {period:'mm',format:'JJ:NN'},
    {period:'hh',format:'JJ:NN'},
    {period:'DD',format:'DD / MM'},
    {period:'WW',format:'DD / MM'},
    {period:'MM',format:'MMM'},
    {period:'YYYY',format:'YYYY'}],

  },
  "legend": {
    "useGraphSettings": true,
    "position": "top"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
   "enabled": true
  },
  "dataProvider": [{
    "date": "01-03-2017",
    "incidencias": 5,
    "totalEnvios": 71,
  }, {
    "date": "02-03-2017",
    "incidencias": 4,
    "totalEnvios": 74,
  }, {
    "date": "03-03-2017",
    "incidencias": 3,
    "totalEnvios": 78,
  }, {
    "date": "04-03-2017",
    "incidencias": 3,
    "totalEnvios": 85,
  }, {
    "date": "05-03-2017",
    "incidencias": 9,
    "totalEnvios": 82,
  }, {
    "date": "06-03-2017",
    "incidencias": 3,
    "totalEnvios": 80,
  }, {
    "date": "07-03-2017",
    "incidencias": 5,
    "totalEnvios": 88,
  }, {
    "date": "08-03-2017",
    "incidencias": 7,
    "totalEnvios": 85,
  }, {
    "date": "09-03-2017",
    "incidencias": 9,
    "totalEnvios": 85,
  }, {
    "date": "10-03-2017",
    "incidencias": 5,
    "totalEnvios": 80,
  }]
});








var chart = AmCharts.makeChart("proximas-entregas-chart", {
  "type": "serial",
  "theme": "light",
  "language":"es",
  "dataDateFormat": "DD-MM-YYYY",
  "categoryField": "date",
  "rotate": true,
  "startDuration": 1,
  "categoryAxis": {
    
    "gridPosition": "start",
    "position": "left",

    "parseDates": true,
    "dateFormats":[{period:'fff',format:'JJ:NN:SS'},
    {period:'ss',format:'JJ:NN:SS'},
    {period:'mm',format:'JJ:NN'},
    {period:'hh',format:'JJ:NN'},
    {period:'DD',format:'DD / MM'},
    {period:'WW',format:'DD / MM'},
    {period:'MM',format:'MMM'},
    {period:'YYYY',format:'YYYY'}],

  },
  "trendLines": [],
  "graphs": [
    {
      "balloonText": "Total:[[value]]",
      "fillAlphas": 0.8,
      "id": "AmGraph-1",
      "lineAlpha": 0.2,
      "title": "Total",
      "type": "column",
      "valueField": "Total",
       "fillColors": "#438f9e",
      "columnWidth": 0.3,
    }],
  "guides": [],
  "valueAxes": [
    {
      "id": "ValueAxis-1",
      "position": "top",
      "axisAlpha": 0,
      "labelFunction": function(value) {
      return "" + Math.round(value) + "";
      }
    }
  ],
  "allLabels": [],
  "balloon": {
    "borderThickness": 1,
  },
  "titles": [],
  "dataProvider": [
    {
      "date": "01-03-2017",
      "Total": 100,
    },
    {
      "date": "02-03-2017",
      "Total": 50,
    },
    {
      "date": "03-03-2017",
      "Total": 30,
    },
    {
      "date": "04-03-2017",
      "Total": 80,
    },
    {
      "date": "05-03-2017",
      "Total": 75,
    },
    {
      "date": "06-03-2017",
      "Total": 90,
    },
    {
      "date": "07-03-2017",
      "Total": 45,
    }
  ],
    "export": {
      "enabled": true
     }

});














var chart = AmCharts.makeChart("dias-de-entrega-chart", {
    "type": "serial",
    "theme": "light",
    "marginRight": 30,
    "marginLeft": 60,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":false,
    //"dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true,
        "maximum":"100",
        "minimum":"0",
        "labelFunction": function(value) {
        return "" + Math.round(value) + "%";
        }
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#757575",
        "bulletSize": 8,
        "hideBulletsCount": 50,
        "lineThickness": 2,
          "lineColor": "#438f9e",
        "title": "red line",
          "useLineColorForBulletBorder": true,
      
        "valueField": "value",
        "balloonText": "<span style='font-size:16px;'>[[value]]</span>"
    }],
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#438f9e",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },

    "categoryField": "date",
    "categoryAxis": {
      "gridThickness": 0,
        "parseDates": false,
        "dashLength": 1 ,
        "minorGridEnabled": true,
      
    },
    "export": {
        "enabled": true
    },
    "dataProvider": [{
        "date": "d + 1",
        "value": 80
    }, {
        "date": "d + 2",
        "value": 10
    }, {
        "date": "d + 3",
        "value": 20
    }, {
        "date": "d + 4",
        "value": 70
    }, {
        "date": "d + 5",
    "value": 50}]
});

chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}