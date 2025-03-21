# ezync

A script to easily sync directories between your local computer and remote
server. 

## Installation

This script is just a frontend for `rsync`, so install that if you haven't already.

Then you can clone the repository and run:

```
npm install -g

```

Make sure npm bins are in your $PATH


## Configuration

Create a config file in `./ezync.toml` or `./config/ezync.toml`

``` toml
[profiles.work]
local = "/home/user/my_work_dir/"
remote = "user@my.server.com:/path/to/work_dir/"

[profiles.photos]
local = "/home/user/Pictures/my_photos"
remote = "user@my.server.com:/path/to/photos_dir/"
```

You must have SSH keys already setup in your local machine and remote server. You should already be able to SSH into remote servers from local machine, or the script may fail.

## Usage

```
Usage: ezync [command] <profile>
Commands:
  ezync push <profile>  upload your local dir to remote
  ezync pull <profile>  download your remote dir to local

Options:
      --version  Show version number                                  [boolean]
  -f, --force    Don't skip files that are newer at destination       [boolean]
  -d, --delete   Delete files at destination that are not in source   [boolean]
      --help     Show help                                            [boolean]
```
