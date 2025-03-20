const argv = require('./argv.js')
const rsync = require('./rsync.js')
const { loadConfig } = require('./config.js')

const requireProfile = (config, name) => {
  if (!config.profiles[name]) {
    console.error('Unknown profile: ' + name)
    process.exit(1)
    return
  }

  return config.profiles[name]
}

async function main () {
  const config = await loadConfig()
  const profile = requireProfile(config, argv.profile)

  const cmd = argv._[0]
  switch (cmd) {
    case 'push': {
      await rsync.sync(profile.local, profile.remote)
      break
    }
    case 'pull': {
      await rsync.sync(profile.remote, profile.local)
      break
    }
    default: {
      console.error('Unknown command: ' + cmd)
    }
  }
}

module.exports = { main }
