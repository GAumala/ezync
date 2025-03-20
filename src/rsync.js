const { spawn } = require('node:child_process')

const sync = async (local, remote) => new Promise((resolve, reject) => {
  const proc = spawn('rsync', ['-auzP', local, remote], {
    detached: true,
    stdio: 'inherit'
  })
  proc.on('close', resolve)
})

module.exports = { sync }
