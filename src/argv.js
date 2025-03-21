const { hideBin } = require('yargs/helpers')

module.exports = require('yargs/yargs')(hideBin(process.argv))
  .command('push <profile>', 'upload your local dir to remote')
  .command('pull <profile>', 'download your remote dir to local')
  .option('force', {
    alias: 'f',
    type: 'boolean',
    description: "Don't skip files that are newer at destination"
  })
  .option('delete', {
    alias: 'd',
    type: 'boolean',
    description: 'Delete files at destination that are not in source'
  })
  .usage('Usage: $0 [command] <profile>')
  .strict()
  .help()
  .parse()
