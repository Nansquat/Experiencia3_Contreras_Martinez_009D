import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QRCode } from 'qrcode';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Users, UserQR } from 'src/app/interfaces/users';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {

  username:any;
  id:any;
  qrdata:string;
  correo:any;
  usuario:any;

  constructor(private alertController:AlertController,
              private activated:ActivatedRoute,
              private router:Router,
              private apicrud:ApicrudService) { 
                this.activated.queryParams.subscribe(param =>{
                  this.username = JSON.parse(param['usuario']);
                })
                this.qrdata='';
                this.usuario= sessionStorage.getItem('username');
              }

  ngOnInit() {
  }
  generarQr(){
    this.qrdata='';
    this.qrdata = this.username.usuario + this.username.correo + this.usuario;
    console.log(this.qrdata);
  }
}
