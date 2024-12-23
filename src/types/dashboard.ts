export interface NavItem {
  id: string;
  label: string;
  count: number;
  icon: string;
  color?: string;
}

export interface TimeSlot {
  time: string;
  events: Event[];
}

export interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
}

export interface Contact {
  id: number;
  lat: number;
  lng: number;
  callStatus: string;
}

export interface IMPression {
  total: number;
  virtual: number;
  live: number;
}

export interface MonthlyCall {
  month: string;
  calls: number;
}

export interface InventoryItem {
  name: string;
  quantity: number;
}
