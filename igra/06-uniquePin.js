function uniquePin(input) {
    let firstUpperBound = Number(input[0]);
    let secondUpperBound = Number(input[1]);
    let thirdUpperBound = Number(input[2]);

    for (let first = 2; first <= firstUpperBound; first += 2) {
        for (let second = 2; second <= secondUpperBound; second++) {
            let isSecondPrime = true;
            if (second <= 1) {
                isSecondPrime = false;
            } else {
                for (let i = 2; i <= Math.sqrt(second); i++) {
                    if (second % i === 0) {
                        isSecondPrime = false;
                        break;
                    }
                }
            }
            for (let third = 2; third <= thirdUpperBound; third += 2) {
                console.log(`${first} ${isSecondPrime ? second : 2} ${third}`);
            }
        }
    }
}

uniquePin(["8", "2", "8"]);
