const Port = require('../src/Port.js')
class Ship {
    constructor (currentPort) {
        this.currentPort = currentPort;
    }
    setSail() {
        this.currentPort = "";
    }
}

module.exports = Ship;