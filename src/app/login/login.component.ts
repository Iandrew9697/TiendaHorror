import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule] 
})
export class IniciarSesionComponent {
  email = '';
  password = '';
  error = '';

  iniciarSesion() {
    if (this.email === 'admin@gmail.com' && this.password === '1234') {
      this.error = '';
      alert('Bienvenido');
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}