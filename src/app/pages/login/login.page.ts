import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  async inicioSesion(){
    const alert = await this.alertController.create({
      subHeader: 'Sesión iniciada',
      message: 'Gracias por utilizar nuestra plataforma!',
      buttons: [
      {
        text:'OK',
        role: 'confirm',
        handler: () => {
          console.log('Se ha iniciado sesión');
          this.router.navigate(['/inicio']);
        },
      },
      ],
    });

    await alert.present();
  }
}
