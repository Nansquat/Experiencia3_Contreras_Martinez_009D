import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  async act1(){
    const alert = await this.alertController.create({
      header: 'Editar esta actividad?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Editando actividad..');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Edición Cancelada!');
          },
        },
      ],
    });
    await alert.present();
 }
  async act2(){
    const alert = await this.alertController.create({
      header: 'Editar esta actividad?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Editando actividad..');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Edición Cancelada!');
          },
        },
      ],
    });
    await alert.present();
  }
  async sem1(){
    const alert = await this.alertController.create({
      header: 'Editar este seminario?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Editando seminario...');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Edición Cancelada!');
          },
        },
      ],
    });
    await alert.present();
  }
  async eve1(){
    const alert = await this.alertController.create({
      header: 'Editar este evento?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Editando evento...');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Edición Cancelada!');
          },
        },
      ],

    });
    await alert.present();
  }
    async tall1(){
      const alert = await this.alertController.create({
        header: 'Editar este taller?',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Editando Taller...');
              this.router.navigate(['/editar']);
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Edición Cancelada!');
            },
          },
        ],

      });
      await alert.present();
  }
  async dact(){
    const alert = await this.alertController.create({
      header: 'Eliminar esta actividad?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Actividad Eliminada!');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('No se ha eliminado Actividad!');
          },
        },
      ],

    });
    await alert.present();
  }
  async dsem(){
    const alert = await this.alertController.create({
      header: 'Eliminar este seminario?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Seminario Eliminado!');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('No se ha eliminado Seminario!');
          },
        },
      ],

    });
    await alert.present();
  }
  async deve(){
    const alert = await this.alertController.create({
      header: 'Eliminar este evento?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Evento Eliminado!');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('No se ha eliminado Evento!');
          },
        },
      ],

    });
    await alert.present();
  }
  async dtall(){
    const alert = await this.alertController.create({
      header: 'Editar este taller?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Taller Eliminado!');
            this.router.navigate(['/editar']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('No se ha eliminado Taller!');
          },
        },
      ],

    });
    await alert.present();
  }
}
