
function getNewCar(){
  var newCar = {
  city: "Toronto",
  passengers: 0,
  gas: 100
  };
  return newCar
}


var cars = [];

function addCar(cars, newCar){
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now "+ cars.length+ ".";
};

addCar(cars, getNewCar())
// console.log(addCar('Toyota'));
// console.log(cars);
//
//

function pickUpPassenger(car){
   car['passengers'] += 1;
   car['gas'] -= 10;
   return 'Picked up passenger. Car now has '+car['passengers']+' passenger(s).';
 }



function getDestination(car){
  if (car['city'] === 'Toronto'){
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga'){
    return 'London';
  } else if(car['city'] === 'London'){
    return 'Toronto';
  }
}

getDestination(getNewCar())

function getGasDisplay(gasAmount){
  return gasAmount+"%";
}

function fillUpGas(car){
  var oldGas = car['gas'];
  car['gas'] = 100;
  return "Filled up to "+ getGasDisplay(car['gas'])+" on gas from"+getGasDisplay(oldGas)+" .";
}

fillUpGas(getNewCar())

function drive(car, cityDistance){
  if (car.gas < cityDistance){
    return fillUpGas(car);
  }
  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return "Drove to "+car.city+". Remaining gas: "+getGasDisplay(car['gas'])+" .";

}

// drive(getNewCar(), 100)

function dropOffPassengers(car){
  var previousPassengers = car['passengers'];
  car['passengers'] = 0;
  return "Dropped off "+previousPassengers+" passengers.";
}

function act(car){
  var distanceBetweenCities = 50

  if (car['gas'] < 20){
    fillUpGas(car);
  } else if (car['passengers'] < 3){
    pickUpPassenger(car);
  } else if(car['gas'] < distanceBetweenCities){
    return fillUpGas(car);
  }
  var droveTo = drive(car, distanceBetweenCities);
  var passengersDropped = dropOffPassengers(car);
  return droveTo + passengersDropped;
}

act(getNewCar())

function commandFleet(cars){
  for(var i = 0; i < cars.length; i++ ){
    var action = act(cars[i]);
    console.log('Car'+ (i + 1)+': '+action)
  }
  console.log("----------")
}

function addOneCarPerDay(cars, numDays){
  for(var i = 0; i < numDays; i++){
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars)
  }
}

addOneCarPerDay(cars, 10);
