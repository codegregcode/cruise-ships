const Ship = require("../src/Ship.js");

describe("Ship", () => {
  describe("with ports, a sail method, dock method and an itinerary", () => {
    let plymouth;
    let topsham;
    let itinerary;
    let ship;
    beforeEach(() => {
      plymouth = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Plymouth",
        ships: [],
      };

      topsham = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Topsham",
        ships: [],
      };

      itinerary = {
        ports: [plymouth, topsham],
      };
      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(plymouth);
    });

    it("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(plymouth.removeShip).toHaveBeenCalledWith(ship);
    });

    it("gets added to port on instantiation", () => {
      expect(plymouth.addShip).toHaveBeenCalledWith(ship);
    });

    it("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(plymouth.ships).not.toContain(ship);
    });

    it("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    it("can dock at another port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBeTruthy();
      expect(topsham.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
