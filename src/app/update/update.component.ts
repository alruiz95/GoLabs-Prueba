import { Component, OnInit } from '@angular/core';
import { Telefono } from '../telefono'; 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  listaTelefonos:Array<Telefono>;
  listaTelefonosModificar:Array<any>;
  selectedTelefono:number = 0;

  nombreMod:String;
  fabricanteMod:String;
  precioMod:number;

  constructor() { 
    var data = JSON.parse(localStorage.getItem('telefonos'));
    if (data != null){
      this.listaTelefonos = data;
    }
    this.listaTelefonosModificar = new Array<any>();
    for (var i:number = 0 ; i < this.listaTelefonos.length ; i++){
      this.listaTelefonosModificar.push({ id: i, telefono: this.listaTelefonos[i].nombre})
    }
  }

  ngOnInit() {
  }

  modificarTelefono(form) {
    console.log("Modificando");

    this.listaTelefonos[this.selectedTelefono].nombre = this.nombreMod ;
    this.listaTelefonos[this.selectedTelefono].fabricante = this.fabricanteMod;
    this.listaTelefonos[this.selectedTelefono].precio = this.precioMod;
    console.log(this.nombreMod,this.fabricanteMod,this.precioMod);
    console.log(form.value);

    //localStorage.setItem('telefonos', JSON.stringify(this.listaTelefonos));

  }
  onChangeObj(item){
    console.log(item);
    this.selectedTelefono = item;

    var telefonoAct = this.listaTelefonos[this.selectedTelefono];
    console.log(telefonoAct);
    this.nombreMod = telefonoAct.nombre;
    this.fabricanteMod = telefonoAct.fabricante;
    this.precioMod = telefonoAct.precio;
  }

}
