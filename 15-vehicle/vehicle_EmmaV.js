class Vehicle {
    constructor (vehicleParams) {        
        this.wheelTotal = vehicleParams[0];
        this.energySource = vehicleParams[1];
        this.manufacturer = vehicleParams[2];
        this.isOn = false;
    }

    getSpec (key) {
        if (this.hasOwnProperty(key)) {
            return this[key];
        } else {
            return undefined;
        }
    }
}

class Tesla extends Vehicle {
    constructor (teslaAndVehicleParams) { //specific to Tesla AND Vehicle
        let vehicleParams = [...arguments].flat().pop().flat();
        let teslaParams = [...arguments].flat();
        super(vehicleParams); //Vehicle arguments
        this.milesPerCharge = teslaParams[0];
        this.model = teslaParams[1];
        this.chargePercentage = teslaParams[2];
        this.minutesToCharge = teslaParams[3];

    }
    minutesToFullCharge (chargePercentage) {
        chargePercentage = this.chargePercentage;
        let minsToFull = (this.chargePercentage * this.minutesToCharge) / 100;
        return `${minsToFull} minutes until the charge is full!`
    }
}
