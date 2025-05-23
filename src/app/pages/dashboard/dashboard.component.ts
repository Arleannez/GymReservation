import { Component, OnInit } from '@angular/core';

// Interface defines structure for a reservation
export interface Reservation {
  name: string;
  slot: string;
  status: 'Approved' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Use the Reservation interface here
  reservations: Reservation[] = [];
  currentUser: string = '';

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser') || '';

    const storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations
      ? JSON.parse(storedReservations)
      : [];
  }


  private updateLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
