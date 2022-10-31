import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proj: Proyectos[] = [];

  constructor(
    private proyectosS: ProyectosService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosS.lista().subscribe((data) => {
      this.proj = data;
    });
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.proyectosS.delete(id).subscribe(
        (data) => {
          this.cargarProyectos();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
