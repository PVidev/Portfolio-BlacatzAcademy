function examp(input) {
    let n = Number(input[0]);
 
    let isTrue = false;
 
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    let res = Math.floor(product / sum);
 
                    if (sum === product && n % 10 === 5) {
                        isTrue = true;
                        console.log(`${a}${b}${c}${d}`);
                        break;
                    }
 
                    if (res === 3 && n % 3 === 0) {
                        isTrue = true;
                        console.log(`${d}${c}${b}${a}`);
                        break;
                    }
                }
                if (isTrue) {
                    break;
                }
            }
            if (isTrue) {
                break;
            }
        }
        if (isTrue) {
            break;
        }
    }
 
    if (!isTrue) {
        console.log("Nothing found");
    }
}

examp(["214"]);