function uniquePin(input) {
    let firstUpperBound = Number(input[0]);
    let secondUpperBound = Number(input[1]);
    let thirdUpperBound = Number(input[2]);

    for (let first = 2; first <= firstUpperBound; first += 2) {
        for (let third = 2; third <= thirdUpperBound; third += 2) {
            for (let second = 2; second <= secondUpperBound; second++) {
                let isSecondPrime = true;
                if (second <= 1 || second > 7) {
                    isSecondPrime = false;
                } else {
                    for (let i = 2; i <= Math.sqrt(second); i++) {
                        if (second % i === 0) {
                            isSecondPrime = false;
                            break;
                        }
                    }
                }
                if (isSecondPrime) {
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
}

uniquePin(["5", "3", "5"]);
