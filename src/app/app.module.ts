import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarCiudadComponent } from '../app/Pages/consultar-ciudad/consultar-ciudad.component';
import { MatExpansionModule } from '@angular/material/expansion';import { EditarCiudadComponent } from './editar-ciudad/editar-ciudad.component';
import { NgModule } from '@angular/core';
import { ConsultarLibroComponent } from '../app/Pages/consultar-libro/consultar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { ConsultarClienteComponent } from '../app/Pages/consultar-cliente/consultar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ConsultarAutorComponent } from './Pages/consultar-autor/consultar-autor.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';
import { ConsultarUsuarioComponent } from '../app/Pages/consultar-usuario/consultar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarCiudadComponent,
    EditarCiudadComponent,
    ConsultarLibroComponent,
    EditarLibroComponent,
    ConsultarClienteComponent,
    EditarClienteComponent,
    ConsultarAutorComponent,
    EditarAutorComponent,
    ConsultarUsuarioComponent,
    EditarUsuarioComponent,
    ConfirmDialogComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, 
    MatSnackBarModule,
    MatPaginatorModule,
    MatSelectModule, 
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
