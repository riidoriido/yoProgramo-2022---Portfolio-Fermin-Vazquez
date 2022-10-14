import { Component, OnInit } from '@angular/core';
import { CargaJsService } from './../../carga-js.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css'],
})
export class PresupuestoComponent implements OnInit {
  constructor(private _cargaJs: CargaJsService) {
    _cargaJs.CargaJs(['main']);
  }

  ngOnInit(): void {}
}
