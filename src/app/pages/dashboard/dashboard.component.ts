import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', //Ari ang mga interpolations nga gi tawag
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // Array of reservation objects used in the HTML with *ngFor
  // Each object contains:
  // - name: displayed using {{ res.name }}
  // - slot: displayed using {{ res.slot }}
  // - status: displayed using {{ res.status }} and ngClass for color
  reservations: { name: string; slot: string; status: string }[] = [];
  currentUser: string = '';

  ngOnInit(): void {
      // Retrieves the current user's name from local storage
    this.currentUser = localStorage.getItem('currentUser') || '';
    const storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations ? JSON.parse(storedReservations) : [];
  }

  /*
  cancelReservation(reservation: { name: string; slot: string; status: string }): void {
    if (confirm(`Cancel reservation for ${reservation.name}?`)) {
      reservation.status = 'Cancelled';
      this.updateLocalStorage();
    }
  }*/

  private updateLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
