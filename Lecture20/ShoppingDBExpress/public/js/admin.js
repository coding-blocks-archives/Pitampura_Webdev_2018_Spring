$(function () {
  function refreshProducts () {
    let tableBody = $('#product-table-body')
    tableBody.empty()
    for (product of products) {
      tableBody.append(
        `<tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
        </tr>`
      )
    }

  }

  getProducts(refreshProducts)
  $('#product-add-form-container').hide()

  $('#product-edit-toggle').click(function () {
    $('#product-add-form-container').toggle()
  })


  $('#product-submit').click(function (e) {
    e.preventDefault()
    postProduct({
      name: $('#product-name').val(),
      price: $('#product-price').val()
    }, refreshProducts)
  })
})
