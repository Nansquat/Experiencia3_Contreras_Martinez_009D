import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  async crearAct(){
    const alert = await this.alertController.create({
      subHeader: 'Actividad registrada',
      message: 'Gracias por utilizar la plataforma!',
      buttons: [
      {
        text:'OK',
        role: 'confirm',
        handler: () => {
          console.log('Se ha registrado una nueva actividad');
          this.router.navigate(['/crear']);
        },
      },
      ],
    });

    await alert.present();
  }
}
