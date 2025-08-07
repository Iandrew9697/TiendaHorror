import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { Error404Component } from './error404/error404.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { IniciarSesionComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'registro',
    component: RegistroUsuarioComponent, 
  },
  { 
    path: 'Iniciar Sesión',
    component: IniciarSesionComponent,
  },
  {
    path: '**',
    component: Error404Component, 
  }
];