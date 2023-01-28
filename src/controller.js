(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;

      this.initialiseSea();

      if (ship.itinerary.ports.length > 0) {
        this.hud();
      }

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
      });
    }

    initialiseSea() {
      const backgrounds = ["./image/water0.png", "./image/water1.png"];

      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    }

    addPort() {
      const portName = document.getElementById("portName").value;
      const newPort = new Port(portName);

      itinerary.ports.push(newPort);
      ship.itinerary = itinerary;

      if (ship.currentPort === null) {
        ship.currentPort = itinerary.ports[0];
      }

      const portsElement = document.querySelector("#ports");
      const newIndex = itinerary.ports.length - 1;

      this.renderPort(portsElement, newPort, newIndex);
    }

    renderPort(portsElement, port, index) {
      const newPortElement = document.createElement("div");

      newPortElement.className = "port";
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;

      portsElement.appendChild(newPortElement);

      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    }

    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        this.renderPort(portsElement, port, index);
      });
    }

    renderShip() {
      const ship = this.ship;

      if (ship.itinerary.ports.length > 0) {
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(
          `[data-port-index='${shipPortIndex}']`
        );

        const shipElement = document.querySelector("#ship");
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
      }
    }

    setSail() {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      if (!nextPortElement) {
        return this.renderMessage(`End of the line!`);
      }
      this.renderMessage(`We are now leaving ${ship.currentPort.name}`);

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === nextPortElement.offsetLeft - 32) {
          ship.setSail();
          ship.dock();
          this.renderMessage(`We are now arriving in ${ship.currentPort.name}`);
          this.hud();
          clearInterval(sailInterval);
        }

        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }

    renderMessage(message) {
      const viewPort = document.querySelector("#viewport");
      const messageDiv = document.createElement("div");

      messageDiv.id = "message";
      messageDiv.innerHTML = message;

      viewPort.appendChild(messageDiv);

      window.setTimeout(() => {
        viewPort.removeChild(messageDiv);
      }, 2000);
    }

    hud() {
      const ship = this.ship;
      const hudElement = document.querySelector("#hud");

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;

      if (ship.itinerary.ports.length > 0 && ship.currentPort !== null) {
        let hudMessage = `Current Port : ${ship.itinerary.ports[currentPortIndex].name}`;

        if (nextPortIndex < ship.itinerary.ports.length) {
          hudMessage += `<br>Next Port : ${ship.itinerary.ports[nextPortIndex].name}`;
        }
        hudElement.innerHTML = hudMessage;
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
