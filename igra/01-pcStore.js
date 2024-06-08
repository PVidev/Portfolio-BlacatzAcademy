function examp (input) {
    let cpuPriceUsd = Number(input[0]);
    let gpuPriceUsd = Number(input[1]);
    let ramPriceUsd = Number(input[2]);
    let ramQuantity = Number(input[3]);
    let discount = Number(input[4]);

    let cpuPriceBgn = cpuPriceUsd * 1.57;
    let gpuPriceBgn = gpuPriceUsd * 1.57;
    let ramPriceBgn = ramPriceUsd * 1.57 * ramQuantity;

    let discountCpu = cpuPriceBgn * (1 - discount);
    let discountGpu = gpuPriceBgn * (1 - discount);
    let totalBgn = discountCpu + discountGpu + ramPriceBgn;
    let totalFix = totalBgn.toFixed(2);

    console.log(`Money needed - ${totalFix} leva.`);
}

examp(["1200", "850", "120", "4", "0.1"]);    

// Money needed - 1295.25 leva.