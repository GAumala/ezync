const { hideBin } = require('yargs/helpers')

module.exports = require('yargs/yargs')(hideBin(process.argv))
  .command('push <profile>', 'upload your local dir to remote')
  .command('pull <profile>', 'download your remote dir to local')
  .usage('Usage: $0 [command] <profile>')
  .strict()
  .help()
  .parse()
