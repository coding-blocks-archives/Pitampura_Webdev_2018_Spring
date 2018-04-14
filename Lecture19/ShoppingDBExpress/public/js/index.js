let cart = {}
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'))
}

$(function () {
  function refreshProducts () {
    let tableBody = $('#product-table-body')
    tableBody.empty()
    let cartTotal = 0
    for (product of products) {
      cartTotal += product.price * (cart[product.id] || 0)
      tableBody.append(
        `<tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>Rs.${product.price}</td>
          <td>
            <span onclick="removeFromCart(${product.id})">
            <i class="fas fa-minus"></i>
            </span>
            ${cart[product.id] || 0}
            <span onclick="addToCart(${product.id})">
            <i class="fas fa-plus"></i>
            </span>
          </td>
          <td>
          Rs.${product.price * (cart[product.id] || 0)}
          </td>
        </tr>`
      )
    }
    tableBody.append(
      `
      <td id="product-table-row-total" colspan="4">TOTAL</td>
      <td>${cartTotal}</td>
      `
    )
  }

  window.addToCart = function (id) {
    if (cart[id]) {
      cart[id] = cart[id] + 1
    } else {
      cart[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    refreshProducts()
  }

  window.removeFromCart = function(id) {
    if (cart[id] === 0) {
      delete cart[id]
    }
    if (cart[id]) {
      cart[id] = cart[id] - 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    refreshProducts()
  }

  getProducts(refreshProducts)

})
