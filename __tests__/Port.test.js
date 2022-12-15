/* global describes it expect */
const Port = require('../src/Port');
const Ship = require('../src/Ship');
const Itinerary = require('../src/Itinerary');
describe('Port', () => {
    describe('monitors ships in and leaving port', () => {
        let plymouth;
        let ship;
        let titanic;
        let queenMary;
        beforeEach(() => {
            plymouth = new Port('Plymouth');
            ship = {};
            titanic = {};
            queenMary = {};
    });
    it('can be instantiated', () => { 
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('checks port object to have name', () => {
        expect(plymouth.name).toBeTruthy();
    });
    it('can add a ship', () => {
        plymouth.addShip(ship);
        expect(plymouth.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        plymouth.addShip(titanic);
        plymouth.addShip(queenMary);
        plymouth.removeShip(queenMary);
        expect(plymouth.ships).toEqual([titanic]);
    });
    });
});