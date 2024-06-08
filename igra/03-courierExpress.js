function examp(input) {
    let weight = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);
 
    let costPerKm = 0;
    let expressSurcharge = 0;
 
    if (weight < 1) {
        costPerKm = 0.03;
        if (serviceType === "express") {
            expressSurcharge = costPerKm * 0.8 * weight;
        }
    } else if (weight < 10) {
        costPerKm = 0.05;
        if (serviceType === "express") {
            expressSurcharge = costPerKm * 0.4 * weight;
        }
    } else if (weight < 40) {
        costPerKm = 0.10;
        if (serviceType === "express") {
            expressSurcharge = costPerKm * 0.05 * weight;
        }
    } else if (weight < 90) {
        costPerKm = 0.15;
        if (serviceType === "express") {
            expressSurcharge = costPerKm * 0.02 * weight;
        }
    } else if (weight <= 150) {
        costPerKm = 0.20;
        if (serviceType === "express") {
            expressSurcharge = costPerKm * 0.01 * weight;
        }
    }
 
    let totalCost = distance * costPerKm + distance * expressSurcharge;
    weight = weight.toFixed(3);
    totalCost = totalCost.toFixed(2);
 
    console.log(`The delivery of your shipment with weight of ${weight} kg. would cost ${totalCost} lv.`);
}

examp(["87",
    "express",
    "130"])
    ;