if (typeof window === 'undefined') {
  
}

window.onload = function () {
  let btnPrint = document.getElementById('print')
  let inpBox = document.getElementById('inp')
  let list = document.getElementById('list')

  btnPrint.onclick = function () {
    let N = parseInt(inpBox.value)
    let newList = document.createElement('ul')
    newList.setAttribute('id', 'list')
    
    for (let i = 1; i <= N; i++) {
      let o = ''
      if (i % 3 == 0) { o += 'fizz' }
      if (i % 5 == 0) { o += 'buzz' }
      if (o === '') { o = i }

      let item = document.createElement('li')
      item.innerText = o
      newList.appendChild(item)
     
    }
    list.replaceWith(newList)
  }
}