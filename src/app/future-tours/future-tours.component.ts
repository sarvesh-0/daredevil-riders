import { Component } from '@angular/core';
import { MaterialModules } from '../shared-materials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-future-tours',
  imports: [MaterialModules,CommonModule],
  templateUrl: './future-tours.component.html',
  styleUrl: './future-tours.component.css'
})
export class FutureToursComponent {
  displayedColumns: string[] = ['date', 'name', 'location', 'package'];

  // Data for future tours
  futureTours: { date: string; name: string; location: string; package: string }[] = [
    {
      date: '2024-01-15',
      name: 'Beach Getaway',
      location: 'Goa',
      package: '₹15,000',
    },
    {
      date: '2024-02-10',
      name: 'Hill Station Retreat',
      location: 'Shimla',
      package: '₹20,000',
    },
  ];

  // Nature images for marquee
  tourImages: string[] = [
    'assets/images/nature1.jpg',
    'assets/images/nature2.jpg',
    'assets/images/nature3.jpg',
  ];
}
