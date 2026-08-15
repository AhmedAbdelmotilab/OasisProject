export type BookingStatus = "unconfirmed" | "checked-in" | "checked-out";

export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

export interface Guest {
  id?: number;
  fullName: string;
  email: string;
  nationality: string;
  nationalID: string;
  country?: string;
  countryFlag: string;
}

export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  hasBreakfast: boolean;
  observations?: string;
  isPaid: boolean;
  status: BookingStatus;
  guests: Guest;
  cabins: Cabin;
}

export interface Settings {
  id: number;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export type FilterOption = {
  value: string;
  label: string;
};
