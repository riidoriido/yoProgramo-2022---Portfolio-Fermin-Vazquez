import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent implements OnInit {
  persona: persona = new persona('', '', '', '');

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
