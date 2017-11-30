import { Component, OnInit } from '@angular/core';
import { Telefono } from '../telefono';  

@Component({
  selector: 'app-crud-tel',
  templateUrl: './crud-tel.component.html',
  styleUrls: ['./crud-tel.component.css']
})
export class CrudTelComponent implements OnInit {
  listaTelefonos:Array<Telefono>;
  listaTelefonosComp:Array<any>;


  constructor() { 
    this.listaTelefonos=  JSON.parse(localStorage.getItem('telefonos'));

    if (this.listaTelefonos == null){
      this.listaTelefonos = new Array<Telefono>();
    }
    this.listaTelefonosComp = new Array<any>();
    for(var i:number = 0 ; i < this.listaTelefonos.length ; i++){
      this.listaTelefonosComp.push({ pos: i, telefono: this.listaTelefonos[i]})
    }
  }

  ngOnInit() {
  }

  nuevoTelefono(form) {
    console.log("Insertado")
    if (this.listaTelefonos == null){
      this.listaTelefonos = new Array<Telefono>();
    }

    this.listaTelefonos.push(new Telefono(form.value.nombre, form.value.fabricante, form.value.precio));
    localStorage.setItem('telefonos', JSON.stringify(this.listaTelefonos));
    this.actualizar();
    
  }

  eliminarTelefono(num){
    console.log(num)
    console.log("Elimimando");
    this.listaTelefonos.splice(num, 1);
    this.listaTelefonosComp.splice(num, 1);
    localStorage.setItem('telefonos', JSON.stringify(this.listaTelefonos));
    this.actualizar();
  }
  

  actualizar(){
    this.listaTelefonos=  JSON.parse(localStorage.getItem('telefonos'));
    
        if (this.listaTelefonos == null){
          this.listaTelefonos = new Array<Telefono>();
        }
        this.listaTelefonosComp = new Array<any>();
        for(var i:number = 0 ; i < this.listaTelefonos.length ; i++){
          this.listaTelefonosComp.push({ pos: i, telefono: this.listaTelefonos[i]})
        }
  }

}
