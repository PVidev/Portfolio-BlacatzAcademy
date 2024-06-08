function examp(input) {
    let targetForDay = Number(input[0]);
    let earnedMoney = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if (command === "closed" || earnedMoney >= targetForDay) {
            break;
        }

        if (command === "haircut") {
            let haircutType = input[++i];
            let price = 0;

            switch (haircutType) {
                case "mens":
                    price = 15;
                    break;
                case "ladies":
                    price = 20;
                    break;
                case "kids":
                    price = 10;
                    break;
            }

            earnedMoney += price;
        } else if (command === "color") {
            let colorType = input[++i];
            let price = 0;

            switch (colorType) {
                case "touch up":
                    price = 20;
                    break;
                case "full color":
                    price = 30;
                    break;
            }

            earnedMoney += price;
        }
    }

    if (earnedMoney >= targetForDay) {
        console.log("You have reached your target for the day!");
    } else {
        let neededMoney = targetForDay - earnedMoney;
        console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    }

    console.log(`Earned money: ${earnedMoney}lv.`);
}

examp(["50", "color", "full color", "haircut", "ladies"]);

