module.exports = (context) => {
  const Q = context.requireCordovaModule('q')
  const deferral = new Q.defer()
  const ChildProcess = require('child_process')

  ChildProcess.exec('npm run build:react', (error, stdout) => {
    if(error) {
      console.error(error)
      deferral.reject()
      return
    }
    console.log(stdout)
    deferral.resolve()
  })

  return deferral.promise
}

