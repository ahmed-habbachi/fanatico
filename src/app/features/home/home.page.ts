import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SportField } from 'src/app/interfaces/sport-field.interface';
import { SportFieldService } from 'src/app/services';

@Component({
  selector: 'fan-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public results: Observable<SportField[]> = null;

  constructor(private sportFieldService: SportFieldService) {}

  ngOnInit() {
  }

  search(searchQuery: string) {
    if (searchQuery) {
      this.results = this.sportFieldService.getAllSportFields(searchQuery);
    } else {
      this.results = null;
    }
  }
}
