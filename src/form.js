const itinerary = new Itinerary([]);
const ship = new Ship(itinerary);
const controller = new Controller(ship);

controller.renderPorts(itinerary.ports);

const form = document.querySelector('form');

form.addEventListener('submit', (click) => {
  click.preventDefault();

  new FormData(form);

  controller.addPort();
  controller.hud();

  if (ship.itinerary.ports.length === 1) {
    controller.renderShip();
    ship.dock();
    }
});