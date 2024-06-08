function examp(input) {
    let days = Number(input[0]);
    let initialKilometers = Number(input[1]);
    let totalKilometers = initialKilometers;
 
    for (let i = 2; i < input.length; i++) {
        let increasePercentage = Number(input[i]);
        initialKilometers += initialKilometers * (increasePercentage / 100);
        totalKilometers += initialKilometers;
    }
 
    if (totalKilometers >= 1000) {
        let extraKilometers = Math.ceil(totalKilometers - 1000);
        console.log(`You've done a great job running ${extraKilometers} more kilometers!`);
    } else {
        let neededKilometers = Math.ceil(1000 - totalKilometers);
        console.log(`Sorry Mrs. Ivanova, you need to run ${neededKilometers} more kilometers`);
    }
}

examp(["214"]);