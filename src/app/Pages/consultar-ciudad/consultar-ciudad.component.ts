import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';

@Component({
  selector: 'app-consultar-ciudad',
  templateUrl: './consultar-ciudad.component.html',
  styleUrls: ['./consultar-ciudad.component.css']
})
export class ConsultarCiudadComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'actions'];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar = () => {
    axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/ciudad/list").then(resultado => {
     console.log(resultado.data);  
    if(resultado.data['success']==true){
        this.dataSource = new MatTableDataSource(resultado.data['result']);
        this.dataSource['paginator'] = this.paginator;
       
      }else{
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
    //axios.delete("http://localhost:8080/PROYECTO-REST/rest/ciudad/delete/" + codigo).then(resultado=>{
    axios.delete<any>(`http://localhost:8080/PROYECTO-REST/rest/ciudad/delete/${codigo}`).then(resultado => {

      if(resultado.data['success']==true){
     
      this.consultar();
      this._snackBar.open(`Registro #${codigo} Borrado!`, " ", {
        duration: 3000,
      });
    }else{
      this._snackBar.open(resultado.data['result'], " ", {
        duration: 3000,
      });
    }
    }).catch(error => {
      console.error(error);
      this._snackBar.open(`Ocurrio un error al eliminar el registro, consulte con el administrador!`, " ", {
        duration: 3000,
      });
    });
  }

})
  }}
