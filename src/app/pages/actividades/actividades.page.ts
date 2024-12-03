import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  async act1(){
    const alert = await this.alertController.create({
      header: 'Participar en esta Actividad?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a tu registro de actividades de usuario...');
            this.router.navigate(['/actividades']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Participación Cancelada!');
          },
        },
      ],
    });
    await alert.present();
 }
  async act2(){
    const alert = await this.alertController.create({
      header: 'Participar en esta Actividad?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a tu registro de actividades de usuario...');
            this.router.navigate(['/actividades']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Participación Cancelada!');
          },
        },
      ],
    });
    await alert.present();
  }
  async sem1(){
    const alert = await this.alertController.create({
      header: 'Participar en este Seminario?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a tu registro de actividades de usuario...');
            this.router.navigate(['/actividades']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Participación Cancelada!');
          },
        },
      ],
    });
    await alert.present();
  }
  async eve1(){
    const alert = await this.alertController.create({
      header: 'Participar en este Evento?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a tu registro de actividades de usuario...');
            this.router.navigate(['/actividades']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Participación Cancelada!');
          },
        },
      ],

    });

    await alert.present();
    

  }
    async tall1(){
      const alert = await this.alertController.create({
        header: 'Participar en este Taller?',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Redirigiendo a tu registro de actividades de usuario...');
              this.router.navigate(['/actividades']);
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Participación Cancelada!');
            },
          },
        ],

      });

      await alert.present();
      

  }
}
