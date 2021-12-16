var TicketBooking = /** @class */ (function () {
    function TicketBooking(availableTickets) {
        var _this = this;
        this.availableTickets = availableTickets;
        this.cancel = function (numTickets) {
            _this.availableTickets += numTickets;
        };
        this.showAvailableTickets = function () {
            return _this.availableTickets;
        };
    }
    TicketBooking.prototype.buyTickets = function (people) {
        var adults = people.filter(function (person) { return person.age > 18; });
        this.availableTickets -= people.length;
        return adults.length * 100;
    };
    return TicketBooking;
}());
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
