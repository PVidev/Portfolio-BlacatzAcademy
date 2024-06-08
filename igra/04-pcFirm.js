function pcFirm(input) {
    let n = Number(input[0]);
    let totalSales = 0;
    let averageRating = 0;
  
    for (let i = 1; i <= n; i++) {
      let number = Number(input[i]);
      let rating = number % 10;
      let sales = Math.floor(number / 10);
      let actualSales = 0;

      switch (rating) {
        case 2:
          break;
        case 3:
          actualSales = sales * 0.5;
          break;
        case 4:
          actualSales = sales * 0.7;
          break;
        case 5:
          actualSales = sales * 0.85;
          break;
        case 6:
          actualSales = sales;
          break;
      }
  
      totalSales += actualSales;
      averageRating += rating;
    }
  
    averageRating /= n;
    totalSales = totalSales.toFixed(2);
    averageRating = averageRating.toFixed(2);
  
    console.log(`${totalSales}`);
    console.log(`${averageRating}`);
  }

  pcFirm(["5", "122", "156", "202", "214", "185"]);