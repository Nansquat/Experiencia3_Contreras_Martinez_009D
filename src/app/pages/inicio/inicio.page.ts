import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController:MenuController,
              private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  async mensaje1(){
    const alert = await this.alertController.create({
      header: 'Desea iniciar sesión?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a la página de login');
            this.router.navigate(['/login']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Login Cancelado!');
          },
        },
      ],

    });

    await alert.present();
    

 }
  async mensaje2(){
    const alert = await this.alertController.create({
      header: 'Registrar nuevo usuario?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Redirigiendo a la página de registro');
            this.router.navigate(['/registro']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Registro nuevo usuario Cancelado!');
          },
        },
      ],

    });

    await alert.present();
    

  }
}
