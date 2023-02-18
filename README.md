# Difference calculator

## Hexlet tests and linter status
[![Actions Status](https://github.com/OiJefo/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/OiJefo/frontend-project-46/actions) [![Node.js CI](https://github.com/OiJefo/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/OiJefo/frontend-project-46/actions/workflows/node.js.yml) <a href="https://codeclimate.com/github/OiJefo/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/685715ab3db12a707c6f/maintainability" /></a> <a href="https://codeclimate.com/github/OiJefo/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/685715ab3db12a707c6f/test_coverage" /></a>

## Description
The difference calculator determines the difference between two format files: yaml, json. The output of differences is carried out in the form of plain, stylish and json formats.

### Installation
1. Install the ```Node.js``` package
2. Install the npm package
3. Clone current repository ```git@github.com:OiJefo/frontend-project-46.git```
4. Run ```make install```


### Program usage
You can use the program as a script in the terminal or as a library in your JavaScript project. You can output differences in three formats: stylish (default), plain and json. For information, type ```gendiff -h```.

```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Asciinema demonstration

### Program launch. Accessing json files using relative and absolute paths
<a href="https://asciinema.org/a/059aPwkLRvOlNTf9z9dbAEMWS" target="_blank"><img src="https://asciinema.org/a/059aPwkLRvOlNTf9z9dbAEMWS.svg" /></a>

### Compare yaml files
<a href="https://asciinema.org/a/LXD11rE8ohn2OWLNnFDeM36pk" target="_blank"><img src="https://asciinema.org/a/LXD11rE8ohn2OWLNnFDeM36pk.svg" /></a>

### Comparing files with a nested data structure
<a href="https://asciinema.org/a/2GchvUcB91YUpVLOFCYzIxMH8" target="_blank"><img src="https://asciinema.org/a/2GchvUcB91YUpVLOFCYzIxMH8.svg" /></a>

### Sample output in plain format

### Sample output in json format


