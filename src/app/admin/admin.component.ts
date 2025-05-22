import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Reservation {
  name: string;
  slot: string;
  status: 'Approved' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  activeTab: string = 'dashboard';
  adminName: string = 'Admin';

  reservations: Reservation[] = [];
  availableSlots: number = 10;
  pendingReservations: Reservation[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check user role
    const userData = localStorage.getItem('loggedUser');
    if (userData) {
      const user = JSON.parse(userData);
      if (user.role !== 'admin') {
        this.router.navigateByUrl('/login');
      }
      this.adminName = user.name;
    } else {
      this.router.navigateByUrl('/login');
    }

    // Load reservations from localStorage using the same key as dashboard
    const reservationData = localStorage.getItem('reservations');
    if (reservationData) {
      this.reservations = JSON.parse(reservationData);
    }

    this.updateStats();
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
approveReservation(reservation: Reservation): void {
  if (confirm(`Approve reservation for ${reservation.name}?`)) {
    reservation.status = 'Approved';
    this.updateLocalStorage();
  }
}
  cancelReservation(reservation: Reservation) {
    if (reservation.status !== 'Cancelled') {
      if (confirm(`Are you sure you want to cancel reservation for ${reservation.name}?`)) {
        reservation.status = 'Cancelled';
        this.updateLocalStorage();
        this.updateStats();
      }
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  private updateStats() {
    this.pendingReservations = this.reservations.filter(r => r.status === 'Pending');
    const totalSlots = 20;
    const bookedSlots = this.reservations.filter(r => r.status === 'Approved').length;
    this.availableSlots = totalSlots - bookedSlots;
  }
}
