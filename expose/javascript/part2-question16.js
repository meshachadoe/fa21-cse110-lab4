let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (car in statistics) {
    const carValue = statistics[car]
    if (car.charAt(0) === 'r') {
        console.log(carValue)
    } else if (carValue % 2 === 1) {
        console.log(carValue)
    }
}