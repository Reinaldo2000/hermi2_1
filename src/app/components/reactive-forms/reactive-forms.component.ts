import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{

  miFormulario!: FormGroup;
  mostrarMensaje = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      cedula: [''],
      nombre: [''],
      fecha: [''],
      ciudad: ['']
    });
  }

  guardar() {
    // Lógica para guardar los datos aquí (por ejemplo, enviar a un servidor)
    console.log('Datos guardados:', this.miFormulario.value);

    // Mostrar el mensaje al guardar los datos
    this.mostrarMensaje = true;
  }

  limpiar() {
    // Limpia los campos del formulario
    this.miFormulario.reset();

    // Ocultar el mensaje al limpiar los campos
    this.mostrarMensaje = false;
  }
}