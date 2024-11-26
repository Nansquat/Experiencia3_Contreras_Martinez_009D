import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {
  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async generarQR(){
    const alert = await this.alertController.create({
      subHeader: 'QR',
      message: 'Se ha generado un nuevo código QR',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
