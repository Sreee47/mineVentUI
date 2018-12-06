import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, Response, } from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable()
export class CommonServiceService {
zones_config = '../assets/data/zones.json';
worker_config = '../assets/data/workers.json'; 
gaslevel_config = '../assets/data/gaslevels.json';
config_url = 'http://139.162.46.222:3000/api/';
config_url2 = 'http://0.0.0.0:3000/api/';
//config_url2 = 'http://10.232.188.108:3000/';

  constructor(private  http : HttpClient) { 
 
  }
getZones() {
  return this.http.get(this.zones_config).pipe(map((res:Response)=>res));
}



getWorkers(){
  return this.http.get(this.worker_config).pipe(map((res:Response)=>res));
}
getGasLevels(){
  return this.http.get(this.gaslevel_config).pipe(map((res:Response)=>res));
}
//public getItem <T>(): Promise<T> {
		//return this.http.get<T>(this.zones_config);
	//}

  // --- Promise----
getGeoLevels() {
    console.log('getting geoLevels')
    
    let promise = new Promise((resolve, reject) => {
         this.http.get(this.zones_config)
          .toPromise()
          .then(
            res => { // Success
              
                var geoLevels = res;
        
        
              resolve(geoLevels);
              return geoLevels;

            }
          );
      });
      return promise;
}
}
