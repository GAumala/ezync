const fs = require('node:fs/promises')
const path = require('path')
const toml = require('toml')

const HOME_PATH = process.env.HOME
const CONFIG_PATHS = [
  path.join(HOME_PATH, '.ezync.toml'),
  path.join(HOME_PATH, '.config/ezync.toml')
]

const readConfigFile = async () => {
  return fs.readFile(CONFIG_PATHS[0])
    .catch(() => fs.readFile(CONFIG_PATHS[1])
      .catch(err => {
        console.log('error', err)
        return null
      }))
}

const parseConfigFile = contents => {
  const { profiles } = toml.parse(contents)
  if (!profiles) {
    console.error('Profiles table not found in config file')
    process.exit(1)
    return
  }

  Object.keys(profiles).forEach(key => {
    const prof = profiles[key]
    if (typeof prof.local !== 'string') {
      console.error(`Profile ${key} has invalid local: ${prof.local}`)
      process.exit(1)
    }
    if (typeof prof.remote !== 'string') {
      console.error(`Profile ${key} has invalid remote: ${prof.local}`)
      process.exit(1)
    }
  })

  return { profiles }
}

const loadConfig = async () => {
  const contents = await readConfigFile()
  if (contents === null) {
    const msg = 'No config file found in:\n\n' + CONFIG_PATHS.join('\n')
    console.error(msg)
    process.exit(1)
  } else {
    return parseConfigFile(contents)
  }
}

module.exports = { loadConfig }
