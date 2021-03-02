import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    //! Obtener el id con rxjs
    this.activatedRoute.params
        .pipe(
          switchMap( ( {id} ) => this.paisService.getPaisPorCodigo(id))
      ).subscribe( resp => {
      console.log(resp);
    })
    
    //! Obtener el id
    // this.activatedRoute.params
    //     .subscribe( ({id }) => {
    //       this.paisService.getPaisPorCodigo( id )
    //           .subscribe( pais => {
    //             console.log(pais);
    //           })
    //     });
  }

}
