import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioService, Usuario } from '../servicios/registro-usuario.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true, // 👈 fundamental para standalone
  templateUrl: './registro-usuario.component.html',
  imports: [ReactiveFormsModule] // 👈 IMPORTANTE: aquí importas el módulo de formularios
})
export class RegistroUsuarioComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroUsuarioService
  ) {
    this.registroForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  registrar() {
    const usuario: Usuario = this.registroForm.value;
    this.registroService.registrarUsuario(usuario).subscribe(() => {
      alert('Usuario registrado exitosamente');
      this.registroForm.reset();
    });
  }
}