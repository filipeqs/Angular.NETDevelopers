class TicketBooking {
  constructor(private availableTickets: number) {}

  buyTickets(people): number {
    var adults = people.filter((person) => person.age > 18);
    this.availableTickets -= people.length;
    return adults.length * 100;
  }

  cancel = (numTickets: number) => {
    this.availableTickets += numTickets;
  };

  showAvailableTickets = () => {
    return this.availableTickets;
  };
}

var ticketBooking = new TicketBooking(100);
var people = [
  { name: 'Joe', age: 26 },
  { name: 'Jill', age: 22 },
  { name: 'James', age: 16 },
  { name: 'John', age: 72 },
];
console.log('TotalFare:', ticketBooking.buyTickets(people));
console.log('Available Tickets', ticketBooking.showAvailableTickets());
console.log('Cancel  4 tickets');
ticketBooking.cancel(4);
console.log('Available Tickets', ticketBooking.showAvailableTickets());
