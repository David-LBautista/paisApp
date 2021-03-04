import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api:string = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }
  
  buscarPais( termino:string ): Observable<Country[]>{

    const url = `${this.api}/name/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarCapital( termino:string ):Observable<Country[]>{

    const url = `${this.api}/capital/${termino}`;

    return this.http.get<Country[]>(url);

  }

  getPaisPorCodigo(id:string){
    const url = `${this.api}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  getAllPaises(){

    const url = `${this.api}/all`;

    return this.http.get<Country[]>(url);
  }

  buscarPorRegion( region: string) :Observable<Country[]>{
    const url = `${this.api}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
