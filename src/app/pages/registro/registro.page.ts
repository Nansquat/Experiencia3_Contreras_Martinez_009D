import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { newUsuario } from 'src/app/interfaces/users';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  nuevoUsuario: newUsuario={
    username:"",
    correo:"",
    password:"",
    fechanac:"",
    isactive:false
  }
  userdata: any;


  constructor(private alertController:AlertController,
              private router:Router,
              private authservice:AuthserviceService,
              private fbuilder:FormBuilder){ 
                this.registroForm = this.fbuilder.group({
                  'username': new FormControl  ("", [Validators.required, Validators.minLength(6)]),
                  'email': new FormControl ("", [Validators.required, Validators.email]),
                  'password': new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
                })  
        }

  ngOnInit() {
  }

  crearUsuario(){
    if (this.registroForm.valid){
      this.authservice.GetUserByUsername(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp;
        if(this.userdata.length>0){
          this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.nuevoUsuario.username = this.registroForm.value.username;
          this.nuevoUsuario.password = this.registroForm.value.password;
          this.nuevoUsuario.correo = this.registroForm.value.correo;
          this.nuevoUsuario.fechanac = this.registroForm.value.fechanac;
          this.nuevoUsuario.isactive = true;
          this.authservice.postUsuario(this.nuevoUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
        }
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Usuario Creado',
      message: 'Bienvenid@ ' + this.nuevoUsuario.username,
      buttons: ['OK']
    });
  }
  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usted'+ this.nuevoUsuario.username + 'ya está registrado',
      buttons: ['OK']
    });
    alerta.present();
  }
}
