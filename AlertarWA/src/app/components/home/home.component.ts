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
   }

  ngOnInit(): void {
  }

  CargarAlertas(){
    this._service.getAlerts()
    .subscribe((data:any)=>{
      this.Alertas=data;
      console.log(this.Alertas);
    });
  }

}
