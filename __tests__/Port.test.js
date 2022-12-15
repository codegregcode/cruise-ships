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
});
describe('addShip', () => {
    it('can add a ship', () => {
        const port = new Port('Plymouth');
        const ship = {};
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
});
describe('removeShip', () => {
    it('can remove a ship', () => {
        const port = new Port('Plymouth');
        const titanic = {};
        const queenMary = {};
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
    });
});