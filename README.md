# undeprecate-util

[![Greenkeeper badge](https://badges.greenkeeper.io/aikar/undeprecate-util.svg)](https://greenkeeper.io/)
Undeprecate node util.print/error methods

## Usage ##
Simply add require('undeprecate-uti') to your apps init script before everything else and the deprecation notices will be gone (and these methods will also always function)

This will monkey patch the util system library re-injecting the same code as node core but without the deprecation warning.

## Methods Restored ##

util.print
util.puts
util.debug
util.error

(Just because they were all 4 together related to stdout/stderr)
Want another? Simply PR it.

## Why ##
Node is deprecating a method and recommending a method that doesn't behave the same way...

These methods are useful shortcuts to writing to stdout/stderr, and I don't see why they need removing..
You know the node style: userland everything. 

## License ##
MIT