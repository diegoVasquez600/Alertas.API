import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Alertas:any;

  constructor(private _service:AlertService) {
    this.CargarAlertas();
    this.CargarAlertasByUser();
   }

  ngOnInit(): void {
  }

  CargarAlertas(){
    this._service.getAlerts()
    .subscribe((data:any)=>{
      this.Alertas=data[0];
      console.log(this.Alertas);
    });
    
  }
  CargarAlertasByUser(){
    this._service.getAlertsbyUser()
    .subscribe((data:any)=>{
      console.log(data);
    });
  }
}
