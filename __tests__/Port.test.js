const Port = require('../src/Port');

describe('Port', () => {
    describe('monitors ships in and leaving port', () => {
        let plymouth;
        let ship;
        let titanic;
        let queenMary;
        beforeEach(() => {
            plymouth = new Port('Plymouth');
            ship = jest.fn();
            titanic = jest.fn();
            queenMary = jest.fn();
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