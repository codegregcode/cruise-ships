/* global describes it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');
describe('Ship', () => {
    describe('with ports, a sail method, dock method and an itinerary', () => {
        let plymouth;
        let topsham;
        let itinerary;
        let ship;
        beforeEach(() => {
            plymouth = new Port('Plymouth');
            topsham = new Port('Topsham');
            itinerary = new Itinerary([plymouth, topsham]);
            ship = new Ship(itinerary);
    });
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(plymouth);
        });
        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(plymouth.ships).not.toContain(ship);
        });
        it('gets added to port on instantiation', () => {
            expect(plymouth.ships).toContain(ship);
        });
        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(plymouth.ships).not.toContain(ship);
        });
        it('can\'t sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
        it('can dock at another port', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(topsham);
            expect(topsham.ships).toContain(ship);
        });
    });
});