import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'http://localhost:8080/flights';

  constructor(private http: HttpClient) {}

  // Fetch all flights
  getAllFlights(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  // Book a flight by ID
  bookFlight(flightId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/book/${flightId}`, {});
  }
}
