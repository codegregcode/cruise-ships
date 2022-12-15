/* global describes it expect */
const Port = require('../src/Port');
const Ship = require('../src/Ship');
const Itinerary = require('../src/Itinerary');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
        const plymouth = jest.fn();
        const topsham = jest.fn();
        const itinerary = new Itinerary([plymouth, topsham]);
        expect(itinerary.ports).toEqual([plymouth, topsham]);
    });
});