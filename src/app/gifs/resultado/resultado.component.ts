import { Component} from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent{

  get results (){
    return this.gifsService.result
  }

  constructor(private gifsService: GifsService){}
}
