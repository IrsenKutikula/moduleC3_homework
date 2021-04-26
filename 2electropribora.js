

//Электроприборы
class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // метод, который определяет прибор как включенный
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    // метод, который определяет прибор как выключеный
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

// Прибор 1 - лампа
class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// Прибор 2 - комп
class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// отключить лампу
tableLamp.unplug();
// включить лампу
tableLamp.plugIn();

// включить комп
homePC.plugIn();
homePC.unplug();

// результат
console.log(homePC)
console.log(tableLamp)

