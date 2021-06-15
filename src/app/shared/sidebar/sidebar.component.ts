import { Component} from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get historial(){
    return this.gifsService.historial
  }

  buscar(valor: string){
    this.gifsService.buscarGifs(valor)
  }
}
