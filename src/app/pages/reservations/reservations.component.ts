import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  showModal = false;
  userName = '';
  selectedSlot = '';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmReservation() {
    if (this.userName && this.selectedSlot) {
      const reservation = {
        name: this.userName,
        slot: this.selectedSlot,
        status: 'Reserved'
      };

      // Get existing reservations or empty array
      const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
      existing.push(reservation);

      // Save updated list to localStorage
      localStorage.setItem('reservations', JSON.stringify(existing));

      // Reset form
      this.userName = '';
      this.selectedSlot = '';
      this.closeModal();
      alert('Reservation Confirmed!');
    } else {
      alert('Please complete the form.');
    }
  }
}
