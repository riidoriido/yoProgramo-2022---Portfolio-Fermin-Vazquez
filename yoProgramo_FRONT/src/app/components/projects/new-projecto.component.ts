import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-projecto',
  templateUrl: './new-projecto.component.html',
  styleUrls: ['./new-projecto.component.css'],
})
export class NewProjectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private proyectosS: ProyectosService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.imgP);
    this.proyectosS.save(proyectos).subscribe(
      (data) => {
        alert('Proyecto añadido');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Hubo un error');
        this.router.navigate(['']);
      }
    );
  }
}
