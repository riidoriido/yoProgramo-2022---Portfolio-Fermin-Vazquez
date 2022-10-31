import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-projecto',
  templateUrl: './edit-projecto.component.html',
  styleUrls: ['./edit-projecto.component.css'],
})
export class EditProjectoComponent implements OnInit {
  proj: Proyectos = null;

  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.details(id).subscribe(
      (data) => {
        this.proj = data;
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id, this.proj).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ocurrió un error');
        this.router.navigate(['']);
      }
    );
  }
}
