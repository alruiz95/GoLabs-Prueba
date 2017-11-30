import { Component, OnInit } from '@angular/core';
import { Telefono } from '../telefono'; 

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  listaTelefonos:Array<Telefono>;
  listaTelefonosEliminar:Array<any>;
  selectedTelefono:number = 0;

  constructor() { }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('telefonos'));
    if (data != null){
      this.listaTelefonos = data;
    }
    this.listaTelefonosEliminar = new Array<any>();
    for (var i:number = 0 ; i < this.listaTelefonos.length ; i++){
      this.listaTelefonosEliminar.push({ id: i, telefono: this.listaTelefonos[i].nombre})
    }
  }

  eliminarTelefono() {
    console.log("Elimimando");
    this.listaTelefonos.splice(this.selectedTelefono, 1);
    this.listaTelefonosEliminar.splice(this.selectedTelefono, 1);
    localStorage.setItem('telefonos', JSON.stringify(this.listaTelefonos));
    
  }
  onChangeObj(item){
    console.log(item);
    this.selectedTelefono = item;
  }
}
