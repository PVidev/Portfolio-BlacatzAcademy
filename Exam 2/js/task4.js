$(function() {
  function displayProducts(products) {
      let tableBody = $('#product-table-body');
      tableBody.empty();

      products.sort(function(a, b) {
          return a.name.localeCompare(b.name);
      });

      products.forEach(function (product) {
          let row = $('<tr>');

          let nameCell = $('<td>').text(product.name);
          let priceCell = $('<td>').text(product.price);
          let categoryCell = $('<td>').text(product.category);

          row.append(nameCell, priceCell, categoryCell);
          tableBody.append(row);
      });
  }

  function makeAjaxRequest(url, method, callback) {
      $.ajax({
          url: url,
          type: method,
          success: function(data) {
              callback(null, data);
          },
          error: function(xhr, status, error) {
              callback(new Error('Грешка: ' + xhr.statusText), null);
          }
      });
  }

  function filterProductsByPriceAndCategory(products, minPrice, maxPrice, category) {
      return products.filter(function (product) {
          return product.price >= minPrice &&
                  product.price <= maxPrice &&
                  product.category === category;
      });
  }

  $('#filter-btn').click(function() {
      let minPrice = parseInt($('#min-price').val()) || 0;
      let maxPrice = parseInt($('#max-price').val()) || Infinity;
      let category = $('#category').val();

      makeAjaxRequest('http://blacatzacademy.com/api/products', 'GET', function (error, products) {
          if (error) {
              console.error(error);
              return;
          }

          let filteredProducts = filterProductsByPriceAndCategory(products, minPrice, maxPrice, category);
          displayProducts(filteredProducts);
      });
  });

  makeAjaxRequest('http://blacatzacademy.com/api/products', 'GET', function (error, products) {
      if (error) {
          console.error(error);
          return;
      }

      displayProducts(products);
  });
});