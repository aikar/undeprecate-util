var util = require('util');
util.print = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(String(arguments[i]));
  }
} 
util.puts = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
} 
util.debug = function(x) {
  process.stderr.write('DEBUG: ' + x + '\n');
} 
util.error = function(x) {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stderr.write(arguments[i] + '\n');
  }
}