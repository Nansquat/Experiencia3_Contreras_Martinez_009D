import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { IActividades } from 'src/app/interfaces/iactividades';
import { ApicrudService } from 'src/app/services/apicrud.service';


@Component({
  selector: 'app-participar',
  templateUrl: './participar.page.html',
  styleUrls: ['./participar.page.scss'],
})
export class ParticiparPage implements OnInit {

  unaActividad: any;

  actividad={
    id:"",
    titact:"",
    publ:"",
    fechact:"",
    hora:"",
    desc:"",
    img:"",
    participa:"boolean"
  
  }

  constructor(private activated: ActivatedRoute,
              private router:Router ,private alertController: AlertController,
              private apicrud:ApicrudService) {
                this.activated.queryParams.subscribe(params=>{
                  this.unaActividad = JSON.parse(params['actividad'])
                })
              }
  

  ngOnInit() {
    this.actividad=this.unaActividad;
  }
  regresar(){
    this.router.navigate(['/pages/actividades']);
  }
  actualizarActividad(Observable:IActividades){
    this.router.navigate(['/participar', this.actividad.id],
      {queryParams:{actividad: JSON.stringify(Observable)}}
    )
  }

  async consultaElimina(){
    const alert = await this.alertController.create({
      header:'Elimina?',
      message:'Necesita eliminar la actividad?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/pages/actividades']);
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.elimina();
          },
        },
      ],
    });
    await alert.present();
  }
  elimina(){
    this.apicrud.deleteActividades(this.actividad).subscribe();
    this.mensaje();
  }
  async mensaje(){
    const alert = await this.alertController.create({
      header: 'Eliminación',
      message:'Su actividad ha sido eliminada',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/pages/actividades']);
          },
        },
      ],
    });
    await alert.present();
  }
}
