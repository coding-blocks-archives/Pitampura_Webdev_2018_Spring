console.log("hello")
// Available in browser
if (typeof window !== 'undefined') 
  console.log(window)
if (typeof document !== 'undefined')
  console.log(document) 

// Available in nodejs
if (typeof process !== 'undefined')
  console.log(process)
if (typeof global !== 'undefined')
  console.log(global)