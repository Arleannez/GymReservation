import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reservations: { name: string; slot: string; status: string }[] = [];

  ngOnInit(): void {
    const storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations ? JSON.parse(storedReservations) : [];
  }

  cancelReservation(reservation: { name: string; slot: string; status: string }): void {
    if (confirm(`Cancel reservation for ${reservation.name}?`)) {
      reservation.status = 'Cancelled';
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
