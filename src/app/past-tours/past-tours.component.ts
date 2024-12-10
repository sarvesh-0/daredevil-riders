import { Component } from '@angular/core';
import { MaterialModules } from '../shared-materials';

@Component({
  selector: 'app-past-tours',
  imports: [MaterialModules],
  templateUrl: './past-tours.component.html',
  styleUrl: './past-tours.component.css'
})
export class PastToursComponent {
  displayedColumns: string[] = ['name', 'date', 'location'];
  pastTours: { name: string; date: string; location: string }[] = [
    { name: 'Mountain Trekking', date: '2023-10-01', location: 'Himalayas' },
    { name: 'Desert Safari', date: '2023-12-15', location: 'Rajasthan' },
  ];
}
