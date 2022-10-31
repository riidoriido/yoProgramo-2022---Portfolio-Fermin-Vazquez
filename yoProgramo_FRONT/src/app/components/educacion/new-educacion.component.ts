import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('Educacion añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Hubo un error');
        this.router.navigate(['']);
      }
    );
  }
}
