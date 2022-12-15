/* global describes it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');
describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });
    it('gets added to port on instantiation', () => {
        const plymouth = new Port('Plymouth');
        const itinerary = new Itinerary([plymouth]);
        const ship = new Ship(itinerary);
        expect(plymouth.ships).toContain(ship);
    });
});
describe('setSail', () => {
    it('can set sail', () => {
        const port = new Port('Dover');
        const aPort = new Port('Calais');
        const itinerary = new Itinerary([port, aPort]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(port.ships).not.toContain(ship);
    });
    it('can\'t sail further than its itinerary', () => {
        const plymouth = new Port('Plymouth');
        const topsham = new Port('Topsham');
        const itinerary = new Itinerary([plymouth, topsham]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});
describe('dock', () => {
    it('can dock at another port', () => {
        const plymouth = new Port('Plymouth');
        const topsham = new Port('Topsham');
        const itinerary = new Itinerary([plymouth, topsham]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(topsham);
        expect(topsham.ships).toContain(ship);
    });
});