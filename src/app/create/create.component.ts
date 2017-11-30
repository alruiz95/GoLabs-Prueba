import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Telefono } from '../telefono';  

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  listaTelefonos:Array<Telefono> = JSON.parse(localStorage.getItem('telefonos'));

  constructor() { }

  ngOnInit() {

  }

  nuevoTelefono(form: NgForm) {
    console.log(form.value);


    if (this.listaTelefonos == null){
      this.listaTelefonos = new Array<Telefono>();
    }

    this.listaTelefonos.push(new Telefono(form.value.nombre, form.value.fabricante, form.value.precio));

    localStorage.setItem('telefonos', JSON.stringify(this.listaTelefonos));
    
  }

}
