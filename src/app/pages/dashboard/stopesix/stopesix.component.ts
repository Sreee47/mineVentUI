import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CommonServiceService } from "../../../common-service.service";
@Component({
  selector: 'app-stopesix',
  templateUrl: './stopesix.component.html',
  styleUrls: ['./stopesix.component.scss']
})
export class StopesixComponent implements OnInit {

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

  constructor(private AmCharts: AmChartsService, private commonService: CommonServiceService) { 
    //  this.zone =  { 'mapid': 'zone8', 'zone_name': 'Stope 6', 'id': 'z8', 'name': 'zone_8', 'color': '#00CC00', 'number': '97', 'manager': 'Harish J', 'temperature': 65, 'pressure': 22 , 'asset': "A"};
 this.workers = new Array();
    this.workers.push(
      { 'zone': 'zone_8', 'name': 'John, Jack', 'role': 'Field Manager', 'status': 'online', 'time': '3 mins', 'level': 'level 1A', 'rightZone': true, 'hrs': 3},
      { 'zone': 'zone_8', 'name': 'Thomas, Alex', 'role': 'Worker', 'status': 'online', 'time': '2 mins', 'level': 'level 1B', 'rightZone': true, 'hrs': 7 },
      { 'zone': 'zone_8', 'name': 'Mathew, Jane', 'role': 'Worker', 'status': 'online', 'time': '4 mins', 'level': 'level 2A', 'rightZone': true, 'hrs': 3.5 },
      { 'zone': 'zone_8', 'name': 'Richard, Shelby', 'role': 'Worker', 'status': 'away' , 'time': '15 mins', 'level': 'level 1A', 'rightZone': false, 'hrs': 8.5},);
      this.asset = new Array();
      this.asset.push({'zone':'zone_8','rfid':'1001'},);
      this.gasLevels = new Array();
    this.gasLevels.push(
       { 'mapid': 'zone8', 'O2': '35', 'SO2': '80', 'CO': '85', 'CH4': '78','rpm': 55.3, 'meas': 11.6, 'sp' :23.7 },
      
    );
         this.asset = new Array();
      this.asset.push(
        {'id':'A1000','type':'Dumper','operator':'John'},
        {'id':'A1001','type':'Drilling','operator':'Jack'},
        {'id':'A1002','type':'Dumper','operator':'Hill'},
      );
  }

  ngOnInit() {
    this.getZones();
  }

  ngAfterViewInit() {

const gaugeChart1 = this.AmCharts.makeChart('zone8', {
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
        if (element["mapid"] == "zone8") {
          this.zone = element;
        }
      });


      console.log(this.zone);
    }, err => {
      console.log(err);
    });
  }


}
