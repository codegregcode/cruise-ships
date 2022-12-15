/* global describes it expect */
const Port = require('../src/Port');
const Ship = require('../src/Ship');
const Itinerary = require('../src/Itinerary');
describe('Port', () => {
    it('can be instantiated', () => { 
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('checks port object to have name', () => {
        const port = new Port('Plymouth');
        expect(port.name).toBeTruthy();
    });
    it('can dock at another port', () => {
        const plymouth = new Port('Plymouth');
        const topsham = new Port('Topsham');
        const itinerary = new Itinerary([plymouth, topsham]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(topsham);
    });
});