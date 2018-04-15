let products = []

function getProducts(done) {
  $.get('/products', (data) => {
    products = data
    done()
  })
}

function postProduct(product, done) {
  $.post('/products', product, (data) => {
    getProducts(done)
  })
}

function checkLoginStatus(done) {
  $.get('/myaccount/status', (data) => {
    done(data.status)
  })
}

function addNavBar (login) {
  let navBarButtons
  if (!login) {
    navBarButtons = `
            <li class="nav-item">
                <a class="nav-link" href="/signin">
                    Signin
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/signup">
                    Signup
                </a>
            </li>
    `
  } else {
    navBarButtons = `
            <li class="nav-item">
                <a class="nav-link" href="/logout">
                    Logout
                </a>
            </li>
    `
  }
  $('body').prepend(
    `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        Shopping Cart
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">
                    Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin">
                    Admin
                </a>
            </li>
            ` + navBarButtons + `
        </ul>
    </div>
</nav>

    `
  )
}

$(function () {
  checkLoginStatus(addNavBar)
})