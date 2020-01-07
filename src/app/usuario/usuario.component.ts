import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioActivo: boolean;

  constructor() { }

  ngOnInit() {
    this.usuarioActivo = false;
  }

  activarUsuario() {
    this.usuarioActivo = true;
  }

}
