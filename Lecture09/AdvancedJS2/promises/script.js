function downloadFile(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith('http')) {
      reject(new Error('Not a valid URL')) 
    }
    console.log('File download starts')
    setTimeout(function () {
      console.log('File download ends');
      resolve(url.split('/').pop())
    }, 5000)
  })
}

function compressFile(path) {
  return new Promise(function (resolve, reject) {
    if (-1 == ['mp3', 'wma', 'ogg'].indexOf(path.split('.').pop())) {
      throw new Error('We can compress only audio files')
    }
    setTimeout(function () {
      console.log('Compressed ' + path);
      resolve(path.split('.')[0] + '.zip')
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

downloadFile('ftp://music.com/song.mp4')
  .then(compressFile)
  .then(uploadFile)
  .then(function () {console.log('All done');})
  // .catch(function (err) {throw err})  