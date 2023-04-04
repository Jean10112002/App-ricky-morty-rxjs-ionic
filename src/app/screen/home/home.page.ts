import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RickymortyService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  terminoBusqueda!:string
  constructor(private rickyMortyService:RickymortyService) {
  }

  ngOnInit() {
  }

}
