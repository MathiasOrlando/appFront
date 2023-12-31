import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['codigo','username','actions'];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;

  constructor(
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar = () => {
    axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/usuario/list").then(resultado => {
      console.log(resultado.data);
      if(resultado.data['success'] == true){
        this.dataSource = new MatTableDataSource(resultado.data['result']);
        this.dataSource['paginator'] = this.paginator;
      } else {
        this._snackBar.open(resultado.data['result'], " ", {
          duration: 3000,
        });
      }
    });
  }

  borrar = (codigo: number) => {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que quieres borrar este usuario?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        axios.delete<any>(`http://localhost:8080/PROYECTO-REST/rest/usuario/delete/${codigo}`).then(resultado => {
          if(resultado.data['success'] == true){
            this.consultar();
            this._snackBar.open(`Registro #${codigo} Borrado!`, " ", {
              duration: 3000,
            });
          } else {
            this._snackBar.open(resultado.data['result'], " ", {
              duration: 3000,
            });
          }
        }).catch(error => {
          console.error(error);
          this._snackBar.open(`Ocurrió un error al eliminar el registro, consulte con el administrador!`, " ", {
            duration: 3000,
          });
        });
      }
    });
  }
}





