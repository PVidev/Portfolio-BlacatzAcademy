function examp (input) {
    let girlParty = Number(input[0]);
    let loveMsg = Number(input[1]);
    let roses = Number(input[2]);
    let keyschain = Number(input[3]);
    let caricature = Number(input[4]);
    let lucky = Number(input[5]);

    let loveMsgPrice = 0.6;
    let rosesPrice = 7.2;
    let keyschainPrice = 3.6;
    let caricaturePrice = 18.2;
    let luckyPrice = 22;

    let total = (loveMsg * loveMsgPrice) + (roses * rosesPrice) + (keyschain * keyschainPrice) + (caricature * caricaturePrice) + (lucky * luckyPrice);

    let itemsCount = loveMsg + roses + keyschain + caricature + lucky;
    let discount = itemsCount >= 25 ? total * 0.35 : 0;
    let profit = total - discount;
    let hosting = profit * 0.1;
    let money = profit - hosting;

    if (money >= girlParty) {
        console.log(`Yes! ${(money - girlParty).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(girlParty - money).toFixed(2)} lv needed.`);
    }

}

examp(["320", "8", "2", "5", "5", "1"]);