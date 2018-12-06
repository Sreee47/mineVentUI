import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CommonServiceService } from '../../common-service.service';



@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private chart: AmChart;
  asset: any[];
  zoneAsset: any[];
  zones: any;
  workers: any;
  zoneWorkers: any[];
  gasLevels: any[];
  zoneGasLevels: any[];
  zoneAssets: any[];
  date: any;
  date0: any;
  date1: any;
  date2: any;
  date3: any;
  date4: any;
  colourRed: any = '#B71C1C';
  colourYellow: any = 'orange';
  colourGreen: any = 'green';
  triggered: boolean = false;
  alert: boolean = false;
  flag: boolean = true;
  constructor(private AmCharts: AmChartsService, private commonService: CommonServiceService) { //two
    this.zones = new Array();
  }//two

  ngOnInit(): void { //3
    //this.getGeoLevels()
     this.getZones()
    this.getWorkers();
    //   this.getGasLevels();

/*    this.zones.push(
    { id': 'z1', 'stope_name': 'stope1', 'number_of_people': '4','temperature': 35, 'humidity': 20, 'mobile_assets': "2",'is_geofenced':false },
        { 'mapid': 'zone2', 'zone_name': 'Stope 2', 'id': 'z2', 'name': 'zone_2', 'color': 'orange', 'number': '55', 'manager': 'Richard T', 'temperature': 43, 'pressure': 55, 'asset': "A" },
        { 'mapid': 'zone3', 'zone_name': 'Stope 3', 'id': 'z3', 'name': 'zone_3', 'color': 'orange', 'number': '65', 'manager': 'Thomas E', 'temperature': 44, 'pressure': 33, 'asset': "A" },
        { 'mapid': 'zone4', 'zone_name': 'Stope 4', 'id': 'z4', 'name': 'zone_4', 'color': '#00CC00', 'number': '97', 'manager': 'Harish J', 'temperature': 65, 'pressure': 22, 'asset': "A" },
         { 'mapid': 'zone7', 'zone_name': 'Stope 5', 'id': 'z7', 'name': 'zone_7', 'color': '#00CC00', 'number': '97', 'manager': 'Harish J', 'temperature': 65, 'pressure': 22 , 'asset': "A"},
          { 'mapid': 'zone8', 'zone_name': 'Stope 6', 'id': 'z8', 'name': 'zone_8', 'color': '#00CC00', 'number': '97', 'manager': 'Harish J', 'temperature': 65, 'pressure': 22 , 'asset': "A"},
      );*/

    this.workers = new Array();
    /* this.workers.push(
       { 'zone': 'zone_1', 'name': 'John, Jack', 'role': 'Field Manager', 'status': 'online', 'time': '3 mins', 'level': 'level 1A', 'rightZone': true, 'hrs': 3 },
       { 'zone': 'zone_1', 'name': 'Thomas, Alex', 'role': 'Worker', 'status': 'online', 'time': '2 mins', 'level': 'level 1B', 'rightZone': true, 'hrs': 7 },
       { 'zone': 'zone_1', 'name': 'Mathew, Jane', 'role': 'Worker', 'status': 'online', 'time': '4 mins', 'level': 'level 2A', 'rightZone': true, 'hrs': 3.5 },
       { 'zone': 'zone_1', 'name': 'Richard, Shelby', 'role': 'Worker', 'status': 'away', 'time': '15 mins', 'level': 'level 1A', 'rightZone': false, 'hrs': 8.5 },
       { 'zone': 'zone_2', 'name': 'Church, Malcolm', 'role': 'Worker', 'status': 'online', 'time': '4 mins', 'level': 'level 1C', 'rightZone': true, 'hrs': 4 },
       { 'zone': 'zone_2', 'name': 'Hamilton, Griffin', 'role': 'Worker', 'status': 'unknown', 'time': '48 mins', 'level': 'level 2A', 'rightZone': true, 'hrs': 4.5 },
       { 'zone': 'zone_2', 'name': 'Arias, Mathew', 'role': 'Worker', 'status': 'online', 'time': '4 mins', 'level': 'level 2A', 'rightZone': false, 'hrs': 7.5 },
       { 'zone': 'zone_2', 'name': 'Thomas, Jane', 'role': 'Worker', 'status': 'unknown', 'time': '3 hrs', 'level': 'level 2B', 'rightZone': true, 'hrs': 6 },
       { 'zone': 'zone_2', 'name': 'Barr, Harrison ', 'role': 'Worker', 'status': 'away', 'time': '14 mins', 'level': 'level 1C', 'rightZone': true, 'hrs': 7 },
       { 'zone': 'zone_3', 'name': 'Farrell, Marley', 'role': 'Worker', 'status': 'away', 'time': '11 mins', 'level': 'level 1D', 'rightZone': true, 'hrs': 5 },
       { 'zone': 'zone_3', 'name': 'Lopez, Leo', 'role': 'Worker', 'status': 'online', 'time': '3 mins', 'level': 'level 2A', 'rightZone': true, 'hrs': 2 },
       { 'zone': 'zone_3', 'name': 'Stone, Wesley', 'role': 'Worker', 'status': 'online', 'time': '3 mins', 'level': 'level 2A', 'rightZone': false, 'hrs': 3.5 },
       { 'zone': 'zone_3', 'name': 'Cowan, Rylie', 'role': 'Worker', 'status': 'away', 'time': '13 mins', 'level': 'level 1B', 'rightZone': true, 'hrs': 4.5 },
       { 'zone': 'zone_4', 'name': 'Church, Malcolm', 'role': 'Worker', 'status': 'online', 'time': '3 mins', 'level': 'level 1B', 'rightZone': true, 'hrs': 5 },
       { 'zone': 'zone_4', 'name': 'Hamilton, Griffin', 'role': 'Worker', 'status': 'online', 'time': '2 mins', 'level': 'level 1C', 'rightZone': true, 'hrs': 9 },
       { 'zone': 'zone_4', 'name': 'Arias, Mathew', 'role': 'Worker', 'status': 'online', 'time': '2 mins', 'level': 'level 2A', 'rightZone': true, 'hrs': 6.5 },
       { 'zone': 'zone_4', 'name': 'Fleming, Muhammad', 'role': 'Worker', 'status': 'away', 'time': '14 mins', 'level': 'level 1A', 'rightZone': true, 'hrs': 10 });
 
 */

    this.gasLevels = new Array();
    this.gasLevels.push(
      { 'mapid': 'zone1', 'O2': '90', 'SO2': '70', 'CO': '80', 'CH4': '7', 'rpm': 45.8, 'meas': 30.4, 'sp': 20 },
      { 'mapid': 'zone2', 'O2': '65', 'SO2': '50', 'CO': '86', 'CH4': '70', 'rpm': 22.7, 'meas': 8.9, 'sp': 5 },
      { 'mapid': 'zone3', 'O2': '90', 'SO2': '40', 'CO': '56', 'CH4': '71', 'rpm': 12.7, 'meas': 21.6, 'sp': 19.5 },
      { 'mapid': 'zone4', 'O2': '35', 'SO2': '80', 'CO': '85', 'CH4': '78', 'rpm': 55.3, 'meas': 11.6, 'sp': 23.7 },
      { 'mapid': 'zone7', 'O2': '35', 'SO2': '80', 'CO': '85', 'CH4': '78', 'rpm': 55.3, 'meas': 11.6, 'sp': 23.7 },
      { 'mapid': 'zone8', 'O2': '35', 'SO2': '80', 'CO': '85', 'CH4': '78', 'rpm': 55.3, 'meas': 11.6, 'sp': 23.7 },
    );

    this.asset = new Array();
    this.asset.push(
      { 'mapid': 'zone1', 'id': 'A1000', 'type': 'Dumper', 'operator': 'John' },
      { 'mapid': 'zone2', 'id': 'A1001', 'type': 'Drilling', 'operator': 'Jack' },
      { 'mapid': 'zone3', 'id': 'A1002', 'type': 'Dumper', 'operator': 'Hill' },
    );


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.getZones();
  } //3
  ngAfterViewInit() {//4
    this.func();



  }//4

  func() {

    this.date = Date.now();
    this.date0 = Date.now() - 150000;
    this.date1 = Date.now() - 300000;
    this.date2 = Date.now() - 600000;
    this.date3 = Date.now() - 900000;


    const gaugeChart1 = this.AmCharts.makeChart('zone1', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[0].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[0].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[0].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[0].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);


    const gaugeChart2 = this.AmCharts.makeChart('zone2', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[1].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[1].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[1].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[1].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[1].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[1].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[1].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[1].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);

    const gaugeChart3 = this.AmCharts.makeChart('zone3', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[2].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[2].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[2].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[2].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[2].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[2].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[2].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[2].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);

    const gaugeChart4 = this.AmCharts.makeChart('zone4', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[3].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[3].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[3].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[3].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);
    const gaugeChart6 = this.AmCharts.makeChart('zone8', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[0].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[0].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[0].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[0].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);
    const gaugeChart5 = this.AmCharts.makeChart('zone7', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].O2),
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': this.gasLevels[0].O2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourYellow,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[0].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[0].CO + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '25%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[0].CH4),
          'radius': '40%',
          'innerRadius': '25%',
          'balloonText': this.gasLevels[0].CH4 + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CH4',
        'x': '49%',
        'y': '32%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    }, 0);
    for (var i in this.zones) {
      console.log("print" + i)
      var chart = this.AmCharts.makeChart(this.zones[i].mapid + '-O2', {
        "hideCredits": true,
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "country": "O2",
          "visits": this.gasLevels[i].O2,
          "color": this.getColor(this.gasLevels[i].O2)
        }],
        "valueAxes": [{
          "gridColor": "#343534",
          "color": "#343534",
          "gridAlpha": 0.2,
          "dashLength": 0,
          "minimum": 0,
          "maximum": 100,
          "strictMinMax": true,
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          // "tickPosition": "start",
          // "tickLength": 10,
          // "color": "#888",
          "labelsEnabled": false
        },
        "export": {
          "enabled": false
        }

      }, 0);


      var chart = this.AmCharts.makeChart(this.zones[i].mapid + '-SO2', {
        "hideCredits": true,
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "country": "SO2",
          "visits": this.gasLevels[i].SO2,
          "color": this.getColor(this.gasLevels[i].SO2),
        }],
        "valueAxes": [{
          "gridColor": "#343534",
          "color": "#343534",
          "gridAlpha": 0.2,
          "dashLength": 0,
          "minimum": 0,
          "maximum": 100,
          "strictMinMax": true,
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          // "tickPosition": "start",
          // "tickLength": 10,
          // "color": "#888",
          "labelsEnabled": false
        },
        "export": {
          "enabled": false
        }

      }, 0);

      var chart = this.AmCharts.makeChart(this.zones[i].mapid + '-CO', {
        "hideCredits": true,
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "country": "CO",
          "visits": this.gasLevels[i].CO,
          "color": this.getColor(this.gasLevels[i].CO),
        }],
        "valueAxes": [{
          "gridColor": "#343534",
          "color": "#343534",
          "gridAlpha": 0.2,
          "dashLength": 0,
          "minimum": 0,
          "maximum": 100,
          "strictMinMax": true,
          "labelColor": "white",
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          // "tickPosition": "start",
          // "tickLength": 10,
          // "color": "#888",
          "labelsEnabled": false
        },
        "export": {
          "enabled": false
        }

      }, 0);
      var chart = this.AmCharts.makeChart(this.zones[i].mapid + '-CH4', {
        "hideCredits": true,
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "country": "CH4",
          "visits": this.gasLevels[i].CH4,
          "color": this.getColor(this.gasLevels[i].CH4),
        }],
        "valueAxes": [{
          "gridColor": "#343534",
          "color": "#343534",
          "gridAlpha": 0.2,
          "dashLength": 0,
          "minimum": 0,
          "maximum": 100,
          "strictMinMax": true,
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          // "tickPosition": "start",
          // "tickLength": 10,
          // "color": "#888",
          "labelsEnabled": false
        },
        "export": {
          "enabled": false
        }

      }, 0);
    }


    document.getElementById('Tab1').style.display = "block";
    const modal = document.getElementById('myModal');
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }


  getColor(val) {
    if (Number(val) < 25) {
      return this.colourRed
    }
    else if (Number(val) > 75) {
      return this.colourGreen
    }
    else {
      return this.colourYellow
    }
  }
  // showMessage() {
  //      document.getElementById('msg').style.display = 'block';
  // }
  addZone() {
    this.zones.push({ 'name': 'zone_' + String(Number(this.zones[this.zones.length - 1].name[5]) + 1) });
  }

  checkValue(num) {
    if (num < 7) {
      return 1;
    }
    else {
      if (num <= 8 && num >= 7) {
        return 2;
      }
      else {
        return 3;
      }
    }
  }
  triggeredZone(zone_name) {
    this.alert = true;
    this.triggered = true;

  }

  triggerZone(zname) {
    this.alert = true;
    this.triggered = true;
    console.log("triggered")

    if (document.getElementById('z5')) {
      document.getElementById('z5').id = 'z4';
      console.log("triggered 1")

    }
    if (document.getElementById('z6')) {
      document.getElementById('z6').id = 'z4';
      console.log("triggered 2")

    }
    document.getElementById('zone4-title').style.color = "red";

    document.getElementById('alert').style.display = 'block';

    let i = 0;
    for (i; i < this.zones.length; i++) {
      console.log(this.zones[i]);
      document.getElementById(this.zones[i].name).style.color = '#00CC00';
    }
    console.log(zname);
    document.getElementById(zname).style.color = 'white';
    document.getElementById('z4').id = 'z5';

    setTimeout(function () { document.getElementById('msg').style.display = 'block'; }, 10000);

    let j = 0;
    let k = 0;
    let zn = '';
    j = Number(zname[5]);
    if (j % 2 != 0) {

      k = j + 1;
      if (k <= this.zones.length) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }
      k = j + 2;
      if (k <= this.zones.length) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }
      k = j - 2;
      if (k > 0) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }
    }
    else {
      k = j + 2;
      if (k <= this.zones.length) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }
      k = j - 1;
      if (k > 0) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }
      k = j - 2;
      if (k > 0) {
        zn = 'zone_' + String(k);
        document.getElementById(zn).style.color = 'orange'
      }

    }




    const gaugeChart4 = this.AmCharts.makeChart('zone4', {
      'hideCredits': true,
      'type': 'gauge',
      'theme': 'none',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 270,
        'bands': [{
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%',
        }, {
          'color': this.colourRed,
          'startValue': 0,
          'endValue': 20,
          'radius': '100%',
          'innerRadius': '85%',
          'balloonText': '20%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '80%',
          'innerRadius': '65%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].SO2),
          'radius': '80%',
          'innerRadius': '65%',
          'balloonText': this.gasLevels[3].SO2 + '%',
        }, {
          'color': '#eee',
          'startValue': 0,
          'endValue': 100,
          'radius': '60%',
          'innerRadius': '45%',
        }, {
          'color': this.colourGreen,
          'startValue': 0,
          'endValue': Number(this.gasLevels[3].CO),
          'radius': '60%',
          'innerRadius': '45%',
          'balloonText': this.gasLevels[3].CO + '%',
        }],
      }],
      'allLabels': [{
        'text': 'O2',
        'x': '49%',
        'y': '8%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'SO2',
        'x': '49%',
        'y': '16%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }, {
        'text': 'CO',
        'x': '49%',
        'y': '24%',
        'size': 10,
        'bold': true,
        'color': 'white',
        'align': 'right',
      }],
      'export': {
        'enabled': false,
      },
    });
    var chart = this.AmCharts.makeChart('zone4-O2', {
      "hideCredits": true,
      "type": "serial",
      "theme": "light",
      "dataProvider": [{
        "country": "O2",
        "visits": this.gasLevels[3].O2,
        "color": this.getColor(this.gasLevels[3].O2)
      }],
      "valueAxes": [{
        "gridColor": "#343534",
        "color": "#343534",
        "gridAlpha": 0.2,
        "dashLength": 0,
        "minimum": 0,
        "maximum": 100,
        "strictMinMax": true,
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        // "tickPosition": "start",
        // "tickLength": 10,
        // "color": "#888",
        "labelsEnabled": false
      },
      "export": {
        "enabled": false
      }

    });

    const modal = document.getElementById('myModal');
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }

  }



  openModal(zoneName) {
    if (this.triggered) {
      document.getElementById('z5').id = 'z6';
      this.triggered = false;
    }

    this.zoneWorkers = new Array();
    for (const i in this.workers) {
      // console.log(this.workers[i]);
      if (this.workers[i].zone === zoneName) {
        this.zoneWorkers.push(this.workers[i]);
      }
    }

    document.getElementById('myModal').style.display = 'block';

  }

  closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  showDetails() {
    document.getElementById('details').style.display = 'block';
    document.getElementById('zone1-title').style.color = "green";
    document.getElementById('zone2-title').style.color = "red";
    document.getElementById('zone3-title').style.color = "orange";
    if (this.triggered) {
      document.getElementById('zone4-title').style.color = "red";
    }
    else {
      document.getElementById('zone4-title').style.color = "orange";

    }

  }

  closeDetailsModal() {
    document.getElementById('details').style.display = 'none';
  }

  openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  checkStatus(status) {
    if (status === 'online') {
      return true;
    }
    else {
      return false;
    }
  }

  openGasModal(mapid) {
    if (this.triggered) {
      document.getElementById('z5').id = 'z6';
      this.triggered = false;
    }
    console.log(mapid);
    this.zoneGasLevels = new Array();
    for (const i in this.gasLevels) {
      if (this.gasLevels[i].mapid === mapid) {
        this.zoneGasLevels.push(this.gasLevels[i]);
      }
    }
    document.getElementById('gasLevel').style.display = 'block';
  }

  assetclicked(mapid) {
    if (this.triggered) {
      document.getElementById('z5').id = 'z6';
      this.triggered = false;
    }

    this.zoneAssets = new Array();
    for (const i in this.asset) {
      // console.log(this.workers[i]);
      if (this.asset[i].mapid === mapid) {
        this.zoneAssets.push(this.asset[i]);
      }
    }

    document.getElementById('myModal').style.display = 'block';
  }

  closeGasModal() {
    document.getElementById('gasLevel').style.display = 'none';
  }

  getZones() {
    this.commonService.getZones().subscribe(res => {
      this.zones = res;
      console.log(this.zones);
      this.ngAfterViewInit();
      console.log(this.zones);
    }, err => {
      console.log(err);
    });
  }


  getWorkers() {
    this.commonService.getWorkers().subscribe(res => {
      this.workers = res;
      console.log(this.workers)
    }, err => {
      console.log(err)
    });
  }
  /* getGasLevels(){
     this.commonService.getGasLevels().subscribe(res => {
       this.gasLevels = res;
       console.log(this.gasLevels)
     }, err => {
       console.log(err)
     });
   }*/
  async getItem(id: string) {
    //	return await this.commonService.getItem().toPromise();
  }

  async getGeoLevels() {
    console.log('get geo levels', this.zones);

    await this.commonService.getGeoLevels().then((res) => {
      //  this.zones = new Array();
      console.log('getGeolevels res', res)
      this.zones = res;
      this.zones = [...this.zones]
      //this.func();
      console.log(this.zones);

    })

  }
}//one
