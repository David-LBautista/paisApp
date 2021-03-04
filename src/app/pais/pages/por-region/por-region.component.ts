import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  regionActiva: string = '';
  hayError = true;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }
  
  activarRegion( region:string ){
    // this.regionActiva = region;
      this.hayError = false;
  
      this.regionActiva = region;
  
      this.paisService.buscarPorRegion( this.regionActiva )
      .subscribe( (paises ) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
    
  }

}
