function downloadFile(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith('http')) {
      reject(new Error('Not a valid URL')) 
    }
    console.log('File download starts')
    setTimeout(function () {
      console.log('About to resolve');
      resolve(url.split('/').pop())
      console.log('have resolved');
    }, 5000)
  })
}

function compressFile(path, compression /* zip or tar or 7z */) {
  return new Promise(function (resolve, reject) {
    if (-1 == ['mp3', 'wma', 'ogg'].indexOf(path.split('.').pop())) {
      throw new Error('We can compress only audio files')
    }
    setTimeout(function () {
      console.log('Compressed ' + path);
      resolve(path.split('.')[0] + '.' + compression)
    }, 3000)
  })
}

function uploadFile(path) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Uploaded ' + path);
      resolve(`http://fileserver.com/${path}`)
    }, 3000)
  })
}

let dp = downloadFile('http://music.com/song.mp4')
  .then(path => compressFile(path, 'zip'))
  .then(uploadFile)
  .then(function () {console.log('All done');})
  // .catch(err => {throw err)  



  setTimeout(function () {
  dp.then(function (path) {
    console.log('File had been downloaded to ' + path);
  })
}, 7000)