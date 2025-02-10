import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Only CommonModule is required for basic functionality
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights$!: Observable<any[]>;  // This will hold the observable for flights data

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    // Fetch flights data on component initialization
    this.loadFlights();
  }

  loadFlights(): void {
    // Reload the flight data after a successful booking or component initialization
    this.flights$ = this.flightService.getAllFlights();
  }

  bookFlight(flightId: number): void {
    // Call the bookFlight method from FlightService to book a flight
    this.flightService.bookFlight(flightId).subscribe({
      next: (response) => {
        console.log('Response:', response);
  
        // Check if the response indicates success
        if (response.success) { // Now checking the success field from the structured response
          alert(`Flight ${flightId} booked successfully!`);
          this.loadFlights(); // Reload the flight list to show updated seats
        } else {
          alert(`Error booking flight ${flightId}: ${response.message}`);
        }
      },
      error: (error) => {
        console.error('Error booking flight:', error);
        alert(`Error booking flight ${flightId}. Try again.`);
      }
    });
  }

  
}
