function uniquePin(input) {
    let firstUpperBound = Number(input[0]);
    let secondUpperBound = Number(input[1]);
    let thirdUpperBound = Number(input[2]);

    for (let first = 2; first <= firstUpperBound; first += 2) {
        for (let second = 2; second <= secondUpperBound; second++) {
            if (isPrime(second)) {
                for (let third = 2; third <= thirdUpperBound; third += 2) {
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
}

function isPrime(num) {
    if (num <= 1) {
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

uniquePin(["8", "2", "8"]);