import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  IActividad:any;

  IActividades ={
    id:0,
    titact:"",
    publ:"",
    fechact:"",
    hora:"",
    desc:"",
    img:"",
    participa:false
  }
  id:any;

  constructor(private activated: ActivatedRoute,
              private router:Router) {
            this.activated.queryParams.subscribe(param =>{
              this.IActividades = JSON.parse(param['IActividades']);
            })  
          }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.id=this.IActividad.id;
    console.log(this.IActividad.id);
  }
  actualizarActividad(Observable:any){
    this.router.navigate(['/editar', this.IActividad.id],
      {queryParams:{IActividades: JSON.stringify(Observable)}}
    )
  }
  volver(){
    this.router.navigate(['/inicio']);
  }

}
