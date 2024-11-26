import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router) { }

  ngOnInit() {
  }
  async registroUsuario(){
    const alert = await this.alertController.create({
      subHeader: 'Usuario registrado',
      message: 'Gracias por unirte a nosotros!',
      buttons: [
      {
        text:'OK',
        role: 'confirm',
        handler: () => {
          console.log('Se ha registrado un nuevo usuario');
          this.router.navigate(['/inicio']);
        },
      },
      ],
    });

    await alert.present();
  }
}
