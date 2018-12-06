import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CommonServiceService } from "../../../common-service.service";

@Component({
  selector: 'app-stopetwo',
  templateUrl: './stopetwo.component.html',
  styleUrls: ['./stopetwo.component.scss']
})
export class StopetwoComponent implements OnInit,AfterViewInit {
  
  zone : any ={};
  workers : any={};
  zoneWorkers: any[];
  asset:any[];
  zoneAsset:any[];
  gasLevels:any;
  zoneGasLevels:any[];
  tabselected :any;
  colourRed: any= '#B71C1C';
  colourYellow: any= 'orange';
  colourGreen: any= 'green';

  constructor(private AmCharts: AmChartsService, private commonService: CommonServiceService ) { 
    //  this.zone = { 'mapid': 'zone2', 'zone_name': 'Stope 2', 'id': 'z2', 'name': 'zone_2', 'color': 'orange', 'number': '55', 'manager': 'Richard T', 'temperature': 43, 'pressure': 55, 'asset': "A" };
 this.workers = new Array();
    this.workers.push(
       { 'zone': 'zone_2', 'name': 'Church, Malcolm', 'role': 'Worker', 'status': 'online', 'time': '4 mins', 'level': 'level 1C', 'rightZone': true, 'hrs': 4 },
      { 'zone': 'zone_2', 'name': 'Hamilton, Griffin', 'role': 'Worker', 'status': 'unknown', 'time': '48 mins', 'level': 'level 2A' , 'rightZone': true, 'hrs': 4.5},
      { 'zone': 'zone_2', 'name': 'Arias, Mathew', 'role': 'Worker', 'status': 'online' , 'time': '4 mins', 'level': 'level 2A', 'rightZone': false, 'hrs': 7.5},
      { 'zone': 'zone_2', 'name': 'Thomas, Jane', 'role': 'Worker', 'status': 'unknown' , 'time': '3 hrs', 'level': 'level 2B', 'rightZone': true, 'hrs': 6},
      { 'zone': 'zone_2', 'name': 'Barr, Harrison ', 'role': 'Worker', 'status': 'away', 'time': '14 mins' , 'level': 'level 1C', 'rightZone': true, 'hrs': 7},);
      this.asset = new Array();
      this.asset.push({'zone':'zone_1','rfid':'1001'},);
      this.gasLevels = new Array();
    this.gasLevels.push(
       { 'mapid': 'zone2', 'O2': '65', 'SO2': '50', 'CO': '86', 'CH4': '70','rpm': 22.7, 'meas': 8.9, 'sp' : 5 },
      
    );
  }

  ngOnInit() {
    this.getZones();
  }

  ngAfterViewInit() {

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
    },1);
     
  }



 openModal(zoneName) {
    this.tabselected= 'workers';

    this.zoneWorkers = new Array();
    for (const i in this.workers) {
      // console.log(this.workers[i]);
      if (this.workers[i].zone === zoneName){
        this.zoneWorkers.push(this.workers[i]);
      }
    }

    document.getElementById('tableblock').style.display = 'block';
   
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

  openGasModal(mapid) {
   this.tabselected= 'gaslevels';

    console.log(mapid);
    this.zoneGasLevels = new Array();
    for (const i in this.gasLevels) {
      if (this.gasLevels[i].mapid === mapid) {
        this.zoneGasLevels.push(this.gasLevels[i]);
      }
    }
document.getElementById('tableblock').style.display = 'block';
  }
 getZones() {
    this.commonService.getZones().subscribe(res => {
      this.zone = res;
      this.zone.forEach(element => {
        if (element["mapid"] == "zone2") {
          this.zone = element;
        }
      });


      console.log(this.zone);
    }, err => {
      console.log(err);
    });
  }


}
