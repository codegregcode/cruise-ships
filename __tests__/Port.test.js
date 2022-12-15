/* global describes it expect */
const Port = require('../src/Port');
const Ship = require('../src/Ship');
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
        const ship = new Ship(plymouth);
        const topsham = new Port('Topsham');
        ship.dock(topsham);
        expect(ship.currentPort).toBe(topsham);
    });
});