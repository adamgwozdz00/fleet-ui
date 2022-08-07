import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carId: string;

  constructor(private router: Router) {
    const state =  router.getCurrentNavigation().extras.state;
    if(state){
      this.carId = state.id;
    }
  }

  ngOnInit(): void {
    
  }
}
