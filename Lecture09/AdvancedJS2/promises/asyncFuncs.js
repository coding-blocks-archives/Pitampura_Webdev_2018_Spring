function downloadFile(url, downloaded) {
  if (!url.startsWith('http')) {
    downloaded(new Error())
  }
  console.log(`Going to download  ${url}`);
  // downloading the file here
  setTimeout(function () {
    let path = url.split('/').pop()
    downloaded(null, path)
  }, 5000)
}

function compressFile(filePath, compressed) {
  // compressing the file here
  setTimeout(function () {
    let path = filePath.split('.')[0] + '.zip'
    compressed(path)
  }, 3000)
}

function uploadFile(filePath, uploaded) {
  setTimeout(function () {
    let url = `https://fileserver.com/${filePath}`
    uploaded(url)
  }, 2000)
}

downloadFile('https://example.com/file.mp3', function (err, downloadedPath) {
  if (err) {

  } else {
    
  }
  console.log("File has been downloaded as " + downloadedPath);
  compressFile(downloadedPath, function (compressedPath) {
    console.log(`File compressed to ${compressedPath}`);
    uploadFile(compressedPath, function (uploadedUrl) {
      console.log('File uploaded and saved at ' + uploadedUrl);
    })

  })
})