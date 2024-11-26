import { Component } from '@angular/core';

interface Opciones{
  icon:string;
  name:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[]=[
    {
      icon: 'school',
      name: 'Actividades',
      redirecTo: '/actividades'
    },
    {
      icon: 'qr-code',
      name: 'Código QR',
      redirecTo: '/codigoqr'
    },
    {
      icon: 'body',
      name: 'Iniciar Sesión',
      redirecTo: '/login'
    },
    {
      icon: 'person-add',
      name: 'Registro de Usuario',
      redirecTo: '/registro'
    },
  ]

  constructor() {}
}
