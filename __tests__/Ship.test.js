/* global describes it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const ship = new Ship();
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
    it('can set sail', () => {
        const ship = new Ship ('Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});