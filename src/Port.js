class Port {
    constructor (name) {
        this.name = name;
        this.ships = [];
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(ship) {
        let index = this.ships.indexOf(ship)
        this.ships.splice(index, 1);
        ;
    }
}

module.exports = Port;