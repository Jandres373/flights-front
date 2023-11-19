export interface Flight {
  id: number;
  code: string;
  airline: string;
  originId: number;
  destinationId: number;
  departureTime: Date; 
  arrivalTime: Date; 
  duration: string; 
  price: number; 
  availableSeats: number; 
  layovers: number[]; 
  amenities: string[]; 
  createdAt: Date;
  updatedAt: Date;
}

export type Flights = Flight[] 

export interface FlightInitialState {
  code: string;
  airline: string;
  originId: number;
  destinationId: number;
  departureTime: Date; 
  arrivalTime: Date; 
  duration: string; 
  price: number; 
  availableSeats: number; 
  layovers: number[]; 
  amenities: string[]; 
}