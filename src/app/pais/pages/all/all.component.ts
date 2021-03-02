import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.hayError = false;
    this.paisService.getAllPaises()
    .subscribe( ( paises ) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })
  }


    


}
