import { Component } from '@angular/core';
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

datosFormulario = {
  cedula: '',
  nombre: '',
  fecha: '',
  ciudad: ''
};
mostrarMensaje = false;
registrado = false;
guardar() {
  // Lógica para guardar los datos aquí (por ejemplo, enviar a un servidor)
  console.log('Datos guardados:', this.datosFormulario);
  this.mostrarMensaje = true;
}

limpiar() {
  // Limpia los campos del formulario
  this.datosFormulario.cedula = '';
  this.datosFormulario.nombre = '';
  this.datosFormulario.fecha = '';
  this.datosFormulario.ciudad = '';
}
cerrarModal() {
  // Cierra el modal
  this.registrado = false;
}
constructor(){   }
submit(){  }
}
