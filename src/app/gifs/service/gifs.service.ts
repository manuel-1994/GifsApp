import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SearchGifs, Data} from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string= 'FRFPsEcoPwNegw4q71NWhyJg5vCrXogg'
  private _url: string= 'https://api.giphy.com/v1/gifs'
  private _historial: string []=[]

  public result : Data[]=[]

  get historial():string[]{
    
    return [...this._historial]
  }

  constructor(private http: HttpClient){
    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];
    this.result= JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial=this._historial.splice(0,10) 
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params= new HttpParams()
        .set('api_key', this._apiKey)
        .set('limit', '12')
        .set('q', query)

    this.http.get<SearchGifs>(`${this._url}/search`, {params})
        .subscribe((resp) => { 
          this.result=resp.data
          localStorage.setItem('resultado', JSON.stringify(this.result))
        })
  }
}
