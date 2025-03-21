const { spawn } = require('node:child_process')

const createRsyncFlags = opts => {
  if (opts.force) {
    return ['-azP', '--delete']
  }
  if (opts.delete) {
    return ['-auzP', '--delete']
  }
  return ['-auzP']
}

const sync = async (local, remote, opts = {}) => new Promise((resolve, reject) => {
  const flags = createRsyncFlags(opts)
  const args = [...flags, local, remote]
  console.log('rsync ' + args.join(' '))
  const proc = spawn('rsync', args, {
    detached: true,
    stdio: 'inherit'
  })
  proc.on('close', resolve)
})

module.exports = { sync }
